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

// resgatando todos os dados
app.get("/livros", function (req, res) {
  const query = `SELECT * FROM livros`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const livros = data;

    // console.log(data);

    res.render("livros", { livros });
  });
});

// selecionando dado especifico com o where
app.get("/livro/:id", function (req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM livros WHERE id = ${id}`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    // o where nao diz q vira so um registro, ele pode retornar uma lista
    //     como ele vai retornar so um, entao se acessa pela posicao [0]
    const livro = data[0];

    console.log(data[0]);

    res.render("livro", { livro });
  });
});

// editando dado
app.get("/livro/editar/:id", function (req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM livros WHERE id = ${id}`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const livro = data[0];

    // console.log(data[0]);

    res.render("editarlivro", { livro });
  });
});

// update livro
app.post("/livro/updatelivro", function (req, res) {
  const id = req.body.id;
  const titulo = req.body.titulo;
  const qtdpaginas = req.body.qtdpaginas;

  const query = `UPDATE livros SET titulo = '${titulo}', qtdpaginas = ${qtdpaginas} WHERE id = ${id}`;

  conn.query(query, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect(`/livros`);
  });
});

// deletar dado
app.post("/livro/delete/:id", function (req, res) {
  const id = req.params.id;

  const query = `DELETE FROM livros WHERE id = ${id}`;

  conn.query(query, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect(`/livros`);
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
