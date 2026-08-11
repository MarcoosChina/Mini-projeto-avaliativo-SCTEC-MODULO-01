import { dadosLivros } from './dadosLivros.js';

export function listarDisponiveis(){
    dadosLivros.forEach((livro) => {
        if (livro.disponivel === true){
            console.log('Titulo: ' + livro.titulo.toUpperCase());
            console.log('Autor: ' + livro.autor);
            console.log('Categoria: ' + livro.categoria);
            console.log('Páginas: ' + livro.paginas);
            console.log('Disponível: ' + livro.disponivel);
            console.log('-------------------');
        }
    });
}