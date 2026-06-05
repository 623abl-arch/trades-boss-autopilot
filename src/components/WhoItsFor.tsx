import mepLogo from "@/assets/mep-whosfor-logo.png";
import gcLogo from "@/assets/gc-claw-logo.png";
import handymanLogo from "@/assets/handyman-claw-logo.png";

const segments = [
  {
    name: "MEP Claw",
    tag: "Plumbing · HVAC · Electrical",
    desc: "Built and live on a real plumbing business. Pricebook, dispatch, voice AI tuned to MEP work.",
    logo: mepLogo,
  },
  {
    name: "GC Claw",
    tag: "General contractors",
    desc: "Manage crews, subs, and draw schedules. Running live on an active general contracting operation.",
    logo: gcLogo,
  },
  {
    name: "Handyman Claw",
    tag: "Solo operators",
    desc: "Managed SaaS option - no hardware required. Same workflows, simpler footprint.",
    logo: handymanLogo,
  },
];

const tints = [
  "from-sky-200/70 to-emerald-100/40",
  "from-amber-200/70 to-orange-200/40",
  "from-rose-200/70 to-fuchsia-100/40",
];

const WhoItsFor = () => (
  <section className="relative bg-surface overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-sky-400/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[460px] h-[460px] rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
    </div>

    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">WHO IT'S FOR</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-6">
          Tailored for every type of <em className="not-italic font-serif italic">trades business.</em>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Three flavors of the same operating system. All ship pre-configured. All bilingual — English and Spanish.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {segments.map((s, i) => (
          <div
            key={s.name}
            className="rounded-3xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
          >
            <div className={`relative h-44 bg-gradient-to-br ${tints[i]} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
              <img
                src={s.logo}
                alt={`${s.name} logo`}
                className="relative w-24 h-24 drop-shadow-lg"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--accent))] font-bold mb-2">
                {s.tag}
              </div>
              <h3 className="font-serif text-3xl italic text-foreground mb-3">{s.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
