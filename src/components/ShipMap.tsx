export default function ShipMap() {
  return (
  <section className="w-full max-w-6xl mt-10">
    <header className="flex items-center justify-between mb-3 px-1">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          Live Ship Traffic
        </p>
      </div>
      <p className="text-xs text-gray-500">Strait of Hormuz</p>
    </header>

    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/4 backdrop-blur-2xl shadow-2xl shadow-black/30">
      <iframe
        src="https://www.shiptraffic.net/tankers/HORMUZ%20STRAIT/ship-traffic-tracker"
        className="w-full h-150"
        loading="lazy"
      />
    </div>
  </section>
  );
}
