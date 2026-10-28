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
  label: string;
  value: string;
  description: string;
};

type StatusData = {
  status: StraitStatus;
  events: EventItem[];
  oil: {
    price: number;
    change: number;
  } | null;
  updatedAt: string;
}

function getStatusLabel(status: StraitStatus): string {
  switch (status) {
    case "YES":
      return "OPEN";
    case "NO":
      return "CLOSED";
    case "MAYBE":
      return "UNCERTAIN"
  }
}

export default function ImpactSection() {
  const [data, setData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
  })

  async function fetchStatus() {
    if (document.hidden) return;

    try {
      const response = await fetch("/api/status", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const fresh: StatusData = await response.json();

      if (!active) return;

      
    }
  }
  
  return (
    <section className="relative overflow-hidden bg-black py-40">
      <article className="mx-auto max-w-7xl px-6">
        <header className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            Global impact
          </p>

          <h2 className="text-5xl font-black leading-none tracking-tight md:text-8xl">
            When Hormuz
            <br />
            stops moving.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-300">
            A disruption in the Strait does not stay in the Persian Gulf.
            Its effects can spread through shipping networks, energy markets
            and economies around the world.
          </p>
        </header>

        <section
          aria-label="Global impact indicators"
          className="mt-24 grid gap-6 md:grid-cols-3"
        >

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
