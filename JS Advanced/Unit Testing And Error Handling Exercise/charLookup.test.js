const lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('lookupChar function tests', () => {
    it('should return undefined if the first parameter is not a string', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
        expect(lookupChar([], 1)).to.be.equal(undefined);
        expect(lookupChar({}, 1)).to.be.equal(undefined);
        expect(lookupChar(undefined, 1)).to.be.equal(undefined);
        expect(lookupChar(null, 1)).to.be.equal(undefined);
    });

    it('should return undefined if the second parameter is not a number', () => {
        expect(lookupChar('hi', '1')).to.be.equal(undefined);
        expect(lookupChar('hi', [])).to.be.equal(undefined);
        expect(lookupChar('hi', {})).to.be.equal(undefined);
        expect(lookupChar('hi', undefined)).to.be.equal(undefined);
        expect(lookupChar('hi', null)).to.be.equal(undefined);
    });

    it('should return undefined if the second parameter is decimal number', () => {
        expect(lookupChar('hi', 1.5)).to.be.equal(undefined);
    });

    it('should return undefined if there is a missing parameter', () => {
        expect(lookupChar('hi')).to.be.equal(undefined);
    });

    it('should return Incorrect index if the index is higher or equal to the string length or if it is lower than 0', () => {
        expect(lookupChar('hi', 3)).to.be.equal('Incorrect index');
        expect(lookupChar('hi', 2)).to.be.equal('Incorrect index');
        expect(lookupChar('hi', -1)).to.be.equal('Incorrect index');
    });

    it('should return Incorrect index when the first parameter is empty string', () => {
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });

    it('should return the char to the given index, when the index is correct', () => {
        expect(lookupChar('hi', 1)).to.be.equal('i');
        expect(lookupChar('l', 0)).to.be.equal('l');
    });
});