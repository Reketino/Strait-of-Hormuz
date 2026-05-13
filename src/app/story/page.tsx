
export default function StoryPage(){
    return(
        <main>
<section className="relative h-screen flex items-center justify-center overflow-hidden">
 <figure className="absolute inset-0 bg-black">
    <img
    src="/hormuz-hero.webp"
    alt=""
    className="w-full h-full object-cover opacity-40"
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />
</figure>

<article className="">
    <header>
    <p className="">
        Strait of Hormuz
    </p>

    <h1 className="">
        The Strait That
        <br />
        Powers the world
    </h1>
</header>

<p className="">
    A narrow maritime corridor where oil, military strategy,
    and global economics collide.
</p>
</article>
</section>
</main>
);
}