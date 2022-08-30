const x = "10";

// ja o try nao encerra o programa, so da uma resposta amigavel para o usuario
try {
    // ira dar erro pois o x é constante 
    x = 2
} catch(err){
    console.log(`Erro: ${err}`)
}
