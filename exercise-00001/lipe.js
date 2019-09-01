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
    if (x > max) {
      max = x
    }
  }
  return max
}

console.log(valorMax(1,10))

/**
 * Notas:
 *
 * 1) O programa não está fazendo o que o exercício pedia. Veja o exemplo de entrada e o exemplo de saída
 * 2) O retorno da função `valorMax` não retorna o valor esperado. Por exemplo, para entrada `[1, 10]` o
 * retorno deveria ser `20`
 * 3) a função `repeticoes` está calculando o valor corretamente
 * 4) há certas restrições existentes no enunciado do exercício que não foram aplicados
 * 5) há variáveis não utilizadas no código, evite-as uma vez que elas consomem memória do navegador sem
 * serem usadas efetivamente
 */

