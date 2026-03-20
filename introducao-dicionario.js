console.log("\n===== INTRODUÇÃO A DICIONÁRIOS =====");

const apiResponse = {
    status: "success",
    data: {
        id: 1,
        nome: "Produto A",
        preco: 100
    }
};
console.log(`\n=== 'console.log(apiResponse.data.nome);' ===`);
console.log(`Isso vai retornar: "\x1b[32mProduto A\x1b[0m".`);
console.log("\u2192 " + "\x1b[32m" + apiResponse.data.nome + "\x1b[0m");

// Criando um dicionário com um objeto
const dicionario1 = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
};
console.log("\n=== 'console.log(dicionario.nome);' ===");
console.log(`Isso vai retornar: "\x1b[31mJoão\x1b[0m".`);
console.log("\u2192 " + "\x1b[31m" + dicionario1.nome + "\x1b[0m");

console.log("\n=== 'console.log(dicionario1['idade']);' ===");
console.log(`Isso vai retornar "\x1b[33m25\x1b[0m".`);
console.log("\u2192 " + "\x1b[33m" + dicionario1.idade + "\x1b[0m");

// adicionando chaves e valores
const dicionario = {};

dicionario["cor"] = "azul";
dicionario.tamanho = "grande";

console.log("\n=== 'console.log(dicionario);' ===");
console.log(`Isso vai retornar: "\x1b[34m{ cor: 'azul', tamanho: 'grande' }\x1b[0m".`);
console.log("\u2192 \x1b[34m", dicionario, "\x1b[0m");

// removendo uma chave
console.log("\n=== Removendo uma chave ===");
console.log(`Agora, usando o \x1b[31mdelete\x1b[0m na cor, vai retornar apenas o tamanho`);
// usando delete na cor
delete dicionario["cor"];
console.log("\u2192 \x1b[34m", dicionario, "\x1b[0m");

// iterando um dicionario
const iteracao = {
    fruta: "maçã",
    cor: "vermelho",
    preco: 5
};

console.log("\n=== Usando 'for...in' ===");
for (const chave in iteracao) {
    console.log(`\u2192 ${chave}: ${iteracao[chave]}.`);
};

// usando classes nativas
const classesNativas = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro"
};

// obter todas as chaves
console.log("\n=== Usando classes nativas do JS (Object.keys) ===");
console.log("\u2192 ", Object.keys(classesNativas));

// obter todos os valores
console.log("\n=== Usando classes nativas do JS (Object.values) ===");
console.log("\u2192 ", Object.values(classesNativas));

// obter pares chave-valor
console.log("\n=== Usando classes nativas do JS (Object.entries) ===");
Object.entries(classesNativas).forEach(([chave, valor]) => {
    console.log(`\u2192 ${chave}: ${valor}`);
});

console.log("\n=== Usando classes nativas do JS (Map()) ===");
const mapa = new Map();
// adicionando pares chave-valor
mapa.set("nome", "Ana");
mapa.set("idade", 30);

// obtendo valores
console.log("--- mapa.get ---")
console.log("'console.log(mapa.get('nome'));' \u2190 Pegando a chave nome.");
console.log("\u2192", mapa.get("nome"));

console.log("\n=== Usando classes nativas do JS (Map()) ===");
console.log("--- mapa.has ---");
// verificando se uma chave existe
console.log("'console.log(mapa.has('idade'));' \u2190 Verificando se a chave idade existe.");
console.log("\u2192", mapa.has("idade"));

console.log("\n === Usando classes nativas do JS (Map()) ===");
console.log("--- mapa.delete ---");
// deletando uma chave
mapa.delete("idade");
console.log("'mapa.delete('idade'));' \u2190 Idade foi removida, vai retornar \x1b[31mfalse\x1b[0m.")
console.log("\u2192", mapa.has("idade"));