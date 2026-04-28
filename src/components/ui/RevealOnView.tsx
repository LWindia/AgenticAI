"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealOnViewProps = PropsWithChildren<{
  className?: string;
  variant?: "up" | "scale";
  delayMs?: number;
}>;

export default function RevealOnView({
  children,
  className = "",
  variant = "up",
  delayMs = 0,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const canAnimate = isDesktop && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!canAnimate) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), delayMs);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const motionClass = variant === "scale" ? "reveal-scale" : "reveal-up";

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      className={`${motionClass} ${className}`}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
