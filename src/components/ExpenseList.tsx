import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
    const { state } = useBudget();

    const filteredCategory = state.currentCategory
        ? state.expenses.filter((expense) => expense.expenseCategory === state.currentCategory)
        : state.expenses;

    const isEmpty = useMemo(() => filteredCategory.length === 0, [filteredCategory]);

    return (
        <>
            {isEmpty ? (
                <p className="text-gray-600 text-4xl font-bold my-5 text-center">Sin Gastos</p>
            ) : (
                <div className="mt-10 bg-slate-100 shadow-lg rounded-lg p-10">
                    <>
                        <p className="text-gray-600 text-4xl font-bold my-5 text-center">Listado de Gastos</p>

                        {filteredCategory.map((expense) => (
                            <ExpenseDetail key={expense.id} expense={expense} />
                        ))}
                    </>
                </div>
            )}
        </>
    );
}
