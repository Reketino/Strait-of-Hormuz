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
                </header>

                
            </article>
        </section>
    )
}