const fs = require("fs");

// se nao existe a pasta neste diretorio, ela é criada
if (!fs.existsSync("./minhapasta")) {
  console.log("Nao existe!");
  fs.mkdirSync("minhapasta");
}else if (fs.existsSync("./minhapasta")) {
  console.log("Existe!");
}
