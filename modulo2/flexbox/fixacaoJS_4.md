```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contador = 0;
  for (valor of arrayDeNumeros) {
    if (valor === numeroEscolhido) {
      contador += 1;
    }
  }
  if (contador == 0){
    return `Número não encontrado`
  }
  return `O número ${numeroEscolhido} aparece ${contador}x`
}

```
