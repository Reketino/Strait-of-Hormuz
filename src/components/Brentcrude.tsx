import { useEffect, useRef, useState } from "react";

type Props = {
  price: number;
  change: number;
};

export default function Oil({ price, change }: Props) {
  const previousPrice = useRef(price);
  const [calculatedChange, setCalculatedChange] = useState(0)
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const diff = price - previousPrice.current;

    setCalculatedChange(diff);

    if (diff > 0) {
      setFlash("up");
    }

    if (diff < 0 ) {
      setFlash("down");
    }

    previousPrice.current = price;

    const timeout = setTimeout(() => {
      setFlash(null);
    }, 800);
  
    return () => clearTimeout(timeout);
    }, [price]);

  const isUp = calculatedChange > 0;
  const isDown = calculatedChange < 0;
  const isBigMove = Math.abs(change) > 2;

  return (
    <section className="mt-6 text-center">
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        Brent Crude
      </p>

      <p
        className={`
        text-3xl font-bold transition-all duration-300 
        ${isBigMove ? "text-yellow-300" : ""}
        ${flash === "up" ? "animate-[flash-green_0.8s_ease]" : ""}
        ${flash === "down" ? "animate-[flash-red_0.8s_ease]" : ""}
        `}
      >
        ${price.toFixed(2)}
      </p>

      <p
        className={`
                text-sm flex items-center justify-center gap-1 
                ${isUp ? "text-green-400" : ""}
                ${isDown ? "text-red-400 animate-[shake_0.3s_ease-in-out]" : ""} 
                ${!isUp && !isDown ? "text-gray-400" : ""}
                `}
      >
        <span className={isUp ? "animate-pulse" : ""}>
          {isUp ? "▲" : isDown ? "▼" : "-"}
        </span>

        {Math.abs(calculatedChange).toFixed(2)}

        {isBigMove && <span className="text-yellow-300 text-xs">⚡</span>}
      </p>
    </section>
  );
}
