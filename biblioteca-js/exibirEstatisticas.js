import { dadosLivros } from './dadosLivros.js';

export function exibirEstatisticas() {
    const totalLivros = dadosLivros.length;
    const livrosDisponiveis = dadosLivros.filter(livro => livro.disponivel).length;
    const livrosEmprestados = dadosLivros.filter(livro => !livro.disponivel).length;
    const totalPaginas = dadosLivros.reduce((soma, livro) => soma + livro.paginas, 0);
    const mediaPaginas = Math.round(totalPaginas / totalLivros);
    
    console.log("====================================");
    console.log("ESTATÍSTICAS DO ACERVO");
    console.log("====================================");
    console.log("Total de livros cadastrados:", totalLivros);
    console.log("Livros disponíveis:", livrosDisponiveis);
    console.log("Livros em empréstimo:", livrosEmprestados);
    console.log("Total de páginas:", totalPaginas);
    console.log("Média de páginas por livro:", mediaPaginas);
    console.log("====================================");
}
