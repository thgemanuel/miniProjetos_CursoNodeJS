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
    // esse tratamento de erro quando o usuario escrever o nome dele no arquivo 
    //     sera enviado novamente para a home da pagina sem nome, assim o sistema nao para
    fs.writeFile("arquivo.txt", name, function (err, data) {
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
