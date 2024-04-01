function inverterString(str) {
  let caracteres = str.split("");

  let inicio = 0;
  let fim = caracteres.length - 1;

  while (inicio < fim) {
    let temp = caracteres[inicio];
    caracteres[inicio] = caracteres[fim];
    caracteres[fim] = temp;

    inicio++;
    fim--;
  }

  return caracteres.join("");
}

let stringTeste = "Gosto de desafios!";

console.log("String original:", stringTeste);
console.log("String invertida:", inverterString(stringTeste));
