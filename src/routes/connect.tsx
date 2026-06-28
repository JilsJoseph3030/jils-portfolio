import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Download, Play } from "lucide-react";
import { AppShell, Card, SectionLabel } from "@/components/AppShell";
import hardwareViz from "@/assets/hardware-viz.jpg";
import cvAsset from "@/assets/Jils_Joseph_CV.pdf.asset.json";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect // Jils Joseph" },
      {
        name: "description",
        content:
          "Open a contact channel — collaborations, internships, and engineering conversations welcome.",
      },
      { property: "og:title", content: "Connect // Jils Joseph" },
      {
        property: "og:description",
        content: "Initiate contact: collaborations and engineering conversations.",
      },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <AppShell breadcrumb="jils_joseph / root / connect">
      <div className="label-caps text-on-surface-variant">ROOT / LOG_03: CONNECT_CHANNEL</div>
      <h1 className="font-display font-bold text-4xl md:text-5xl text-accent-lime mt-3">
        Connect // Jils Joseph
      </h1>
      <div className="mt-2 flex items-center gap-2 label-caps text-accent-lime">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-lime pip-pulse" />
        UPSTREAM_AVAILABLE
      </div>

      <Card className="mt-6">
        <div className="label-caps text-accent-lime mb-4">INITIATE_CONTACT.SH</div>

        {sent ? (
          <div className="font-mono text-sm text-accent-lime py-8 text-center">
            {">"} message_dispatched. response_pending...
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <Field label="[IDENTIFIER]">
              <TerminalField value={name} onChange={setName} placeholder="Your name" />
            </Field>
            <Field label="[RETURN_PATH]">
              <TerminalField
                value={email}
                onChange={setEmail}
                placeholder="Email address"
                type="email"
                required
              />
            </Field>
            <Field label="[DATA_PAYLOAD]">
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                placeholder="Enter message..."
                className="w-full bg-surface-low border border-outline-variant px-3 py-2.5 font-mono text-sm text-on-surface placeholder:text-on-surface-variant focus:border-accent-lime focus:outline-none resize-none"
                required
              />
            </Field>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 label-caps border border-accent-lime text-accent-lime py-3.5 rounded-sm hover:bg-accent-lime/10 hover:glow-lime transition"
            >
              EXECUTE_SEND <Play className="w-3.5 h-3.5 fill-accent-lime" />
            </button>
          </form>
        )}
      </Card>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { icon: Github, label: "GITHUB", href: "https://github.com/JilsJoseph3030" },
          {
            icon: Linkedin,
            label: "LINKEDIN",
            href: "https://www.linkedin.com/in/jils-joseph-baba6932b",
          },
          { icon: Mail, label: "EMAIL", href: "mailto:" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-2 py-4 bg-surface-container border border-outline-variant rounded-sm hover:border-accent-lime hover:text-accent-lime transition"
            >
              <Icon className="w-4 h-4" />
              <span className="label-caps">{s.label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-6">
        <SectionLabel>AGENT_OPTIMIZED_RESOURCE</SectionLabel>
        <Card>
          <p className="font-mono text-sm text-on-surface-variant">
            {"// Machine-readable profile for LLM parsing and automated recruitment systems."}
          </p>
          <pre className="mt-4 p-3 bg-surface-low border border-outline-variant code-sm text-primary-dim overflow-x-auto">
            {`{
  "agent": "JILS_JOSEPH",
  "role": "EE_STUDENT",
  "stack": ["C++", "REACT", "\\n"],
  "status": "OPEN_TO_OPPORTUNITY"
}`}
          </pre>
          <a
            href={cvAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full flex items-center justify-center gap-2 label-caps bg-accent-lime text-[#0a0a0a] py-3 rounded-sm hover:glow-lime transition"
          >
            <Download className="w-3.5 h-3.5" /> DOWNLOAD_CV
          </a>
        </Card>
      </div>

      <div className="mt-6 rounded-lg overflow-hidden border border-outline-variant">
        <img
          src={hardwareViz}
          alt="Circuit board"
          width={1024}
          height={400}
          loading="lazy"
          className="w-full h-48 object-cover grayscale"
        />
      </div>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label-caps text-on-surface-variant mb-2">{label}</div>
      {children}
    </div>
  );
}

function TerminalField({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex items-center bg-surface-low border border-outline-variant px-3 focus-within:border-accent-lime">
      <span className="text-accent-lime font-mono mr-2">{">"}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="flex-1 bg-transparent py-2.5 font-mono text-sm text-on-surface placeholder:text-on-surface-variant outline-none"
      />
    </div>
  );
}
