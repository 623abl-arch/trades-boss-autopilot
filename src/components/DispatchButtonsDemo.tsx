import { useEffect, useState } from "react";
import { Hash, CheckCircle2, Truck, Calendar, Receipt, Clock } from "lucide-react";

const STAGES = {
  MESSAGE: 900,
  BUTTONS: 500,
  TAP: 1300,
  RESET: 2000,
} as const;

const actions = [
  { id: "dispatch", label: "Dispatch Job", icon: Truck, color: "bg-[#5865f2]" },
  { id: "book", label: "Book Visit", icon: Calendar, color: "bg-[#3ba55d]" },
  { id: "receipt", label: "Log Receipt", icon: Receipt, color: "bg-[#f9a62b]" },
  { id: "clock", label: "Clock In", icon: Clock, color: "bg-[#ec4899]" },
];

const DispatchButtonsDemo = () => {
  const [stage, setStage] = useState(0);
  const [tapped, setTapped] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      while (!cancelled) {
        setStage(0);
        setTapped(null);
        setCompleted([]);
        await sleep(STAGES.MESSAGE);
        setStage(1);
        await sleep(STAGES.BUTTONS);
        for (const action of actions) {
          setStage((s) => s + 1);
          setTapped(action.id);
          await sleep(220);
          setCompleted((prev) => [...prev, action.id]);
          setTapped(null);
          await sleep(STAGES.TAP - 220);
        }
        await sleep(STAGES.RESET);
      }
    };

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative rounded-2xl border border-border bg-[#1e1f22] shadow-floating overflow-hidden w-full">
      {/* channel header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#2b2d31]">
        <Hash className="w-4 h-4 text-white/50" />
        <span className="text-sm font-semibold text-white">field-ops</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-white/40">live</span>
      </div>

      <div className="relative p-4 md:p-5 min-h-[520px] bg-[#313338] flex flex-col justify-center">
        <div className="space-y-5">
          {/* Dispatcher message */}
          <div
            className={`flex gap-3 transition-all duration-500 ${
              stage >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 shrink-0 flex items-center justify-center text-white text-xs font-bold">
              OP
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-white">Office</span>
                <span className="text-[10px] text-white/40">today</span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-white/90">
                Every workflow is a single tap. No forms, no app installs.
              </p>
            </div>
          </div>

          {/* Action buttons grid */}
          {stage >= 1 && (
            <div className="grid grid-cols-2 gap-3 animate-fade-in">
              {actions.map((action) => {
                const Icon = action.icon;
                const isTapped = tapped === action.id;
                const isDone = completed.includes(action.id);
                return (
                  <button
                    key={action.id}
                    className={`relative flex flex-col items-start gap-2 rounded-xl px-4 py-4 text-left transition-all duration-200 ${
                      isTapped
                        ? "scale-[0.96] ring-2 ring-white/40 bg-[#2b2d31]"
                        : "hover:bg-[#2b2d31]"
                    } ${
                      isDone ? "bg-white/10" : "bg-[#2b2d31]/60"
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-lg ${action.color} flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isTapped ? "scale-90" : ""
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      ) : (
                        <Icon className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {action.label}
                      </div>
                      <div className="text-[10px] text-white/40">
                        {isDone ? "Done" : "Tap to run"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Confirmation messages */}
          {stage >= 2 && completed.length > 0 && (
            <div className="space-y-2 rounded-lg bg-[#2b2d31]/50 p-3 animate-fade-in">
              {completed.map((id) => {
                const action = actions.find((a) => a.id === id);
                if (!action) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-2 text-[11px] text-white/70"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                    <span>
                      <span className="font-semibold text-white">{action.label}</span> completed
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom status line */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center justify-between text-[10px] text-white/40">
              <span>4 workflows available</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                {completed.length} completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchButtonsDemo;
