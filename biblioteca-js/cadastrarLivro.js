import { dadosLivros } from './dadosLivros.js'; 
import { Livro } from "./livro.js";
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

export function cadastrarLivro(){
    let titulo = prompt('Digite o titulo do livro: ');
    let autor = prompt('Digite o autor do livro: ');
    let categoria = prompt('Digite a categoria do livro: ');
    let paginas = parseInt(prompt('Digite o N° de páginas do livro: '));
    const livroAdicionado = new Livro(titulo.toUpperCase(), autor, categoria, paginas);
    dadosLivros.push(livroAdicionado);
    console.log('Livro cadastrado com sucesso!');
}
