const path = require("path");

// path absoluto
console.log(path.resolve("teste.txt"));
// C:\Users\Thiago\Documents\miniProjetos_CursoNodeJS\Core_Modules\13_pathAbsoluto\teste.txt

// montar uma path
const midFolder = "anotacoes";
const filename = "thiago.txt";

const finalPath = path.join("/", "arquivos", midFolder, filename);

console.log(finalPath);
// \arquivos\anotacoes\thiago.txt
