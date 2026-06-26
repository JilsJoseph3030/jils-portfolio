import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";



function NotFoundComponent() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display font-bold text-primary-dim">404</h1>
        <h2 className="mt-4 label-caps text-on-surface-variant">SEGMENT_NOT_FOUND</h2>
        <p className="mt-2 text-sm text-on-surface-variant font-mono">
          {">"} the requested route does not exist on this circuit.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center label-caps justify-center rounded-sm border border-primary-dim text-primary-dim px-4 py-2.5 hover:bg-primary-dim/10 transition"
          >
            RETURN_HOME →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    // No external branding/error reporter.
  }, [error]);

  return (

    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold">Runtime fault detected</h1>
        <p className="mt-2 text-sm text-on-surface-variant font-mono">
          {">"} an unexpected exception interrupted the signal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center label-caps rounded-sm border border-primary-dim text-primary-dim px-4 py-2.5 hover:bg-primary-dim/10"
          >
            RETRY
          </button>
          <a
            href="/"
            className="inline-flex items-center label-caps rounded-sm border border-outline-variant px-4 py-2.5 hover:bg-surface-high"
          >
            GO HOME
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jils Joseph — Engineering Precision in the Silicon Age" },
      { name: "description", content: "Portfolio of Jils Joseph: B.Tech Electronics & Computer Engineering student at SJCET Palai. Hardware-software co-design, embedded systems, digital logic." },
      { property: "og:title", content: "Jils Joseph — Engineering Precision" },
      { property: "og:description", content: "Electronics & Computer Engineering portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
