const caesar = function(originalString, shiftValue) {
    let result = "";

    for(let i = 0; i < originalString.length; i++) {
        if(originalString[i].match(/\W/)) {
            result += originalString[i];
            continue;
        }
        let code = originalString.charCodeAt(i);

        // Allows us to work with both upper and lowercase letters without having to
        // reference the specific charcode range each time
        let adjustForAlphabet = 96;
        if(code >= 65 && code <= 90) {
            adjustForAlphabet = 64;
        } 
        code -= adjustForAlphabet;

        // Anything over 26 just loops around again and ends up at the same place.
        // Trimming the fat.
        if(Math.abs(shiftValue) > 26) {
            shiftValue %= 26;
        }

        shiftedCode = shiftValue + code;
        if(shiftedCode < 0) {
            shiftedCode = 26 + shiftedCode;
        } else if(shiftedCode > 26) {
            shiftedCode -= 26;
        }

        shiftedCode += adjustForAlphabet;
        result += String.fromCharCode(shiftedCode);
    }

    return result;
};

// Do not edit below this line
module.exports = caesar;
