function square(n) {
	return n * n
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim())
console.log(square(n))
