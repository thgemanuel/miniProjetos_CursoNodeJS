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
  res.render("home", { layout: false });
});

app.listen(2000, ()=>{
    console.log("funcionando");
})
