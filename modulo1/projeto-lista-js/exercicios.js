// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt('Qual altura:')
  let largura = prompt('Qual largura:')
  const soma = altura * largura
  console.log(soma)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em que ano estamos? ")
  const anoNascimento = prompt("Em que ano você nasceu? ")

  const idade = anoAtual - anoNascimento
  console.log(idade) 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const name = prompt('Qual seu nome? ')
  const age = prompt('Qual sua idade? ')
  const email = prompt('Qual seu email? ')

  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const colorPrimary = prompt('Qual sua primeira cor favorita?')
  const colorSegundary = prompt('Qual sua segunda cor favorita?')
  const colorTertiary = prompt('Qual sua terceira cor favorita?')

  const colors = [colorPrimary, colorSegundary, colorTertiary]

  console.log(colors)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase() 
  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngresso = custo / valorIngresso
  return quantidadeIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.length
  string2 = string2.length

  const comparation = string1 === string2

  return comparation
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const lens = array[0]

  return lens
} 

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const quantidade = (array.length) - 1
  console.log(quantidade)
  array = array[quantidade]

  return array
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const index = array.length
  const primaryPosition = array[0]
  const lastPosition = array[index - 1]

  console.log(index)
  console.log(primaryPosition)
  console.log(lastPosition)


  // remove ultima posiçao
  array.pop()

  // remove primeira posiçao
  array.shift()

  // adiciona na ultima posiçao
  array.push(primaryPosition)

  // adiciona item inicio do array
  array.unshift(lastPosition)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const equal = string1.toUpperCase() === string2.toUpperCase()
  
  return equal
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const currentYear = prompt("Qual ano atual?")
  const birthYear = prompt("Qual ano você nasceu?")
  const identityIssuedYear = prompt("Qual ano foi emitido sua identidade?")

  console.log(currentYear, birthYear, identityIssuedYear)

  const age = currentYear - birthYear
  const ageidentity = currentYear - identityIssuedYear

  console.log(age , ageidentity)
  
  let verification = false

  if (age <= 20){
    console.log('Precisa renovar sua identidade a cada 5 anos')
    if (ageidentity >= 5){
      verification = true
    }
  } else if (age > 20 && age <= 50){
    console.log('Precisa renovar sua identidade a cada 10 anos')
    if (ageidentity >= 10){
      verification = true
    }
  } else if (age > 50){
    console.log('Precisa renovar sua identidade a cada 15 anos')
    if (ageidentity >= 15){
      verification = true
    }
  }
  console.log(verification)
}

// // EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let yearsLeap = false

  if ((ano % 100 ) === 0){
    if ((ano % 400) === 0){
      yearsLeap = true
    }
    
  } else if ((ano % 4) === 0){
    yearsLeap = true
  }
  return yearsLeap
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ageUp = prompt('Você tem mais de 18 anos? "sim" "não"')
  const highSchool = prompt('Você tem ensino médio completo? "sim" "não"')
  const disponibleHours = prompt('Você tem disponibilidade durante horarios do curso? "sim" "não"')

  let habito = false

  let list = [ageUp, highSchool, disponibleHours]

  const indexList = list.indexOf("nao","NAO", "não", "NÃO")

  if (indexList  === -1){
    habito = true
  }

  console.log(habito)
}