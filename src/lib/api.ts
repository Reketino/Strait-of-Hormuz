import { headers } from "next/headers";
import { StraitStatus } from "@/types/status";

export type ApiResponse = {
  status: StraitStatus;
  events: {
    title: string;
    url: string;
  }[];
  updatedAt: string;
};

export async function getStatusData(): Promise<ApiResponse> {
  const headersList = headers();

  const host = (await headersList).get("host");
  const protcol = process.env.NODE_ENV === "development" ? "http" : "https";

  if (!host) {
    throw new Error("We have lost host header");
  }
  const res = await fetch(`${protcol}://${host}/api/status`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch status");
  }
  return res.json();
}
