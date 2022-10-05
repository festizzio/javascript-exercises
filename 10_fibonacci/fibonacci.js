const fibonacci = function(n) {
    if(n < 0) {
        return "OOPS";
    }
    if(!n.typeof !== Number) {
        n = +n;
    }
    let fib = [1, 1];
    let result = 1;

    for(let i = 2; i < n; i++) {
        result = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
