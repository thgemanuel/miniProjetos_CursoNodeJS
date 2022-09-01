const http = require("http");

const port = 2000;

//funcao para criacao do servidor
const server = http.createServer((req, res) => {
  // quando o usuario acessar, sera chamado o modulo url, e sera parseado a url que vem na requisicao
  //     e o parametro true é para que no exemplo funcione corretamente
  const urlInfo = require("url").parse(req.url, true);
  //   forma de busca pelo nome do usuario
  const name = urlInfo.query.name;

  res.statusCode = 200;
  //   definindo o tipo de conteudo a ser enviado
  res.setHeader("Contenty-Type", "text/html");

  // se ja existir o nome do usuario na requisao é apresentado um formulario para ser preenchido
  //   esse if e else funciona como se fosse um roteamento
  if (!name) {
    res.end(
      '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar" /></form>'
    );
  } else {
    res.end(`<h1>Seja bem vindo ${name}!</h1>`);
  }
});

//funcao para determinar a porta
server.listen(port, () => {
  console.log(`Sevidor rodando na porta: ${port}`);
});
