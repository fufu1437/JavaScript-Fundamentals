const word = require('fs').readFileSync(0, 'utf-8').trim()
// Reverse and print the word below.
console.log(word.split('').reverse().join(''))