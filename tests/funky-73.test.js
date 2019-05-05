
const { patched } = require('graceful-fs')
describe('funky-73 ' + patched, () => {
    test('funky-73', () => {
        expect(1).toEqual(1);
    });
});
        