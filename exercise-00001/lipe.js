function repeticoes(n){
  let passos = 1
  while(n !== 1){ /* enquanto "n" for diferente de 1 */
    if ( n % 2 === 0){ /* "===" Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. */
      n = n / 2 /* "Se n for par, divida por dois." */
    }else{
      n = 3 * n + 1 /* "Se for ímpar, multiplique esse número por 3 e some 1."*/
    }
    passos++ /* Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição. */
  }
  return passos
}

function valorMax(i,j){
  let max = repeticoes(i)
  for (let x = i + 1; x <= j; x++) { /* não calculando o primeiro, no caso o "i" e usando o x para encontrar o valor máximo de repetições*/
    let valorFinal = repeticoes(x)
    if (valorFinal > max) { /* se o valorFinal for igual ao número max de repeticoes */
      max = valorFinal
    }
  }
  return i+' '+j+' '+max /* irá retornar os valores "i" e "j" + valor máximo de repeticoes */ 
}

console.log(valorMax(1,10))
console.log(valorMax(100,200))
console.log(valorMax(201,210))
console.log(valorMax(900,1000))

/**
 * ainda precisa ver que a entrada é uma lista de pares, enquanto aqui 
 * você está mandando os pares um de cada vez manualmente ao invés
 * de um loop
 */
