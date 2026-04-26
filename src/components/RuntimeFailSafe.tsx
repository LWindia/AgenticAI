"use client";

import { useEffect } from "react";
import { isIOSWebKit, isSafariBrowser } from "@/lib/browser";
import { markRender } from "@/lib/runtimeDiagnostics";

/**
 * Global handlers: log errors and mark promise rejections handled where supported.
 */
export function RuntimeFailSafe() {
  markRender("RuntimeFailSafe");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const safariMode = isSafariBrowser() || isIOSWebKit();
    if (safariMode) {
      document.documentElement.classList.add("safari-webkit");
      document.documentElement.setAttribute("data-browser", "safari");
    }

    const onWindowError = (event: Event) => {
      try {
        const ev = event as ErrorEvent;
        console.error("[window error]", {
          message: ev.message,
          error: ev.error,
          filename: ev.filename,
          line: ev.lineno,
          column: ev.colno,
          lastRendered: window.__lastRenderedComponent__ ?? "unknown",
        });
      } catch {
        /* logging must not throw */
      }
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      try {
        const reason =
          event.reason instanceof Error
            ? event.reason.message
            : typeof event.reason === "string"
              ? event.reason
              : "unhandled rejection";
        console.error("[unhandledrejection]", {
          reason,
          value: event.reason,
          lastRendered: window.__lastRenderedComponent__ ?? "unknown",
        });
        event.preventDefault();
      } catch {
        try {
          event.preventDefault();
        } catch {
          /* ignore */
        }
      }
    };

    window.onerror = function (msg, url, line, col, error) {
      try {
        console.error("Global Error:", {
          msg,
          url,
          line,
          col,
          error,
          lastRendered: window.__lastRenderedComponent__ ?? "unknown",
        });
      } catch {
        /* ignore */
      }
      return true;
    };

    window.onunhandledrejection = function (event) {
      try {
        console.error("Unhandled Promise:", event.reason, {
          lastRendered: window.__lastRenderedComponent__ ?? "unknown",
        });
      } catch {
        /* ignore */
      }
    };

    window.addEventListener("error", onWindowError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onWindowError);
      window.removeEventListener("unhandledrejection", onRejection);
      window.onerror = null;
      window.onunhandledrejection = null;
      document.documentElement.classList.remove("safari-webkit");
      document.documentElement.removeAttribute("data-browser");
    };
  }, []);

  return null;
}
