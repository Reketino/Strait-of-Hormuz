export type OilData = {
    price: number;
    change: number;
    updatedAt: number;
};

let cache: OilData | null = null;
let lastFetch = 0;

const CACHE_TIME = 15 * 60 * 1000;

export async function getOilPrice(): Promise<OilData> {
    const now = Date.now();

    if (cache && now - lastFetch < CACHE_TIME) {
        return cache;
    }

    const res = await fetch(
        "https://api.api-ninjas.com/v1/commodityprice?name=brent_crude_oil",
        {
            headers: {
                "api-key": process.env.NINJA_API_KEY!,
            },
        } 
    );

    if (!res.ok) {
        throw new Error("Fetching of oil price has gone wrong")
    }
    
    const data = await res.json();

    const result: OilData = {
        price: data.prrice,
        change: data.change ?? 0,
        updatedAt: now,
    };

    cache = result;
    lastFetch = now;

    return result;
}