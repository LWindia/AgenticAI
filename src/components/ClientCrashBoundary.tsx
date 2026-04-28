"use client";

import React, { type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; fallback?: ReactNode };

type State = { hasError: boolean };

/**
 * Catches render/lifecycle errors in the subtree (App Router segment error.tsx does not catch all client-only throws).
 */
export class ClientCrashBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    try {
      console.error("[ClientCrashBoundary]", error, info?.componentStack);
    } catch {
      /* ignore */
    }
  }

  private handleRetry = () => {
    try {
      this.setState({ hasError: false });
    } catch {
      /* ignore */
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center bg-black px-6 py-16 text-center text-white">
          <p className="mb-2 text-lg font-semibold">Something went wrong</p>
          <p className="mb-8 max-w-md text-sm text-zinc-400">
            The interface hit an unexpected error. You can try again or return home.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={this.handleRetry}
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
        </div>
      );
    }
    return this.props.children;
  }
}
