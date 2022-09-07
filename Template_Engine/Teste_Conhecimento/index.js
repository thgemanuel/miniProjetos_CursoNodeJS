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

const produtos = [
  {
    id: "1",
    titulo: "Produto 1",
    valor: "10",
  },
  {
    id: "2",
    titulo: "Produto 2",
    valor: "20",
  },
  {
    id: "3",
    titulo: "Produto 3",
    valor: "30",
  },
  {
    id: "4",
    titulo: "Produto 4",
    valor: "40",
  },
];

app.get("/produto/:id", function (req, res) {
  const produto = produtos[req.params.id];

  res.render("produto", { produto });
});

// renderizando a view "home"
app.get("/", (req, res) => {
  res.render("home", {
    produtos,
  });
});



app.listen(2000, () => {
  console.log("funcionando");
});
