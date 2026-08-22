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
                </header>
            </article>
        </section>
    )
}