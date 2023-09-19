const mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('mathEnforcer object tests', () => {
    //addFive method
    describe('addFive method tests', () => {
        it('should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.addFive('1')).to.be.equal(undefined);
            expect(mathEnforcer.addFive([])).to.be.equal(undefined);
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.be.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.be.equal(undefined);
        });

        it('should return given parameter +5 if the parameter is a number', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
            expect(mathEnforcer.addFive(-6)).to.be.equal(-1);
        });
    });

    //subtractTen
    describe('subtractTen method tests', () => {
        it('should return undefined if the parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.be.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.be.equal(undefined);
        });

        it('should return given parameter -10 if the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });

    });

    //sum
    describe('sum method tests', () => {
        it('should return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.equal(undefined);
            expect(mathEnforcer.sum([], 1)).to.be.equal(undefined);
            expect(mathEnforcer.sum({}, 1)).to.be.equal(undefined);
            expect(mathEnforcer.sum(undefined, 1)).to.be.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.be.equal(undefined);
        });

        it('should return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, [])).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, {})).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, undefined)).to.be.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.be.equal(undefined);
        });

        it('should return the sum of the both parameters if they are numbers', () => {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
            expect(mathEnforcer.sum(1.1, 1.2)).to.be.closeTo(2.3, 0.01);
            expect(mathEnforcer.sum(-1, -2)).to.be.equal(-3);
            expect(mathEnforcer.sum(-1, 2)).to.be.equal(1);
            expect(mathEnforcer.sum(2, -1)).to.be.equal(1);
        });
    });
});