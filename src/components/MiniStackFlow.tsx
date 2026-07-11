import { Phone, MessageSquare, Mail, Globe, Database, FileText, Image as ImageIcon, Cloud } from "lucide-react";
import miniPc from "@/assets/hw-core.png";

const inputs = [
  { label: "Calls", icon: <Phone className="w-3.5 h-3.5" />, color: "text-emerald-500", y: 15 },
  { label: "SMS", icon: <MessageSquare className="w-3.5 h-3.5" />, color: "text-sky-500", y: 38 },
  { label: "Email", icon: <Mail className="w-3.5 h-3.5" />, color: "text-violet-500", y: 62 },
  { label: "Web", icon: <Globe className="w-3.5 h-3.5" />, color: "text-amber-500", y: 85 },
];

const outputs = [
  { label: "CRM", icon: <Database className="w-3.5 h-3.5" />, color: "text-foreground", y: 15 },
  { label: "Invoices", icon: <FileText className="w-3.5 h-3.5" />, color: "text-blue-500", y: 38 },
  { label: "Photos", icon: <ImageIcon className="w-3.5 h-3.5" />, color: "text-orange-500", y: 62 },
  { label: "Files", icon: <Cloud className="w-3.5 h-3.5" />, color: "text-cyan-500", y: 85 },
];

const palette = ["#10b981", "#0ea5e9", "#8b5cf6", "#f59e0b"];

const MiniStackFlow = () => {
  const W = 600, H = 460;
  const leftX = 130, rightX = 470, coreX = 300, coreY = H / 2;
  const yPct = (p: number) => (p / 100) * H;

  return (
    <div className="relative rounded-2xl border border-border bg-gradient-to-br from-surface via-card to-background p-4 md:p-6 shadow-floating overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-hidden="true">
          <defs>
            {palette.map((c, i) => (
              <linearGradient key={i} id={`mflow-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor={c} stopOpacity="0" />
                <stop offset="20%" stopColor={c} stopOpacity="0.55" />
                <stop offset="80%" stopColor={c} stopOpacity="0.55" />
                <stop offset="100%" stopColor={c} stopOpacity="0" />
              </linearGradient>
            ))}
            <radialGradient id="mcoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx={coreX} cy={coreY} r="130" fill="url(#mcoreGlow)" />
          {inputs.map((n, i) => {
            const y = yPct(n.y);
            const d = `M ${leftX} ${y} C ${leftX + 80} ${y}, ${coreX - 80} ${coreY}, ${coreX} ${coreY}`;
            return (
              <g key={i}>
                <path d={d} stroke={`url(#mflow-${i})`} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.7" />
                <path d={d} stroke={palette[i]} strokeWidth="1.2" fill="none" strokeDasharray="6 10" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" from="0" to="-160" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                </path>
              </g>
            );
          })}
          {outputs.map((n, i) => {
            const y = yPct(n.y);
            const d = `M ${coreX} ${coreY} C ${coreX + 80} ${coreY}, ${rightX - 80} ${y}, ${rightX} ${y}`;
            return (
              <g key={i}>
                <path d={d} stroke={`url(#mflow-${i})`} strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.7" />
                <path d={d} stroke={palette[i]} strokeWidth="1.2" fill="none" strokeDasharray="6 10" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" from="0" to="-160" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
                </path>
              </g>
            );
          })}
        </svg>
        <div className="absolute inset-0">
          {inputs.map((n, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${(leftX / W) * 100}%`, top: `${n.y}%`, transform: "translate(-100%, -50%)" }}
            >
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 shadow-soft mr-1.5">
                <span className={`w-5 h-5 rounded-md bg-foreground/[0.04] flex items-center justify-center ${n.color}`}>
                  {n.icon}
                </span>
                <span className="text-xs font-semibold text-foreground">{n.label}</span>
              </div>
            </div>
          ))}
          {outputs.map((n, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: `${(rightX / W) * 100}%`, top: `${n.y}%`, transform: "translate(0%, -50%)" }}
            >
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 shadow-soft ml-1.5">
                <span className={`w-5 h-5 rounded-md bg-foreground/[0.04] flex items-center justify-center ${n.color}`}>
                  {n.icon}
                </span>
                <span className="text-xs font-semibold text-foreground">{n.label}</span>
              </div>
            </div>
          ))}
          <div
            className="absolute"
            style={{ left: `${(coreX / W) * 100}%`, top: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="relative animate-float-slow">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-card border border-border shadow-elevated p-3 flex items-center justify-center">
                <img src={miniPc} alt="MEP Claw Mini PC" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground text-background text-[10px] font-semibold px-2.5 py-0.5 shadow-soft">
                MEP Claw Core
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniStackFlow;
