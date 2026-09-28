const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const a = Number(lines[0])
const b = Number(lines[1])
const c = Number(lines[2])
// Print the floor of the average below.


console.log(Math.floor((a + b + c) / 3))
