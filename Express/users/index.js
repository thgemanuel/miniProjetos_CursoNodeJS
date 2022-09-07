const express = require("express");
const router = express.Router();
const path = require("path");

// o __dirname é refente ao diretorio atual
const basePath = path.join(__dirname, "../templates");

// como a aplicacao é um monolito(back e front juntos), temos uma rota get para apresentar o formulario
router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

// acessando a requisicao
router.post("/save", (req, res) => {
  console.log(req.body);
  //   { nome: 'Thiago', idade: '30' }

  const nome = req.body.nome;
  const idade = req.body.idade;

  console.log(`${nome} tem ${idade} anos!`);
  res.sendFile(`${basePath}/userform.html`);
});

// importante resaltar que toda nova rota criada deve estar acima da rota "/"
//     pois toda rota inicia com "/", assim tudo acessado iriam cair nela
router.get("/:id", (req, res) => {
  //   acessando parametro pela url
  const id = req.params.id;

  //   leitura da tabela users e resgatar um usuario do banco
  console.log(`Usuario ${id} resgatado!`);
  //localhost:2000/users/3
  //   Usuario 3 resgatado!

  http: res.sendFile(`${basePath}/users.html`);
});

// exportando o modulo para ter acesso nos outros arquivos
module.exports = router