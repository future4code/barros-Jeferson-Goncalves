/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let cartasJogador = {
   texto: [],
   valor: []
}
let cartasComputador = {
   texto: [],
   valor: []
}

let pontosJogador = 0
let pontosComputador = 0


// sorteio das cartas / regra
function sorteioCartas(){
   function baralho(){
      for (let un = 0; un < 2; un++){
         const carta = comprarCarta()
         cartasJogador.texto.push(carta.texto)
         cartasJogador.valor.push(carta.valor)
      };
      for (let un = 0; un < 2; un++){
         const carta = comprarCarta()
         cartasComputador.texto.push(carta.texto)
         cartasComputador.valor.push(carta.valor)
      };
   }
   baralho()
   // regra

   let valorComputador = cartasComputador.valor[0]
   let valorJogador = cartasJogador.valor[0]
   
   if (valorComputador === 11 && valorJogador === 11){
      cartasComputador.texto = []
      cartasComputador.valor = []
      cartasJogador.texto = []
      cartasJogador.valor =
      baralho()
   }
}
function comprar(comprador){
   const carta = comprarCarta()
   comprador.texto.push(carta.texto)
   comprador.valor.push(carta.valor)
}

function somaPontos(){
   for (let pontos of cartasJogador.valor){
      pontosJogador += pontos
   };
   for (let pontos of cartasComputador.valor){
      pontosComputador += pontos
   }
}

function updatePontosJogador(){
   pontosJogador = pontosJogador + (cartasJogador.valor[cartasJogador.valor.length -1])
}

function updatePontosComputador(){
   pontosComputador = pontosComputador + (cartasComputador.valor[cartasComputador.valor.length -1])
}

function imprimir(ganhador, cartasComputador, cartasJogador, pontosComputador, pontosJogador){
   alert(`  Suas cartas ${cartasJogador.texto}. pontuaçao é ${pontosJogador}
   As cartas do computador ${cartasComputador.texto}. pontuaçao ${pontosComputador}
   O ${ganhador}`)
}



function jogada(){
   cartasComputador.texto = []
   cartasComputador.valor = []
   cartasJogador.texto = []
   cartasJogador.valor = []
   pontosComputador = 0
   pontosJogador = 0
   if (confirm("Deseja iniciar uma partida?")){
      sorteioCartas()
      somaPontos()
      
      while (confirm(`   Suas cartas sao ${cartasJogador.texto}
      Carta revelada do Computador é ${cartasComputador.texto[0]}
      Deseja comprar mais carta?`)){
         if (pontosJogador <= 21){
            comprar(cartasJogador)
            updatePontosJogador()
         }else {
            console.log('Limite de pontos atingido')
            break
            }
      }
      
      if (pontosJogador <= 21){
         while (pontosJogador >= pontosComputador || pontosComputador < 21){
            comprar(cartasComputador)
            updatePontosComputador()
         }
      }
   }
   resultado()
}

jogada()

function resultado(){
   if (pontosComputador === 0 || pontosJogador === 0){
      jogada()
   }
   if (pontosJogador >21 && pontosComputador <= 21 || pontosComputador === 21 && pontosJogador < 21){
      imprimir("Computador ganhou", cartasComputador, cartasJogador, pontosComputador, pontosJogador)
      jogada()
   } else if (pontosJogador <= 21 && pontosComputador > 21 || pontosJogador === 21 && pontosComputador < 21) {
      imprimir("Jogador ganhou", cartasComputador, cartasJogador, pontosComputador, pontosJogador)
      jogada()
   } else {
      imprimir("Empate", cartasComputador, cartasJogador, pontosComputador, pontosJogador)
      jogada()
   }
}