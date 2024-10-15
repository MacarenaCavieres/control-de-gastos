import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
    const { dispatch } = useBudget();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: "add-filter-category", payload: { id: e.target.value } });
    };

    return (
        <div className="bg-slate-100 shadow-lg rounded-lg p-10">
            <form>
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category" className="text-xl">
                        Filtrar Gastos
                    </label>
                    <select
                        name="category"
                        className="bg-slate-100 p-3 flex-1 rounded border border-slate-300"
                        onChange={handleChange}
                    >
                        <option value="">-- Todas las categorías --</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
}
