const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    verifyPassword
} = require('./functions');

//const minimumConditionsReached = require('./functions');


test("Should not be null", () => {
    expect(isNotNull('password')).toBeTruthy();
});
test("Should not be null", () => {
    expect(isNotNull('')).toBeFalsy();
});

test("Test password: shorter than 9,", () => {
    expect(hasRightLength('rndkensg34')).toBeFalsy();
});
test("Test password: shorter than 9,", () => {
    expect(hasRightLength('rnAg34')).toBeTruthy();
});

test("Should consist 1 Uppercase", function () {
    expect(hasUpperCaseCharacter('paSsword')).toBeTruthy();
});
test("Should consist 1 Uppercase", function () {
    expect(hasUpperCaseCharacter('1234')).toBeFalsy();
});

test("Should consist 1 Lowercase", function () {
    expect(hasLowerCaseCharacter('BLASS1')).toBeFalsy();
});
test("Should consist 1 Lowercase", function () {
    expect(hasLowerCaseCharacter('pSA1swrd')).toBeTruthy();
});

test("Should consist digit", function () {
    expect(hasDigit('BLASSaa')).toBeFalsy();
});
test("Should consist digit", function () {
    expect(hasDigit('pSA1s2rd')).toBeTruthy();
});

test("Verify Password", function () {
    expect(verifyPassword('pSA1s2rd')).toBeTruthy();
});
test("Verify Password", function () {
    expect(verifyPassword('AAA2323')).toBeFalsy();
});
test("Verify Password", function () {
    expect(verifyPassword('')).toBeFalsy();
});
test("Verify Password", function () {
    expect(verifyPassword('1WWWWasdasd')).toBeTruthy();
});



