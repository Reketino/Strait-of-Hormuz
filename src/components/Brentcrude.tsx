import { useEffect, useRef, useState } from "react";

type Props = {
  price: number;
  change: number;
};

export default function Oil({ price, change }: Props) {
  const previousPrice = useRef(price);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);
  const isUp = change > 0;
  const isDown = change < 0;
  const isBigMove = Math.abs(change) > 2;

  useEffect(() => {
    if (price > previousPrice.current) {
      setFlash("up");
    }

    if (price < previousPrice.current) {
      setFlash("down");
    }

    previousPrice.current = price;

    const timeout = setTimeout(() => {
      setFlash(null);
    }, 800);

    return clearTimeout(timeout);
  }, [price])

  return (
    <section className="mt-6 text-center">
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        Brent Crude
      </p>

      <p className={`
        text-3xl font-bold transition-all duration-300 
        ${isBigMove ? "text-yellow-300" : ""}
        ${flash === "up" ? "animate-[flash-green_0.8s_ease]" : ""}
        ${flash === "down" ? "animate-[flash-green_0.8s_ease]" : ""}
        `}>
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

        {Math.abs(change).toFixed(2)}

        {isBigMove &&( 
          <span className="text-yellow-300 text-xs">
            ⚡
          </span>
        )}
      </p>
    </section>
  );
}
