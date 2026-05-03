export type OilData = {
    price: number;
    change: number;
    updatedAt: number;
};

let cache: OilData | null = null;
let lastFetch = 0;

const CACHE_TIME = 15 * 60 * 1000;
