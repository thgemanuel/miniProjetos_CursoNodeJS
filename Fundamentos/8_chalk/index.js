const chalk = require("chalk");

const nota = 2;

if (nota >= 7) {
  console.log(chalk.green.bold("Parabens voce esta aprovado!"));
} else {
  console.log(chalk.bgRed("Voce precisa fazer a prova de recuperacao!"));
}
