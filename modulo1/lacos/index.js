// exercicio 1 interpretaçao
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
//   console.log(valor)
// }
// console.log(valor)
// somando valor + i em cada rodada

// exercicio 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a
// imprime somente numeros maio que 18
// b
// nao, melhor forma com for


// exercicio 3
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//  4 linhas contendo soma *++

// exercicio 1 escrita

// const bicho = Number(prompt('Quantos bichinho voce tem ?'))
// const nameBichos = []
// if (bicho == 0){
//   console.log('Que pena! Você pode adotar um pet!')
// } else {
//   for (let c = 0; c < bicho; c++){
//     const nome = prompt('Digite um por um nome do seu bichinho?')
//     nameBichos.push(nome)
//   }
// }
// console.log(nameBichos)

// exercicio 2

const arrayOriginal = [2, 5, 6, 1, 7, 8, 50, 30, 10]

for (valor of arrayOriginal){
  console.log(valor)
}

for (valor of arrayOriginal){
 const dividindo = valor / 10
  console.log(dividindo)
}

for (valor of arrayOriginal){
  if ((valor % 2) === 0){
  newArray = [... arrayOriginal]
    
  }
 }
 console.log(newArray)

for (let i = 0; i < arrayOriginal.length; i++){
  console.log(`O elemento do index ${i} é: ${arrayOriginal[i]}`)  
}


let maior = 0
let menor = arrayOriginal[0]

for (let numero of arrayOriginal){
  if (numero > maior){
    maior = numero
  } else if (numero < menor)
  menor = numero
}
console.log(maior)
console.log(menor)

