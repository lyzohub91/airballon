const app = require('./../app.js');
describe('fiftyIsOneOfTheNumber', function () {
    it('isTrue', function () {
        expect(app.fifty(25, 50)).toEqual(true);
    });
    it('isTrue', function () {
        expect(app.fifty(25, 25)).toBe(true);
    });
    it('isTrue', function () {
        expect(app.fifty(50, 25)).toBe(true);
    });
    it('isTrue', function () {
        expect(app.fifty(50, 50)).toBe(true);
    });
    it('isTrue', function () {
        expect(app.fifty(40, 60)).toBe(false);
    });
    it('isTrue', function () {
        expect(app.fifty(-10, 60)).toBe(false);
    });
});