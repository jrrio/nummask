/**
 * Formats input elements with a mask.
 * E.g. let masker = new Nummask(input);
 * Tested in IE11, Edge, FF, Chrome.
 * @version 1.0 - 2018-06-27 - Joao Rodrigues
 * @license "MIT License".
 * @see <https://github.com/jrrio/nummask>
 */
function Nummask(input) {
  let _oldValue = "", _mask = "", _reDigit;

  /**
   * Removes non-digit characters
   * @param {String} val - input's value
   */
  const unMask = function (val) {
    return val.replace(/\D/g, "");
  };

  /**
   * Returns the masked value
   * @param {String} unMaskedVal
   */
  const setMask = function (unMaskedVal) {
    if (unMaskedVal == "") return _mask;
    let maskArr = _mask.split('');
    let valArr = unMaskedVal.split(''), j = 0;
    [].forEach.call(maskArr, function (item, idx) {
      if (item === "_") maskArr[idx] = valArr[j++] || "_";
    });
    return maskArr.join('');
  };

  function setCaretPos(el) {
    const val = el.value;
    const unmasked = unMask(val);
    let caretPos = 0;
    if (unmasked.length) {
      const lastdigit = unmasked.slice(-1);
      const lastDigitPos = val.lastIndexOf(lastdigit);
      if (lastDigitPos > -1) {
        caretPos = lastDigitPos + 1;
      }
    } else {
      const nextDigitPos = val.indexOf("_");
      if (nextDigitPos > -1) caretPos = nextDigitPos;
    }
    el.setSelectionRange(caretPos, caretPos);
  }

  /**
   * @param {Event} e
   */
  const onFocus = function (e) {
    let el = e.currentTarget;
    if (unMask(el.value) == "") el.value = _mask;
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
    if (unMask(el.value) == "") el.value = "";
  };

  const setRegex = function (mask) {
    const len = (mask.match(/_/g) || []).length;
    return new RegExp("^\\d{0," + len + "}$");
  };

  if (input) {
    _mask = input.dataset.mask || "";
    input.maxLength = _mask.length + 1;
    _reDigit = setRegex(_mask);
    input.addEventListener("focus", onFocus, false);
    input.addEventListener("keydown", onKeydown, false);
    input.addEventListener("input", onInput, false);
    input.addEventListener("blur", onBlur, false);
  }
}
