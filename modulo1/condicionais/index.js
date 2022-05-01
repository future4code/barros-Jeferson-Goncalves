// // exercicio 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// // A
//   // verifica se numero é par ou seja se é multiplico por 2

// // B
//  // numeros pares ou numeros multiplicado por 2 que resta 0

// // C
//   // numeros impar. numeros multiplicado por 2 e resta acima de 0

// // exercicio 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // A
//   // codigo rebece entrada string e testa no switch se tem nome para retornar preço, caso nao tenha em nenhum casos retorna default com preço 5

// // B
//   // preço = 2.25

// // C
//   // retornaria preço = 5

// // exercicio 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // A
//   // esta requisitando ao usuario para digitar um numero, espera reveber um numero

// // B 
//   // caso receber 10 retornaria console.log dentro do if, ultimo console.log retornaria indefinido, caso recebe -10 retornaria indefinido no ultimo console.log

// // C
//   // sim, ultimo console.log nao esta definimo a mensagem, variavel mensagem esta declarada dentro de um escopo local


// // exercicio de escrita 1
// const age = Number(prompt("qual sua idade?"))

// if ( age >= 18){
//   console.log('Você pode dirigir')
// } else {
//   console.log('não pode dirigir')
// }

// // exercicio 2
// const turno = prompt(`Qual seu Turno?
// M (matutino) ou V (Vespertino) ou N (Noturno)`).toUpperCase()

// if (turno === "M"){
//   console.log("Bom Dia!")
// } else if (turno === "V"){
//   console.log("Bom Tarde!")
// }else if (turno === "N"){
//   console.log("Boa Noite!")
// }


// // exercicio 2
// const turno2 = prompt(`Qual seu Turno?
// M (matutino) ou V (Vespertino) ou N (Noturno)`).toUpperCase()

// switch (turno2){
//   case "M": {
//     console.log("Bom Dia!")
//   }
//   break
//   case "V": {
//     console.log("Bom Tarde!")
//   }
//   break
//   case "N": {
//     console.log("Boa Noite!")
//   }
//   break
// }

// // exercicio 4
// const genero = prompt("Qual genero do filme?")
// const valorIngresso = Number(prompt("Qual valor do ingresso?"))
// const lanche = prompt(`Qual lanche deseja?
// pipoca, chocolate, doces`)

// if (genero === "fantasia" && valorIngresso < 15){
//   console.log(`Bom Filme! ${lanche}`)
// } else {
// console.log("Escolha outro filme :(")
// }

// desafio 2
const nome = prompt(`Nome completo: `)
const typeJogo = prompt(`IN = internacional
DO = domestico`).toUpperCase()
const etapaJogo = prompt(`SF = semi-final
DT = decisão terceiro lugar
FI = final`).toUpperCase()
const category = Number(prompt(`Categorias 1 - 2 - 3 - 4`))
const unIngresso = Number(prompt(`Quantidade de ingressos: `))

let valorIngresso


function valorIngreso(tipo, etapa, categoria) {
  switch (etapa){
    case 'SF': {
      switch(categoria){
        case 1:{
          valorIngresso = 1320
        }
        break
        case 2:{
          valorIngresso = 880
        }
        break
        case 3:{
          valorIngresso = 550
        }
        break
        case 4:{
          valorIngresso = 220
        }
        break
        default: {
          alert('categoria incorreta')
        }
      }
    }
    break
    case 'DT': {
      switch(categoria){
        case 1:{
          valorIngresso = 660
        }
        break
        case 2:{
          valorIngresso = 440
        }
        break
        case 3:{
          valorIngresso = 330
        }
        break
        case 4:{
          valorIngresso = 170
        }
        break
        default: {
          alert('categoria incorreta')
        }
      }
    }
    break
    case 'FI': {
      switch(categoria){
        case 1:{
          valorIngresso = 1980
        }
        break
        case 2:{
          valorIngresso = 1320
        }
        break
        case 3:{
          valorIngresso = 880
        }
        break
        case 4:{
          valorIngresso = 330
        }
        break
        default: {
          alert('categoria incorreta')
        }
      }
    }
    break
    default: {
      alert('Etapa incorreta')
    }
  }
  if (tipo === 'IN'){
    valorIngresso = valorIngresso * 4.10
  }
  return valorIngresso
}

function imprensao(){
  const valor = valorIngreso(typeJogo, etapaJogo, category)
  const total = valor * unIngresso
  const imprimirReal = ` --- Dados da compra ---
  Nome do cliente: ${nome}
  Tipo de jogo: ${typeJogo}
  Etapa do jogo: ${etapaJogo}
  Categoria: ${category}
  Quantidade de ingressos: ${unIngresso}
  --- Valores ---
  Valor do ingresso: R$ ${valor.toFixed(2)}
  Valor Total: ${total.toFixed(2)}
  `
  const imprimirDolar = ` --- Dados da compra ---
  Nome do cliente: ${nome}
  Tipo de jogo: ${typeJogo}
  Etapa do jogo: ${etapaJogo}
  Categoria: ${category}
  Quantidade de ingressos: ${unIngresso}
  --- Valores ---
  Valor do ingresso: $${valor.toFixed(2)}
  Valor Total: $${total.toFixed(2)}
  `
  if (typeJogo === 'DO'){
    console.log(imprimirReal)
  } else {
    console.log(imprimirDolar)
  }
}
imprensao()