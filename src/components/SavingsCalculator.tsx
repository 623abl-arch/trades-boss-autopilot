import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const SavingsCalculator = () => {
  const [jobsPerWeek, setJobsPerWeek] = useState(15);
  const [avgJobValue, setAvgJobValue] = useState(800);

  const adminMinsPerJob = 45;
  const timeLostHours = Math.round((jobsPerWeek * 4 * adminMinsPerJob) / 60);
  const revenueAtRisk = Math.round(jobsPerWeek * 4 * avgJobValue * 0.15);
  const monthlySavings = timeLostHours * 65 + revenueAtRisk;
  const paybackMonths = monthlySavings > 0 ? Math.max(1, Math.ceil(3800 / monthlySavings)) : 0;

  return (
    <section id="savings" className="relative bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-24 w-[520px] h-[520px] rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-[460px] h-[460px] rounded-full bg-emerald-300/20 blur-3xl" />
      </div>
      <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">CALCULATOR</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-5">
            How much is your time <em className="not-italic font-serif italic text-[hsl(var(--accent))]">costing</em> you?
          </h2>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic leading-snug">
            Drag the sliders to match your business. See what MEP Claw gives back.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border shadow-elevated p-8 md:p-10 space-y-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-foreground font-semibold text-lg">Jobs per week</label>
                <span className="font-serif text-foreground font-bold text-4xl tabular-nums tracking-tight text-[hsl(var(--accent))]">{jobsPerWeek}</span>
              </div>
              <Slider value={[jobsPerWeek]} onValueChange={(v) => setJobsPerWeek(v[0])} min={1} max={50} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span><span>50</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-foreground font-semibold text-lg">Average job value</label>
                <span className="font-serif text-foreground font-bold text-4xl tabular-nums tracking-tight text-[hsl(var(--accent))]">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <Slider value={[avgJobValue]} onValueChange={(v) => setAvgJobValue(v[0])} min={200} max={5000} step={50} />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$200</span><span>$5,000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-callout border border-border p-8 md:p-10 shadow-elevated space-y-7">
            <div>
              <p className="text-[11px] text-[hsl(var(--accent))] uppercase tracking-[0.2em] font-bold mb-2">Time lost to admin / month</p>
              <p className="font-serif text-foreground font-bold text-5xl tracking-tightest">{timeLostHours} <span className="text-2xl text-muted-foreground italic">hrs</span></p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-[11px] text-[hsl(var(--accent))] uppercase tracking-[0.2em] font-bold mb-2">Revenue at risk / month</p>
              <p className="font-serif text-foreground font-bold text-5xl tracking-tightest">${revenueAtRisk.toLocaleString()}</p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="text-[11px] text-[hsl(var(--accent))] uppercase tracking-[0.2em] font-bold mb-2">MEP Claw payback period</p>
              <p className="font-serif text-foreground font-bold text-5xl tracking-tightest italic text-[hsl(var(--accent))]">
                {paybackMonths} <span className="text-2xl">month{paybackMonths !== 1 ? "s" : ""}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
