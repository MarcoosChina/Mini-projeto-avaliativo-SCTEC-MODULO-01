import { dadosLivros } from './dadosLivros.js';

export function realizarEmprestimo(titulo) {
    const livroEncontrado = dadosLivros.find(livro => livro.titulo.toUpperCase().includes(titulo.toUpperCase()));
    
    if (livroEncontrado && livroEncontrado.disponivel) {
        livroEncontrado.disponivel = false;
        console.log("Livro emprestado com sucesso!");
    } else {
        console.log("Livro indisponível!");
    }
}
