const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Basicamente, precisamos invocar este método engine
//   para realizar algumas configurações extras,
//      obrigatório para o funcionamento do pacote
app.engine("handlebars", exphbs.engine());
//instalando handlebars
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  // estrutura de repeticao
  const items = ["Item 1", "Item 2", "Item 3"];
  res.render("dashboard", {items});
});

// renderizando a view "home"
app.get("/", (req, res) => {
  // enviando dados para a view
  const userName = {
    nome: "Thiago",
    sobrenome: "Emanuel",
  };

  const userAge = {
    idade: "20",
  };

  const acesso = "Concedido";

  const aprovado = true;

  // criando uma autenticacao para ser usada numa condicional
  const auth = true;

  // caso nao seja usado layout a opacao { layout: false }
  // res.render("home", { layout: false });
  res.render("home", {
    user: userName,
    idade: userAge,
    auth,
    acesso,
    aprovado,
  });
});

app.listen(2000, () => {
  console.log("funcionando");
});
