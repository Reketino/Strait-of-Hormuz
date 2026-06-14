"use client";

import { useEffect, useState } from "react";
import Status from "./Status";
import Oil from "./Brentcrude";
import Events from "./Events";

type Data = {
  status: "YES" | "MAYBE" | "NO";
  events: {
    title: string;
    url: string;
    source: string;
  }[];
  oil: { price: number; change: number };
  updatedAt: string;
};

export default function LiveData({ initialData }: { initialData: Data }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startPolling = () => {
      interval = setInterval(async () => {
        try {
          if (document.hidden) return;
          const res = await fetch("/api/status", { cache: "no-store" });
          const fresh = await res.json();

          console.debug("LiveData: fetched fresh status", fresh);

          setData((prevData) => {
            const change = fresh.oil.price - prevData.oil.price;

            console.debug("Oil update", {
              previous: prevData.oil.price,
              current: fresh.oil.price,
              calculatedChange: fresh.oil.price - prevData.oil.price,
            });

            return {
              ...fresh,
              oil: {
                ...fresh.oil,
                change,
              },
            };
          });
        } catch (err) {
          console.error("Live update has failed", err);
        }
      }, 5000);
    };

    startPolling();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex flex-col items-center">
        <Status status={data.status} />
        <Oil price={data.oil.price} change={data.oil.change} />
      </section>

      <Events events={data.events} updatedAt={data.updatedAt} />
    </>
  );
}
