function calcularFibonacci(limite) {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] <= limite) {
    let proximoNumero =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    fibonacci.push(proximoNumero);
  }

  return fibonacci;
}

function verificarFibonacci(numero) {
  let fibonacci = calcularFibonacci(numero);

  if (fibonacci.includes(numero)) {
    return `${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `${numero} não pertence à sequência de Fibonacci.`;
  }
}

let numero = 21; // Altere este valor para testar com diferentes números

console.log(verificarFibonacci(numero));
