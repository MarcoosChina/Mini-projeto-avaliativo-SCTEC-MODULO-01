import readline from 'readline';
import { listarLivros } from './listarLivros.js';
import { buscarLivro } from './buscarLivro.js';
import { listarDisponiveis } from './listarDisponiveis.js';
import { cadastrarLivro } from './cadastrarLivro.js';
import { realizarEmprestimo } from './realizarEmprestimo.js';
import { realizarDevolucao } from './realizarDevolucao.js';
import { exibirEstatisticas } from './exibirEstatisticas.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log('\n=====================');
    console.log('SISTEMA DE BIBLIOTECA');
    console.log('=====================');
    console.log('1- LISTAR LIVROS');
    console.log('2- BUSCAR LIVRO');
    console.log('3- LISTAR LIVROS DISPONIVEIS');
    console.log('4- CADASTRAR LIVRO');
    console.log('5- REALIZAR EMPRÉSTIMO');
    console.log('6- REALIZAR DEVOLUÇÃO');
    console.log('7- EXIBIR ESTATISTICAS');
    console.log('0- SAIR');
    console.log('=====================\n');
}

let continuar = true;

function perguntar() {
    if (!continuar) return;
    
    exibirMenu();
    rl.question('Escolha uma opção: ', (resposta) => {
        processarEscolha(resposta);
    });
}

function processarEscolha(opcao) {
    switch(opcao) {
        case '1':
            listarLivros();
            perguntar();
            break;
        case '2':
            rl.question('Digite o título do livro: ', (titulo) => {
                buscarLivro(titulo);
                perguntar();
            });
            break;
        case '3':
            listarDisponiveis();
            perguntar();
            break;
        case '4':
            cadastrarLivro();
            setTimeout(perguntar, 100);
            break;
        case '5':
            rl.question('Digite o título do livro: ', (titulo) => {
                realizarEmprestimo(titulo);
                perguntar();
            });
            break;
        case '6':
            rl.question('Digite o título do livro: ', (titulo) => {
                realizarDevolucao(titulo);
                perguntar();
            });
            break;
        case '7':
            exibirEstatisticas();
            perguntar();
            break;
        case '0':
            console.log('Saindo do sistema...');
            continuar = false;
            rl.close();
            break;
        default:
            console.log('Opção inválida! Tente novamente.');
            perguntar();
    }
}

perguntar();