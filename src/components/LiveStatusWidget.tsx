import { useEffect, useMemo, useState } from "react";
import { Activity, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Public Routing",
  "Remote Access VPN",
  "CRM",
  "Invoices",
  "File Storage",
  "Voice AI",
  "AI Engine AI Brain",
  "Discord Bot (Jarvis)",
  "Mini PC node",
];

function visitorsForHour(h: number) {
  // Curve: low overnight (20-40), peak midday (160-200)
  const peak = 13;
  const distance = Math.min(Math.abs(h - peak), 24 - Math.abs(h - peak));
  const factor = Math.max(0, 1 - distance / 12);
  const base = 20 + Math.round(factor * 180);
  const jitter = Math.floor(Math.random() * 15);
  return Math.min(200, Math.max(20, base + jitter));
}

const LiveStatusWidget = () => {
  const [open, setOpen] = useState(true);
  const [visitors, setVisitors] = useState(() => visitorsForHour(new Date().getHours()));
  const [liveNow, setLiveNow] = useState(400);
  const [onboarding, setOnboarding] = useState(8);
  const [quotes, setQuotes] = useState(12481);
  const [voiceCalls, setVoiceCalls] = useState(342);
  const [invoices, setInvoices] = useState(89);
  const [yellowIdx, setYellowIdx] = useState(() => Math.floor(Math.random() * SERVICES.length));
  const [updatedAt, setUpdatedAt] = useState(Date.now());

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    intervals.push(setInterval(() => {
      setVisitors((v) => Math.min(200, Math.max(20, v + 1)));
      setUpdatedAt(Date.now());
    }, 15000));
    intervals.push(setInterval(() => {
      setLiveNow((v) => Math.max(380, v + (Math.floor(Math.random() * 5) - 2)));
      setUpdatedAt(Date.now());
    }, 4000));
    intervals.push(setInterval(() => setOnboarding((v) => v + 1), 45000));
    intervals.push(setInterval(() => setQuotes((v) => v + 1), 8000));
    intervals.push(setInterval(() => setVoiceCalls((v) => v + 1), 20000));
    intervals.push(setInterval(() => setInvoices((v) => v + 1), 30000));
    intervals.push(setInterval(() => setYellowIdx(Math.floor(Math.random() * SERVICES.length)), 30000));
    return () => intervals.forEach(clearInterval);
  }, []);

  const updatedLabel = useMemo(() => {
    const secs = Math.floor((Date.now() - updatedAt) / 1000);
    if (secs < 5) return "Updated just now";
    return `Updated ${secs}s ago`;
  }, [updatedAt]);

  const counters: { label: string; value: number }[] = [
    { label: "Visitors today", value: visitors },
    { label: "Live now", value: liveNow },
    { label: "Onboarding this wk", value: onboarding },
    { label: "Voice calls today", value: voiceCalls },
    { label: "Quotes (all-time)", value: quotes },
    { label: "Invoices this wk", value: invoices },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden sm:block">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-md transition hover:bg-card"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {SERVICES.length} systems live
          <ChevronUp className="h-3 w-3 text-muted-foreground" />
        </button>
      ) : (
        <div className="w-[300px] overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-foreground">
                Live System Status
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Collapse"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="px-4 py-3">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <Activity className="h-3 w-3" /> Activity
            </div>
            <ul className="space-y-1.5">
              {counters.map((c) => (
                <li key={c.label} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{c.label}</span>
                  <span className="font-mono font-semibold text-foreground tabular-nums">
                    {c.value.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </div>
            <ul className="space-y-1.5">
              {SERVICES.map((s, i) => {
                const isYellow = i === yellowIdx;
                return (
                  <li key={s} className="flex items-center gap-2 text-xs">
                    <span className="relative flex h-2 w-2">
                      {!isYellow && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                      )}
                      <span
                        className={cn(
                          "relative inline-flex h-2 w-2 rounded-full",
                          isYellow ? "bg-yellow-400" : "bg-green-500",
                        )}
                      />
                    </span>
                    <span className="text-foreground/90">{s}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-border px-4 py-2 text-[10px] text-muted-foreground">
            {updatedLabel}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStatusWidget;
