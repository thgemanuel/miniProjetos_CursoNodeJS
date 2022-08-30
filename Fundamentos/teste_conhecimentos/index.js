const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual seu nome?",
    },
    {
      name: "idade",
      message: "Qual sua idade?",
    },
  ])
  .then((answers) => {
    if(!answers.nome){
        throw new Error(chalk.bgRed("Campo de nome vazio!"))
    }
    if (!answers.idade) {
      throw new Error(chalk.bgRed("Campo de idade vazio!"));
    }
    console.log(chalk.bgYellow.black(`O(A) ${answers.nome} tem ${answers.idade} anos`));
  })
  .catch((err) => console.log(chalk.bgRed(err)));
