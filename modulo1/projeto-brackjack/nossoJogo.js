console.log('Boas vindas ao jogos de Blackjack')

function jogar() {
   rodada = window.confirm('Deseja iniciar rodada?')
   return rodada
}

let cartasJogador = {
   valor: [],
   texto: []
}
let cartasComputador = { 
   valor: [],
   texto: []
}


let somaJogador = 0
let somaComputador = 0


function entregaCartas() {
   for(let i = 0; i < 2; i++){
      const carta = comprarCarta();
      cartasJogador.valor.push(carta.valor)
      cartasJogador.texto.push(carta.texto)
   };
   for(let i = 0; i < 2; i++){
      const carta = comprarCarta();
      cartasComputador.valor.push(carta.valor) 
      cartasComputador.texto.push(carta.texto)
   }
}

function soma(){
   entregaCartas()

   for (contator in cartasJogador.valor){
      somaJogador += cartasJogador.valor[contator]
   }

   for (contator in cartasComputador.valor){
      somaComputador += cartasComputador.valor[contator]
   }
}

const jogada = () => {
   soma()
   let resultado = {
      ganhador: ''
   }
   
   if (somaJogador > somaComputador){
      resultado.ganhador = 'O Jogador Ganhou!'
   } else if (somaJogador === somaComputador){
      resultado.ganhador = 'Deu empate!'
   } else {
      resultado.ganhador = 'O Computador Ganhou!'
   }

   let imprenssao = `   ${resultado.ganhador}
   Usuario - Cartas ${cartasJogador.texto.toString().replace(",", " ")}
   Computador - Cartas ${cartasComputador.texto.toString().replace(",", " ")}
   `

   console.log(imprenssao)
}

while (jogar()){
   jogada()
   cartasJogador.valor = []
   cartasJogador.texto = []
   cartasComputador.valor = []
   cartasComputador.texto = []
}
console.log('O Jogo ababou')
