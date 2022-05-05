// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })
// vai imprimir um por um dos objeto informando index e por fir o array inteiro

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)
// // vai imprimir todos nome dentro novo array

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)
// imprimir novo array retirando do antiga objeto que contem chijo


// exercicio 1

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomes = pets.map((item) => {
//   return item.nome
// })
// console.log(nomes)

// const salsicha = pets.filter((item) => {
//   return item.raca === "Salsicha"
// })
// console.log(salsicha)

// const promoPoodles = pets.filter((item) => {
//   return item.raca === "Poodle"
// })

// const mensagem = promoPoodles.map((item) => {
//   console.log(`Voce ganhou cupom de desconto de 10% para tosar o/a ${item.nome}`)
// })

// exercicio 2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item) => {
  return item.nome
})
console.log(nomeProdutos)

const desconto = produtos.map((item) => {
  let desconto = item.preco - (item.preco * 5) / 100
  let nome = [{nome: item.nome}, {categoria: item.categoria},{preco: Number(desconto.toFixed(2))}]
  return nome
})
console.log(...desconto)

const bebidas = produtos.filter((item) => {
  return item.categoria === "Bebidas"
})
console.log(bebidas)

const ype = produtos.filter((item) => {
  return item.nome == "Ypê"
})
console.log(ype)