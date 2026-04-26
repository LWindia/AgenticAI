"use client";

export function isSafariBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /^((?!chrome|android).)*safari/i.test(ua);
}

export function isIOSWebKit(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /iP(ad|hone|od)/i.test(ua) && /WebKit/i.test(ua);
}
