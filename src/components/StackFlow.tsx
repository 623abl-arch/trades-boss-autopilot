import { Phone, MessageSquare, Mail, Globe, Database, FileText, Image as ImageIcon, Cloud, Cpu, Shield } from "lucide-react";
import miniPc from "@/assets/hw-core.png";

type Node = {
  id: string;
  label: string;
  sub?: string;
  icon: React.ReactNode;
  color: string; // tailwind text color class for icon tint
  y: number; // 0-100 vertical position
};

const inputs: Node[] = [
  { id: "phone", label: "Phone calls", sub: "Voice AI", icon: <Phone className="w-4 h-4" />, color: "text-emerald-500", y: 12 },
  { id: "sms",   label: "SMS",         sub: "SMS",    icon: <MessageSquare className="w-4 h-4" />, color: "text-sky-500",     y: 38 },
  { id: "email", label: "Email",       sub: "IMAP",      icon: <Mail className="w-4 h-4" />,         color: "text-violet-500",   y: 62 },
  { id: "web",   label: "Web forms",   sub: "Site",      icon: <Globe className="w-4 h-4" />,        color: "text-amber-500",    y: 88 },
];

const outputs: Node[] = [
  { id: "crm",     label: "CRM",     sub: "Contacts & jobs",  icon: <Database className="w-4 h-4" />,  color: "text-foreground", y: 12 },
  { id: "invoice", label: "Invoices",  sub: "Quotes & invoices", icon: <FileText className="w-4 h-4" />, color: "text-blue-500",    y: 38 },
  { id: "photos",  label: "Photos",         sub: "Job site photos",   icon: <ImageIcon className="w-4 h-4" />, color: "text-orange-500",  y: 62 },
  { id: "files",   label: "File Storage",      sub: "Files & docs",      icon: <Cloud className="w-4 h-4" />,     color: "text-cyan-500",    y: 88 },
];

const StackFlow = () => {
  // SVG coordinate space
  const W = 1000;
  const H = 480;
  const leftX = 220;     // input node right edge
  const rightX = 780;    // output node left edge
  const coreX = 500;
  const coreY = H / 2;

  const yPct = (p: number) => (p / 100) * H;

  const palette = ["#10b981", "#0ea5e9", "#8b5cf6", "#f59e0b"];

  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container max-w-[1680px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow justify-center mb-4"><span>How it all connects</span></p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tightest text-foreground mb-4">
            Every channel flows into one box you own.
          </h2>
          <p className="text-muted-foreground text-lg">
            Calls, texts, emails, and forms land on your Mini PC - then route into the apps your crew already uses.
          </p>
        </div>

        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-background p-4 md:p-8 shadow-floating overflow-hidden">
          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          {/* SVG flow */}
          <div className="relative">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
              <defs>
                {palette.map((c, i) => (
                  <linearGradient key={i} id={`flow-${i}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor={c} stopOpacity="0.0" />
                    <stop offset="20%" stopColor={c} stopOpacity="0.55" />
                    <stop offset="80%" stopColor={c} stopOpacity="0.55" />
                    <stop offset="100%" stopColor={c} stopOpacity="0.0" />
                  </linearGradient>
                ))}
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* core glow */}
              <circle cx={coreX} cy={coreY} r="160" fill="url(#coreGlow)" />

              {/* input ribbons (thick, soft) */}
              {inputs.map((n, i) => {
                const y = yPct(n.y);
                const c1x = leftX + 120;
                const c2x = coreX - 120;
                const d = `M ${leftX} ${y} C ${c1x} ${y}, ${c2x} ${coreY}, ${coreX} ${coreY}`;
                return (
                  <g key={n.id}>
                    <path d={d} stroke={`url(#flow-${i})`} strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.7" />
                    <path d={d} stroke={palette[i]} strokeWidth="1.5" fill="none" strokeDasharray="6 10" opacity="0.9">
                      <animate attributeName="stroke-dashoffset" from="0" to="-160" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                    </path>
                  </g>
                );
              })}

              {/* output ribbons */}
              {outputs.map((n, i) => {
                const y = yPct(n.y);
                const c1x = coreX + 120;
                const c2x = rightX - 120;
                const d = `M ${coreX} ${coreY} C ${c1x} ${coreY}, ${c2x} ${y}, ${rightX} ${y}`;
                return (
                  <g key={n.id}>
                    <path d={d} stroke={`url(#flow-${i})`} strokeWidth="22" fill="none" strokeLinecap="round" opacity="0.7" />
                    <path d={d} stroke={palette[i]} strokeWidth="1.5" fill="none" strokeDasharray="6 10" opacity="0.9">
                      <animate attributeName="stroke-dashoffset" from="0" to="-160" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                    </path>
                  </g>
                );
              })}
            </svg>

            {/* Overlay nodes (HTML so icons + text are crisp) */}
            <div className="absolute inset-0">
              {/* Inputs */}
              {inputs.map((n) => (
                <div
                  key={n.id}
                  className="absolute -translate-y-1/2"
                  style={{ left: `${(leftX / W) * 100}%`, top: `${n.y}%`, transform: "translate(-100%, -50%)" }}
                >
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card pl-3 pr-4 py-2 shadow-soft mr-2">
                    <span className={`w-7 h-7 rounded-lg bg-foreground/[0.04] flex items-center justify-center ${n.color}`}>
                      {n.icon}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-foreground leading-tight">{n.label}</div>
                      {n.sub && <div className="text-[10px] text-muted-foreground leading-tight">{n.sub}</div>}
                    </div>
                  </div>
                </div>
              ))}

              {/* Outputs */}
              {outputs.map((n) => (
                <div
                  key={n.id}
                  className="absolute"
                  style={{ left: `${(rightX / W) * 100}%`, top: `${n.y}%`, transform: "translate(0%, -50%)" }}
                >
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-card pl-3 pr-4 py-2 shadow-soft ml-2">
                    <span className={`w-7 h-7 rounded-lg bg-foreground/[0.04] flex items-center justify-center ${n.color}`}>
                      {n.icon}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground leading-tight">{n.label}</div>
                      {n.sub && <div className="text-[10px] text-muted-foreground leading-tight">{n.sub}</div>}
                    </div>
                  </div>
                </div>
              ))}

              {/* Core: Mini PC */}
              <div
                className="absolute"
                style={{ left: `${(coreX / W) * 100}%`, top: "50%", transform: "translate(-50%, -50%)" }}
              >
                <div className="relative animate-float-slow">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-card border border-border shadow-elevated p-4 flex items-center justify-center">
                    <img src={miniPc} alt="MEP Claw Mini PC" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-[11px] font-semibold px-3 py-1 shadow-soft">
                    MEP Claw Core
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom rail: edge + security stack */}
          <div className="relative mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Public Routing", sub: "Zero open ports", icon: <Shield className="w-4 h-4" />, color: "text-amber-500" },
              { label: "Remote Access", sub: "Private mesh VPN", icon: <Globe className="w-4 h-4" />, color: "text-violet-500" },
              { label: "Local LLM", sub: "Local AI + Speech-to-Text", icon: <Cpu className="w-4 h-4" />, color: "text-emerald-500" },
              { label: "Encrypted backups", sub: "Off-site nightly", icon: <Database className="w-4 h-4" />, color: "text-sky-500" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 shadow-xs">
                <span className={`w-8 h-8 rounded-lg bg-foreground/[0.04] flex items-center justify-center ${t.color}`}>
                  {t.icon}
                </span>
                <div>
                  <div className="text-xs font-semibold text-foreground leading-tight">{t.label}</div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackFlow;
