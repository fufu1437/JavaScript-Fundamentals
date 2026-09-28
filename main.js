const n = Number(require('fs').readFileSync(0, 'utf-8').trim())
// Print FizzBuzz / Fizz / Buzz / n based on divisibility.

if((n % 15) === 0) {
	console.log("FizzBuzz")
} else if((n % 3) === 0) {
	console.log("Fizz")

} else if((n % 5) === 0) {
	console.log("Buzz")

} else {
	console.log(n)
}


//除，则打印 FizzBuzz 如果只能被 3 整除，则打印 Fizz 如果只能被 5 整除，则打印 Buzz 否则打印这个数本身。