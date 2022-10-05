const reverseString = function(reverseMe) {
    let reversed = "";
    let arr = reverseMe.split("");
    for(let i = arr.length - 1; i >= 0; i--) {
        reversed += (arr[i]);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
