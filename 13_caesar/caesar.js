const caesar = function(originalString, shiftValue) {
    let result = "";
    // Get the charcode at a specific index, then add the shiftValue to it, finally
    // convert it back to a char and append to result

    for(let i = 0; i < originalString.length; i++) {
        if(originalString[i].match(/\W/)) {
            result += originalString[i];
            continue;
        }
        let code = originalString.charCodeAt(i);
        if(code >= 65 && code <= 90) {
            
        }
        let shiftedCode = code + shiftValue;

        result += String.fromCharCode(shiftedCode);
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;
