import { fetchNews } from "@/lib/news/news";
import { manualStatus } from "@/lib/manualStatus";
import { getOilPrice } from "@/lib/oil/oil";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const [newsResult, oilResult] = await Promise.allSettled([
    fetchNews(),
    getOilPrice(),
  ]);

  if (newsResult.status == "rejected") {
    console.error("News API failed:", newsResult.reason);
  }

  if (oilResult.status === "rejected") {
    console.error("Oil API failed:", oilResult.reason);
  }

  const events =
    newsResult.status === "fulfilled" ? newsResult.value.slice(0.5) : null;

  const oil = oilResult.status === "fulfilled" ? oilResult.value : null;

  return Response.json({
    status: manualStatus,
    events,
    oil,
    updatedAt: new Date().toISOString(),
  });
}
