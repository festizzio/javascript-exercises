const findTheOldest = function(inputArray) {
    let maxAge = 0;
    let maxAgeIndex = 0;
    for(let i = 0; i < inputArray.length - 1; i++) {
        let currentAge = getAgeOf(inputArray[i]);
        let nextAge = getAgeOf(inputArray[i + 1]);
        if(currentAge < nextAge) {
            maxAge = nextAge;
            maxAgeIndex = i + 1;
        }
    }

    return inputArray[maxAgeIndex];
};

function getAgeOf(person) {
    if(!person.yearOfDeath) {
        let today = new Date();
        return today.getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
