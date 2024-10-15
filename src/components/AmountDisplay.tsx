import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    amount: number;
    label?: string;
};

export default function AmountDisplay({ amount, label }: AmountDisplayProps) {
    return (
        <p className="text-2xl font-bold">
            {label && `${label}: `}
            <span>{formatCurrency(amount)}</span>
        </p>
    );
}
