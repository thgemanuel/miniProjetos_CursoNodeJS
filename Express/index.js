const express = require("express");

//iniciando o app
const app = express();

// definindo a porta
const port = 2000;

const path = require("path");
const { setUncaughtExceptionCaptureCallback } = require("process");

// o __dirname é refente ao diretorio atual
const basePath = path.join(__dirname, "templates");

// criando middleware para autenticar usuario
const checkAuth = function (req, res, next) {
  req.authStatus = true;
  //   dessa forma é possivel definir limitacoes, direcionar para uma pasta...
  if (req.authStatus) {
    console.log("Logado!");
    // o next é usado para que a aplicacao va para a proxima etapa, no caso renderizar o html
    next();
  } else {
    console.log("Deslogado!");
  }
};

// adicionando middleware na execução
app.use(checkAuth);

// importante resaltar que toda nova rota criada deve estar acima da rota "/"
//     pois toda rota inicia com "/", assim tudo acessado iriam cair nela
app.get("/users/:id", (req, res) => {
  //   acessando parametro pela url
  const id = req.params.id;

  //   leitura da tabela users e resgatar um usuario do banco
  console.log(`Usuario ${id} resgatado!`);
  //localhost:2000/users/3
  //   Usuario 3 resgatado!

  http: res.sendFile(`${basePath}/users.html`);
});

// criar rota
// requisicao(req) vem do cliente e a resposta(res) é enviada de volta
// esta funcao diz o que é feito quando o usuario acessa o "/"
app.get("/", (req, res) => {
  // retornando o arquivo html para renderizacao
  res.sendFile(`${basePath}/index.html`);
});

// funcao para executar algo durante execucao do sistema
app.listen(port, () => {
  console.log(`App na porta ${port}`);
});
