const fs = require("fs");
const http = require("http");

const port = 2000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Contenty-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    // usa o \n e \r para que tanto no windows como no linux funcione a quebra de linha
    const nomeComNovaLinha = name + "\n\r";

    // com a funcao appendFile no lugar da fs.writeFile, o arquivo nao substiui, apenas atualiza o que
    //   esta escrito
    fs.appendFile("arquivo.txt", nomeComNovaLinha, function (err, data) {
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
