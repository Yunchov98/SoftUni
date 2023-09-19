const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('isOddOrEven function tests', () => {
    it('should return undefined if the input is not a string', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
        expect(isOddOrEven([])).to.be.equal(undefined);
        expect(isOddOrEven({})).to.be.equal(undefined);
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
        expect(isOddOrEven(null)).to.be.equal(undefined);
    });

    it('should return even when the string length is even', () => {
        expect(isOddOrEven('hi')).to.be.equal('even');
    });

    it('should return odd when the string length is odd', () => {
        expect(isOddOrEven('hello')).to.be.equal('odd');
    });
});