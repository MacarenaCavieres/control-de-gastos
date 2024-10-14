import BudgetForm from "./components/BudgetForm";

function App() {
    return (
        <>
            <header className="text-center text-6xl font-bold text-white bg-rose-700 py-14">
                <h1>Control de gastos</h1>
            </header>

            <main className="bg-slate-100 py-14 shadow-lg rounded-sm max-w-3xl mx-auto mt-10">
                <BudgetForm />
            </main>
        </>
    );
}

export default App;
