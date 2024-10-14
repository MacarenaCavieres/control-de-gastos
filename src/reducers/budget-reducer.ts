export type BudgetActions = { type: "define-budget"; payload: { newBudget: number } };

export type BudgetState = {
    budget: number;
};

export const initialState = {
    budget: 0,
};

export const budgetReducer = (state: BudgetState = initialState, actions: BudgetActions) => {
    if (actions.type === "define-budget") {
        return {
            ...state,
            budget: actions.payload.newBudget,
        };
    }

    return state;
};
