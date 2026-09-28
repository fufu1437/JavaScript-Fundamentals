const nums = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
// Pipeline: keep evens -> square them -> sum.
const result = nums
	.filter(n => !(n & 1))              // TODO: keep only the even numbers
	.map(n => n * n)                    // TODO: replace each with its square
	.reduce((acc, n) => acc += n, 0)    // TODO: accumulate the running total
console.log(result)