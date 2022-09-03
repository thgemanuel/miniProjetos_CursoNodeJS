// modulos internos
const fs = require("fs");

// modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

operacoes();

// funcao com operacoes que o usuario pode fazer no sistema
function operacoes() {
  // o metodo prompt da a possibilidade de escolher opções
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Olá\nO que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      //no then ficam as soluççoes da escolha do ususario

      //nessa action fica salva a acao seleciona dentra do array de respostas do usuario
      const action = answer["action"];

      if (action === "Criar conta") {
        createAccount();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"));
        process.exit();
      }
    });
}

// funcao para apresentar mensagem de criacao de conta
function createAccount() {
  console.log(chalk.bgGreen("Bem vindo ao nosso banco!"));
  console.log(chalk.bgCyan("Defina as opções da sua conta a seguir"));

  // chamada de funcao para criar conta
  criarConta();
}
