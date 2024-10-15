import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer";
type BudgetProviderProps = {
    children: ReactNode;
};

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
    amountSpent: number;
    amountNet: number;
};

export const ContextBudget = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    const amountSpent = useMemo(
        () => state.expenses.reduce((total, item) => total + item.expenseAmount, 0),
        [state.expenses]
    );

    const amountNet = state.budget - amountSpent;

    return (
        <ContextBudget.Provider
            value={{
                state,
                dispatch,
                amountSpent,
                amountNet,
            }}
        >
            {children}
        </ContextBudget.Provider>
    );
};
