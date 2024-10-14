import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer";

type BudgetProviderProps = {
    children: ReactNode;
};

type BudgetContextProps = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
};

export const ContextBudget = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <ContextBudget.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ContextBudget.Provider>
    );
};
