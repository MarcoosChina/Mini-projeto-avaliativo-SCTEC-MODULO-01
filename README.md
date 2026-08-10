# Mini-projeto-avaliativo-SCTEC-MODULO-01

Mini projeto avaliativo da trilha de desenvolvimento de software da carreira tech. Esse mini-projeto desenvolvido todo apenas com **JavaScript** trabalha diretamente os conteúdos já estudados: lógica de programação, tipos de dados, condicionais, operadores, escopo, laços de repetição, funções, arrow functions, arrays, métodos de array, objetos, classes, uso do this, GitHub.

## Tecnologias utilizadas

Projeto desenvolvido com **JavaScript** com execução no terminal utilizando **Node**.

## Bibliotecas utilizadas

prompt-sync --> para receber os valores do usuário no terminal.

---

## Objetivo

Modernizar o sistema de gerenciamento de acervo de uma biblioteca, onde atualmente todo o sistema de gerenciamento está sendo feito manualmente. Além disso, o maior objetivo é colocar na prática todo o conhecimento que adquirimos de JavaScript que estudamos ao longo da semana 6 da trilha de desenvolvimento de sistemas.

---

## Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/<seu-usuario>/Mini-projeto-avaliativo-SCTEC-MODULO-01.git
```

**2. Entre na pasta do projeto:**

```bash
cd Mini-projeto-avaliativo-SCTEC-MODULO-01/biblioteca-js
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Execute o sistema:**

```bash
node index.js
```

O menu do sistema será exibido no terminal. Basta digitar o número da opção desejada e seguir as instruções.

---

## Estrutura do projeto

```.
Mini-projeto-avaliativo-SCTEC-MODULO-01/
├── README.md
├── BACKLOG.md
├── .gitignore
└── biblioteca-js/
    ├── index.js              # Menu do sistema (RF01)
    ├── listarLivros.js       # Lista todos os livros (RF02)
    ├── buscarLivro.js        # Busca um livro pelo título (RF03)
    ├── listarDisponiveis.js  # Lista os livros disponíveis (RF04)
    ├── cadastrarLivro.js     # Cadastra um novo livro (RF05)
    ├── realizarEmprestimo.js # Realiza empréstimo de um livro (RF06)
    ├── realizarDevolucao.js  # Realiza devolução de um livro (RF07)
    ├── exibirEstatisticas.js # Exibe estatísticas do acervo (RF08)
    ├── livro.js               # Classe Livro (RF09)
    ├── dadosLivros.js         # Dados iniciais dos livros cadastrados
    ├── package.json
    └── package-lock.json
```
