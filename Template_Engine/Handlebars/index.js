const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Basicamente, precisamos invocar este método engine
//   para realizar algumas configurações extras,
//      obrigatório para o funcionamento do pacote
app.engine("handlebars", exphbs.engine());
//instalando handlebars
app.set("view engine", "handlebars");

// renderizando a view "home"
app.get("/", (req, res) => {
  // enviando dados para a view
  const userName = {
    nome: "Thiago",
    sobrenome: "Emanuel",
    idade: "20",
  };

  const userAge = {
    idade: "20",
  };

  // caso nao seja usado layout a opacao { layout: false }
  // res.render("home", { layout: false });
  res.render("home", { user: userName, idade: userAge });
});

app.listen(2000, () => {
  console.log("funcionando");
});
