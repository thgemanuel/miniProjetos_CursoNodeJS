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
        depositar();
      } else if (action === "Consultar Saldo") {
        consultarSaldo();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"));
        // funcao para encerrar execucao do programa
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
      // console.info(nomeConta);

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
        return;
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

      console.log(
        chalk.bgGreenBright.green(
          `Parabéns ${nomeConta}, sua conta foi criada!`
        )
      );
      // voltar para o menu do usuario
      operacoes();
    });
}

// funcao para adicionar fundos na conta
function depositar() {
  inquirer
    .prompt([
      {
        name: "nomeConta",
        message: "Informe o nome da sua conta:",
      },
    ])
    .then((answer) => {
      const nomeConta = answer["nomeConta"];

      // verifica se a conta existe
      if (!verificaSeContaExiste(nomeConta)) {
        return depositar();
      }

      // realizando a requisicao ao usuario do valor do deposito
      inquirer
        .prompt([
          {
            name: "valor",
            message: "Informe o valor do deposito:",
          },
        ])
        .then((answer) => {
          const valor = answer["valor"];

          adicionaFundos(nomeConta, valor);
          operacoes();
        });
    });
}

// funcao para verificar se conta ja existe no banco
function verificaSeContaExiste(nomeConta) {
  if (!fs.existsSync(`contas/${nomeConta}.json`)) {
    console.log(chalk.bgRed.black("Conta inexistente, verifica os dados"));
    return false;
  }
  return true;
}

// funcao para ler o arquivo da conta e obter dados
function leArquivoConta(nomeConta) {
  // obtem a conta em um objeto JavaScript
  const contaJSON = fs.readFileSync(`contas/${nomeConta}.json`, {
    encoding: "utf8", // para poder pegar os padroes utf8
    flag: "r", // modo somente leitura do arquivo
  });

  // retorna o objeto JavaScript transformado em um JSON
  return JSON.parse(contaJSON);
}

function adicionaFundos(nomeConta, valor) {
  const dadosConta = leArquivoConta(nomeConta);

  // se nao for informado nenhum valor para deposito, a funcao é chamada novamente para obter valor valido
  if (!valor) {
    console.log(
      chalk.bgRed.black(
        "Valor de deposito invalido, informe um valor maior que R$ 0!"
      )
    );
    return depositar();
  }

  // como o require vem em formado de texto é nescessario converter em Float32Array, assim como os dados do JSON
  dadosConta.saldo = parseFloat(valor) + parseFloat(dadosConta.saldo);

  // salvando os novos dados no arquivo da conta 
  // para isso é usando a funcao JSON.stringify(dadosConta) para transformar o json em texto 
  fs.writeFileSync(
    `contas/${nomeConta}.json`,
    JSON.stringify(dadosConta),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`${nomeConta}, foi depositado o valor de R$${valor} na sua conta!`)
  );
}

// funcao para consulta de saldo
function consultarSaldo() {
  // faz a requisicao do nome da conta para ver o saldo 
  inquirer
    .prompt([
      {
        name: 'nomeConta',
        message: 'Informe o nome da sua conta:',
      },
    ])
    .then((answer) => {
      const nomeConta = answer['nomeConta']

      
      if (!verificaSeContaExiste(nomeConta)) {
        return consultarSaldo()
      }

      const dadosConta = getAccount(nomeConta)

      console.log(
        chalk.bgBlue.black(
          `Olá ${nomeConta}, o saldo da sua conta é de R$${dadosConta.balance}`
        )
      );
      operacoes()
    })
}