// DESAFIO 1
// conversao 77F prar K
const tempF = 77
const conversionTemp = (tempF - 32) * (5 / 9) + 273.15
console.log(tempF, 'F', conversionTemp, 'K')

// temperatura 80C para F
const temperCelsius = 80
const conversao = temperCelsius * (9 / 5) + 32
console.log(temperCelsius, 'C', conversao, 'F')

let celsius = Number(prompt('Quantos graus Celsius você deseja converter? '))

// converdao celsius para fahreheint
const fahrenheit = celsius * (9 / 5) + 32

// conversao celsius para k
const kelvin = celsius + 273.15

console.log(`${celsius}C = ${fahrenheit}F e ${kelvin}K `)

// DESAFIO 2
let valorQuilowattHoras = 0.05
let soma = valorQuilowattHoras * 280
let desconto = soma - (soma * 15) / 100

console.log(
  `Gasto equivalente 280Qwhs Total de ${soma.toFixed(
    2
  )}R$, valor com 15% desconto ${desconto.toFixed(2)}R$`
)

// desafio 3
// A
let conversion = 20 / 2.22
console.log(`20Lb equivale a ${conversion.toFixed(2)}Kg`)

// B
conversion = 10.5 / 3.52
console.log(`10.5Oz equivale a ${conversion.toFixed(2)}Kg`)

// C
conversion = 100 * 1609
console.log(`100mi equivale a ${conversion.toFixed(0)}Mt`)

// D
conversion = 50 * 3.28
console.log(`50Pes equivale a ${conversion.toFixed(0)}Mt`)

// E
conversion = 103.56 * 379
console.log(`103.56Gal americano equivale a ${conversion.toFixed(0)}Lt`)

// F
conversion = 450 * 28.41
console.log(`450Xic equivale a ${conversion.toFixed(0)}Lt`)

// G
const galaoAmericano = Number(prompt('Quantos Galao deseja converter? '))
conversion = galaoAmericano * 379
console.log(
  `${galaoAmericano}Gal americano equivale a ${conversion.toFixed(0)}Lt`
)
