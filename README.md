# This is how to use console messages in colors.

- Open your browser
- In the browser, you click right
- Then you will inspect element
- Then go to console, and here you will be able to see the messages (warning, error, succes and magenta)
- You did it!

***

### Source Code:
```javascript
var reset = "\x1b[0m";

var colorConsole = {
    error: function(string) {
        console.error("\x1b[31m" + "ERROR:\t" + string + reset);
    },
    warning: function(string) {
        console.warn("\x1b[30m" + "WARNING:\t" + string + reset);
    }
}
```