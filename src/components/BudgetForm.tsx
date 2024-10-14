import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
    const [budget, setBudget] = useState(0);

    const { dispatch } = useBudget();

    const isValid = useMemo(() => isNaN(budget) || budget <= 0, [budget]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBudget(+e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: "define-budget", payload: { newBudget: budget } });
    };

    return (
        <form className="space-y-5 mx-10" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5 mx-auto">
                <label htmlFor="budget" className="text-rose-700 text-2xl md:text-4xl font-bold text-center">
                    Definir Presupuesto
                </label>
                <input type="number" name="budget" className="p-2" onChange={handleChange} value={budget} />
            </div>

            <button
                type="submit"
                className="uppercase bg-rose-700 w-full text-white font-bold p-2 disabled:opacity-10"
                disabled={isValid}
            >
                Definir presupuesto
            </button>
        </form>
    );
}
