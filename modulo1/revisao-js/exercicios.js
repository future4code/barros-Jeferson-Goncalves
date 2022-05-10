// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = []
  for (let posicao = array.length -1; posicao >= 0; posicao-- ){
    arrayInvertido.push(array[posicao])
  }
  return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let arrayOrdenado = array.sort((a, b) => a-b)
  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((array)=> array % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const newArray = []
  const par = array.filter((filtro)=> filtro % 2 === 0)
  for (numero of par){
    const elevado = numero * numero
    newArray.push(elevado)
  }
  return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = array[0]
  for (numero of array){
    if (numero > maior){
      maior = numero
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: false,
    diferenca: 0,
  }
  let menor = 0

  function acao(){
    if (num1 > num2){
      objeto.maiorNumero = num1
      menor = num2
    } else {
      objeto.maiorNumero = num2
      menor = num1
    }
  
    if (objeto.maiorNumero % menor === 0){
      objeto.maiorDivisivelPorMenor = true
    }
  
    const diferenca = objeto.maiorNumero - menor
    objeto.diferenca = diferenca
  }
  acao()

  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}