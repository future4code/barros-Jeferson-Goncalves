// exercicios de interpretaçao
/*
// exercicio 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
//Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])
// Virginia Cavendish
console.log(filme.transmissoesHoje[2])
// canal: "Globo", horario: "14h"

// exercicio 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
  //nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"
console.log(gato)
  //nome: "juba", 
	//idade: 3, 
	//raca: "SRD"
console.log(tartaruga)
  //nome: "jubo", 
	//idade: 3, 
	//raca: "SRD"

  // exercicio 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
// false
console.log(minhaFuncao(pessoa, "altura"))
// indefinido

*/


// // exercicios de escrita
// // exercicio 1
// const nameObject = {
//   nome: "jeferson",
//   apelidos: ['Nascimento', ' Jefin', ' Jef']
// }

// function apelidos (objeto){
//   console.log(`Eu sou ${nameObject.nome}, mas pode me chamar de: ${nameObject.apelidos}`)
// }

// apelidos(nameObject)

//  B
// const newObject = [...nameObject.nome, nameObject.apelidos = ['jhon', ' jose', ' mane']]


// apelidos(newObject)

// // exercicio 2
// const carrinho = []
// const frutas = {
//   0: {
//     nome: 'Laranja',
//     disponivel: true
//   },
//   1: {
//     nome: 'maça',
//     disponivel: true
//   },
//   2: {
//     nome: 'goiaba',
//     disponivel: true
//   }
// }

// function addCarrinho(fruts){
//   carrinho.push(fruts)
// }

// addCarrinho(frutas)

// console.log(carrinho)

// // desafio 1
// function user (){
//   const nome = prompt("qual seu nome?")
//   const age = prompt("qual sua idade?")
//   const profession = prompt("Qual sua profissao?")
//   const store = {
//     nome: {nome},
//     idade: {age},
//     profissao: {profession}
//   }
//   console.log(store)
//   console.log(typeof store)
// }

// user()


// // desafio 2
// const filmes = {
//   filme1: {
//     nome: 'Tom e Jerry',
//     lancamento: 1998
//   },
//   filme2: {
//     nome: 'A volta de quem nao foi',
//     lancamento: 1960
//   }
// }
// function lanFilme(filme1, filme2){
//   const dataLancFilme1 = filmes.filme1.lancamento
//   const dataLancFilme2 = filmes.filme2.lancamento
//   const lancamentoPrimeiro = dataLancFilme1 < dataLancFilme2
//   const lacamentoMesmoAno = dataLancFilme1 === dataLancFilme2

//   return `O primeiro filme foi lançado antes do segundo? ${lancamentoPrimeiro}.
// O primeiro filme foi lançado no mesmo ano do segundo? ${lacamentoMesmoAno}
//   `
// }

// console.log(lanFilme(filmes.filme1, filmes.filme2))

// // desafio 3
// function controlEstoque (fruta){
//   const estoque = fruta.disponivel = false
//   return estoque
// }

// controlEstoque(frutas[1])