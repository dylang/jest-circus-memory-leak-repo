
const { patched } = require('graceful-fs')
describe('funky-82 ' + patched, () => {
    test('funky-82', () => {
        expect(1).toEqual(1);
    });
});
        