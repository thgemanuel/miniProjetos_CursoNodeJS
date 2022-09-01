const { NOMEM } = require("dns");
const fs = require("fs");
const http = require("http");
const url = require("url");

const port = 2000;

const server = http.createServer((req, res) => {
  const queryUrl = url.parse(req.url, true);
  // com o metodo substring(1), consigo pegar do url do segundo caracter para frente
  //   por exemplo "/arquivo.html", com essa funcao pega o "arquivo.html"
  const filename = queryUrl.pathname.substring(1);

  // saber se o arquivo possui algum html em seu nome, supondo que ele é desse tipo
  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { "Contenty-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      // se for requisitado uma pagina que nao existe a pagina de erro 404 é apresentada
      fs.readFile("404.html", function (err, data) {
        res.writeHead(404, { "Contenty-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
