import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
    const { state } = useBudget();
    return (
        <>
            <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
            {state.expenses.map((expense) => (
                <ExpenseDetail key={expense.id} expense={expense} />
            ))}
        </>
    );
}
