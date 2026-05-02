export type StraitStatus = "OPEN" | "DISRUPTED" | "CLOSED";

export interface EventItem {
    title: string;
    source: string;
    url: string;
    publishedAt: string;
}