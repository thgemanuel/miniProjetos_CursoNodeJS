const http = require("http");

const port = 2000;

//funcao para criacao do servidor
const server = http.createServer((req, res) => {
  res.write("Ola HTTP!");
  res.end;
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
