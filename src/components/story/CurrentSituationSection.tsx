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

                            <h3 className="mt-6 text-3xl font-bold">
                                United States strikes Iran
                            </h3>
                        </header>

                        <p className="mt-6 text-base leading-relaxed text-gray-400">
                            US military action against Iran has turned an already tense
                            region into an active war zone.
                        </p>
                    </article>

                    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-8">
                        <header>
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                02 - The response
                            </p>

                            <h3 className="mt-6 text-3xl font-bold">
                                Iran closes Hormuz.
                            </h3>
                        </header>

                        <p className="mt-6 text-base leading-relaxed text-gray-400">
                            Iran responds by restricting traffic through the Strait,
                            turning control of the world's energy chokepoint into a weapon
                            of war.
                        </p>
                    </article>

                    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-8">
                        <header>
                            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                03 — The consequence
                            </p>

                            <h3 className="mt-6 text-3xl font-bold">
                                The world feels the impact.
                            </h3>
                        </header>

                        <p className="mt-6 text-base leading-relaxed text-gray-400">
                            Shipping is disrupted, energy markets react, and governments
                            around the world are forced to confront the consequences of a
                            conflict at one of the planet's most important chokepoints.
                        </p>
                    </article>
                </section>

                <footer className="mt-32 border-t border-white/10 pt-8">
                    <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
                        The Strait of Hormuz is no longer simply a route for global
                        commerce. It has become one of the defining strategic pressure
                        points of the war.
                    </p>
                </footer>
            </article>
        </section>
    );
}