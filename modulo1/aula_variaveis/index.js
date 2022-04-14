// ======================= exerc 1
let a = 10
let b = 10

console.log(b)
// console imprime valor da variavel b = 10

b = 5
console.log(b)
// console imprime novo valor da varial b = 5

// ===================== exerc 2
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
// a = 10, b = 10, c = 10

// ====================== exerc 3
let hrTrabDia = prompt("Quantas horas você trabalha por dia?")

let vlrDiaria = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${hrTrabDia/vlrDiaria} por hora!`)
// imprime alerta com divisao valor hora / valor diaria

// ========================= exercicio de escrita
let nome
let idade

console.log(typeof nome, typeof idade)
// undfined foi imprimido pq as variaveis nao tem valor definido

nome = prompt('Qual seu nome? ')
idade = prompt('Qual sua idade? ')

console.log(nome)
console.log(idade)
// as variaveis passou a receber os valores que usuario digitou

console.log(`Olá ${nome} você tem $ {idade} anos`)

// ======================= exer 2
let perguntaRoupa = prompt('Você esta usando uma roupa azul hoje? ')

let perguntaCor = prompt('Você esta usando cor vermelho? ')

let perguntaLugar = prompt('Você esta na sua casa? ')

console.log(`Você esta usando uma roupa azul hoje? ${perguntaRoupa}`)

console.log(`Você esta usando cor vermelho? ${perguntaCor}`)

console.log(`Você esta na sua casa? ${perguntaLugar}`)

// ====================== exerc 3

let a = 10
let b = 25
let c = a
a = b
b = c

console.log('O novo valor de a é', a)
console.log('O novo valor de b é', b)