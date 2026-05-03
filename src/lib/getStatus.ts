import { fetchNews } from "./news/news";
import { manualStatus } from "./manualStatus";
import { getOilPrice } from "./oil/oil";

export async function getStatusData() {
    const [events, oil] = await Promise.all([
        fetchNews(),
        getOilPrice(),
    ]);

    return {
        status: manualStatus,
        events: events.slice(0, 5),
        oil,
        updatedAt: new Date().toISOString(),
    };
}