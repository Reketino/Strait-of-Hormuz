import { fetchNews } from "@/lib/news/news";
import { manualStatus } from "@/lib/manualStatus";
import { getOilPrice } from "@/lib/oil/oil";

export const runtime = "edge";

export async function GET() {
    const [events, oil] = await Promise.all([fetchNews(), getOilPrice()]);

    return Response.json({
        status: manualStatus,
        events: events.slice(0, 5),
        oil,
        updatedAt: new Date().toISOString(),
    });   
}