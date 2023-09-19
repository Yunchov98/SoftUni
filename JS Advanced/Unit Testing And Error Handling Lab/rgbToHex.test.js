const rgbToHexColor = require('./rgbToHex');
const { expect } = require('chai');

describe('rgbToHex function tests', () => {
    it('should return undefined for missing parameter', () => {
        expect(rgbToHexColor(1, 2)).to.be.equal(undefined);
        expect(rgbToHexColor(1)).to.be.equal(undefined);
        expect(rgbToHexColor()).to.be.equal(undefined);
    });

    it('should return undefined if one of the parameters is lower than 0', () => {
        expect(rgbToHexColor(-1, 2, 3)).to.be.equal(undefined);
        expect(rgbToHexColor(1, -2, 3)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 2, -3)).to.be.equal(undefined);
    });

    it('should return undefined if one of the parameters is bigger than 255', () => {
        expect(rgbToHexColor(256, 2, 3)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 256, 3)).to.be.equal(undefined);
        expect(rgbToHexColor(1, 2, 256)).to.be.equal(undefined);
    });

    it('should convert to black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('should convert to white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
});