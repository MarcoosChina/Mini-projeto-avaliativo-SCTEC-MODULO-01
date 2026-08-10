// Importar o array de livros do arquivo dadosLivros.js
// const livros = require('./dadosLivros.js').livros;

// Função para exibir estatísticas do acervo
function exibirEstatisticas() {
    // Calcular o total de livros cadastrados
    //const totalLivros = livros.length;
    
    // Calcular a quantidade de livros disponíveis
    // const livrosDisponiveis = livros.filter(livro => livro.disponivel).length;
    
    // Calcular a quantidade de livros em empréstimo
    // const livrosEmprestados = livros.filter(livro => !livro.disponivel).length;
    
    // Calcular a quantidade de livros que deram entrada no catálogo (igual ao total)
    // const livrosCatalogo = totalLivros;
    
    // Calcular porcentagens (valor inteiro) em relação ao total de livros
    // const porcentagemDisponiveis = Math.round((livrosDisponiveis / totalLivros) * 100);
    // const porcentagemEmprestados = Math.round((livrosEmprestados / totalLivros) * 100);
    // const porcentagemCatalogo = Math.round((livrosCatalogo / totalLivros) * 100);
    
    // Calcular total de páginas de todos os livros
    // const totalPaginas = livros.reduce((soma, livro) => soma + livro.paginas, 0);
    
    // Calcular média de páginas por livro
    // const mediaPaginas = Math.round(totalPaginas / totalLivros);
    
    // Exibir estatísticas no console
    // console.log("====================================");
    // console.log("ESTATÍSTICAS DO ACERVO");
    // console.log("====================================");
    // console.log(`Total de livros cadastrados: ${totalLivros} (${porcentagemCatalogo}%)`);
    // console.log(`Livros que deram entrada no catálogo: ${livrosCatalogo} (${porcentagemCatalogo}%)`);
    // console.log(`Livros disponíveis: ${livrosDisponiveis} (${porcentagemDisponiveis}%)`);
    // console.log(`Livros em empréstimo: ${livrosEmprestados} (${porcentagemEmprestados}%)`);
    // console.log(`Total de páginas: ${totalPaginas}`);
    // console.log(`Média de páginas por livro: ${mediaPaginas}`);
    // console.log("====================================");
}

// Exportar a função para uso em outros módulos
module.exports = { exibirEstatisticas };
