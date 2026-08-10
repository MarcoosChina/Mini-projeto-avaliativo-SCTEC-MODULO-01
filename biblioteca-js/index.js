import readline  from 'readline';

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

function listarLivros() {
    console.log('Opção 1: Listar Livros');
    console.log('Funcionalidade a ser implementada');
}

function buscarLivro() {
    console.log('Opção 2: Buscar Livro');
    console.log('Funcionalidade a ser implementada');
}

function listarLivrosDisponiveis() {
    console.log('Opção 3: Listar Livros Disponíveis');
    console.log('Funcionalidade a ser implementada');
}

function cadastrarLivro() {
    console.log('Opção 4: Cadastrar Livro');
    console.log('Funcionalidade a ser implementada');
}

function realizarEmprestimo() {
    console.log('Opção 5: Realizar Empréstimo');
    console.log('Funcionalidade a ser implementada');
}

function realizarDevolucao() {
    console.log('Opção 6: Realizar Devolução');
    console.log('Funcionalidade a ser implementada');
}

function exibirEstatisticas() {
    console.log('Opção 7: Exibir Estatísticas');
    console.log('Funcionalidade a ser implementada');
}

function processarEscolha(opcao) {
    switch(opcao) {
        case '1':
            listarLivros();
            break;
        case '2':
            buscarLivro();
            break;
        case '3':
            listarLivrosDisponiveis();
            break;
        case '4':
            cadastrarLivro();
            break;
        case '5':
            realizarEmprestimo();
            break;
        case '6':
            realizarDevolucao();
            break;
        case '7':
            exibirEstatisticas();
            break;
        case '0':
            console.log('Saindo do sistema...');
            rl.close();
            return false;
        default:
            console.log('Opção inválida! Tente novamente.');
    }
    return true;
}

function iniciarMenu() {
    let continuar = true;
    
    function perguntar() {
        if (!continuar) return;
        
        exibirMenu();
        rl.question('Escolha uma opção: ', (resposta) => {
            continuar = processarEscolha(resposta);
            if (continuar) {
                perguntar();
            }
        });
    }
    
    perguntar();
}

iniciarMenu();