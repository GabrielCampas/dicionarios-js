// montando a função e colocando o dicionario produtos dentro dela 
function Produtos() {
    const produtos = {
        produto1: {
            id: 1,
            nome: "Tenis",
            preco: 99.90
        },
        produto2: {
            id: 2,
            nome: "Camiseta",
            preco: 60.00
        },
        produto3: {
            id: 3,
            nome: "Óculos",
            preco: 30.00
        }
    }
    for (const chave in produtos) {
        if (produtos[chave].preco > 50) {
            console.log(`${chave}: ID: ${produtos[chave].id} | Nome: ${produtos[chave].nome} | Preço: ${produtos[chave].preco} reais.`);
        }
    }
};

// chamando a funçao 
// só vai exibir produtos acima de 50 reais
Produtos();