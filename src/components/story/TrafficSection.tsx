const ships = [
  "VLCC Tanker",
  "LNG Carrier",
  "Container Ship",
  "Naval Vessel",
]

export default function TrafficSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">
      <article className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:items-center">
        <header>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Shipping
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Hundreds of ships
            <br />
            every single day.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300">
            Oil tankers, LNG carriers, container ships and naval vessels all
            share one narrow maritime corridor.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Even a temporary disruption can delay global trade and affect energy
            prices around the world.
          </p>

          <section
            aria-label="Illustration of shipping lanes"
            className="space-y10"
          >
            {ships.map((ship) => (
              <article key={ship} className="space-y-2">
                <header className="flex justify-between text-sm text-gray-500">
                  <span>Oil Tanker</span>
                  <span>Eastbound</span>
                </header>

                <div className="h-1 rounded-full bg-white/10" />
              </article>
            ))}
          </section>
        </header>
      </article>
    </section>
  );
}
