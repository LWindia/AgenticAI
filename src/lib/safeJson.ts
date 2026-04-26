/**
 * Never use raw response.json() on untrusted responses — Safari/WebKit and strict
 * parsers can throw on HTML/empty/malformed bodies (e.g. CDN 502 pages).
 */

export async function safeJsonFromResponse<T = unknown>(
  response: Response,
): Promise<T | null> {
  try {
    const text = await response.text();
    if (!text || !text.trim()) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export function safeJsonParse<T = unknown>(text: string): T | null {
  try {
    if (!text || !text.trim()) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

export type SafeRequestJsonResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; status: number };

/**
 * Read App Router POST body without throwing on invalid JSON.
 */
export async function safeReadRequestJson<T = unknown>(
  request: Request,
): Promise<SafeRequestJsonResult<T>> {
  let text = "";
  try {
    text = await request.text();
  } catch {
    return { ok: false, error: "Could not read request body.", status: 400 };
  }
  const trimmed = text.trim();
  if (!trimmed) {
    return { ok: false, error: "Empty request body.", status: 400 };
  }
  const data = safeJsonParse<T>(trimmed);
  if (data === null) {
    return { ok: false, error: "Invalid JSON payload in the request body.", status: 400 };
  }
  return { ok: true, data };
}
