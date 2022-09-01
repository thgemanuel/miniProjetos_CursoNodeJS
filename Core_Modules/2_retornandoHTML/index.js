const http = require("http");

const port = 2000;

//funcao para criacao do servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   definindo o tipo de conteudo a ser enviado
  res.setHeader("Contenty-Type", "text/html");
  res.end("<h1>Este é o server com HTML</h1>");
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
