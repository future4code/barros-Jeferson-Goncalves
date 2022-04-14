// EXERCIICIO 1 INTERPRETAÇÃO

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log('a.', resultado)
// false

resultado = bool1 && bool3
console.log('b', resultado)
// true

resultado = !resultado && (bool1 || bool3)
console.log('c', resultado)
// true

console.log('d', typeof resultado)
// tipo booleano

// EXERCICIO 2 INTERPRETAÇÃO

let primeiroNumero = prompt('Digite um numero: ')
let segundoNumero = prompt('Digite outro numero: ')

let soma = primeiroNumero + segundoNumero
console.log('concatenaçao', soma)
// concatenaçao primeiroNumero com segundoNumero, pois prompt retorna tipo string

// EXERCICIO 3 INTERPRETAÇÃO

soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(`A soma ${primeiroNumero} + ${segundoNumero} é ${soma}`)
