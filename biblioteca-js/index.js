import { buscarLivro } from './buscarLivro.js';
import { listarDisponiveis } from './listarDisponiveis.js';
import { listarLivros } from './listarLivros.js';
import { cadastrarLivro } from './cadastrarLivro.js';
import { realizarEmprestimo } from './realizarEmprestimo.js';
import { realizarDevolucao } from './realizarDevolucao.js';
import { exibirEstatisticas } from './exibirEstatisticas.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

let opcao = '';
do{
    console.log('================================================');
    console.log('SISTEMA DE BIBLIOTECA autores: Marcos e Gregory');
    console.log('================================================');
    console.log('1- LISTAR LIVROS');
    console.log('2- BUSCAR LIVRO');
    console.log('3- LISTAR LIVROS DISPONIVEIS');
    console.log('4- CADASTRAR LIVRO');
    console.log('5- REALIZAR EMPRÉSTIMO');
    console.log('6- REALIZAR DEVOLUÇÃO');
    console.log('7- EXIBIR ESTATISTICAS');
    console.log('0- SAIR');
    console.log('================================================');
    opcao = prompt('Digite uma opcao: ');

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
    if (opcao === '4'){
        cadastrarLivro();
    }
    if (opcao === '5'){
        const titulo = prompt('Digite o título do livro: ');
        realizarEmprestimo(titulo);
    }
    if (opcao === '6'){
        const titulo = prompt('Digite o título do livro: ');
        realizarDevolucao(titulo);
    }
    if (opcao === '7'){
        exibirEstatisticas();
    }
}while (opcao != '0');
console.log('Saindo do sistema...');