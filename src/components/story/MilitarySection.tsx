export default function MilitarySection() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
            <article className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2 lg:items-center">
                <header>
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-500">
                        Military presence
                    </p>

                    <h2 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
                        A waterway
                        <br />
                        under watch.
                    </h2>

                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300">
                    The Strait of Hormuz is not only a vital commercial route. It is
                    also an area of intense military and geopolitical activity.  
                    </p>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                    Iran maintains a significant military presence around the Strait,
                    while foreign naval forces have operated in the wider region to
                    protect shipping and maintain freedom of navigation.  
                    </p>
                </header>

                 <figure className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_60%)]" />

                 <section
                 aria-label="Military activity indicators"
                 className="relative flex h-full flex-col justify-between p-8"
                 >
                    <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                        Strait of Hormuz
                    </p>

                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-red-400">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                          High tension  
                    </span>
                    </header>

                    <figure className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_60%)]" />

                    <section
                    aria-label="Military activity indicators"
                    className="relative flex h-full flex-col justify-between p-8"
                    >
                        <header className="flex items-center justify-between border-b border-white/10 pb-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                            Strait of Hormuz
                        </p>
                        </header>
                    </section>


                    </figure>
                 </section>
                 
                 </figure>
            </article>
        </section>
    )
}