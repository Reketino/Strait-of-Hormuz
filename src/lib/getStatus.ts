import { fetchNews } from "./news/news";
import { manualStatus } from "./manualStatus";

export async function getStatusData() {
    const events = await fetchNews();

    return {
        status: manualStatus,
        events: events.slice(0, 5),
        updatedAt: new Date().toISOString(),
    };
}