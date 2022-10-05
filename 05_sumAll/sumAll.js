const sumAll = function(num1, num2) {
    let sum = 0;
    if(typeof(num1) !== "number" || num1 < 0) {
        num1 = NaN;
    }
    if(typeof(num2) !== "number" || num2 < 0) {
        num2 = NaN;
    }
    if(!(num1) || !(num2)) {
        return "ERROR";
    }

    let start = Math.min(num1, num2), end = Math.max(num1, num2);

    for(let i = start; start <= end; start++) {
        sum += start;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
