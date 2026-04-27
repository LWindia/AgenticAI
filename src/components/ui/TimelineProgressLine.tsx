"use client";

import { useEffect, useRef } from "react";

export function TimelineProgressLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const line = lineRef.current;
      const fill = fillRef.current;
      if (!line || !fill) return;

      const rect = line.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const start = viewport * 0.22;
      const end = viewport * 0.78;
      const progress = (end - rect.top) / (rect.height + end - start);
      const clamped = Math.max(0, Math.min(progress, 1));
      fill.style.transform = `scaleY(${clamped})`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={lineRef}
      aria-hidden
      className="absolute left-8 top-0 bottom-0 w-[3px] overflow-hidden rounded-full bg-purple-950/80 md:left-8"
    >
      <div
        ref={fillRef}
        className="h-full origin-top rounded-full bg-gradient-to-b from-purple-400 via-fuchsia-500 to-pink-500"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}
