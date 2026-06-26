// Neutral error reporting (no Lovable branding / globals).
// For now, we only log to the console so the app works on any host (including Vercel).

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // eslint-disable-next-line no-console
  console.error("App error", {
    error,
    route: window.location.pathname,
    ...context,
  });
}

