import { safeJsonFromResponse } from "@/lib/safeJson";

/**
 * Read error message from a failed Response without throwing (no response.json()).
 */
export async function readJsonErrorMessage(
  response: Response,
  fallback: string,
): Promise<string> {
  const ct = response.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) return fallback;
  const data: unknown = await safeJsonFromResponse(response);
  if (data && typeof data === "object" && "error" in data) {
    const err = (data as { error?: unknown }).error;
    if (typeof err === "string" && err.trim()) return err;
  }
  return fallback;
}
