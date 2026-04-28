"use client";

import type { ReactNode } from "react";

export function SafeRender({ children }: { children: ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    try {
      console.error("Render crash:", error);
    } catch {
      /* ignore */
    }
    return null;
  }
}
