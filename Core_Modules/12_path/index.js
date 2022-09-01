const path = require("path");

const customPath = "/relatorios/thiago/relatorio.pdf";

console.log(path.dirname(customPath)); // /relatorios/thiago
console.log(path.basename(customPath)); // relatorio.pdf
console.log(path.extname(customPath)); // .pdf
