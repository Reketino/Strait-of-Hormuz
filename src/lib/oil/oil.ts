export type OilData = {
  price: number;
  change: number;
  updatedAt: number;
};

export async function getOilPrice(): Promise<OilData> {
  const res = await fetch(
    "https://api.api-ninjas.com/v1/commodityprice?name=brent_crude_oil",
    {
      headers: {
        "X-api-key": process.env.NINJA_API_KEY!,
      },
      next: {
        revalidate: 10,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Fetching of oil price has gone wrong");
  }

  const data = await res.json();

  return {
    price: data.price,
    change: data.change ?? 0,
    updatedAt: Date.now(),
  };
}
