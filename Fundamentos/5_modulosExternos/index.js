// node .\index.js --nome=Thiago --profissao=Programador
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

// { _: [ 'nome=Thiago' ] }
console.log(args);

const nome = args["nome"];
const profissao = args["profissao"];

// Thiago
console.log(nome);

console.log(`O ${nome} trabalha como ${profissao}`)