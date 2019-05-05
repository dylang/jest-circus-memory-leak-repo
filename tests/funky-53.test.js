
const { patched } = require('graceful-fs')
describe('funky-53 ' + patched, () => {
    test('funky-53', () => {
        expect(1).toEqual(1);
    });
});
        