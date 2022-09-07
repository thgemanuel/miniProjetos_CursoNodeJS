const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// configurando o diretorio do partials no handlebars
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

// Basicamente, precisamos invocar este método engine
//   para realizar algumas configurações extras,
//      obrigatório para o funcionamento do pacote
//app.engine("handlebars", exphbs.engine());

// com o Handlebars no comando de engine,
//    a engine configurada o diretorio é passada
app.engine("handlebars", hbs.engine);

//instalando handlebars
app.set("view engine", "handlebars");

// adicionando arquivos staticos(CSS) ao projeto
// com o reaproveitamento de layout, aplicando o css nele,
//    todo o projeto tbm fica com o css
app.use(express.static('public'))

// renderizando a view "home"
app.get("/", (req, res) => {
  const produtos = [
    {
      titulo: "Produto 1",
      valor: "10",
    },
    {
      titulo: "Produto 2",
      valor: "20",
    },
    {
      titulo: "Produto 3",
      valor: "30",
    },
  ];

  res.render("home", {
    produtos,
  });
});

app.listen(2000, () => {
  console.log("funcionando");
});
