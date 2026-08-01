type Ship = {
  name: string;
  direction: "Eastbound" | "Westbound";
  duration: number;
  delay: number;
};

const ships: Ship[] = [
  {
    name: "VLCC Tanker",
    direction: "Eastbound",
    duration: 18,
    delay: 0,
  },
  {
    name: "LNG Carrier",
    direction: "Westbound",
    duration: 22,
    delay: 3,
  },
  {
    name: "Container Ship",
    direction: "Eastbound",
    duration: 16,
    delay: 6,
  },
  {
    name: "Naval Vessel",
    direction: "Westbound",
    duration: 20,
    delay: 2,
  },
];

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
        </header>

        <section
          aria-label="Illustration of shipping lanes"
          className="space-y-10"
        >
          {ships.map((ship) => (
            <article key={ship.name} className="space-y-2">
              <header className="flex justify-between text-sm text-gray-500">
                <span>{ship.name}</span>

                <span className="text-gray-500">
                  {ship.direction == "Eastbound" ? "->" : "<-"} {ship.direction}
                </span>
              </header>

              <figure className="relative h-10 overflow-hidden">
              <span className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-white/10">

              <span
              aria-hidden="true"
              className={
                ship.direction === "Eastbound"
                ? "ship-east absolute top-1/2 -translate-y-1/2 text-2xl"
                : "ship-west absolute top-1/2 -translate-y-1/2 text-2xl"
              } 
              >

              </span>
              
              </span>
              
              </figure>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
}
