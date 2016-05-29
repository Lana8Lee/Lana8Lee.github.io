var app = {
    pow: function(x, n) {
        var result = x;
        if (n !== 0) {
            for (var i = 1; i < Math.abs(n); i++) {
                result *= x;
            }
        } else {
            result = 1;
        }
        return (n > 0) ? result : 1 / result;
    }
};

    module.exports = app;