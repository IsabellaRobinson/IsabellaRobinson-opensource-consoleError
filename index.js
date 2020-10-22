var reset = "\x1b[0m";

var colorConsole = {
    error: function(string) {
        console.error("\x1b[31m" + "ERROR:\t" + string + reset);
    },
    warning: function(string) {
        console.warn("\x1b[30m" + "WARNING:\t" + string + reset);
    }
}
