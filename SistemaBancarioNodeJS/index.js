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
        criarConta();
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
function criarConta() {
  console.log(chalk.bgGreen("Bem vindo ao nosso banco!"));
  console.log(chalk.bgCyan("Defina as opções da sua conta a seguir"));

  // chamada de funcao para criar conta
  buildConta();
}

// funcao para criar conta
function buildConta() {
  // fazer a requisicao para os dados da conta do usuario
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Informe um nome para a sua conta:",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];
      // apresentar para o usuario o nome da conta definido
      console.info(nomeConta);

      // caso o diretorio nao exista ele é criado
      if (!fs.existsSync("contas")) {
        fs.mkdirSync("contas");
      }

      // se a conta que o usuario informou ja existe,
      // nao pode deixar a continuacao da criacao de conta com esse nome
      // é feita uma chamada da funcao para criacao com outro nome
      // para cada conta serao salvos os dados em arquivo json
      if (fs.existsSync(`contas/${nomeConta}.json`)) {
        console.log(
          chalk.bgRed.black("Conta já existente! Defina outro nome!")
        );

        // chamada recursiva
        buildConta(nomeConta);
        // se tiver um erro no sistema ele é retornado para q nao crie a conta 
        return
      }

      // lembrando que todos os processos sao sincronos para respeitar a ordem do programa
      // nessa funcao é escrito em um arquivo para a nova conta com o saldo predefinido em 0
      fs.writeFileSync(
        `contas/${nomeConta}.json`,
        '{"saldo":0}',
        function (err) {
          console.log(err);
        }
      );

      console.log(chalk.green("Parabéns, sua conta foi criada!"));
      // voltar para o menu do usuario
      operacoes();
    });
}
