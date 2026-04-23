const alunos = {
    100: "João",
    101: "Maria",
    102: "Pedro"
}

console.log("\nExibindo matrículas do sistema: ");
for(const chave in alunos){
    console.log(`\u2192 Matrícula ${chave} | Nome: ${alunos[chave]}.`);
};
console.log("");