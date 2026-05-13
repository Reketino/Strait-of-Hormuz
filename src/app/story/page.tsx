
export default function StoryPage(){
    return(
<section className="relative h-screen flex items-center justify-center overflow-hidden">
 <header className="absolute inset-0 bg-black">
    <img
    src="/hormuz-hero.webp"
    alt=""
    className="w-full h-full object-cover opacity-40"
    />

    <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black" />
</header>

<div className="">
    <p className="">
        Strait of Hormuz
    </p>

    <h1 className="">
        The Strait That
        <br />
        Powers the world
    </h1>
</div>

<p className="">
    A narrow maritime corridor where oil, military strategy,
    and global economics collide.
</p>

</section>
)
}