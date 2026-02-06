<div align="center">

# 💸 Money Flow

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white&style=for-the-badge)

**Aplicativo moderno de controle financeiro pessoal desenvolvido com React e TypeScript**

[English](README.en.md) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Uso](#-como-usar)

</div>

---

## 📋 Sobre o Projeto

O **Money Flow** é uma aplicação web moderna e intuitiva para gerenciamento completo de finanças pessoais. Desenvolvido com as melhores práticas de desenvolvimento front-end, permite que você registre suas transações financeiras (entradas e saídas), visualize um resumo detalhado do seu saldo e acompanhe seu histórico de transações de forma simples e eficiente.

### ✨ Funcionalidades

- ✅ **Cadastro de Transações**: Adicione novas transações de entrada ou saída com facilidade
- 📊 **Resumo Financeiro em Tempo Real**: Visualize entradas, saídas e saldo total atualizado automaticamente
- 🔍 **Busca Inteligente**: Pesquise transações por descrição ou categoria instantaneamente
- 💾 **Armazenamento Persistente**: Dados salvos automaticamente no navegador (localStorage)
- 🎨 **Interface Moderna e Responsiva**: Design limpo, escuro e totalmente adaptável
- ⚡ **Performance Otimizada**: Construído com Vite para carregamento ultra-rápido
- 🌙 **Tema Escuro**: Interface confortável para os olhos com tema escuro por padrão

---

## 🛠 Tecnologias

### Core
- **[React](https://react.dev/)** 18.2.0 - Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** 5.2.2 - Superset JavaScript com tipagem estática para maior segurança
- **[Vite](https://vitejs.dev/)** 5.1.4 - Build tool e dev server ultra-rápido

### Estilização
- **[Styled Components](https://styled-components.com/)** 6.1.8 - CSS-in-JS com componentes estilizados e temáticos
- **[Phosphor Icons](https://phosphoricons.com/)** 1.4.1 - Biblioteca de ícones moderna e elegante

### Formulários e Validação
- **[React Hook Form](https://react-hook-form.com/)** 7.50.1 - Gerenciamento de formulários performático e sem re-renders desnecessários
- **[Zod](https://zod.dev/)** 3.22.4 - Validação de schemas TypeScript-first com tipagem inferida
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** 3.3.4 - Integração perfeita entre Zod e React Hook Form

### Componentes e Acessibilidade
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não-estilizados
  - `@radix-ui/react-dialog` - Modal de diálogo acessível
  - `@radix-ui/react-radio-group` - Grupo de botões de seleção acessível

### Gerenciamento de Estado
- **[use-context-selector](https://github.com/dai-shi/use-context-selector)** 1.4.1 - Context API otimizado com seletores para evitar re-renders

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para qualidade e consistência de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Regras específicas para TypeScript

---

## 🚀 Instalação

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd money-flow
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   
   Abra seu navegador em `http://localhost:5173` (ou a porta indicada no terminal)

---

## 📖 Como Usar

### Adicionar uma Nova Transação

1. Clique no botão **"Nova transação"** no cabeçalho da aplicação
2. Preencha os campos do formulário:
   - **Descrição**: Nome ou descrição da transação
   - **Preço**: Valor da transação (apenas números)
   - **Categoria**: Categoria da transação (ex: Alimentação, Transporte, Salário)
   - **Tipo**: Selecione **Entrada** (receita) ou **Saída** (despesa)
3. Clique em **"Cadastrar"**

### Buscar Transações

- Utilize o campo de busca acima da tabela de transações
- A busca filtra por **descrição** ou **categoria** em tempo real
- Os resultados são atualizados instantaneamente conforme você digita

### Visualizar Resumo Financeiro

O resumo é exibido automaticamente no topo da página e mostra:
- 💚 **Entradas**: Total de receitas
- 🔴 **Saídas**: Total de despesas
- 💰 **Total**: Saldo atual (verde se positivo, vermelho se negativo)

---

## 📁 Estrutura do Projeto

```
money-flow/
├── public/                 # Arquivos estáticos públicos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   │   └── logo.svg
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Footer/        # Rodapé da aplicação
│   │   ├── Header/        # Cabeçalho com logo e botão de nova transação
│   │   ├── NewTransactionModal/  # Modal para cadastro de transações
│   │   └── Summary/       # Cards de resumo financeiro
│   ├── contexts/          # Context API para gerenciamento de estado
│   │   └── TransactionsContext.tsx
│   ├── hooks/             # Custom hooks
│   │   └── useSummary.ts  # Hook para cálculos do resumo
│   ├── pages/             # Páginas da aplicação
│   │   └── Transactions/
│   │       ├── components/
│   │       │   └── SearchForm/   # Formulário de busca
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/            # Estilos globais e temas
│   │   ├── global.ts      # Estilos globais
│   │   └── themes/
│   │       └── default.ts # Tema padrão (cores)
│   ├── utils/             # Funções utilitárias
│   │   └── formatter.ts   # Formatadores de data e moeda
│   ├── App.tsx            # Componente raiz
│   └── main.tsx           # Ponto de entrada da aplicação
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Tema e Cores

O projeto utiliza uma paleta de cores moderna e consistente:

### Cores Principais
- **Verde**: `#00B37E` (entradas/receitas)
- **Vermelho**: `#F75A68` (saídas/despesas)
- **Cinza**: Escala de `gray-100` a `gray-900` para textos e fundos

### Tema Escuro
A aplicação utiliza um tema escuro por padrão, proporcionando uma experiência visual confortável e moderna.

---

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção otimizado |
| `npm run preview` | Preview do build de produção localmente |
| `npm run lint` | Executa o linter para verificar qualidade do código |

---

## 💾 Armazenamento de Dados

Os dados das transações são armazenados localmente no navegador usando **localStorage**. Isso significa que:

- ✅ Os dados persistem mesmo após fechar o navegador
- ✅ Os dados são específicos para cada navegador/dispositivo
- ⚠️ Limpar os dados do navegador removerá todas as transações

### Chave de Armazenamento
```
@finance-app:transactions-1.0.0
```

### Dados Iniciais
Ao iniciar a aplicação pela primeira vez, são criadas 3 transações de exemplo:
- Desenvolvimento de Site (Entrada: R$ 12.000)
- Hospedagem AWS (Saída: R$ 600)
- Aluguel Escritório (Saída: R$ 2.500)

---

## 🔧 Configurações

### TypeScript
O projeto está configurado com TypeScript strict mode para garantir type safety e melhor experiência de desenvolvimento.

### ESLint
Regras de linting configuradas para manter a qualidade, consistência e boas práticas do código.

### Vite
Configuração otimizada para desenvolvimento rápido com Hot Module Replacement (HMR) e builds eficientes para produção.

---

## 🤝 Contribuindo

Este é um projeto de portfólio. Sinta-se à vontade para:
- ⭐ Dar uma estrela no repositório
- 🐛 Reportar bugs
- 💡 Sugerir melhorias
- 🔀 Fazer fork e experimentar

---

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`.

---

<div align="center">

**Desenvolvido com ❤️ usando React e TypeScript**

[⬆ Voltar ao topo](#-money-flow)

</div>
