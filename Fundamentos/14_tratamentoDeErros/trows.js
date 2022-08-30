const x = "10";

// checar se x é um numero
if (!Number.isInteger(x)) {
  // o metodo throw irá incerar o programa, assim o console log nao sera mostrado
  throw new Error("O valor de x não é um numero inteiro!");
}

console.log("continuando o codigo");
