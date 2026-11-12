"use client";

import { useEffect, useState } from "react";
import { StraitStatus } from "@/types/status";

type EventItem = {
  title: string;
  url: string;
  source: string;
  publishedAt?: string;
}

type ImpactCardProps = {
  number: string;
  label: string;
  description: string;
};

type StatusData = {
  status: StraitStatus;
  events: {
    title: string;
    url: string;
    source: string;
    publishedAt?: string;
  }[];
  oil: {
    price: number;
    change: number;
  } | null;
  updatedAt: string;
};

const impactCards: ImpactCardProps[] = [
  {
    number: "01",
    label: "Energy security",
    description:
      "Disruptions to oil shipments through Hormuz can tighten global energy supplies and increase uncertainty in energy markets."
  },
  {
    number: "02",
    label: "Global trade",
    description:
      "Shipping disruptions can force operators to reassess routes, insurance costs and delivery schedules.",
  },

  {
    number: "03",
    label: "Economic pressure",
    description:
      "Higher energy and transportation costs can spread through supply chains, putting pressure on businesses and consumers.",
  },
]

export default function ImpactSection() {
  const [oilPrice, setOilPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchOilPrice() {
      try {
        const response = await fetch("/api/status", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data: StatusData = await response.json();

        if (active) {
          setOilPrice(data.oil?.price ?? null);
        }
      } catch (error) {
        console.error("Failed to fetch oil price:", error);

        if (active) {
          setOilPrice(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void fetchOilPrice();

    const interval = window.setInterval(() => {
      void fetchOilPrice();
    }, 60_000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section 
    aria-labelledby="impact-heading"
    className="relative overflow-hidden bg-black py-40"
    >
      <article className="mx-auto max-w-7xl px-6">
        <header className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-red-400">
            The global consequnces
          </p>

          <h2 
          id="impact-heading"
          className="text-5xl font-black leading-none tracking-tight md:text-8xl">
            When Hormuz
            <br />
            stops moving.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-300">
            The consequences of a disruption in the Strait of Hormuz extend
            far beyond the Persian Gulf. Energy markets, shipping networks
            and economies around the world can all feel the effects.
          </p>
        </header>

        <section
          aria-label="Global impact indicators"
          className="mt-20 grid gap-5 md:grid-cols-3"
        >
          {impactCards.map((card) => (
            <article
            key={card.number}
            className="
            group flex min-h-72 flex-col border border-white/10 
            bg-white/3 p-7 transition-colors duration-300 
            hover:border-red-400/50 hover:bg-white/6 md:p-9
            "
            >
              <span className="text-sm tracking-widest text-red-400">
                {card.number}
              </span>
              
              <h3 className="mt-12 text-2xl font-bold tracking-tight md:text-3xl">
                {card.label}
              </h3>
              
            </article>
          ))}
        </section>

        <footer className="mt-24 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
            The Strait's importance becomes most visible when traffic stops.
            What happens here can affect energy security far beyond the Middle
            East.
          </p>
        </footer>
      </article>
    </section>
  );
}
