import { isAllowedSource, isBlocked } from "./filter";
import { EventItem } from "@/types/status";

export async function fetchNews(): Promise<EventItem[]> {
    const res = await fetch(
    `https://newsapi.org/v2/everything?q=strait of hormuz AND (attack OR blockade OR seized OR military OR navy)&language=en&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`,
     { next: { revalidate: 60 }, 
    } as RequestInit   
    );

    const data = await res.json();

    return data.articles
    .filter((a: any) => {
    return isAllowedSource(a.source.name) && !isBlocked(a.url);
    })
    .map((a: any) => ({
        title: a.title,
        source: a.source.name,
        url: a.url,
        publishedAt: a.publishedAt,
    }))
}