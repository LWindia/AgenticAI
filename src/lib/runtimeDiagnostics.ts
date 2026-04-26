"use client";

declare global {
  interface Window {
    __lastRenderedComponent__?: string;
  }
}

export function markRender(componentName: string): void {
  if (typeof window === "undefined") return;
  try {
    window.__lastRenderedComponent__ = componentName;
    console.log("Rendering:", componentName);
  } catch {
    /* diagnostics must never throw */
  }
}
