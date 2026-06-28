import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Cpu, Radio, Boxes } from "lucide-react";
import { AppShell, Card, SectionLabel } from "@/components/AppShell";

export const Route = createFileRoute("/tech-stack")({
  head: () => ({
    meta: [
      { title: "Tech Stack // Jils Joseph" },
      {
        name: "description",
        content: "Core competencies across hardware, embedded systems, and software.",
      },
      { property: "og:title", content: "Tech Stack // Jils Joseph" },
      { property: "og:description", content: "Core competencies: hardware, embedded, software." },
    ],
  }),
  component: TechPage,
});

const langs = [
  { pct: "0x01", name: "C++", note: "+12.0%_yr" },
  { pct: "0x02", name: "C", note: "embedded_iot" },
  { pct: "0x03", name: "JS", note: "+8.2%_yr" },
  { pct: "0x04", name: "VHDL", note: "+15.1%_yr" },
];

const focus = [
  {
    icon: Cpu,
    title: "ARTIFICIAL_INTELLIGENCE",
    desc: "Exploring neural architectures and generative models.",
  },
  {
    icon: Radio,
    title: "EMBEDDED_SYSTEMS",
    desc: "React-based interfaces and firmware optimization.",
  },
  {
    icon: Boxes,
    title: "ADVANCED_WEB_DEV",
    desc: "High-performance reactive interfaces and 3D graphics.",
  },
];

function TechPage() {
  return (
    <AppShell breadcrumb="jils_joseph / root / tech-stack">
      <SectionLabel>L02_01 // SYSTEM_INFO</SectionLabel>
      <h1 className="font-display font-bold text-4xl md:text-5xl">Tech Stack // Jils Joseph</h1>

      <Card className="mt-6">
        <p className="font-mono text-sm text-on-surface italic">
          “Bridging the gap between digital logic and physical engineering.”
        </p>
      </Card>

      <div className="mt-4">
        <div className="label-caps text-on-surface-variant mb-2">EDUCATION_NODE</div>
        <Card>
          <div className="font-display text-lg font-semibold">
            B.Tech in Electronics &amp; Computer Engineering
          </div>
          <div className="mt-1 text-on-surface-variant text-sm">
            St. Joseph's College of Engineering and Technology, Palai
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <SectionLabel>CORE_COMPETENCIES</SectionLabel>
        <Card>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 font-mono">
            {langs.map((l) => (
              <div key={l.name}>
                <div className="text-accent-lime text-sm">{l.pct}</div>
                <div className="font-display text-2xl font-bold text-on-surface">{l.name}</div>
                <div className="text-xs text-on-surface-variant mt-0.5">{l.note}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <div className="label-caps text-on-surface-variant mb-2">FOCUS_AREAS</div>
        <Card className="!p-0">
          {focus.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`flex gap-3 p-4 ${i > 0 ? "border-t border-outline-variant" : ""}`}
              >
                <div className="w-9 h-9 shrink-0 rounded-sm bg-accent-lime/10 border border-accent-lime/40 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent-lime" />
                </div>
                <div>
                  <div className="label-caps text-accent-lime">{f.title}</div>
                  <div className="text-sm text-on-surface-variant mt-1">{f.desc}</div>
                </div>
              </div>
            );
          })}
        </Card>
      </div>

      <TerminalInput />
    </AppShell>
  );
}

function TerminalInput() {
  const [val, setVal] = useState("");
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => p + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-6 flex items-center gap-2 px-3 py-3 bg-surface-container border border-outline-variant font-mono text-sm">
      <span className="text-accent-lime">{">"}</span>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="awaiting_input..."
        className="flex-1 bg-transparent outline-none text-on-surface placeholder:text-on-surface-variant"
      />
      <span
        className={`inline-block w-2 h-4 bg-accent-lime ${phase % 2 ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
