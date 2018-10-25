const  { writeFileSync } = require('fs');

/**
 * @jest-environment node
 */

describe('copy', () => {
    test('copy', async () => {
        for (let i = 10; i < 100; i++) {
            const template = `
describe('funky-${i}.test', () => {
    test('funky-${i}', async () => {
        expect(1).toEqual(1);
    });
});
        `;
            writeFileSync(`${__dirname}/tests/funky-${i}.test.js`, template, 'utf8');
        }
    });
});
