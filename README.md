# What is numMask.js?
**numMask.js** is a vanilla JavaScript code to format numbers in form fields - [`<input type="tel">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) - with a mask such as (99) 9999-9999 for example.

The code initially searches for _&lt;input&gt;_ elements having **type="tel"** and **data-mask**, applying event handlers to them.

```html
<label for='tel1'>Tel 1:</label>
<input data-mask="(__) ____-____" id="tel1" type="tel" />

<label for='date1'>Date1:</label>
<input data-mask="__/__/____" id="date1" type="tel" />
```

# Usage
Download [nummask.js](https://github.com/jrrio/nummask/blob/master/nummask.js) and put a script tag referring to it just before the closing *body* tag. _E.g._

    <script type="text/javascript" src="path/nummask.js"></script>
    
# Example

There is an example on [Codepen](https://codepen.io/jrio/pen/PaPVxP).

# License

This repository has been released under the [MIT License](https://github.com/jrrio/nummask/blob/master/LICENSE).
  
