/**
 * localStorage / sessionStorage can throw in Safari private mode, strict ITP, or quota errors.
 */

function getStorage(kind: "local" | "session"): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return null;
  }
}

export function safeStorageGet(key: string, kind: "local" | "session" = "local"): string | null {
  try {
    const s = getStorage(kind);
    if (!s) return null;
    return s.getItem(key);
  } catch {
    return null;
  }
}

export function safeStorageSet(
  key: string,
  value: string,
  kind: "local" | "session" = "local",
): void {
  try {
    const s = getStorage(kind);
    if (!s) return;
    s.setItem(key, value);
  } catch {
    /* quota / private mode */
  }
}

export function safeStorageRemove(key: string, kind: "local" | "session" = "local"): void {
  try {
    const s = getStorage(kind);
    if (!s) return;
    s.removeItem(key);
  } catch {
    /* ignore */
  }
}
