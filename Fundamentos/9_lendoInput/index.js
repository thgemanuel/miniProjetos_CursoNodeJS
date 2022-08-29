const readline = require("readline").createInterface({
  // entrada de dados
  input: process.stdin,
  // saida de dados
  output: process.stdout,
});

// temos aqui uma funcao anonima que trabalha com o dado recebido atravez da pergunta
readline.question("Qual sua linguagem favorita? ", (linguagem) => {
  console.log(`A linguagem preferida é ${linguagem}`);
  readline.close();
});
