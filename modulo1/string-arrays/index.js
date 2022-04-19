//  EXERCICIO 1 INTERPRETAÇAO
// let array
// console.log('a. ', array)
// // a. indefinido

// array = null
// console.log('b. ', array)
// // b. nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // c. 11

// let i = 0
// console.log('d. ', array[i])
// // d. 3

// array[i+1] = 19
// console.log('e. ', array)
// // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// // f. 9

// EXERCICIO 2
// const frase = prompt("Digite uma frase")
// // "Subi num ônibus em Marrocos"

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // SUBI NUM ÔNIBUS EM MIRROCOS 27

// EXERCICIO 1 ESCRITA
// const nameUser = prompt('Qual seu nome?')
// const email = prompt('Qual seu email?')

// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nameUser}!`)

// EXERCICIO 2
// let foodFavorite = ['Pizzas', 'Arroz', 'Carne', 'Lanche', 'Sorvete']

// console.log(foodFavorite)
// console.log(`
// Minhas 5 comidas Favoritas
// ${foodFavorite[0]}
// ${foodFavorite[1]}
// ${foodFavorite[2]}
// ${foodFavorite[3]}
// ${foodFavorite[4]}
// `)

// const foodFavoriteUser = prompt('Qual sua comida favorita?')

// foodFavorite[1] = foodFavoriteUser

// console.log(foodFavorite)

// EXERCICIOS 3 
// let listaDeTarefas = []

// const task1 = prompt('Digite sua primeira tarefa?')
// listaDeTarefas.push(task1)

// const task2 = prompt('Digite sua segunda tarefa?')
// listaDeTarefas.push(task2)

// const task3 = prompt('Digite sua terceira tarefa?')
// listaDeTarefas.push(task3) 

// console.log(listaDeTarefas)

// let taskEnd = Number(prompt(`Qual tarefa ja realizou
// 1. ${task1}
// 2. ${task2}
// 3. ${task3}
// `))

// taskEnd = taskEnd -1

// listaDeTarefas.splice(taskEnd, 1)

// console.log(listaDeTarefas)

// DESAFIO 1
// let frase = "hello word friends"

// let array = frase.split(' ')

// console.log(array)

// DESAFIO 2
// let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// const shared = prompt('Oque procura?')

// const resultado = array.indexOf(shared)

// console.log(`A palavra ${shared} se encontra no index ${resultado} de um array com ${array.length} index.`)