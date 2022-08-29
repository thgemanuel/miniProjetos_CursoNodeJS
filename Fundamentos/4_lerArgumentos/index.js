// passar um argumento nome utilizando o process

// node .\index.js nome=Thiago
// [
// retorna o executavel do node
//   'C:\\Program Files\\nodejs\\node.exe',
// o arquivo que esta executando
//   'C:\\Users\\Thiago\\Documents\\cursos\\Udemy\\miniProjetos_CursoNodeJS\\Fundamentos\\4_lerArgumentos\\index.js',
// e o argumento passado
//   'nome=Thiago'
// ]
console.log(process.argv);

// como podemos ver, os argumentos estao na posicao [2] do array de resposta
const args = process.argv.slice(2);

// ["nome=Thiago"]
console.log(args);

// para acessar o valor do argumento utiliza o split
const nome = args[0].split("=")[1];

// Thiago
console.log(nome);

// passando idade
// node .\index.js nome=Thiago idade=50

// para acessar o valor do argumento utiliza o split
const idade = args[1].split("=")[1];

// 50
console.log(idade);

console.log(`O ${nome} tem ${idade} anos`);
