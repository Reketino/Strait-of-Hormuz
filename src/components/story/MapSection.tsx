import Image from "next/image";

export default function MapSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <figure className="absolute inset-0">
        <Image
          src="hormuz-map.webp"
          alt="Map of the Strait of Hormuz"
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/60" />
      </figure>

      <article className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-400">
            Geography
          </p>
          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            One of the world's
            <br />
            most important chokepoints
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-gray-300">
            Connecting the Persian Gulf to the Gulf of Oman, the Strait of
            Hormuz serves as the primary export route for oil producers across
            the Middle East.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
              At its narrowest navigable point,
  shipping lanes are only a few kilometres wide.
  Every tanker entering or leaving the Persian Gulf
  must pass through this corridor.
          </p>
        </div>
      </article>
    </section>
  );
}
