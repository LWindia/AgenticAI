"use client";

/**
 * Root-level fallback when the root layout fails. Must define <html> and <body>.
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white antialiased">
        <h1 className="mb-2 text-xl font-semibold">Application error</h1>
        <p className="mb-8 max-w-md text-sm text-zinc-400">
          Please try again. If the problem continues, open the site in a new tab.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Try again
        </button>
        {process.env.NODE_ENV === "development" ? (
          <p className="mt-8 max-w-lg break-all font-mono text-xs text-red-400/90">
            {error?.message ?? "Unknown error"}
          </p>
        ) : null}
      </body>
    </html>
  );
}
