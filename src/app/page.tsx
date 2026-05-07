import Background from "@/components/Background";
import Status from "@/components/Status";
import Events from "@/components/Events";
import { getStatusData } from "@/lib/getStatus";
import Oil from "@/components/Brentcrude";
import LiveData from "@/components/LiveData";

export default async function Page() {
  const data = await getStatusData();

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white p-4">
      <Background />

      <h1 className="text-4xl font-bold mb-6 tracking-tight">
        Is Strait of Hormuz Open?
      </h1>

      <LiveData initialData={data} />
    </main>
  );
}
