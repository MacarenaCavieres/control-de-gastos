import { ChangeEvent, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { categories } from "../data/categories";
import { DraftExpense, Value } from "../types";
import { useBudget } from "../hooks/useBudget";
import ErrorMessage from "./ErrorMessage";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";

const initialState = {
    expenseName: "",
    expenseAmount: 0,
    expenseCategory: "",
    expenseDate: new Date(),
};

export default function ExpenseForm() {
    const { state, dispatch, amountNet } = useBudget();

    const [expense, setExpense] = useState<DraftExpense>(initialState);
    const [error, setError] = useState("");
    const [previousAmount, setPreviousAmount] = useState(0);

    useEffect(() => {
        if (state.editingId) {
            const editingExpense = state.expenses.filter((expense) => expense.id === state.editingId)[0];
            setExpense(editingExpense);
            setPreviousAmount(editingExpense.expenseAmount);
        }
    }, [state.editingId]);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isAmount = ["expenseAmount"].includes(e.target.name);
        setExpense({
            ...expense,
            [e.target.name]: isAmount ? +e.target.value : e.target.value,
        });
    };

    const handleChangeDate = (value: Value) => {
        setExpense({
            ...expense,
            expenseDate: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(expense).includes("")) {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (expense.expenseAmount - previousAmount > amountNet) {
            setError("El gasto sobrepasa el presupuesto");
            return;
        }

        if (state.editingId) {
            dispatch({
                type: "update-expense",
                payload: { newExpense: { id: state.editingId, ...expense } },
            });
        } else {
            dispatch({ type: "add-expense", payload: { newExpense: expense } });
        }

        setExpense(initialState);
        setPreviousAmount(0);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <legend className="uppercase font-black text-center text-2xl border-b-4 border-rose-700 py-2">
                {state.editingId ? "Editar Gasto" : "Nuevo gasto"}
            </legend>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Nombre Gasto
                </label>
                <input
                    type="text"
                    name="expenseName"
                    className="bg-slate-100 p-2"
                    placeholder="Ingrese el nombre del gasto"
                    onChange={handleChange}
                    value={expense.expenseName}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseAmount" className="text-xl">
                    Cantidad Gasto
                </label>
                <input
                    type="text"
                    name="expenseAmount"
                    className="bg-slate-100 p-2"
                    placeholder="Ingrese la cantidad del gasto"
                    onChange={handleChange}
                    value={expense.expenseAmount}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseCategory" className="text-xl">
                    Categoría
                </label>
                <select
                    name="expenseCategory"
                    id="expenseCategory"
                    className="bg-slate-100 p-2"
                    onChange={handleChange}
                    value={expense.expenseCategory}
                >
                    <option>-- Seleccione --</option>
                    {categories.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseDate">Fecha Gasto:</label>
                <DatePicker
                    name="expenseDate"
                    className="bg-slate-100 p-2 border-0"
                    value={expense.expenseDate}
                    onChange={handleChangeDate}
                />
            </div>

            <input
                type="submit"
                className="bg-rose-700 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={state.editingId ? "Actualizar Gasto" : "Registrar Gasto"}
            />
        </form>
    );
}
