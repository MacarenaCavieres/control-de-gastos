export default function BudgetTracker() {
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
                <p className="font-bold text-2xl">Presupuesto: $800000</p>
                <p className="font-bold text-2xl">Disponible: $40000</p>
                <p className="font-bold text-2xl">Gastado: $300000</p>
            </div>
        </div>
    );
}
