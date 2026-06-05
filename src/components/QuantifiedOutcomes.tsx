import { Zap, PhoneCall, Clock, DollarSign } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    metric: "5×",
    label: "Faster quotes",
    detail: "",
  },
  {
    icon: PhoneCall,
    metric: "24/7",
    label: "Phone answered",
    detail: "",
  },
  {
    icon: Clock,
    metric: "60-80%",
    label: "Less admin time",
    detail: "",
  },
  {
    icon: DollarSign,
    metric: "$6k-$20k+",
    label: "Saved year one",
    detail: "",
  },
];

const tints = [
  "from-sky-200/70 via-emerald-100/40 to-amber-200/60",
  "from-emerald-200/70 via-amber-100/40 to-orange-200/60",
  "from-amber-200/70 via-orange-200/40 to-rose-200/60",
  "from-rose-200/70 via-fuchsia-100/40 to-sky-200/60",
];

const QuantifiedOutcomes = () => (
  <section className="relative bg-background overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[hsl(var(--accent))]/15 blur-3xl" />
    </div>

    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">OUTCOMES</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-6">
          What contractors <em className="not-italic font-serif italic">actually</em> get back.
        </h2>
        <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-snug italic">
          Hours reclaimed. Calls captured. Cash kept.
        </p>
        <p className="text-base text-muted-foreground mt-3">
          Not projections — what happens after one quarter on MEP Claw.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((o, i) => (
          <div
            key={o.label}
            className="group rounded-3xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
          >
            <div className={`relative h-28 bg-gradient-to-br ${tints[i]} flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
              <div className="relative w-16 h-16 rounded-full bg-card/90 backdrop-blur flex items-center justify-center shadow-soft">
                <o.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
            </div>
            <div className="p-7">
              <div className="font-serif text-5xl font-bold text-[hsl(var(--accent))] tracking-tightest leading-none mb-3">
                {o.metric}
              </div>
              <div className="text-base font-semibold text-foreground">{o.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QuantifiedOutcomes;
