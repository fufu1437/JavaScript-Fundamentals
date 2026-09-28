const nums = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
// Find and print the maximum.
const num = nums.splice(' ').map(v => Number(v))

console.log(Math.max(...num))
