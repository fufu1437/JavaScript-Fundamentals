const n = Number(require('fs').readFileSync(0, 'utf-8').trim())
let sum = 0
// Loop and accumulate, then print sum.

for(let i = 1; i <= n; i++) {
	sum += i
}

console.log(sum)
