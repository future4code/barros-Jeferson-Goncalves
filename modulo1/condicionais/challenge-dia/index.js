const objt = {
  nome: "jeferson",
  genero: "Masculino".toUpperCase()
}

function pessoa(objeto){
  if (objeto.genero === "MASCULINO"){
    console.log(`Seja Bem Vindo ${objeto.nome}`)
  } else if (objeto.genero === "FEMENINO"){
    console.log(`Seja Bem Vinda ${objeto.nome}`)
  } else {
    console.log("Desejamos boas-vindas!")
  }
}
pessoa(objt)