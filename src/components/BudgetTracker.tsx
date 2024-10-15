import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
    const { state, amountSpent, amountNet } = useBudget();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mx-5">
                <img src="./grafico.jpg" alt="Gráfico circular" />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-blue-950 rounded-lg p-3 hover:bg-blue-900 uppercase font-bold text-white"
                >
                    Resetear App
                </button>
                <AmountDisplay amount={state.budget} label="Presupuesto" />
                <AmountDisplay amount={amountNet} label="Disponible" />
                <AmountDisplay amount={amountSpent} label="Gastado" />
            </div>
        </div>
    );
}
