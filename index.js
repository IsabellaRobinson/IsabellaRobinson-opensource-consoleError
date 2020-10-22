var reset = "\x1b[0m";

var colorConsole = {
    error: function(string) {
        console.error("\x1b[31m" + "ERROR:\t" + string + reset);
    },
    warning: function(string) {
        console.warn("\x1b[30m" + "WARNING:\t" + string + reset);
    },
    success: function(string){
        console.info("\x1b[32m"  + "SUCCESS:\t" + string + reset);
    },
    magenta: function(string){
        console.log("\x1b[35m" + "MAGENTA:\t" + string + reset)
    }
}
