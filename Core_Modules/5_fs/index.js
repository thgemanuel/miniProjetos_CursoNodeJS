const fs = require("fs");
const http = require("http");

const port = 2000;

// a grande diferenca usando fs é pelo fato de nao mandar somente um texto (<h1>)
// foi enviado junto um head que pode colocar metatag, title, pode coocar arquivo de CSS
// tags html, dentre outros...
const server = http.createServer((req, res) => {
  fs.readFile("mensagem.html", function (err, data) {
    res.writeHead(200, { "Contenty-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
