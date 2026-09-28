const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const name = lines[0]
const age = lines[1]
// Print the greeting using a template literal.
console.log(`Hi, ${name}! You are ${age} years old.`)