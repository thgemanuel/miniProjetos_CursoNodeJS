const express = require("express");

//iniciando o app
const app = express();

// definindo a porta
const port = 2000;

const path = require("path");

const users = require("./users");

// arquivos estaticos (CSS)
app.use(express.static("public"));

// o __dirname é refente ao diretorio atual
const basePath = path.join(__dirname, "templates");

app.use("/users", users);

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

// ler o body que vem da resposta da requisicao
app.use(express.urlencoded({ extended: true }));

// transformando toda requisicao do body é transformado em um json
app.use(express.json());

// criar rota
// requisicao(req) vem do cliente e a resposta(res) é enviada de volta
// esta funcao diz o que é feito quando o usuario acessa o "/"
app.get("/", (req, res) => {
  // retornando o arquivo html para renderizacao
  res.sendFile(`${basePath}/index.html`);
});

// middleware que sera executado se caso tudo
//     q estiver acima dele nao correspoder ao que o usuario esta requisitando
//          pagina 404
app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
});

// funcao para executar algo durante execucao do sistema
app.listen(port, () => {
  console.log(`App na porta ${port}`);
});
