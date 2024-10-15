import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
    const { state, dispatch, amountSpent, amountNet } = useBudget();

    const percentage = +((amountSpent * 100) / state.budget).toFixed(2);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex justify-center ms-5">
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? "#DC2626" : "#1e3a8a",
                        trailColor: "#cbd5e1",
                        textSize: 8,
                        textColor: percentage === 100 ? "#DC2626" : "#1e3a8a",
                    })}
                    text={`${percentage}% gastado`}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-blue-950 rounded-lg p-3 hover:bg-blue-900 uppercase font-bold text-white"
                    onClick={() => dispatch({ type: "clear-app" })}
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
