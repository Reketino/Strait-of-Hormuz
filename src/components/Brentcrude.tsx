type Props = {
    price: number;
    change: number;
};

export default function Oil({ price, change }: Props) {
    const isUp = change > 0;
    const isDown = change < 0; 
    const isBigMove = Math.abs(change) > 2;

    return (
        <section className="mt-6 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Brent Crude</p>

            <p className={`text-3xl font-bold ${isBigMove ? "text-yellow-300" : ""}`}>
                ${price.toFixed(2)}
            </p>

            <p className={`text-sm ${isUp ? "text-green-400" : "text-red-400"}`}>
                {isUp && "▲"} 
                {isDown && "▼"} 
                {!isUp && !isDown && "-"}{" "}
                {Math.abs(change).toFixed(2)}
            </p>
        </section>
    );
}