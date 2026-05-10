"use client";

import { useEffect, useState } from "react";
import { formatTimeAgo } from "@/lib/utils/time";

type Event = {
  title: string;
  url: string;
  source: string;
};

type Props = {
  events: Event[];
  updatedAt: string;
};

export default function Events({ events, updatedAt }: Props) {
  const [timeAgo, setTimeAgo] = useState(formatTimeAgo(updatedAt));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(updatedAt));
    }, 60000);

    return () => clearInterval(interval);
  }, [updatedAt]);

  return (
    <section className="max-w-xl w-full mt-8">
      <header className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            News
          </p>
        </div>

        <p className="text-xs text-gray-500">Updated: {timeAgo}</p>
      </header>

      <ul className="overflow-hidden rounded-3xl backdrop-blur-2xl border border-white/10  bg-white/4 shadow-2xl shadow-black/30">
        {events.map((event, i) => (
          <a
            key={i}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 px-5 py-4 transition-all duration-300 hover:bg-white/6"
          >
            <div className="flex flex-col items-center">
              <span className=" mt-1 text-xs font-medium text-gray-500 w-5">
                {i + 1}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <img
                src={`https://www.google.com/s2/favicons?domain=${new URL(event.url).hostname}&sz=32`}
                alt="News Source"
                className="w-4 h-4 rounded-sm"
                />

                <span className="text-[11px] uppercase tracking-wide text-gray-500">
                  {event.source}
                </span>
              </div>
              <span className="text-sm text-gray-200 transition-colors duration-300 group-hover:text-white leading-relaxed">
                {event.title}
              </span>
            </div>

            <span className="text-gray-600 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white">
              ↗️
            </span>
          </a>
        ))}
      </ul>
    </section>
  );
}
