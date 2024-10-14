import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";

function App() {
    const { state } = useBudget();

    const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);
    return (
        <>
            <header className="text-center text-4xl md:text-6xl font-bold text-white bg-rose-700 py-14 ">
                <h1>Control de gastos</h1>
            </header>

            <main className="bg-slate-100 py-14 shadow-lg rounded-sm max-w-3xl mx-auto mt-10">
                {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
            </main>
        </>
    );
}

export default App;
