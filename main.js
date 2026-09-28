const words = require('fs').readFileSync(0, 'utf-8').trim().split(' ')
const seen = {}
// Use object keys to track distinct words.

for(const v of words) {
	seen[v] = 1
}

console.log(Object.keys(seen).length)
