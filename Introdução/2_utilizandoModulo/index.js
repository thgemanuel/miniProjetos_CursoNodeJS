//importando module FileSystem, 
//    colocando em uma constante pois nao ira alterar seu valor
const fs = require("fs");

// primeiro parametro o caminho do arquivo a ser lido
// o segundo é o encoding do arquivo
// o terceiro é uma funcao anonima que pode receber um erro ou um dado
fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    // se caso tiver erro
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})
