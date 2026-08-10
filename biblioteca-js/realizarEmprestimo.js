// Importar o array de livros do arquivo dadosLivros.js
// const livros = require('./dadosLivros.js').livros;

// Função para realizar o empréstimo de um livro
function realizarEmprestimo(titulo) {
    // Buscar o livro no array pelo título
    // const livroEncontrado = livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
    
    // Verificar se o livro existe E está disponível
    // if (livroEncontrado && livroEncontrado.disponivel) {
        // Alterar a disponibilidade para false
        // livroEncontrado.disponivel = false;
        
        // Exibir mensagem de sucesso
        // console.log("Livro emprestado com sucesso!");
    // } else {
        // Exibir mensagem de erro se o livro não existir ou não estiver disponível
        // console.log("Livro indisponível!");
    // }
}

// Exportar a função para uso em outros módulos
module.exports = { realizarEmprestimo };
