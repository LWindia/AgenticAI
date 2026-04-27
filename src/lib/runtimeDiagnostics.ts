declare global {
  interface Window {
    __lastRenderedComponent__?: string;
  }
}

// No-op in production — console.log on every render causes Safari memory pressure
export function markRender(_componentName: string): void {
  // intentionally empty
}
