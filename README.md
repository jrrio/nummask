# What is numMask.js?
**numMask.js** is a vanilla JavaScript code to format numbers typed in [`<input type="tel">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) elements with a mask such as `(99) 9999-9999`.

The code uses the input mask defined in a **data-mask** attribute in order to set event handlers to the input element. For instance:

```html
<label for='tel1'>Tel 1:</label>
<input data-mask="(__) ____-____" id="tel1" type="tel" />

<label for='date1'>Date1:</label>
<input data-mask="__/__/____" id="date1" type="tel" />
```

# Usage
Download [nummask.js](https://github.com/jrrio/nummask/blob/master/nummask.js) and put a script tag referring to it just before the closing *body* tag. _E.g._

    <script type="text/javascript" src="path/nummask.js"></script>
    <script type="text/javascript">
    document.addEventListener("DOMContentLoaded",
      function () {
        const tels = document.querySelectorAll(
          "input[type=tel][data-mask]");
        [].forEach.call(tels, numMask);
      }
    );
    </script>
    
# Example

There is an example on [Codepen](https://codepen.io/jrio/pen/PaPVxP).

# License

This repository has been released under the [MIT License](https://github.com/jrrio/nummask/blob/master/LICENSE).
  
