const fs = require("fs");

const arquivoAntigo = "arquivo.txt";
const arquivoNovo = "novoarquivo.txt";

fs.rename(arquivoAntigo, arquivoNovo, function (err) {
  // caso o arquivo nao exista entra nesse if
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Arquivo ${arquivoAntigo} renomeado para ${arquivoNovo}!`);
});
