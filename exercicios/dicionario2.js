function contarCaractere(string){
    const dicionario = {};
    for (const caractere of string){
        if (caractere === " "){
            continue;
        }
        if (dicionario[caractere]){
            dicionario[caractere] += 1;
        } else {
            dicionario[caractere]=1;
        }
    }
    return dicionario;
}
console.log(contarCaractere("testando"));