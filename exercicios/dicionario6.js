const minhaString = "ParaLeLepipeDo";
const contarLetras = new Map();
contarLetras.set("string", "ParaLeLepipeDo");
console.log("--- Contando a frequência de letras em uma string ---");
console.log(`\nString: ${minhaString}.`);
for (const letras of minhaString) {
    // se a letra já existe soma 1 ao valor atual
    if (contarLetras.has(letras)) {
        contarLetras.set(letras, contarLetras.get(letras) + 1);
        // se não, adiciona começando com 1
    } else {
        contarLetras.set(letras, 1);
    }
}

// resultado
console.log("\nResultado:");
console.log(contarLetras);