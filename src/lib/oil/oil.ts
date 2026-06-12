export type OilData = {
  price: number;
  change: number;
  updatedAt: number;
};

export async function getOilPrice(): Promise<OilData> {
  const res = await fetch(
    "https://api.api-ninjas.com/v1/commodityprice?name=crude_oil",
    {
      headers: {
        "X-api-key": process.env.NINJA_API_KEY!,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    console.error("Oil API error:", res.status, await res.text());
    
    return {
      price: 0,
      change: 0,
      updatedAt: Date.now()
    };
  }

  const data = await res.json();

  return {
    price: data.price,
    change: data.change ?? 0,
    updatedAt: Date.now(),
  };
}
