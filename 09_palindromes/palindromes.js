const palindromes = function (potentialPalindrome) {
    // Check if string is the same forwards and backwards
    // ignore punctuation and white space
    // change to lower case before comparing
    
    let comparisonString = potentialPalindrome.toLowerCase().
                            replace(/\W/g, "");

    const len = comparisonString.length;
    for(let i = 0, j = len - 1; i < len / 2; i++, j--) {
        if(!(comparisonString[i] === comparisonString[j])) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
