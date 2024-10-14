export type Category = {
    id: string;
    name: string;
    icon: string;
};

export type Expense = {
    id: string;
    expenseName: string;
    expenseAmount: number;
    expenseCategory: string;
    expenseDate: Value;
};

export type DraftExpense = Omit<Expense, "id">;

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
