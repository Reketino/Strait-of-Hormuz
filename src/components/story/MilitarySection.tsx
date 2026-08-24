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
                 
                 </figure>
            </article>
        </section>
    )
}