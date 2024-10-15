import { useMemo } from "react";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatCurrency, formatDate } from "../helpers";
import { Expense } from "../types";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
    expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
    const categoryName = useMemo(
        () => categories.filter((item) => item.id === expense.expenseCategory)[0],
        [expense]
    );

    const leadingActions = () => {
        <LeadingActions>
            <SwipeAction onClick={() => console.log("actualizar")}>Actualizar</SwipeAction>
        </LeadingActions>;
    };

    const trailingActions = () => {
        <TrailingActions>
            <SwipeAction onClick={() => console.log("Eliminar")} destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>;
    };

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="bg-white shadow-lg p-7 w-full border-b border-gray-200 flex gap-5 items-center">
                    <div>
                        <img
                            src={`./icono_${categoryName.icon}.svg`}
                            alt="Icono categoría"
                            className="w-20"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryName.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">
                            {formatDate(expense.expenseDate!.toString())}
                        </p>
                    </div>
                    <p>{formatCurrency(expense.expenseAmount)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
}
