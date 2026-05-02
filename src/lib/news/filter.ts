export const allowedSources = [
    "reuters",
    "bbc",
    "al jazeera",
    "associated press",
    "bloomberg",
];

export const blockedDomains = [
    "freerepublic.com",
    "blogspot.com",
    "wordpress.com"
];

export function isAllowedSource(name: string) {
    const normalized = name.toLowerCase();
    return allowedSources.some(src => normalized.includes(src));
}

export function isBlocked(url: string) {
    return blockedDomains.some(domain => url.includes(domain));
}