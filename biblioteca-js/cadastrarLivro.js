import { dadosLivros } from './dadosLivros.js'; 
import { Livro } from "./livro.js";
import readline from 'readline';

let rl;

export function cadastrarLivro(){
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Digite o titulo do livro: ', (titulo) => {
        rl.question('Digite o autor do livro: ', (autor) => {
            rl.question('Digite a categoria do livro: ', (categoria) => {
                rl.question('Digite o N° de páginas do livro: ', (paginas) => {
                    const livroAdicionado = new Livro(titulo.toUpperCase(), autor, categoria, parseInt(paginas));
                    dadosLivros.push(livroAdicionado);
                    console.log('Livro cadastrado com sucesso!');
                    rl.close();
                });
            });
        });
    });
}
