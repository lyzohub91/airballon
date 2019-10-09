const app = require('./../app.js');
describe('sumOfTwoIntegers', function () {
    it('sum', function () {
        expect(app.sum(2, 4)).toEqual(6);
    });
});