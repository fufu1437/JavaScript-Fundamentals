const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })

rl.on("line", (line) => {
	const tokens = line.trim() === '' ? [] : line.split(' ')

	const kept = tokens.filter((token) => {
		const n = Number(token)
		return Number.isFinite(n) && n > 0
	})

	console.log(kept.join(' '))
	rl.close()
})

rl.on("close", () => process.exit(0))