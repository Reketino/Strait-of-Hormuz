export default function Background() {
    return (
      <main className="fixed inset-0 -z-10">
        <img
        src="/hormuz.webp"
        alt="Hormuz Strait"
        className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"/>
      </main>  
    )
}