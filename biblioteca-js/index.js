// nesse arquivo criar um menu e apresentar no console as seguintes opções para interação com o usuário
//Dica: o menu deverá continuar sendo exibido até que o usuário escolha a opção 0.
//Utilizar uma estrutura de repetição para continuar exibindo o menu até que o usuário escolha a opção 0.
//=====================
//SISTEMA DE BIBLIOTECA
//=====================
//1- LISTAR LIVROS
//2- BUSCAR LIVRO
//3- LISTAR LIVROS DISPONIVEIS
//4- CADASTRAR LIVRO
//5- REALIZAR EMPRÉSTIMO
//6- REALIZAR DEVOLUÇÃO
//7- EXIBIR ESTATISTICAS
//0- SAIR
import { buscarLivro } from './buscarLivro.js';
import PromptSync from 'prompt-sync';
import { listarDisponiveis } from './listarDisponiveis.js';
import { listarLivros } from './listarLivros.js';

const prompt = PromptSync();

const opcao = prompt('Digite uma opcao: ');

if (opcao === '1'){
    listarLivros();
}
if (opcao === '2'){
    const titulo = prompt('Digite o título do livro que você quer buscar: ');
    buscarLivro(titulo);
}
if (opcao === '3'){
    listarDisponiveis();
}
