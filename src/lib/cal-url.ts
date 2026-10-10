import { connection } from "next/server";

/** Runtime read. Direct `process.env.NEXT_PUBLIC_*` access is inlined at `next build`. */
export function readCalUrl(env: Record<string, string | undefined> = process.env) {
  return (env.CAL_URL || env["NEXT_PUBLIC_CAL_URL"] || "").trim();
}

export function calEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.endsWith("cal.com")) return url;
    parsed.searchParams.set("embed", "true");
    return parsed.toString();
  } catch {
    return url;
  }
}

export async function calUrl() {
  await connection();
  return readCalUrl();
}
