import { createFileRoute } from "@tanstack/react-router";
import { Star, ExternalLink } from "lucide-react";
import { AppShell, Card, SectionLabel } from "@/components/AppShell";
import hardwareViz from "@/assets/hardware-viz.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects // Jils Joseph" },
      {
        name: "description",
        content: "Selected hardware & software projects: dashboards, IoT, embedded systems.",
      },
      { property: "og:title", content: "Projects // Jils Joseph" },
      { property: "og:description", content: "Selected hardware & software projects." },
    ],
  }),
  component: ProjectsPage,
});

const small = [
  {
    name: "TacTacToe",
    desc: "Minimax-driven AI opponent with logical tree pruning.",
    tags: ["JS", "AI"],
  },
  {
    name: "BobFever",
    desc: "Schema-based fever-tracking with telemetry plots.",
    tags: ["VUE", "API"],
  },
];

function ProjectsPage() {
  return (
    <AppShell breadcrumb="jils_joseph / root / projects">
      <SectionLabel>L01_02 // PROJECTS_REPO</SectionLabel>
      <h1 className="font-display font-bold text-4xl md:text-5xl">Projects</h1>

      {/* Featured */}
      <Card className="mt-6 !p-0 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-outline-variant">
          <span className="label-caps text-accent-lime">FEATURED_001</span>
          <span className="code-sm text-on-surface-variant">{"</>"}</span>
        </div>
        <img
          src={hardwareViz}
          alt="Dashboard"
          width={1024}
          height={400}
          loading="lazy"
          className="w-full h-44 md:h-56 object-cover"
        />
        <div className="p-5">
          <h2 className="font-display text-xl font-semibold">Student Dashboard Portal</h2>
          <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
            Integrated management system for academic tracking, featuring real-time data
            synchronization and modular widgets.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["REACT", "TYPESCRIPT", "SUPABASE", "WEBSOCKET"].map((t) => (
              <span
                key={t}
                className="code-sm px-2 py-1 rounded-sm bg-surface-low text-primary-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Card>

      {/* Small grid */}
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {small.map((p) => (
          <Card key={p.name}>
            <div className="flex items-center justify-between">
              <div className="font-display font-semibold">{p.name}</div>
              <ExternalLink className="w-3.5 h-3.5 text-on-surface-variant" />
            </div>
            <p className="mt-2 text-sm text-on-surface-variant">{p.desc}</p>
            <div className="flex gap-2 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="code-sm px-2 py-0.5 rounded-sm bg-surface-low text-primary-dim"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* To-do list mini */}
      <Card className="mt-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-semibold">To-do List</div>
          <ExternalLink className="w-3.5 h-3.5 text-on-surface-variant" />
        </div>
        <p className="mt-2 text-sm text-on-surface-variant">
          Minimalist productivity tool with local storage persistence.
        </p>
      </Card>

      {/* Stat strip */}
      <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-sm border border-accent-lime/40 bg-accent-lime/5">
        <Star className="w-4 h-4 text-accent-lime" />
        <span className="label-caps text-accent-lime">TOTAL_COMMITS: 2,348 // SYSTEM_STABLE</span>
      </div>
    </AppShell>
  );
}
