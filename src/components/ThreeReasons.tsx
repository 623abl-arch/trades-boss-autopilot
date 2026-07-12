import { useEffect, useState, useRef } from "react";

const terminalLines = [
  "$ mepclaw tunnel --config mepclaw.yml",
  "INFO  Starting tunnel...",
  "INFO  Route dns mepclaw.com → 192.168.1.50",
  "✓ Tunnel established.",
  "",
  "$ docker compose up -d",
  "  ✓ crm                ... running",
  "  ✓ invoices           ... running",
  "  ✓ file-storage       ... running",
  "  ✓ photos             ... running",
  "",
  "ALL SYSTEMS LOCAL.",
];

function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= terminalLines.length) clearInterval(interval);
          }, 220);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="invert-section bg-background rounded-lg p-4 font-mono text-xs leading-relaxed h-64 overflow-hidden border border-border">
      {terminalLines.slice(0, visibleLines).map((line, i) => (
        <div
          key={i}
          className={`${
            line.startsWith("$") ? "text-foreground" :
            line.startsWith("✓") || line.includes("... running") ? "text-emerald-400" :
            line === "ALL SYSTEMS LOCAL." ? "text-foreground font-bold mt-2" :
            "text-muted-foreground"
          }`}
        >
          {line || "\u00A0"}
        </div>
      ))}
      {visibleLines < terminalLines.length && visibleLines > 0 && (
        <span className="inline-block w-2 h-4 bg-foreground animate-pulse" />
      )}
    </div>
  );
}

const connectionLines = [
  { service: "CRM", status: "CONNECTED" },
  { service: "INVOICES", status: "CONNECTED" },
  { service: "VOICE AI", status: "CONNECTED" },
  { service: "FILE STORAGE", status: "CONNECTED" },
  { service: "DISCORD BOT", status: "LIVE" },
  { service: "AGENT READY.", status: "", final: true },
];

function ConnectionFeed() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= connectionLines.length) clearInterval(interval);
          }, 350);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="invert-section bg-background rounded-lg p-4 font-mono text-xs leading-relaxed h-64 overflow-hidden border border-border">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400 text-[10px] uppercase tracking-widest">Live Connection Feed</span>
      </div>
      {connectionLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className={`mb-1 ${line.final ? "text-foreground font-bold mt-3" : "text-muted-foreground"}`}>
          {line.final ? (
            `[SYS] ${line.service}`
          ) : (
            <>
              <span className="text-muted-foreground">[SYS] </span>
              <span className="text-foreground">{line.service}</span>
              <span className="text-muted-foreground"> → </span>
              <span className="text-emerald-400">{line.status}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

const timelineEvents = [
  { time: "6:00 AM", event: "Morning briefing sent via Mobile Briefings" },
  { time: "9:15 AM", event: "Inbound call answered by AI" },
  { time: "10:30 AM", event: "Quote sent automatically" },
  { time: "1:00 PM", event: "Jobsite photos geotagged & filed" },
  { time: "2:00 PM", event: "Review request texted to customer" },
  { time: "6:30 PM", event: "Social media post published" },
  { time: "11:45 PM", event: "Lead captured from Google Maps" },
];

function TimelineFeed() {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= timelineEvents.length) clearInterval(interval);
          }, 400);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-surface rounded-lg p-4 text-xs h-64 overflow-hidden border border-border">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-[10px] uppercase tracking-widest">24/7 Agent Activity</span>
      </div>
      {timelineEvents.slice(0, visibleLines).map((ev, i) => (
        <div key={i} className="flex gap-3 mb-2 items-start">
          <div className="flex flex-col items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            {i < visibleLines - 1 && <span className="w-px h-4 bg-border" />}
          </div>
          <div>
            <span className="text-muted-foreground font-mono">{ev.time}</span>
            <span className="text-muted-foreground mx-1">-</span>
            <span className="text-foreground">{ev.event}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const cards = [
  {
    title: "Your data. Your desk.",
    desc: "Everything runs on hardware you own - CRM, invoicing, files, photos. Hosted locally, tunneled securely. No landlord.",
    animation: <TerminalAnimation />,
  },
  {
    title: "Full stack. One box.",
    desc: "CRM, invoicing, voice AI, file storage, dispatch bot - all wired together on a single Mini PC.",
    animation: <ConnectionFeed />,
  },
  {
    title: "Always on. Never clocks out.",
    desc: "Your AI agent works around the clock - answering calls, sending quotes, capturing leads. Even at midnight.",
    animation: <TimelineFeed />,
  },
];

const ThreeReasons = () => (
  <section className="bg-surface border-y border-border">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl mb-14">
        <p className="eyebrow mb-4"><span>Why it works</span></p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
          Three reasons your competitors should be worried.
        </h2>
        <p className="text-lg text-muted-foreground">
          This isn't a SaaS dashboard. It's infrastructure that runs while you sleep.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card-soft p-7 flex flex-col gap-5 hover:shadow-elevated transition-shadow"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
            {card.animation}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeReasons;
