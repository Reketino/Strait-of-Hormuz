import { fetchNews } from "@/lib/news/news";
import { manualStatus } from "@/lib/manualStatus";
import { getOilPrice } from "@/lib/oil/oil";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const [newsResult, oilResult] = await Promise.all([fetchNews(), getOilPrice()]);

  const events = newsResult.status === "fulfilled"
  ? newsResult.value.slice(0.5)
  : null;
  
  return Response.json({
    status: manualStatus,
    events,
    oil,
    updatedAt: new Date().toISOString(),
  });
}
