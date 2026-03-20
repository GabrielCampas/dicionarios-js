// funçao pra limpar as palavras null e undefined
function limparPalavras(itens) {
    for (const key in itens) {
        if (itens[key] === null || itens[key] === undefined) {
            delete itens[key];
        }
    }
    return itens;
}

const dicionario = {
    item1: undefined,
    item2: "Budget",
    item3: "Assujeitar",
    item4: "Esteticamente",
    item5: "Hipnográfico",
    item6: null,
    item7: null,
    item8: "Resumo",
    item9: undefined,
    item10: undefined,
};

console.log(`=== Palavras do dicionário ===`);
console.log("Antes: ", dicionario);
// limpando
limparPalavras(dicionario);
console.log("Depois: ", dicionario)