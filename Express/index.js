const express = require("express");

//iniciando o app
const app = express();

// definindo a porta
const port = 3000;

// criar rota
// requisicao(req) vem do cliente e a resposta(res) é enviada de volta
// esta funcao diz o que é feito quando o usuario acessa o "/"
app.get("/", (req, res) => {
  res.send("Olá");
});

// funcao para executar algo durante execucao do sistema
app.listen(port, () => {
  console.log(`App na porta ${port}`);
});
