import { isAllowedSource, isBlocked } from "./filter";
import { EventItem } from "@/types/status";

export async function fetchNews(): Promise<EventItem[]> {
  const today = new Date();
  const from = new Date(
    today.getTime() - 1000 * 60 * 60 * 48
  ).toISOString();
  
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=("strait of hormuz" OR "hormuz strait")&from=${from}&language=en&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`,
    { next: { revalidate: 60 * 60 * 4 } } as RequestInit,
  );

  const data = await res.json();

  if (!data.articles) {
    console.error("News API is having a tuff time:", data);
    return [];
  }

  return data.articles
    .filter((a: any) => !isBlocked(a.url))
    .map((a: any) => ({
      title: a.title,
      source: a.source.name,
      url: a.url,
      publishedAt: a.publishedAt,
    }));
}
