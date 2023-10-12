// timeToWords.test.js

const timeword = require('./timeword');

const testCases = [
    { input: '00:00', expected: 'midnight' },
    { input: '00:12', expected: 'twelve twelve am' },
    { input: '01:00', expected: 'one o’clock am' },
    { input: '06:01', expected: 'six oh one am' },
    { input: '06:10', expected: 'six ten am' },
    { input: '06:18', expected: 'six eighteen am' },
    { input: '06:30', expected: 'six thirty am' },
    { input: '10:34', expected: 'ten thirty four am' },
    { input: '12:00', expected: 'noon' },
    { input: '12:09', expected: 'twelve oh nine pm' },
    { input: '23:23', expected: 'eleven twenty three pm' }
];

let passed = 0;
let failed = 0;

testCases.forEach(test => {
    const result = timeword(test.input);
    if (result === test.expected) {
        console.log(`PASSED: ${test.input} -> ${result}`);
        passed++;
    } else {
        console.log(`FAILED: ${test.input} -> Expected ${test.expected}, but got ${result}`);
        failed++;
    }
});

console.log(`\nTotal tests: ${testCases.length}, Passed: ${passed}, Failed: ${failed}`);
