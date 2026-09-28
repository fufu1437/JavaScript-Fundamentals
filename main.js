const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const a = Number(lines[0])
const b = Number(lines[1])
// Print the sum below.
console.log(a + b)