const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {});
});

// configurando conexao ao MySQL
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodeMySQL",
});

// inserindo dado no banco
app.post("/livros/insertlivros", function (req, res) {
  const titulo = req.body.titulo;
  const qtdpaginas = req.body.qtdpaginas;

  //   criando a query de insercao
  const query = `INSERT INTO livros (titulo, qtdpaginas) VALUES ('${titulo}', ${qtdpaginas})`;

  //   conectando ao banco e insserindo a query
  conn.query(query, function (err) {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
});

// conectando ao mySQL, pois a aplicacao so funcionara quando tiver o banco conectado
// entao é nescessario estabelecer uma conexao a cada iteracao com a aplicacao
conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectado ao mysql");

  app.listen(2000);
});
