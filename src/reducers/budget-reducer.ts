import { Category, DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from "uuid";

export type BudgetActions =
    | { type: "define-budget"; payload: { newBudget: number } }
    | { type: "show-modal" }
    | { type: "close-modal" }
    | { type: "add-expense"; payload: { newExpense: DraftExpense } }
    | { type: "remove-expense"; payload: { id: Expense["id"] } }
    | { type: "get-expense-by-id"; payload: { id: Expense["id"] } }
    | { type: "update-expense"; payload: { newExpense: Expense } }
    | { type: "clear-app" }
    | { type: "add-filter-category"; payload: { id: Category["id"] } };

export type BudgetState = {
    budget: number;
    modal: boolean;
    expenses: Expense[];
    editingId: Expense["id"];
    currentCategory: Category["id"];
};

const localStorageBudget = () => {
    const getBudget = localStorage.getItem("budget");
    return getBudget ? JSON.parse(getBudget) : 0;
};
const localStorageExpense = () => {
    const expenseSaved = localStorage.getItem("expense");
    return expenseSaved ? JSON.parse(expenseSaved) : [];
};

export const initialState = {
    budget: localStorageBudget(),
    modal: false,
    expenses: localStorageExpense(),
    editingId: "",
    currentCategory: "",
};

const createExpense = (draftExpense: DraftExpense): Expense => {
    return {
        ...draftExpense,
        id: uuidv4(),
    };
};

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
    if (action.type === "define-budget") {
        return {
            ...state,
            budget: action.payload.newBudget,
        };
    }
    if (action.type === "show-modal") {
        return {
            ...state,
            modal: true,
        };
    }
    if (action.type === "close-modal") {
        return {
            ...state,
            modal: false,
            editingId: "",
        };
    }

    if (action.type === "add-expense") {
        const newExpense = createExpense(action.payload.newExpense);
        return {
            ...state,
            expenses: [...state.expenses, newExpense],
            modal: false,
        };
    }

    if (action.type === "remove-expense") {
        return {
            ...state,
            expenses: state.expenses.filter((item) => item.id !== action.payload.id),
        };
    }

    if (action.type === "get-expense-by-id") {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true,
        };
    }

    if (action.type === "update-expense") {
        return {
            ...state,
            expenses: state.expenses.map((expense) =>
                expense.id === action.payload.newExpense.id ? action.payload.newExpense : expense
            ),
            modal: false,
            editingId: "",
        };
    }
    if (action.type === "clear-app") {
        return {
            ...state,
            expenses: [],
            budget: 0,
        };
    }

    if (action.type === "add-filter-category") {
        return {
            ...state,
            currentCategory: action.payload.id,
        };
    }

    return state;
};
