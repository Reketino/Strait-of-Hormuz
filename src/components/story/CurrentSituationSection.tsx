export default function CurrentSituationSecttion() {
    return (
        <section className="relative overflow-hidden bg-neutral-950 py-40">
            <article className="mx-auto max-w-7xl px-6">
                <header className="max-w-4xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
                        Current situation
                    </p>

                    <h2 className="text-5xl font-black leading-none tracking-tight md:text-8xl">
                        Hormuz
                        <br />
                        is now a battlefiled
                    </h2>

                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-300">
                        What was once one of the world's most important shipping
                        corridors has become a central part of the conflict between the
                        United States and Iran.
                    </p>
                </header>

                <section
                aria-label="Current conflict developments"
                className="mt-32 grid gap-6 lg:grid-cols-3"
                >
                    <article className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/4 p-8">
                    <header>
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                            01 — The attack
                        </p>
                    </header>
                    </article>
                </section>
            </article>

        </section>
    )
}