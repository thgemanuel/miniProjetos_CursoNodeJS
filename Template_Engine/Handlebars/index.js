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

app.get("/dashboard", (req, res) => {
  // estrutura de repeticao
  const items = ["Item 1", "Item 2", "Item 3"];
  res.render("dashboard", { items });
});

// pagina para usar o "with" que permite acessar propriedades sem referenciar ao objeto antes
app.get("/post", (req, res) => {
  const post = {
    titulo: "Aprendendo Node.js",
    categoria: "JS",
    body: "Este artigo te ensina o Node.js",
    comentarios: 4,
  };

  res.render("blogpost", { post });
});

// pagina para usar o "partials" que reutilizacao de codigo
app.get("/blog", (req, res) => {
  const posts = [
    {
      titulo: "Aprendendo Partials 1",
      categoria: "Partials 1",
      body: "Este artigo te ensina o Partials 1",
      comentarios: 1,
    },
    {
      titulo: "Aprendendo Partials 2",
      categoria: "Partials 2",
      body: "Este artigo te ensina o Partials 2",
      comentarios: 2,
    },
    {
      titulo: "Aprendendo Partials 3",
      categoria: "Partials 3",
      body: "Este artigo te ensina o Partials 3",
      comentarios: 3,
    },
  ];

  res.render("blog", { posts });
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
