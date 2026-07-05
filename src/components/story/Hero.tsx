import Image from "next/image";

export default function StoryPage() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <figure className="absolute inset-0 bg-black">
          <Image
            src="/hormuz-hero.webp"
            alt="Aerial view of the Strait of Hormuz"
            fill
            priority
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />
        </figure>

        <article className="relative z-10 max-w-4xl px-6 text-center text-white">
          <header>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Strait of Hormuz
            </p>

            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              The Strait That
              <br />
              Powers the world
            </h1>
          </header>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            A narrow maritime corridor where oil, military strategy, global
            economics, Donald Trump & ayathollahs collide.
          </p>
        </article>
      </section>
    </main>
  );
}
