import Background from "@/components/Background";
import Status from "@/components/Status";
import Events from "@/components/Events";
import { getStatusData } from "@/lib/getStatus";
import Oil from "@/components/Brentcrude";

export default async function Page() {
  const data = await getStatusData();

  return (
    <main className="
    relative min-h-screen
    flex flex-col
    items-center justify-center
    text-white p-4
    ">
      <Background />

    <h1 className="text-4xl font-bold mb-6 tracking-tight">
      Is Strait of Hormuz Open?
    </h1>

    <section className="flex flex-col items-center">
    <Status status={data.status} />
    <Oil price={data.oil.price} change={data.oil.change} />
    </section>

    <p className="text-sm text-gray-400">
      Updated: {new Date(data.updatedAt).toLocaleTimeString()}
    </p>

    <Events events={data.events} />

    </main>
  )
}
