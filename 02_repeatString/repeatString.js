const repeatString = function(word, numberOfTimes) {
    if(numberOfTimes < 0) {
        return "ERROR";
    }
    let result = "";
    for(; numberOfTimes > 0; numberOfTimes--) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
