const fs = require("fs");

fs.unlink("arquivo.txt", function (err) {
  // caso o arquivo nao exista entra nesse if
  if (err) {
    console.log(err);
    return;
  }

  console.log("Arquivo removido!");
});
