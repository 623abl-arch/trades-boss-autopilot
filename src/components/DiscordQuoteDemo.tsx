import { useEffect, useState } from "react";
import { Hash } from "lucide-react";

const lineItems = [
  { n: "1.", title: "Drain down entire home water system", price: "$125 - $175", note: "Labor to drain system at main and low points" },
  { n: "2.", title: "Roman tub faucet cartridge replacement (2)", price: "$180 - $240", note: "Labor to remove old cartridges and install new ones" },
  { n: "3.", title: "Moen Roman tub cartridge set - 1225 or equivalent", price: "$85 - $120", note: "OEM replacement cartridges for Roman tub valve" },
  { n: "4.", title: "Refill and test water system", price: "$75 - $100", note: "Labor to refill system and check for leaks" },
  { n: "5.", title: "Trip charge and diagnostics", price: "$89 - $125", note: "Service call fee for cartridge replacement" },
];

const STAGES = {
  OWNER: 1200,        // owner msg appears
  TYPING: 1600,       // bot typing
  QUOTE: 1800,        // quote card appears
  ZOOM: 3000,         // zoom into total
  HOLD: 4200,         // hold on total
  RESET: 2000,        // reset
} as const;

const DiscordQuoteDemo = () => {
  // 0 owner, 1 typing, 2 quote, 3 zoomed
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      while (!cancelled) {
        setStage(0);
        await new Promise((r) => setTimeout(r, STAGES.OWNER));
        setStage(1);
        await new Promise((r) => setTimeout(r, STAGES.TYPING));
        setStage(2);
        await new Promise((r) => setTimeout(r, STAGES.QUOTE + 800));
        setStage(3);
        await new Promise((r) => setTimeout(r, STAGES.ZOOM + STAGES.HOLD));
        await new Promise((r) => setTimeout(r, STAGES.RESET));
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative rounded-2xl border border-border bg-[#1e1f22] shadow-floating overflow-hidden">
      {/* channel header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#2b2d31]">
        <Hash className="w-4 h-4 text-white/50" />
        <span className="text-sm font-semibold text-white">quotes</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-white/40">live</span>
      </div>

      <div className="relative p-4 md:p-5 min-h-[520px] space-y-4 bg-[#313338]">
        {/* Owner message */}
        <div
          className={`flex gap-3 transition-all duration-500 ${
            stage >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shrink-0 flex items-center justify-center text-white text-xs font-bold">
            RY
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-white">Ryan</span>
              <span className="text-[10px] text-white/40">Owner · today</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-white/90">
              <span className="font-mono text-[#a3e635]">/quote</span> replace cartridges on a Roman tub faucet, both of them. Moen supply cartridges and swap out - requires drain down of home, no stops available.
            </p>
          </div>
        </div>

        {/* Bot typing indicator */}
        {stage === 1 && (
          <div className="flex gap-3 animate-fade-in">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-orange-600 shrink-0 flex items-center justify-center text-white text-xs font-bold">
              MC
            </div>
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}

        {/* Bot AI Quote Preview */}
        {stage >= 2 && (
          <div className="flex gap-3 animate-fade-in">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-orange-600 shrink-0 flex items-center justify-center text-white text-xs font-bold">
              MC
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-semibold text-white">MEP Claw</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] font-semibold uppercase tracking-wider">
                  AI
                </span>
              </div>

              <div className="relative rounded-md border-l-4 border-[hsl(var(--accent))] bg-[#2b2d31] p-3 pr-4 transition-all duration-500">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--accent))] mb-2">
                  AI Quote Preview
                </div>

                <ul className="space-y-1.5 mb-3">
                  {lineItems.map((it, i) => (
                    <li key={i} className="text-[11.5px] leading-snug text-white/85 flex justify-between gap-3">
                      <span className="min-w-0">
                        <span className="text-white/40 mr-1">{it.n}</span>
                        {it.title}
                      </span>
                      <span className="font-mono text-white/70 shrink-0">{it.price}</span>
                    </li>
                  ))}
                </ul>

                {/* Estimated total - zoom target */}
                <div
                  className={`origin-center rounded-md border border-[hsl(var(--accent))]/40 bg-[hsl(var(--accent))]/10 px-3 py-2.5 transition-all duration-700 ${
                    stage >= 3 ? "scale-[1.18] shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.5)]" : "scale-100"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">
                      Estimated Total
                    </span>
                    <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                      $554 - $760
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[10.5px] leading-relaxed text-white/55 italic">
                  Estimate assumes standard accessibility and no major valve damage. No stops available means draining the entire home, adding ~1-2 hrs labor.
                </p>
              </div>

              <div className="mt-2 flex items-center gap-3 text-[10px] text-white/40">
                <span>✓ Saved to Invoice Ninja</span>
                <span>·</span>
                <span>Sent to customer</span>
              </div>
            </div>
          </div>
        )}

        {/* zoom overlay vignette */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            stage >= 3 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(circle at 60% 70%, transparent 25%, rgba(0,0,0,0.55) 75%)",
          }}
        />
      </div>
    </div>
  );
};

export default DiscordQuoteDemo;
