import { DraftExpense, Expense } from "../types";
import { v4 as uuidv4 } from "uuid";

export type BudgetActions =
    | { type: "define-budget"; payload: { newBudget: number } }
    | { type: "show-modal" }
    | { type: "close-modal" }
    | { type: "add-expense"; payload: { newExpense: DraftExpense } };

export type BudgetState = {
    budget: number;
    modal: boolean;
    expenses: Expense[];
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

    return state;
};
