const app = require('./../app.js');
describe('calculator', function () {
    it('plus', function () {
        expect(app.calc(2, 5, '+')).toEqual(7);
    });
    it('minus', function () {
        expect(app.calc(8, 3, '-')).toEqual(5);
    });
    it('divide', function () {
        expect(app.calc(20, 5, '/')).toEqual(4);
    });
    it('multiplication', function () {
        expect(app.calc(7, 8, '*')).toEqual(56);
    });
    it('Error', function () {
        expect(app.calc(1, 1, '*')).toEqual(0);
    });
});

