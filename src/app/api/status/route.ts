import { fetchNews } from "@/lib/news/news";
import { manualStatus } from "@/lib/manualStatus";

export const runtime = "edge";

export async function GET() {
    const events = await fetchNews();

    return Response.json({
        status: manualStatus,
        events: events.slice(0, 5),
        updatedAt: new Date().toISOString(),
    });   
}