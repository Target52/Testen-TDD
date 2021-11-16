// Utility functions
const isNotNull = (str) => {
    if (str !== '') {
        return true
    } else {
        return false
    }
}

const hasRightLength = (str) => {
    if (str.match(/^([a-zA-Z0-9]{1,8})$/)) {
        return true
    } else {
        return false
    }
}

const hasUpperCaseCharacter = (str) => {
    if (str.match(/.*[A-Z]/)) {
        return true
    } else {
        return false
    }
}

const hasLowerCaseCharacter = (str) => {
    if (str.match(/.*[a-z]/)) {
        return true
    } else {
        return false
    }
}

const hasDigit = (str) => {
    if (str.match(/[0-9]/)) {
        return true
    } else {
        return false
    }
}

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    console.log(trueConditions)
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword
};
