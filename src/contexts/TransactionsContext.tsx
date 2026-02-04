import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  resetTransactions: () => void;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

const STORAGE_KEY = "@finance-app:transactions-1.0.0";

const initialData: Transaction[] = [
  {
    id: 1,
    description: "Desenvolvimento de Site",
    type: "income",
    category: "Venda",
    price: 12000,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    description: "Hospedagem AWS",
    type: "outcome",
    category: "Infra",
    price: 600,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    description: "Aluguel Escritório",
    type: "outcome",
    category: "Fixo",
    price: 2500,
    createdAt: new Date().toISOString()
  }
];

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getStoredData = (): Transaction[] => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }

    return JSON.parse(data);
  };

  const fetchTransactions = useCallback(async (query?: string) => {

    await new Promise((resolve) => setTimeout(resolve, 400));
    let list = getStoredData();

    if (query) {
      const lowerQuery = query.toLowerCase();
      list = list.filter((t) =>
        t.description.toLowerCase().includes(lowerQuery) ||
        t.category.toLowerCase().includes(lowerQuery)
      );
    }

    list.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setTransactions(list);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      
      const allTransactions = getStoredData();

      const newTransaction: Transaction = {
        ...data,
        id: Math.floor(Math.random() * 1000000), // ID numérico como o json-server
        createdAt: new Date().toISOString(),
      };

      const updatedList = [newTransaction, ...allTransactions];
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      
      setTransactions(updatedList);
    },
    []
  );

  const resetTransactions = useCallback(() => {
    if (confirm("Deseja resetar todos os dados para o padrão inicial?")) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        resetTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
