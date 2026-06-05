import { Check, X } from "lucide-react";

const beforeItems = [
  "Phone rings at 11 PM. Goes to voicemail. Customer calls a competitor.",
  "Monday morning: 6 missed calls to return before the crew is even on-site.",
  "Building a quote by hand takes 45 minutes. Customer waits. Customer gets impatient.",
  "Jobber $249, ServiceTitan $480, QuickBooks $65, CompanyCam $59 - pure SaaS rent.",
  "You cancel Jobber. Five years of client data is gone with it.",
];

const afterItems = [
  "Phone rings at 11 PM. AI answers in two rings, qualifies the lead, logs it, pings you in Discord.",
  "Monday morning: open Discord, see a clean summary of every call and lead from the weekend.",
  'Type "new quote, water heater replacement." Quote built, priced, and sent in 30 seconds.',
  "Monthly software cost: ~$20. Hardware paid off in 8 months. Everything after is pure savings.",
  "You own every byte. Cancel nothing - there's nothing to cancel.",
];

const DayInTheLife = () => (
  <section className="bg-background">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl mb-14">
        <p className="eyebrow mb-4"><span>A day in the life</span></p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
          Two versions of the same day.
        </h2>
        <p className="text-lg text-muted-foreground">
          One ends at 11 PM chasing voicemails and SaaS bills. The other ends with the AI handling it for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {/* BEFORE */}
        <div className="bg-background p-8 md:p-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
            Before MEP Claw
          </div>
          <ul className="space-y-5">
            {beforeItems.map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-5 h-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3" strokeWidth={2.5} />
                </span>
                <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AFTER */}
        <div className="bg-surface p-8 md:p-10 relative">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6">
            With MEP Claw
          </div>
          <ul className="space-y-5">
            {afterItems.map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-sm md:text-base text-foreground leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DayInTheLife;
