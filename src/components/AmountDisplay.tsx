import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
    amount: number;
    label?: string;
};

export default function AmountDisplay({ amount, label }: AmountDisplayProps) {
    return (
        <>
            {label ? (
                <p className="text-xl md:text-2xl font-bold">
                    {`${label}: `}
                    <span>{formatCurrency(amount)}</span>
                </p>
            ) : (
                <p className="md:text-2xl font-bold">
                    <span>{formatCurrency(amount)}</span>
                </p>
            )}
        </>
    );
}
