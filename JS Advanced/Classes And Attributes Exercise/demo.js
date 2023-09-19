it('should return a string if all values in the input are correct', () => {
    const flag = new PaymentPackage('abc', 123);
    flag.active = false;
    const result = [
        'Package: abc (inactive)',
        '- Value (excl. VAT): 123',
        '- Value (VAT 20%): 147.6',
    ];
    expect(flag.toString()).to.equal(result.join('\n'));
});

it('should return a string if all values in the input are correct', () => {
    const flag = new PaymentPackage('abc', 123);
    flag.VAT = 30;
    const result = [
        'Package: abc',
        '- Value (excl. VAT): 123',
        '- Value (VAT 30%): 159.9',
    ];
    expect(flag.toString()).to.equal(result.join('\n'));
});

it('should return a string if all values in the input are correct', () => {
    const flag = new PaymentPackage('abc', 123);
    const result = [
        'Package: abc',
        '- Value (excl. VAT): 123',
        '- Value (VAT 20%): 147.6',
    ];
    expect(flag.toString()).to.equal(result.join('\n'));
});