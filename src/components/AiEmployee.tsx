import { ArrowRight, Lock, Hash, Check } from "lucide-react";

/* ---------- Doodle arrow (hand-drawn SVG) ---------- */
const DoodleArrow = ({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) => (
  <svg
    viewBox="0 0 120 80"
    className={`${className} ${flip ? "-scale-x-100" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 12 C 30 8, 55 22, 62 44 S 88 70, 108 60" />
    <path d="M100 52 L108 60 L98 66" />
  </svg>
);

/* ---------- Sticky note ---------- */
const StickyNote = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`font-serif italic text-[hsl(var(--accent))] text-lg md:text-xl leading-tight ${className}`}
  >
    {children}
  </span>
);

/* ---------- Column 1: Monthly bill mock ---------- */
const BillMock = () => (
  <div className="relative w-full max-w-[340px] mx-auto">
    <div className="rounded-2xl bg-white shadow-xl border border-black/5 p-6">
      <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-500 mb-4">
        Monthly software bill
      </div>
      <ul className="space-y-3 mb-4">
        {[
          ["Jobber", "$249"],
          ["ServiceTitan", "$480"],
          ["QuickBooks", "$65"],
        ].map(([name, price]) => (
          <li
            key={name}
            className="flex items-center justify-between text-neutral-800"
          >
            <span className="line-through decoration-red-500 decoration-2">
              {name}
            </span>
            <span className="line-through decoration-red-500 decoration-2 font-semibold">
              {price}
            </span>
          </li>
        ))}
      </ul>
      <div className="border-t border-dashed border-neutral-300 pt-4 flex items-center justify-between">
        <span className="font-bold text-neutral-900">MEP Claw</span>
        <span className="font-bold text-[hsl(var(--accent))] text-xl">
          $0/mo
        </span>
      </div>
    </div>
  </div>
);

/* ---------- Column 2: Discord channel mock ---------- */
const DiscordMock = () => (
  <div className="relative w-full max-w-[340px] mx-auto">
    <div className="rounded-2xl bg-[#313338] shadow-xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/40 text-neutral-200">
        <Hash className="w-4 h-4 text-neutral-400" />
        <span className="text-sm font-semibold">daniel-ops</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
          MEP Bot · today
        </div>
        <div className="text-sm text-neutral-100 leading-relaxed">
          Hey Daniel 👋 tap a number:
          <div className="mt-2 space-y-1 font-mono text-[13px]">
            <div>1️⃣ jobs</div>
            <div>2️⃣ arrive</div>
            <div>3️⃣ leave</div>
            <div>4️⃣ notes</div>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--accent))] text-white text-xs font-semibold px-3 py-1.5 shadow-lg">
            <Check className="w-3 h-3" /> 2 arrive
          </span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Column 3: Mini PC mock ---------- */
const BoxMock = () => (
  <div className="relative w-full max-w-[340px] mx-auto">
    <div className="rounded-2xl bg-white shadow-xl border border-black/5 p-8 flex flex-col items-center">
      <div className="relative">
        <div className="w-40 h-24 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-inner flex items-center justify-between px-4">
          <div className="flex flex-col gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="w-2 h-2 rounded-full bg-neutral-600" />
          </div>
          <span className="text-neutral-300 text-[10px] font-mono tracking-widest">
            MEP·NODE
          </span>
          <div className="w-6 h-6 rounded-sm border border-neutral-600" />
        </div>
        <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center shadow-lg">
          <Lock className="w-4 h-4" strokeWidth={2.5} />
        </div>
      </div>
      <div className="mt-4 h-2 w-48 rounded-full bg-neutral-200" />
      <div className="mt-6 rounded-xl bg-neutral-100 border border-neutral-200 px-4 py-2.5 text-sm text-neutral-800 font-medium">
        Your data lives here.
      </div>
    </div>
  </div>
);

type Col = {
  mock: React.ReactNode;
  note: string;
  arrowClass: string;
  arrowFlip?: boolean;
  title: string;
  body: string;
};

const columns: Col[] = [
  {
    mock: <BillMock />,
    note: "one-time buy 🦞",
    arrowClass: "top-24 -right-6 md:right-2 w-24 rotate-12",
    title: "You buy it once.",
    body: "No monthly SaaS. No per-seat fees. One box on your desk runs the whole operation for under $50 a month — and every tech you hire after that is free.",
  },
  {
    mock: <DiscordMock />,
    note: "no app to learn",
    arrowClass: "top-16 -left-4 md:-left-2 w-24 -rotate-12",
    arrowFlip: true,
    title: "Your crew already knows how.",
    body: "The field team runs everything from a simple text chat — see today's jobs, clock in, log hours, snap a receipt. One tap. No clunky app to fight with.",
  },
  {
    mock: <BoxMock />,
    note: "on your desk, not their cloud",
    arrowClass: "top-6 -right-4 md:right-0 w-28 rotate-6",
    title: "Nobody can lock you out.",
    body: "Your customer records, job photos, and financials live on a physical box inside your shop. No subscription to cancel, no vendor holding your data hostage. It's yours — forever.",
  },
];

const AiEmployee = () => (
  <section className="bg-background">
    {/* Built to Protect Your Profit Margins */}
    <div className="relative bg-surface overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
      </div>

      <div className="container max-w-[1440px] mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05]">
            Built to Protect Your
            <br className="hidden md:block" /> Profit Margins.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {columns.map((c) => (
            <div key={c.title} className="flex flex-col">
              {/* Mock area with doodle overlay */}
              <div className="relative h-[320px] flex items-center justify-center mb-8">
                {c.mock}
                <StickyNote
                  className={`absolute ${
                    c.note === "no app to learn"
                      ? "-bottom-2 right-4 md:right-8"
                      : c.note === "one-time buy 🦞"
                      ? "-bottom-2 left-2 md:left-6"
                      : "-bottom-2 left-4 md:left-8"
                  } max-w-[180px]`}
                >
                  {c.note}
                </StickyNote>
                <DoodleArrow
                  className={`absolute text-[hsl(var(--accent))] ${c.arrowClass}`}
                  flip={c.arrowFlip}
                />
              </div>

              <div className="text-center px-2">
                <h3 className="text-2xl md:text-[26px] font-bold text-foreground tracking-tight mb-4">
                  {c.title}
                </h3>
                <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/#book"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold shadow-elevated hover:opacity-90 transition-opacity"
          >
            See it in action <ArrowRight className="w-4 h-4" />
          </a>
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
