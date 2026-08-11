import { dadosLivros } from './dadosLivros.js';

export function listarLivros() {
    dadosLivros.forEach((livro) => {
        console.log('Titulo: ' + livro.titulo.toUpperCase());
        console.log('Autor: ' + livro.autor);
        console.log('Categoria: ' + livro.categoria);
        console.log('Páginas: ' + livro.paginas);
        console.log('Disponível: ' + livro.disponivel);
        console.log('-------------------');
    });
}
//test ->console.log(listarLivros());