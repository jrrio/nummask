# What is numMask.js?
**numMask.js** is a vanilla JavaScript code to format input elements, usually of types 'text' and 'tel', with a number mask such as `(99) 9999-9999`.

The code expects a fixed-width mask pattern, either defined in a **data-mask** attribute or passed as an optional argument. Only the underscore (`_`) characters within the mask will be used for number entry. For instance:

```html
<label for='tel1'>Tel 1:</label>
<input data-mask="(__) ____-____" id="tel1" type="tel" />

<label for='date1'>Date1:</label>
<input id="date1" type="tel" />

<script type="text/javascript" src="path/nummask.js"></script>
<script type="text/javascript">
document.addEventListener("DOMContentLoaded",
  function () {
    const tels = document.querySelectorAll(
      "input[type=tel][data-mask]");
    for (let i = 0, len = tels.length; i < len; i++) {
      numMask(tels[i]); // using data-mask attrib.
    }
    // let's pass a mask.
    const date1 = document.frm1.date1;
    numMask(date1, "__/__/____");
  }
);
</script>
```

# Usage
Download [nummask.js](https://github.com/jrrio/nummask/blob/master/nummask.js) and put a script tag referring to it just before the closing *body* tag. _E.g._

    <script type="text/javascript" src="path/nummask.js"></script>
    
# Example

There is an example on [Codepen](https://codepen.io/jrio/pen/PaPVxP).

# License

This repository has been released under the [MIT License](https://github.com/jrrio/nummask/blob/master/LICENSE).
  
