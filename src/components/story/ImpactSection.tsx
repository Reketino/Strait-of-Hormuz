type ImpactCardProps = {
  label: string;
  value: string;
  description: string;
};

const impacts: ImpactCardProps[] = [
  {
    label: "Strait status",
    value: "CLOSED",
    description: "Commercial shipping through the Strait of Hormuz has been severely disrupted by the conflict."
  },
  {
    label: "Global energy",
    value: "20%",
    description:
    "Tankers and other commercial vessels face delays, rerouting and increased risk."
  },
  {
    label: "Shipping",
    value: "DISRUPTED",
    description:
    "Tankers and other commercial vessels face delays, rerouting and increased risk."
  },
];

export default function ImapctSection() {
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
        
      </article>
    </section>
  )
  
}
