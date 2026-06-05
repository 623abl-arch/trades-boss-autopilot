import { Settings, Box, PhoneCall } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Pick your vertical",
    desc: "MEP, GC, or Handyman - we match the agent to your trade.",
    icon: Settings,
  },
  {
    num: 2,
    title: "Choose your hardware tier",
    desc: "From solo operator to 30+ tech fleets, there's a box for you.",
    icon: Box,
  },
  {
    num: 3,
    title: "We configure, ship, and onboard",
    desc: "Plug it in, connect to your network, and you're live.",
    icon: PhoneCall,
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-surface">
    <div className="container max-w-[1440px] mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">The Process </h2>
      <p className="text-muted-foreground text-base mb-12">Three steps to autopilot.</p>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <div
            key={s.num}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-base font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {s.num}
              </span>
              <s.icon className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{s.desc}</p>
          </div>
          ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="/how-it-works"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-all text-base font-semibold"
        >
          See the full process →
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
