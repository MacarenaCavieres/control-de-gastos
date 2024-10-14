export default function BudgetForm() {
    return (
        <form className="space-y-5 mx-10">
            <div className="flex flex-col space-y-5 mx-auto">
                <label htmlFor="budget" className="text-rose-700 text-4xl font-bold text-center">
                    Definir Presupuesto
                </label>
                <input type="number" name="budget" className="p-2" />
            </div>

            <button type="button" className="uppercase bg-rose-700 w-full text-white font-bold p-2">
                Definir presupuesto
            </button>
        </form>
    );
}
