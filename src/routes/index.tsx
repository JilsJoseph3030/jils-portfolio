import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, GraduationCap } from "lucide-react";
import { AppShell, Card } from "@/components/AppShell";
import hardwareViz from "@/assets/hardware-viz.jpg";
import cvAsset from "@/assets/Jils_Joseph_CV.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jils Joseph — Engineering Precision in the Silicon Age" },
      {
        name: "description",
        content: "B.Tech ER student. Hardware-software co-design, embedded systems, React.",
      },
      { property: "og:title", content: "Jils Joseph — Engineering Precision" },
      {
        property: "og:description",
        content: "ER portfolio: hardware-software co-design, embedded systems, React.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <AppShell breadcrumb="jils_joseph / root">
      {/* status pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-surface-container border border-outline-variant">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-lime pip-pulse" />
        <span className="label-caps text-accent-lime">SYSTEM_ACTIVE</span>
      </div>

      {/* terminal */}
      <div className="mt-5 bg-surface-container border border-outline-variant rounded-md p-4 font-mono text-sm">
        <div className="text-accent-lime">
          jils_joseph@sjcet:~$ <span className="text-on-surface">whoami</span>
        </div>
        <div className="text-on-surface-variant mt-1">Jils Joseph: B.Tech ER Student</div>
      </div>

      {/* Hero */}
      <h1 className="font-display font-bold text-[44px] md:text-[72px] leading-[1.05] tracking-tight mt-8">
        Engineering <span className="text-primary-dim">Precision</span> In The Silicon Age.
      </h1>

      <p className="mt-5 text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
        Electronics &amp; Computer Engineering @ SJCET, Palai. Specializing in hardware-software
        co-design, embedded systems, and digital logic.
      </p>

      {/* CTAs */}
      <div className="mt-8 space-y-3 max-w-md">
        <Link
          to="/projects"
          className="flex items-center justify-center gap-2 w-full label-caps rounded-sm border border-primary-dim text-primary-dim py-4 hover:bg-primary-dim/10 hover:glow-primary transition"
        >
          EXPLORE_PROJECTS <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href={cvAsset.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full label-caps rounded-sm border border-outline-variant text-on-surface py-4 hover:bg-surface-high transition"
        >
          VIEW_CV <Download className="w-4 h-4" />
        </a>
      </div>

      {/* Bento */}
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-start justify-between">
            <div className="label-caps text-on-surface-variant">INSTITUTION</div>
            <GraduationCap className="w-4 h-4 text-on-surface-variant" />
          </div>
          <div className="font-display text-2xl font-semibold mt-3">SJCET, Palai</div>
          <div className="mt-1 text-accent-lime font-mono text-sm font-medium">Dept. of ER</div>
        </Card>
        <Card>
          <div className="label-caps text-on-surface-variant">CORE_STACK</div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["C++", "REACT", "\\n", "PYTHON"].map((t) => (
              <span
                key={t}
                className="code-sm px-2 py-1 rounded-sm bg-surface-low text-primary-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </Card>
      </div>

      {/* Hardware image */}
      <div className="mt-10 relative">
        <div className="absolute -top-3 -left-3 w-full h-full border border-outline-variant rounded-lg rotate-[-2deg] opacity-40" />
        <div className="absolute -top-1 -left-1 w-full h-full border border-outline-variant rounded-lg rotate-[-1deg] opacity-60" />
        <div className="relative bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
          <img
            src={hardwareViz}
            alt="Microchip on PCB"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="px-4 py-3 border-t border-outline-variant label-caps text-on-surface-variant">
            HARDWARE_VISUALIZATION_V1.0
          </div>
        </div>
      </div>
    </AppShell>
  );
}
