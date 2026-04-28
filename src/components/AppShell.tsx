"use client";

import type { ReactNode } from "react";
import { ClientCrashBoundary } from "@/components/ClientCrashBoundary";
import { RuntimeFailSafe } from "@/components/RuntimeFailSafe";
import { SafeRender } from "@/components/SafeRender";
import { markRender } from "@/lib/runtimeDiagnostics";

export function AppShell({ children }: { children: ReactNode }) {
  markRender("AppShell");

  return (
    <ClientCrashBoundary>
      <RuntimeFailSafe />
      <SafeRender>{children}</SafeRender>
    </ClientCrashBoundary>
  );
}
