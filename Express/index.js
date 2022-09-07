const express = require("express");

//iniciando o app
const app = express();

// definindo a porta
const port = 2000;

const path = require("path");

// o __dirname é refente ao diretorio atual
const basePath = path.join(__dirname, "templates");

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
