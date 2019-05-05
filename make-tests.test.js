const  { writeFileSync } = require('fs');
/**
 * @jest-environment node
 */

// This is just used to make lots of tests quickly.

describe('copy', () => {
    test('copy', async () => {
        for (let i = 10; i < 100; i++) {
            const template = `
const { patched } = require('graceful-fs')
describe('funky-${i} ' + patched, () => {
    test('funky-${i}', () => {
        expect(1).toEqual(1);
    });
});
        `;
            writeFileSync(`${__dirname}/tests/funky-${i}.test.js`, template, 'utf8');
        }
    });
});
