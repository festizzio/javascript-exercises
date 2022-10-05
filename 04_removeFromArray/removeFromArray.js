const removeFromArray = function(array, ...removeFromArray) {
    // Copying the array to not modify the original
    let resultArray = [...array];
    for(const value of removeFromArray) {
        let start = resultArray.indexOf(value);
        if(start >= 0) {
            resultArray.splice(start, 1);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
