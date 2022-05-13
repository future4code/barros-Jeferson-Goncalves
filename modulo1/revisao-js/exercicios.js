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
  console.log(array)
  // let arrayOrdenado = array.sort((a, b) => a-b)
  let arrayAux
  for (let i = 0; i < array.length; i++){
    let k = i + 1
    for (let j = 0; j < array.length; j++){
      if (array[j] > array[k]){
        arrayAux = array[j]
        array[j] = array[k]
        array[k] = arrayAux
      }
    }
  }
  return array
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
  const numberPar = []
  for (let i = 0; numberPar.length < n; i++){
    if ((i % 2) === 0){
      numberPar.push(i)
    }
  }
  return numberPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipoTriangulo
  if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
    tipoTriangulo = "Escaleno"
  } else if (ladoA === ladoB && ladoA != ladoC && ladoB != ladoC || ladoA === ladoC && ladoB != ladoC && ladoB != ladoA || ladoB === ladoC && ladoA != ladoC && ladoA != ladoB){
    tipoTriangulo = "Isósceles"
  }else if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    tipoTriangulo = "Equilátero"
  }
  return tipoTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayOrdenado = array.sort((a, b) => a-b)
  const segundoMaior = arrayOrdenado[arrayOrdenado.length-2]
  const segundoMenor = arrayOrdenado[1]
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  console.log(filme)
  const imprimir = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.toString().replaceAll(',', ', ')}.`
  return imprimir
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa.nome = "ANÔNIMO"
  return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasPermitida = []
  for (dados of pessoas){
    if (dados.idade < 60 && dados.idade > 14){
      if (dados.altura > 1.5){
        pessoasPermitida.push(dados)
      }
    }
  }
  return pessoasPermitida
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoPermitida = []
  for (dados of pessoas){
    if(dados.idade > 60 || dados.idade <= 14 || dados.altura < 1.5){
      pessoasNaoPermitida.push(dados)
    }
  }
  return pessoasNaoPermitida
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (conta of contas){
    for(let i = 0; i < conta.compras.length; i++){
      console.log(i)
      conta.saldoTotal = conta.saldoTotal - conta.compras[i]
    }
    conta.compras = []
  }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas){
  const nome = []
  for (let i = 0; i < consultas.length; i++){
    const array = consultas[i].nome.split("")
    nome.push(array)
  }
  const nomesOrdenados = nome.sort()

  const ordenados = []

  nomesOrdenados.map((nome) => {
    nome = nome.toString().replaceAll(",", "")
    consultas.map((dados, index) => {
      if (dados.nome === nome){
        ordenados.push(consultas[index])
      }
    })
    
  })
  return ordenados
}



// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  for (let i = 0; i < consultas[0].dataDaConsulta.length; i++){
    consultas.sort((a, b) => { return a.dataDaConsulta.split("/")[i] - b.dataDaConsulta.split("/")[i]});
  }
  
  console.log(consultas)
  return consultas
}