import { Link, useRouterState } from "@tanstack/react-router";
import { Terminal, Code2, GitBranch, Sparkles, AudioWaveform } from "lucide-react";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "ROOT", icon: Terminal },
  { to: "/projects", label: "CODE", icon: Code2 },
  { to: "/tech-stack", label: "PATH", icon: GitBranch },
  { to: "/connect", label: "LINK", icon: Sparkles },
] as const;

export function AppShell({
  breadcrumb,
  children,
}: {
  breadcrumb: string;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-[rgb(10_10_10_/_0.7)] border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 label-caps text-on-surface">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-accent-lime text-[#0a0a0a]">
              <Terminal className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-on-surface-variant">{breadcrumb}</span>
          </div>
          <AudioWaveform className="w-5 h-5 text-on-surface-variant" />
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-5 md:px-10 pt-6 pb-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-8 pb-28 text-center">
        <div className="font-display font-semibold tracking-wide">JILS_JOSEPH</div>
        <div className="label-caps text-on-surface-variant mt-2">
          © 2026 JILS_JOSEPH // BUILD_REV_2.0.4
        </div>
        <div className="mt-3 flex justify-center gap-6 label-caps">
          <a href="https://github.com/JilsJoseph3030" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary-dim underline-offset-4 hover:underline">GITHUB</a>
          <a href="https://www.linkedin.com/in/jils-joseph-baba6932b" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary-dim underline-offset-4 hover:underline">LINKEDIN</a>
        </div>
      </footer>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 backdrop-blur-xl bg-[rgb(10_10_10_/_0.85)] border-t border-outline-variant">
        <div className="max-w-5xl mx-auto px-5 md:px-10 h-20 grid grid-cols-4">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center gap-1.5 group"
              >
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-sm border transition-all ${
                    active
                      ? "bg-accent-lime/10 border-accent-lime text-accent-lime glow-lime"
                      : "border-transparent text-on-surface-variant group-hover:text-on-surface"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <span
                  className={`label-caps ${
                    active ? "text-accent-lime" : "text-on-surface-variant"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="label-caps text-accent-lime mb-3 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime pip-pulse" />
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface-container border border-outline-variant rounded-lg p-5 ${className}`}
    >
      {children}
    </div>
  );
}
