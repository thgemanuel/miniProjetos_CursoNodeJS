const os = require("os");
// metodos para extrair informacoes do sistema operacional
// deixa o software mais dinamico
// dando a possibilidade de checar memoria ram em um servidor para ver se pode travar, por exemplo

// quantos cpus tem no servidor
console.log(os.cpus());

// quanto de memoria livre tem na maquina
console.log(os.freemem());

// qual diretorio principal da maquina
console.log(os.homedir());

// qual sistema operacional esta rodando nessa maquina
console.log(os.type());


// [
//   {
//     model: 'Intel(R) Core(TM)',
//     speed: 2400,
//     times: {
//       user: 424254,
//       nice: 1,
//       sys: 524254245,
//       idle: 542572,
//       irq: 41546456
//     }
//   },
// ]
// 2903396352
// C:\Users\Thiago
// Windows_NT