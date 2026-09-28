const max = (a, b) => a > b ? a : b  // TODO: give back the larger of a and b

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const a = Number(lines[0])
const b = Number(lines[1])
console.log(max(a, b))