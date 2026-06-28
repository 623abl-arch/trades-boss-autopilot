import hwStarter from "@/assets/hw-starter.png";
import hwCore from "@/assets/hw-core.png";
import hwCommand from "@/assets/hw-command.png";
import hwFleet from "@/assets/hw-fleet.png";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter Node",
    hw: "Mini PC",
    techs: "1-5 techs",
    price: "$2,500",
    recommended: false,
    img: hwStarter,
    perks: ["Full stack pre-installed", "Voice AI included", "3-hour onboarding"],
  },
  {
    name: "Core Node",
    hw: "Mac Mini M4",
    techs: "Up to 10 techs",
    price: "$3,800",
    recommended: true,
    img: hwCore,
    perks: ["Everything in Starter", "Faster local AI inference", "Priority support"],
  },
  {
    name: "Command Node",
    hw: "Mac Studio M4",
    techs: "10-30 techs",
    price: "$5,800",
    recommended: false,
    img: hwCommand,
    perks: ["Everything in Core", "Dedicated AI brain", "Multi-location ready"],
  },
  {
    name: "Fleet Node",
    hw: "Large Desktop",
    techs: "30+ techs",
    price: "$7,500+",
    recommended: false,
    img: hwFleet,
    perks: ["Everything in Command", "Custom config", "White-glove deployment"],
  },
];

const tints = [
  "from-sky-200/70 to-emerald-100/40",
  "from-amber-200/70 to-orange-200/50",
  "from-rose-200/70 to-fuchsia-100/40",
  "from-emerald-200/70 to-sky-200/40",
];

const Pricing = () => (
  <section id="pricing" className="relative bg-surface overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
    </div>

    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">HARDWARE + PRICING</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-6">
          One-time purchase. <em className="not-italic font-serif italic">No subscriptions.</em>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Pick the box for your team size. Pay once. Own it forever. Add a NAS backup for +$600.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((t, i) => (
          <div
            key={t.name}
            className={`relative rounded-3xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 ${
              t.recommended
                ? "bg-foreground text-background border-2 border-foreground shadow-floating ring-4 ring-[hsl(var(--accent))]/20"
                : "bg-card border border-border shadow-elevated"
            }`}
          >
            {t.recommended && (
              <span className="absolute top-4 right-4 z-10 bg-[hsl(var(--accent))] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full font-serif italic">
                Recommended
              </span>
            )}
            <div className={`relative h-36 bg-gradient-to-br ${tints[i]} flex items-center justify-center`}>
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
              <img
                src={t.img}
                alt={t.hw}
                className="relative max-h-[110px] w-auto object-contain drop-shadow-xl"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className={`text-[11px] uppercase tracking-[0.18em] font-bold mb-2 ${t.recommended ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--accent))]"}`}>
                {t.techs}
              </div>
              <h3 className={`font-serif text-2xl italic mb-1 ${t.recommended ? "text-background" : "text-foreground"}`}>{t.name}</h3>
              <p className={`text-sm mb-5 ${t.recommended ? "text-background/70" : "text-muted-foreground"}`}>{t.hw}</p>
              <p className={`font-serif text-5xl font-bold tracking-tightest mb-6 ${t.recommended ? "text-background" : "text-foreground"}`}>
                {t.price}
              </p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.recommended ? "text-[hsl(var(--accent))]" : "text-[hsl(var(--accent))]"}`} strokeWidth={2.5} />
                    <span className={t.recommended ? "text-background/85" : "text-muted-foreground"}>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/pricing"
                className={`text-center text-sm font-semibold rounded-full py-3 transition-colors ${
                  t.recommended
                    ? "bg-[hsl(var(--accent))] text-white hover:opacity-90"
                    : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                }`}
              >
                Get started
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="font-serif italic text-base text-muted-foreground mt-10 text-center">
        Ongoing software cost: under $50/mo (VPS + Twilio + optional AI usage). No per-user fees, ever.
      </p>
    </div>
  </section>
);

export default Pricing;
