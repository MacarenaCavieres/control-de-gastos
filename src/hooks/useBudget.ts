import { useContext } from "react";
import { ContextBudget } from "../context/BudgetContext";

export const useBudget = () => {
    const context = useContext(ContextBudget);

    if (!context) {
        throw new Error("useBudget must be used whitin a BudgetProvider");
    }

    return context;
};
