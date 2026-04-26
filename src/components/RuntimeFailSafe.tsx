"use client";

import { useEffect } from "react";
import { isIOSWebKit, isSafariBrowser } from "@/lib/browser";
import { markRender } from "@/lib/runtimeDiagnostics";

/**
 * Global handlers: log errors and mark promise rejections handled where supported.
 * Enhanced iOS Safari error handling.
 */
export function RuntimeFailSafe() {
  markRender("RuntimeFailSafe");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const safariMode = isSafariBrowser() || isIOSWebKit();
    const isIOS = isIOSWebKit();
    
    if (safariMode) {
      document.documentElement.classList.add("safari-webkit");
      document.documentElement.setAttribute("data-browser", "safari");
    }
    
    if (isIOS) {
      document.documentElement.classList.add("ios-device");
      // Prevent iOS Safari from zooming on input focus
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
        metaViewport.setAttribute('content', 
          'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover'
        );
      }
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
          isIOS,
        });
        // Prevent iOS from showing the error page
        if (isIOS) {
          event.preventDefault();
          event.stopPropagation();
        }
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
          isIOS,
        });
        // Always prevent default to avoid iOS error screen
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
          isIOS,
        });
      } catch {
        /* ignore */
      }
      // Return true to prevent iOS error screen
      return true;
    };

    window.onunhandledrejection = function (event) {
      try {
        console.error("Unhandled Promise:", event.reason, {
          lastRendered: window.__lastRenderedComponent__ ?? "unknown",
          isIOS,
        });
        // Prevent iOS error screen
        event.preventDefault();
      } catch {
        /* ignore */
      }
    };

    window.addEventListener("error", onWindowError, true);
    window.addEventListener("unhandledrejection", onRejection, true);

    return () => {
      window.removeEventListener("error", onWindowError, true);
      window.removeEventListener("unhandledrejection", onRejection, true);
      window.onerror = null;
      window.onunhandledrejection = null;
      document.documentElement.classList.remove("safari-webkit");
      document.documentElement.classList.remove("ios-device");
      document.documentElement.removeAttribute("data-browser");
    };
  }, []);

  return null;
}
