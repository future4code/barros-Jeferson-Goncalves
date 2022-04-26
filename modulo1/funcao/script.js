// // EXERCICIO 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// // A  =====>
// console.log(minhaFuncao(2))
// // 10
// console.log(minhaFuncao(10))
// // 20

// // B ====>
// // apenas invocaria funçao passando valor do seu parametro


// // exercicio 2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// // A ====>
// // recebe string digitada pelo usuario converte todas letras para minuscula e procura se tem palavra cenoura -- tem ultilidade de procurar algo dentro de uma frase

// // B =======>
// // i. true
// // ii. true
// // iii. false




// // exercicios de escritas
// // EXERCICIO 1
// // A =======>
// function info(){
//   console.log("Eu sou Jeferson, tenho 24 anos, moro em Alta Floresta e sou estudante da Labenu.")
// }
// info()

// // B =====>
// function infoUser(nome, idade, localidade, profissao){
//   const printInfo = `Eu sou ${nome}, tenho ${idade} anos, moro em ${localidade} e sou ${profissao}.`

//   return printInfo
// }

// console.log(infoUser("Jeferson", 24, "Alta Floresta", "Estudante Labenu" ))



// // EXERCICIOS 2 
// // A =====>
// function somar(number1, number2){
//   const resultado = number1 + number2
//   return resultado
// }

// console.log(somar(30, 50))

// // B ====>>
// function comparacao(number1, number2){
//   const resultado = number1 >= number2
//   return resultado
// }
// console.log(comparacao(30, 60))

// // C ====>
// function par(number){
//   let par = false
//   if ((number % 2) === 0){
//     par = true
//   }

//   return par
// }

// console.log('é par', par(10))
// console.log('é par', par(5))

// // D =====>
// function text(texto){
//   const index = texto.length
//   const fraseUpper = texto.toUpperCase()
//   return index + fraseUpper
// }

// console.log(text(" Ola Mundo"))


// // EXERCICIO 3
// // A ======>
// const n1 = Number(prompt('Digite um Numero: '))
// const n2 = Number(prompt('Digite outro Numero: '))

// function soma(number1, number2){
//   const resultado = number1 + number2
//   return resultado
// }
// function diferenca(number1, number2){
//   const resultado = number1 % number2
//   return resultado
// }
// function multiplicacao(number1, number2){
//   const resultado = number1 * number2
//   return resultado
// }
// function divisao(number1, number2){
//   const resultado = number1 / number2
//   return resultado
// }

// console.log(soma(n1, n2))
// console.log(diferenca(n1, n2))
// console.log(multiplicacao(n1, n2))
// console.log(divisao(n1, n2))

// // DESAFIO 1 A
// const imprensao = (recebe) => {
//   console.log(recebe)
// }

// // DESAFIO B
// const arrowFunction = (valor1, valor2) => {
//   const soma = valor1 + valor2
//   imprensao(soma)
// }

// arrowFunction(40, 50)

// // DESAFIO 2
// const pitagoras = (cat1, cat2) => {
//   let hip = (cat1 * cat1) + (cat2 * cat2)
//   hip = Math.sqrt(hip)
//   return hip
// }
// console.log(pitagoras(9, 12))