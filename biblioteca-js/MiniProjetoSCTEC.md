# Front-End Angular T1 - M1S6
## Mini-Projeto Avaliativo - Módulo 01 - Semana 06

Este documento descreve o Mini-Projeto Avaliativo da Turma 01 de Programação Front-End Angular.

---

### SUMÁRIO
1. CONTEXTUALIZAÇÃO (pág. 2)
2. DESAFIO (pág. 2)
3. RESULTADOS ESPERADOS (ENTREGA) (pág. 2)
4. REQUISITOS DAS TAREFAS (pág. 4)
   4.1. Organização do projeto (pág. 4)
   4.2. Requisitos funcionais (pág. 5)
        RF01 – Menu do sistema (pág. 5)
        RF02 – Listar livros (pág. 5)
        RF03 – Buscar livro (pág. 5)
        RF04 – Listar livros disponíveis (pág. 6)
        RF05 – Cadastrar livro (pág. 6)
        RF06 – Realizar empréstimo (pág. 6)
        RF07 – Realizar devolução (pág. 6)
        RF08 – Exibir estatísticas (pág. 7)
        RF09 – Criar uma classe (pág. 7)
        RF10 – Utilizar módulo (pág. 7)
   4.3. REQUISITOS TÉCNICOS (pág. 8)
   4.4. VERSIONAMENTO COM GITHUB (pág. 9)
   4.6. GRAVAÇÃO DE VÍDEO (pág. 9)
5. CRITÉRIOS DE AVALIAÇÃO (pág. 10)
6. CHECKLIST FINAL DE ENTREGA (pág. 13)
7. MODELO DE README.MD (SUGESTÃO) (pág. 13)
8. ANEXOS (pág. 14)
   8.1. DADOS INICIAIS (pág. 14)

---

## 1. CONTEXTUALIZAÇÃO

O mercado de desenvolvimento front-end exige que você saiba demonstrar raciocínio lógico, organização, capacidade de resolver problemas, domínio inicial de JavaScript e boa comunicação técnica. Mesmo antes de criar interfaces com HTML, CSS, ou Angular, já é possível construir um projeto útil para seu portfólio usando apenas JavaScript.

Esse mini-projeto trabalha diretamente os conteúdos já estudados: lógica de programação; tipos de dados; condicionais; operadores; escopo; laços de repetição; funções; arrow functions; arrays; métodos de array; objetos; classes; uso do this; GitHub;.

---

## 2. DESAFIO

Uma biblioteca deseja modernizar seu sistema de gerenciamento de acervo. Atualmente, as informações dos livros são armazenadas manualmente, dificultando o controle dos empréstimos, devoluções e consultas.

Você foi contratado para desenvolver uma aplicação em JavaScript capaz de gerenciar os livros e usuários da biblioteca.

O sistema deverá permitir:
• Cadastrar e consultar livros.
• Controlar a disponibilidade dos livros.
• Realizar empréstimos e devoluções.
• Gerar estatísticas sobre o acervo.
• Utilizar conceitos de Módulos e POO para organizar o código.

### Maneira de execução
O projeto deverá ser desenvolvido utilizando JavaScript, sendo executado via terminal com Node.js.

---

## 3. RESULTADOS ESPERADOS (ENTREGA)

Ao final do mini-projeto, o estudante ou squad (grupo de até 03 pessoas) deverá entregar:
• Um repositório público no GitHub contendo os arquivos JavaScript do projeto.
• Arquivo README.md contendo:
  • Nome do projeto
  • Descrição
  • Objetivo
  • Como executar
  • Estrutura do projeto
• Um vídeo de até 5 minutos demonstrando o funcionamento.

### Entrega no AVA
• A entrega **deverá ser submetida na tarefa do AVA**: "Módulo 01 - Mini-Projeto Avaliativo"
• **Prazo**: 10/08/2026 até às 22h
• **Peso do mini-projeto na nota**: Avaliação M1.1 – 25% da nota do módulo

### Links obrigatórios
O estudante deverá enviar no AVA:
• link do repositório público do GitHub (acessível para visualização via link);
• link do vídeo demonstrando o funcionamento (acessível para visualização via link)

---

## 4. REQUISITOS DAS TAREFAS

### 4.1. Organização do projeto

SUGESTÃO de estrutura mínima do projeto:

```
biblioteca-js/
│
├── index.js
│
├── listarLivros.js
├── buscarLivro.js
├── listarDisponiveis.js
├── cadastrarLivro.js
├── realizarEmprestimo.js
├── realizarDevolucao.js
├── exibirEstatisticas.js
│
├── dadosLivros.js
│
├── Livro.js
│
├── README.md
└── package.json
```

Não é necessário criar várias pastas. O foco é demonstrar domínio dos conceitos de JavaScript estudados até a Semana 06.

---

### 4.2. Requisitos funcionais

#### RF01 – Menu do sistema
No arquivo `index.js`, crie um menu e apresente no console as seguintes opções para interação com o usuário:
*Dica: Utilize a biblioteca prompt-sync para receber os valores*

```
===================================
SISTEMA DE BIBLIOTECA
===================================

1 - Listar livros
2 - Buscar livro
3 - Listar livros disponíveis
4 - Cadastrar livro
5 - Realizar empréstimo
6 - Realizar devolução
7 - Exibir estatísticas
0 - Sair
```

Receba do usuário um número e para cada valor inserido, chame a operação correspondente.

O menu deverá continuar sendo exibido até que o usuário escolha a opção 0.
*Dica: Utilize uma estrutura de repetição para receber os valores até que o valor zero (0) seja inserido*

#### RF02 – Listar livros
No arquivo `listarLivros.js`, crie uma função chamada **`listarLivros()`**. Esta função deverá ser chamada quando o usuário digitar a opção '**1**' no menu inicial.
Ela deverá percorrer o array de livros e exibir no console os valores:
• Título (em letras maiúsculas)
• Autor
• Categoria
• Número de páginas
• Disponibilidade

#### RF03 – Buscar livro
No arquivo `buscarLivro.js`, crie uma função chamada **`buscarLivro(titulo)`**. Esta função deverá ser chamada quando o usuário digitar a opção '**2**' no menu inicial.
Ela deverá procurar um livro pelo título e informar no console:
• Título (em letras maiúsculas)
• Autor
• Categoria
• Número de páginas
• Disponibilidade

#### RF04 – Listar livros disponíveis
No arquivo `listarDisponiveis.js`, crie uma função chamada **`listarDisponiveis()`**. Esta função deverá ser chamada quando o usuário digitar a opção '**3**' no menu inicial.
Ela deverá filtrar os livros cujo atributo **disponivel** seja **true** e exibir no console:
• Título (em letras maiúsculas)
• Autor
• Categoria
• Número de páginas
• Disponibilidade

#### RF05 – Cadastrar livro
No arquivo `cadastrarLivro.js`, crie uma função chamada **`cadastrarLivro()`**. Esta função deverá ser chamada quando o usuário digitar a opção '**4**' no menu inicial.
Solicite ao usuário os dados:
• Título (em letras maiúsculas)
• Autor
• Categoria
• Número de páginas

Após receber esses dados, crie um objeto correspondente a esse livro. Inclua a propriedade **disponivel** como **true**, e adicione o objeto ao *array* de livros.

#### RF06 – Realizar empréstimo
No arquivo `realizarEmprestimo.js`, crie uma função chamada **`realizarEmprestimo(titulo)`**. Esta função deverá ser chamada quando o usuário digitar a opção '**5**' no menu inicial.

Esta função irá receber um título de um livro.

Caso o livro exista E esteja disponível, o sistema irá alterar a **disponibilidade** para **false** e retornar uma mensagem no console: "Livro emprestado com sucesso!".
Caso contrário, o sistema exibirá a mensagem "Livro indisponível!".

#### RF07 – Realizar devolução
No arquivo `realizarDevolucao.js`, crie uma função chamada **`realizarDevolucao(titulo)`**. Esta função deverá ser chamada quando o usuário digitar a opção '**6**' no menu inicial.

Esta função irá receber um título de um livro.

Caso o livro exista, o sistema irá alterar a **disponibilidade** para **true** e retornar uma mensagem no console: "Livro devolvido com sucesso!".
Caso contrário, o sistema exibirá a mensagem "Livro não encontrado!".

#### RF08 – Exibir estatísticas
No arquivo `exibirEstatisticas.js`, crie uma função chamada **`exibirEstatisticas()`**. Esta função deverá ser chamada quando o usuário digitar a opção '**7**' no menu inicial.
Essa função irá percorrer o *array* de livros e gerar as seguintes estatísticas no console:
• Total de livros cadastrados.
• Quantidade de livros disponíveis.
• Quantidade de livros indisponíveis.
• Total de páginas considerando todos os livros.
• Média de páginas por livro

#### RF09 – Criar uma classe
No arquivo `Livro.js`, crie uma classe **Livro**. Ela deverá conter as propriedades pertencentes ao objeto **livro** trabalhado nesse projeto. Ela também deverá possuir um **constructor**, que deverá ser utilizado para inicializar as suas propriedades.

#### RF10 – Utilizar módulo
Todas as funções, a classe Livro e a variável dadosLivros, que contém todos os livros cadastrados (disponível no Anexo 8.1) deverão ser módulos. Ou seja, em sua definição deverá ser utilizado o **export** e para sua utilização deverá ser utilizado **import**.
Inclua o arquivo package.json em seu projeto com a configuração de módulos para o correto funcionamento de seu projeto.

---

### 4.3. REQUISITOS TÉCNICOS

| Conteúdo | Obrigatório? | Como demonstrar |
| :--- | :--- | :--- |
| VS Code | Sim | Usar como editor |
| Extensões necessárias | Opcional | Citar no README as extensão usadas ou recomendadas para a execução do projeto |
| Git | Sim | Commits no GitHub |
| GitHub | Sim | Repositório e Pull Requests |
| GitFlow simplificado | Sim | Main e branches separadas para desenvolvimento |
| JavaScript | Sim | Toda a aplicação |
| Tipos de dados | Sim | Strings, números, booleanos, arrays, objetos |
| Estruturas Condicionais (if, ternário, switch-case) | Sim | Verificação de opções no Menu; Realizar Empréstimo e Realizar Devolução |
| Operadores lógicos e matemáticos | Sim | Exibir estatísticas |
| Variáveis var, let, const | Sim | Priorizar const e let; |
| Estruturas de Repetição (for, while, do-while) | Sim | Controle de opções do menu inicial |
| Funções, Arrow functions | Sim | Funções chamadas pelo menu |
| Arrays | Sim | Lista de livros e suas manipulações |
| Objetos simples | Sim | Objeto instanciado da classe Livro |
| Chaves e valores | Sim | Manipulação de objetos |
| Classes | Sim | Classe Livro |
| Módulos | Sim | Exportação e importações de funções, classes e variáveis |

---

### 4.4. VERSIONAMENTO COM GITHUB
O projeto deverá ter um repositório público no GitHub. **O trabalho deve acontecer em branches, e não direto na main**: crie ao menos uma branch por frente de trabalho, com nome curto e descritivo, e integre-as à main ao final. A divisão das frentes fica a seu critério.

**Commits mínimos:**
Mini-Projeto:
• mínimo de 5 commits

As mensagens de commit devem ser descritivas e escritas no imperativo, deixando claro o que cada passo entregou.
O GitHub Flow recomenda criar branches com nomes curtos e descritivos. Trabalhar sem afetar a branch principal e fazer commits com mensagens descritivas.

---

### 4.6. GRAVAÇÃO DE VÍDEO
Além do desenvolvimento das tarefas você deverá gravar um vídeo (ou seu grupo de até 03 alunos, um vídeo por grupo), com tempo **máximo de 5 minutos**, abordando os seguintes questionamentos:

• Qual o objetivo do sistema? E demonstração de funcionamento.
• O que deve ser realizado para executar o sistema?
• Como você organizou as tarefas antes de começar a desenvolver?
• Quais as *branches* você criou e quais os objetivos para cada uma?
• Você acha que faltou algo no seu código que você poderia melhorar?

Você poderá gravar na vertical ou na horizontal. É importante que apareça seu rosto e esteja em um local com boa iluminação e que seja possível ouvir sua voz bem. Para realizar a entrega do vídeo, coloque em uma pasta do Google Drive em modo leitor para qualquer pessoa com o link (ou subo via YouTube como vídeo não listado), e compartilhe o mesmo na submissão do projeto no AVA. Uma dica interessante é você inserir o vídeo no readme.md do seu projeto no repositório do GitHub. É um requisito que qualquer pessoa consiga visualizar seu vídeo via algum link.

---

## 5. CRITÉRIOS DE AVALIAÇÃO

A tabela abaixo apresenta os critérios que serão avaliados durante a correção do projeto.

O mesmo possui variação de nota de 0 (zero) a 10 (dez) como nota mínima e máxima, e possui peso de 25% sobre a avaliação do módulo 01 do curso.

Serão desconsiderados e atribuída a nota 0 (zero) os projetos que apresentarem plágio de soluções encontradas na internet ou de outros colegas.

Lembre-se: Você está livre para utilizar outras soluções como base, mas não é permitida a cópia. Ou seja, você está livre para consultar materiais, documentação, exemplos e ferramentas de apoio, desde que consiga adaptar a solução ao desafio proposto e explicar o código entregue com segurança e confiança.

### Uso do GitHub e Readme.md

| Nº | Critério de Avaliação | 0,00 | 1,5 (Nota Máxima) |
| :---: | :--- | :--- | :--- |
| **01** | **Versionamento com branches e commits** | Não criou o repositório ou ele não apresenta branches e commits. *(0,00)* / O repositório não possui diferenciação de branches, apenas main. | O repositório do projeto apresenta branches e commits distintos e nomeadas padronizadamente para cada funcionalidade desenvolvida. |
| **02** | **Read.me** | Não criou o Read.me ou está sem nenhum dado | Criou o read.me mas está incompleto. Não contendo todos os itens listados no item 3. | Criou o read.me conforme orientações no item 3. |

### Apresentação do Projeto

| Nº | Critério de Avaliação | 0,00 | 1,00 | 2,00 |
| :---: | :--- | :--- | :--- | :--- |
| **03** | **Gravação de vídeo** | Não gravou o vídeo de apresentação. | Gravou o vídeo de apresentação, mas não apresentou todos os requisitos do ítem 4.6. | O vídeo apresentou todos os requisitos do ítem 4.6. |

### Desenvolvimento do Projeto

| Nº | Critério de Avaliação | 0,00 | 0,25 | 0,50 |
| :---: | :--- | :--- | :--- | :--- |
| **04** | **Implementação do RF01 – Menu do sistema** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | O arquivo index.js apresentou uma estrutura de menu funcional via console, oferecendo opções de interação que respondem às entradas fornecidas pelo usuário, conforme quadro do RF01. |
| **05** | **Implementação do RF02 – Listar livros** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada listarLivros() No arquivo listarLivros.js, que exibiu no console os valores requeridos no RF02 quando o usuário digitar a opção '1' no menu inicial. |
| **06** | **Implementação do RF03 – Buscar livro** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada buscarLivro(titulo) no arquivo buscarLivro.js, que exibiu no console as informações requeridas no RF03 quando o usuário digitar a opção '2' no menu inicial. |
| **07** | **Implementação do RF04 – Listar livros disponíveis** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada listarDisponiveis() no arquivo listarDisponiveis.js,, que exibiu no console as informações requeridas no RF04 quando o usuário digitar a opção '3' no menu inicial. |
| **08** | **Implementação do RF05 – Cadastrar livro** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada cadastrarLivro() no arquivo cadastrarLivro.js,, que exibiu no console as informações requeridas no RF05 quando o usuário digitar a opção '4' no menu inicial. |
| **09** | **Implementação do RF06 – Realizar empréstimo** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada realizarEmprestimo(titulo ) no arquivo realizarEmprestimo.js, que exibiu no console as informações requeridas no RF06 quando o usuário digitar a opção '5' no menu inicial. |
| **10** | **Implementação do RF07 – Realizar devolução** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada realizarDevolucao(titulo) no arquivo realizarDevolucao.js, que exibiu no console as informações requeridas no RF07 quando o usuário digitar a opção '6' no menu inicial. |
| **11** | **Implementação do RF08 – Exibir estatísticas** | Não implementou a função ou ela não está funcionando. | A função foi implementada parcialmente OU implementada totalmente porém com um pequeno erro de comportamento. | Criou uma função chamada exibirEstatisticas() no arquivo exibirEstatisticas.js,, que exibiu no console as informações requeridas no RF08 quando o usuário digitar a opção '7' no menu inicial. |
| **12** | **Implementação do RF09 – Criar uma classe** | Não implementou a classe. | A classe foi implementada parcialmente, sem todos os atributos necessários para o objeto livro. | Implementou a classe Livro, estruturou o constructor e mapeou/inicializou todas as propriedades correspondentes ao objeto. |
| **13** | **Implementação do RF10 – Utilizar módulo** | Não utilizou o conceito de módulo ao interagir com as funções, lista de livros ou classe Livro. | Foi utilizado o conceito de módulo em partes das funções chamadas | Foi utilizado o conceito de módulo total as funções, classe Livro e variável dadosLivros. Conforme RF10 |

---

## 6. CHECKLIST FINAL DE ENTREGA

Antes de enviar no AVA, confira:

- [x] Criei o repositório público no GitHub?
- [x] Criei todos os arquivos solicitados no item 4.1?
- [x] Realizei o teste de todas as funções disponíveis no sistema?
- [x] Criei o README.md contendo os tópicos conforme orientação do item 3.?
- [ ] Fiz commits no GitHub de forma clara e objetiva?
- [x] Utilizei branches apartadas da branch main?
- [ ] Gravei o vídeo de até 5 minutos?
- [ ] Coloquei o vídeo no Google Drive com permissão correta per ver vídeo via link?
- [ ] Enviei os links no AVA até 10/08/2026 às 22h?

---

## 7. MODELO DE README.MD (SUGESTÃO)

```markdown
# Controle para Biblioteca em JS

## Sobre o projeto
[COLOQUE AQUI QUAL É O OBJETIVO DESSE PROJETO]

## Objetivo
Praticar os principais conceitos do Módulo 01:
[COLOQUE AQUI OS CONCEITOS QUE VOCÊ VIU EM PRÁTICA NESSA ATIVIDADE]

## Como executar
[COLOQUE AQUI AS INSTRUÇÕES PARA EXECUTAR O PROJETO]

## Estrutura do projeto
[COLOQUE AQUI COMO FICOU A ESTRUTURA DO SEU PROJETO]
```

---

## 8. ANEXOS

### 8.1. DADOS INICIAIS

O projeto deverá iniciar com um conjunto de livros cadastrados.
Utilize o seguinte array de objetos como dados iniciais:

```javascript
const dadosLivros = [
  {
    titulo: "JavaScript para Iniciantes",
    autor: "Ana Souza",
    categoria: "Programação",
    paginas: 280,
    disponivel: true
  },
  {
    titulo: "CSS Moderno",
    autor: "Carlos Lima",
    categoria: "Web Design",
    paginas: 190,
    disponivel: false
  },
  {
    titulo: "HTML Essencial",
    autor: "Fernanda Rocha",
    categoria: "Programação",
    paginas: 250,
    disponivel: true
  },
  {
    titulo: "Lógica de Programação",
    autor: "Marcos Silva",
    categoria: "Programação",
    paginas: 320,
    disponivel: true
  },
  {
    titulo: "Banco de Dados",
    autor: "Juliana Costa",
    categoria: "Banco de Dados",
    paginas: 410,
    disponivel: false
  },
  {
    titulo: "Git e GitHub",
    autor: "Lucas Pereira",
    categoria: "Ferramentas",
    paginas: 170,
    disponivel: true
  },
  {
    titulo: "Node.js na Prática",
    autor: "Eduardo Martins",
    categoria: "Programação",
    paginas: 360,
    disponivel: true
  },
  {
    titulo: "UX Design",
    autor: "Patrícia Alves",
    categoria: "Design",
    paginas: 220,
    disponivel: false
  },
  {
    titulo: "Angular Completo",
    autor: "Roberto Santos",
    categoria: "Programação",
    paginas: 430,
    disponivel: true
  },
  {
    titulo: "React para Web",
    autor: "Camila Ferreira",
    categoria: "Programação",
    paginas: 390,
    disponivel: true
  }
];
