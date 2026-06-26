import Image from "next/image";

export default function MapSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <figure className="absolute inset-0">
        <Image
        src="horrmuz-map.webp"
        alt="Map of the Strait of Hormuz"
        className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </figure>
    </section>
  );
}
