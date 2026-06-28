import { Clock, Trophy, Server, ArrowRight } from "lucide-react";

type Card = {
  icon: typeof Clock;
  title: string;
  body: string;
  href: string;
  accent: string;
};

const cards: Card[] = [
  {
    icon: Clock,
    title: "Stop Renting Software",
    body:
      "Pay once instead of every month. This keeps your costs under $50 a month and lets you add as many workers as you want for free.",
    href: "/what-is-mepclaw",
    accent: "from-sky-200/60 via-emerald-100/40 to-amber-200/60",
  },
  {
    icon: Trophy,
    title: "Frictionless Field Workflows",
    body:
      "Your workers out in the field do everything through a simple text chat. They can see tasks, log hours, and submit receipts without using a confusing app.",
    href: "/what-is-mepclaw",
    accent: "from-emerald-200/60 via-amber-100/40 to-orange-200/60",
  },
  {
    icon: Server,
    title: "Absolute Data Sovereignty",
    body:
      "All your customer info, photos, and money records stay safely on a physical computer inside your own building. No outside company can ever lock you out or use your data.",
    href: "/what-is-mepclaw",
    accent: "from-amber-200/60 via-orange-200/40 to-rose-200/60",
  },
];

const AiEmployee = () => (
  <section className="bg-background">
    {/* Built to Protect Your Profit Margins */}
    <div className="relative bg-surface overflow-hidden">
      {/* Colorful background splashes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 w-[520px] h-[520px] rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[560px] h-[560px] rounded-full bg-[hsl(var(--accent))]/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[460px] h-[460px] rounded-full bg-amber-300/25 blur-3xl" />
        <div className="absolute top-10 right-1/3 w-[360px] h-[360px] rounded-full bg-rose-300/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
      </div>

      <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05]">
            Built to Protect Your
            <br className="hidden md:block" /> Profit Margins.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col"
            >
              {/* Illustration area with gradient wash */}
              <div
                className={`relative h-96 bg-gradient-to-br ${c.accent} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
                <div className="relative w-28 h-28 rounded-full bg-card/90 backdrop-blur flex items-center justify-center shadow-soft">
                  <c.icon
                    className="w-12 h-12 text-foreground"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground tracking-tight mb-4">
                  {c.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-1">
                  {c.body}
                </p>
                <a
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--accent))] hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Grow with us - Podium-style social proof */}
    <div className="bg-surface">
      <div className="container max-w-[1440px] mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-6">
            GROW WITH US
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tightest leading-[1.05]">
            Hours Saved by <em className="not-italic font-bold italic">Contractors.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - large quote */}
          <div className="rounded-2xl bg-callout border border-border p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <p className="font-serif text-2xl md:text-[28px] leading-[1.35] text-[hsl(var(--accent))]">
              &ldquo;MEP Claw is <em className="italic">excellent.</em>{" "}
              Got rid of our $1,200/mo software bill and the amount of money we save is mental.&rdquo;
            </p>
            <div className="text-center mt-8">
              <div className="text-sm text-muted-foreground">Jason M.</div>
              <div className="text-sm font-semibold text-foreground">
                Vanguard Plumbing
              </div>
            </div>
          </div>

          {/* Card 2 - smaller quote */}
          <div className="rounded-2xl bg-callout border border-border p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <p className="font-serif text-xl md:text-2xl leading-[1.4] text-[hsl(var(--accent))]">
              &ldquo;Been using MEP Claw for over 6 months now it helped me save lots of time.&rdquo;
            </p>
            <div className="mt-8">
              <div className="text-sm text-muted-foreground">
                Brian D., Operations
              </div>
              <div className="text-sm font-semibold text-foreground">
                Tri-County HVAC
              </div>
            </div>
          </div>

          {/* Card 3 - big stat */}
          <div className="rounded-2xl bg-callout border border-border p-10 md:p-14 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="font-serif text-8xl md:text-9xl text-[hsl(var(--accent))] font-bold leading-none mb-6">
              $0
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-sm leading-relaxed">
              Per-User Fees. Add as many trucks and technicians to your fleet as you want without your bill jumping.
            </p>
          </div>

          {/* Card 4 - quote */}
          <div className="rounded-2xl bg-callout border border-border p-10 md:p-14 flex flex-col justify-between min-h-[280px]">
            <p className="font-serif text-xl md:text-2xl leading-[1.4] text-[hsl(var(--accent))]">
              &ldquo;My field guys just tap a simple text menu to run jobs and log timesheets. No bloated apps, no lost material receipts, zero headache.&rdquo;
            </p>
            <div className="mt-8">
              <div className="text-sm text-muted-foreground">
                Marcus T.
              </div>
              <div className="text-sm font-semibold text-foreground">
                Crossroads Electric
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AiEmployee;
