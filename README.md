# 🛒 Supermercado Támaisbarato

Trabalho da faculdade, matéria de desenvolvimento web, desenvolvido em React.js simulando um site de e-commerce para um supermercado, contendo catálogo de produtos, carrinho de compras, formulário de contato e um sistema CRUD para gerenciamento de produtos.

## 📋 Sobre o Projeto

O Supermercado Támaisbarato foi desenvolvido com o objetivo de aplicar os conceitos de desenvolvimento Front-End utilizando React.js, componentes reutilizáveis, roteamento de páginas e gerenciamento de estado.

O sistema permite que o usuário navegue pelos produtos disponíveis, visualize promoções, simule um carrinho de compras e entre em contato com a empresa através de um formulário.

Além disso, foi implementado um CRUD (Create, Read, Update e Delete) para o gerenciamento de produtos, permitindo cadastrar, listar, editar e excluir produtos.

---

## 🚀 Funcionalidades

### Página Inicial

* Exibição de produtos em destaque.
* Área de promoções e novidades.
* Navegação intuitiva entre as páginas.

### Produtos

* Listagem completa dos produtos disponíveis.
* Exibição de imagem, nome e preço de cada item.

### Carrinho de Compras

* Visualização dos produtos adicionados.
* Cálculo automático do valor total da compra.
* Simulação de finalização da compra.

### Fale Conosco

* Formulário para envio de mensagens.
* Campos:

  * Nome
  * E-mail
  * Mensagem

### Cadastro de Produtos (CRUD)

* Cadastrar novos produtos.
* Listar produtos cadastrados.
* Editar informações de produtos existentes.
* Excluir produtos da listagem.

---

## 🛠️ Tecnologias Utilizadas

* React.js
* React Router DOM
* JavaScript
* HTML5
* CSS3
* Vite

---

## 📁 Estrutura do Projeto

```bash
src/
│
├── assets/
│   ├── imagens dos produtos
│
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Produtos.jsx
│   ├── Carrinho.jsx
│   ├── FaleConosco.jsx
│   └── CadastroProdutos.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Supermercado-Tamaisbarato-CRUD.git
```

### 2. Entrar na pasta do projeto

```bash
cd supermercado-tamaisbarato
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o projeto

```bash
npm run dev
```

### 5. Abrir no navegador

```text
http://localhost:5173
```

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido para praticar:

* Componentização em React.
* Props e reutilização de componentes.
* Gerenciamento de estado com useState.
* Manipulação de eventos.
* Rotas com React Router.
* Desenvolvimento de CRUD.
* Organização de projetos Front-End.
* Responsividade com CSS.
