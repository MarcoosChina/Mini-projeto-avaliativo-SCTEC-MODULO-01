//RF-03 - essa função deve buscar um livro pelo titulo e informar no console.

import { dadosLivros } from './dadosLivros.js';

export function buscarLivro(titulo){
    //o find() percorre o array dadosLivros e retorna o primeiro elemento que satisfaz a condição 
    //na função de callback, a condição é que o título do livro seja igual ao
    //título fornecido como argumento da função buscarLivro. Se um livro com o título correspondente 
    //for encontrado, ele será armazenado na variável livroEncontrado. Caso contrário, livroEncontrado será undefined.
    const livroEncontrado = dadosLivros.find((livro) => livro.titulo.toUpperCase() === titulo.toUpperCase());
    if (livroEncontrado){
        console.log('Titulo: '+ livroEncontrado.titulo.toUpperCase());
        console.log('Autor: '+ livroEncontrado.autor);
        console.log('Categoria: '+ livroEncontrado.categoria);
        console.log('Paginas: '+ livroEncontrado.paginas);
        console.log('Disponivel: '+livroEncontrado.disponivel);
    }else{
        console.log('Livro não encontrado');
    }   

}
