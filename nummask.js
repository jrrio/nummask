/**
 * Formats numbers inside input elements with a mask.
 * Tested in IE11, Edge, FF, Chrome.
 * @version 1.0 - 2018-06-27 - Joao Rodrigues
 * @license MIT
 * @see <https://github.com/jrrio/nummask>
 * @param {HTMLInputElement} input
 * @param {String} [mask] - optional parameter as mask might be defined in data-mask attribute
 */
function numMask(input, /*optional*/ mask) {
  let _mask, _oldValue,  _reDigit;

  /**
   * Removes non-digit characters
   * @param {String} val - input's value
   */
  const unMask = function (val) {
    return val.replace(/\D/g, "");
  };

  /**
   * Returns the masked value
   * @param {String} val - input text
   * @returns {String} masked text
   */
  const setMask = function (val) {
    const unMaskedVal = unMask(val);
    if (unMaskedVal === "") return _mask;
    let maskArr = _mask.split("");
    let valArr = unMaskedVal.split(""), j = 0;
    maskArr.forEach(function (el, idx) {
      if (/\d|_/.test(el)) maskArr[idx] = valArr[j++] || "_";
    });
    return maskArr.join("");
  };

  const setCaretPos = function (el) {
    const val = el.value;
    const unmasked = unMask(val);
    let caretPos = 0;
    if (unmasked.length) {
      const lastDigitPos = val.search(/\d(?!.*\d)/);
      if (lastDigitPos > -1) {
        caretPos = lastDigitPos + 1;
      }
    } else {
      const nextDigitPos = val.indexOf("_");
      if (nextDigitPos > -1) caretPos = nextDigitPos;
    }
    el.setSelectionRange(caretPos, caretPos);
  };

  /**
   * @param {Event} e
   */
  const onFocus = function (e) {
    const el = e.currentTarget;
    if (unMask(el.value) === "") el.value = _mask;
    setCaretPos(el);
  };

  const onKeydown = function (e) {
    let el = e.currentTarget;
    _oldValue = el.value;
  };

  const onInput = function (e) {
    let el = e.currentTarget;
    let newValue = unMask(el.value);
    if (_reDigit.test(newValue)) {
      newValue = setMask(newValue);
    } else {
      newValue = _oldValue; // occurs if tel.maxlength is not enforced.
    }
    el.value = newValue;
    setCaretPos(el);
  };

  const onBlur = function (e) {
    let el = e.currentTarget;
    if (unMask(el.value) === "") el.value = "";
  };

  const setRegex = function (mask) {
    const len = (mask.match(/_/g) || []).length;
    return new RegExp("^\\d{0," + len + "}$");
  };

  if (input) {
    _mask = mask || input.dataset.mask;
    if (!_mask) return;
    _reDigit = setRegex(_mask);
    input.maxLength = _mask.length + 1;
    input.addEventListener("focus", onFocus, false);
    input.addEventListener("keydown", onKeydown, false);
    input.addEventListener("input", onInput, false);
    input.addEventListener("blur", onBlur, false);
  }
}
