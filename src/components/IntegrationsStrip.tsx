import {
  Database, FileText, Cloud, Image, MessageSquare,
  Workflow, Brain, Mic, Volume2, Send,
} from "lucide-react";

const tools = [
  { name: "CRM", icon: Database },
  { name: "Invoices", icon: FileText },
  { name: "File Storage", icon: Cloud },
  { name: "Photos", icon: Image },
  { name: "Discord", icon: MessageSquare },
  { name: "Automation", icon: Workflow },
  { name: "Local AI", icon: Brain },
  { name: "Speech-to-Text", icon: Mic },
  { name: "Voice Synthesis", icon: Volume2 },
  { name: "Mobile Briefings", icon: Send },
];

const Pill = ({ tool }: { tool: (typeof tools)[number] }) => {
  const Icon = tool.icon;
  return (
    <div className="shrink-0 mx-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-foreground hover:border-foreground/30 transition-colors shadow-xs">
      <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
      <span className="font-medium text-sm">{tool.name}</span>
    </div>
  );
};

const IntegrationsStrip = () => {
  const loop = [...tools, ...tools];
  return (
    <section className="relative bg-background overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />
      </div>
      <div className="container max-w-[1680px] mx-auto px-6 text-center mb-12 relative">
        <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">OPEN SOURCE YOU CAN TRUST</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest mb-4 leading-[1.05]">
          Built on tools you can <em className="not-italic font-serif italic">audit, fork, and own.</em>
        </h2>
        <p className="font-serif italic text-lg text-muted-foreground">
          Every piece is self-hosted or open source. Yours forever.
        </p>
      </div>

      <div className="group relative">
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Pill key={i} tool={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default IntegrationsStrip;
