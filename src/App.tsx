import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";

function App() {
    const { state } = useBudget();

    const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

    useEffect(() => {
        localStorage.setItem("budget", JSON.stringify(state.budget));
        localStorage.setItem("expense", JSON.stringify(state.expenses));
    }, [state.budget, state.expenses]);
    return (
        <>
            <header className="text-center text-4xl md:text-6xl font-bold text-white bg-rose-700 py-14 ">
                <h1>Control de gastos</h1>
            </header>

            <div className="bg-slate-100 py-14 shadow-lg rounded-sm max-w-3xl mx-auto mt-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
            </div>

            {isValidBudget && (
                <main className="max-w-3xl mx-auto py-10">
                    <FilterByCategory />
                    <ExpenseList />
                    <ExpenseModal />
                </main>
            )}
        </>
    );
}

export default App;
