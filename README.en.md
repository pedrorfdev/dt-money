<div align="center">

# 💸 Money Flow

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white&style=for-the-badge)

**Modern personal finance management application built with React and TypeScript**

[Português](README.md) • [Features](#-features) • [Technologies](#-technologies) • [Installation](#-installation) • [Usage](#-how-to-use)

</div>

---

## 📋 About the Project

**Money Flow** is a modern and intuitive web application for complete personal finance management. Built with front-end development best practices, it allows you to record your financial transactions (income and expenses), view a detailed summary of your balance, and track your transaction history in a simple and efficient way.

### ✨ Features

- ✅ **Transaction Registration**: Easily add new income or expense transactions
- 📊 **Real-Time Financial Summary**: View income, expenses, and total balance updated automatically
- 🔍 **Smart Search**: Instantly search transactions by description or category
- 💾 **Persistent Storage**: Data automatically saved in the browser (localStorage)
- 🎨 **Modern and Responsive Interface**: Clean, dark design that's fully adaptable
- ⚡ **Optimized Performance**: Built with Vite for ultra-fast loading
- 🌙 **Dark Theme**: Eye-friendly interface with dark theme by default

---

## 🛠 Technologies

### Core
- **[React](https://react.dev/)** 18.2.0 - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** 5.2.2 - JavaScript superset with static typing for enhanced safety
- **[Vite](https://vitejs.dev/)** 5.1.4 - Ultra-fast build tool and dev server

### Styling
- **[Styled Components](https://styled-components.com/)** 6.1.8 - CSS-in-JS with styled and themed components
- **[Phosphor Icons](https://phosphoricons.com/)** 1.4.1 - Modern and elegant icon library

### Forms and Validation
- **[React Hook Form](https://react-hook-form.com/)** 7.50.1 - Performant form management without unnecessary re-renders
- **[Zod](https://zod.dev/)** 3.22.4 - TypeScript-first schema validation with inferred typing
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** 3.3.4 - Perfect integration between Zod and React Hook Form

### Components and Accessibility
- **[Radix UI](https://www.radix-ui.com/)** - Accessible and unstyled components
  - `@radix-ui/react-dialog` - Accessible dialog modal
  - `@radix-ui/react-radio-group` - Accessible radio button group

### State Management
- **[use-context-selector](https://github.com/dai-shi/use-context-selector)** 1.4.1 - Optimized Context API with selectors to prevent re-renders

### Development
- **[ESLint](https://eslint.org/)** - Linter for code quality and consistency
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific rules

---

## 🚀 Installation

### Prerequisites

Make sure you have installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd money-flow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   
   Open your browser at `http://localhost:5173` (or the port indicated in the terminal)

---

## 📖 How to Use

### Adding a New Transaction

1. Click the **"Nova transação"** button in the application header
2. Fill in the form fields:
   - **Description**: Name or description of the transaction
   - **Price**: Transaction value (numbers only)
   - **Category**: Transaction category (e.g., Food, Transportation, Salary)
   - **Type**: Select **Income** or **Expense**
3. Click **"Cadastrar"**

### Searching Transactions

- Use the search field above the transactions table
- The search filters by **description** or **category** in real-time
- Results are updated instantly as you type

### Viewing Financial Summary

The summary is automatically displayed at the top of the page and shows:
- 💚 **Income**: Total revenue
- 🔴 **Expenses**: Total expenses
- 💰 **Total**: Current balance (green if positive, red if negative)

---

## 📁 Project Structure

```
money-flow/
├── public/                 # Public static files
├── src/
│   ├── assets/            # Images and static resources
│   │   └── logo.svg
│   ├── components/        # Reusable components
│   │   ├── Footer/        # Application footer
│   │   ├── Header/        # Header with logo and new transaction button
│   │   ├── NewTransactionModal/  # Modal for transaction registration
│   │   └── Summary/       # Financial summary cards
│   ├── contexts/          # Context API for state management
│   │   └── TransactionsContext.tsx
│   ├── hooks/             # Custom hooks
│   │   └── useSummary.ts  # Hook for summary calculations
│   ├── pages/             # Application pages
│   │   └── Transactions/
│   │       ├── components/
│   │       │   └── SearchForm/   # Search form
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/            # Global styles and themes
│   │   ├── global.ts      # Global styles
│   │   └── themes/
│   │       └── default.ts # Default theme (colors)
│   ├── utils/             # Utility functions
│   │   └── formatter.ts   # Date and currency formatters
│   ├── App.tsx            # Root component
│   └── main.tsx           # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Theme and Colors

The project uses a modern and consistent color palette:

### Main Colors
- **Green**: `#00B37E` (income/revenue)
- **Red**: `#F75A68` (expenses)
- **Gray**: Scale from `gray-100` to `gray-900` for texts and backgrounds

### Dark Theme
The application uses a dark theme by default, providing a comfortable and modern visual experience.

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Generates optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Runs linter to check code quality |

---

## 💾 Data Storage

Transaction data is stored locally in the browser using **localStorage**. This means:

- ✅ Data persists even after closing the browser
- ✅ Data is specific to each browser/device
- ⚠️ Clearing browser data will remove all transactions

### Storage Key
```
@finance-app:transactions-1.0.0
```

### Initial Data
When starting the application for the first time, 3 example transactions are created:
- Website Development (Income: R$ 12,000)
- AWS Hosting (Expense: R$ 600)
- Office Rent (Expense: R$ 2,500)

---

## 🔧 Configuration

### TypeScript
The project is configured with TypeScript strict mode to ensure type safety and better development experience.

### ESLint
Linting rules configured to maintain code quality, consistency, and best practices.

### Vite
Optimized configuration for fast development with Hot Module Replacement (HMR) and efficient production builds.

---

## 🤝 Contributing

This is a portfolio project. Feel free to:
- ⭐ Star the repository
- 🐛 Report bugs
- 💡 Suggest improvements
- 🔀 Fork and experiment

---

## 📄 License

This project is under the license specified in the `LICENSE` file.

---

<div align="center">

**Built with ❤️ using React and TypeScript**

[⬆ Back to top](#-money-flow)

</div>
