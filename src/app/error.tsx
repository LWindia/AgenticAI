"use client";

/**
 * Route-level error boundary (App Router). Catches render errors in the segment tree
 * so Safari/WebKit does not leave users on a blank tab after an uncaught exception.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-black px-6 py-16 text-center text-white">
      <h1 className="mb-2 text-xl font-semibold">Something went wrong</h1>
      <p className="mb-8 max-w-md text-sm text-zinc-400">
        The page hit an unexpected error. This is not a network failure — try again, or
        return to the home page.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-400"
        >
          Home
        </a>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <p className="mt-8 max-w-lg break-all font-mono text-xs text-red-400/90">
          {error?.message ?? "Unknown error"}
        </p>
      ) : null}
    </div>
  );
}
