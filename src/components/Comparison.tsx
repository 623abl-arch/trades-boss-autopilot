import { Check, X } from "lucide-react";

const cols = ["Jobber", "ServiceTitan", "Housecall Pro", "MEP Claw"];

const rows = [
  { label: "Monthly cost", values: ["$49–$249/user", "$400+/tech", "$299/mo · 5 users", "Under $50/mo"] },
  { label: "Data ownership", values: ["Vendor's cloud", "Vendor's cloud", "Vendor's cloud", "Your hardware"] },
  { label: "AI quote engine", values: [false, "Limited", false, "AI-powered, 4 styles"] },
  { label: "SMS & customer comms", values: ["Basic", "Add-on", "Basic", "Automated A2P SMS"] },
  { label: "Pricebook", values: ["Basic", "Premium tier", "Basic", "2,300+ tasks"] },
  { label: "Self-hosted / open source", values: [false, false, false, true] },
  { label: "Trade flexibility", values: ["Generic", "HVAC/plumbing/elec", "General trades", "All trades"] },
  { label: "Setup", values: ["Same day", "Weeks of onboarding", "Same day", "Pre-configured + 3hr onboarding"] },
];

const renderCell = (v: string | boolean, isClaw: boolean, isCost = false) => {
  if (v === true)
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={2.75} />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/15 ring-1 ring-rose-500/30">
        <X className="w-5 h-5 text-rose-600 dark:text-rose-400" strokeWidth={2.75} />
      </span>
    );
  if (isClaw && isCost)
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30 px-3 py-1.5 text-sm font-semibold">
        <Check className="w-4 h-4" strokeWidth={3} />
        {v}
      </span>
    );
  if (!isClaw && isCost)
    return (
      <span className="inline-flex items-center rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-300 ring-1 ring-rose-500/25 px-3 py-1.5 text-sm font-medium">
        {v}
      </span>
    );
  return <span className={`${isClaw ? "text-foreground font-medium" : "text-muted-foreground"} text-base`}>{v}</span>;
};


const Comparison = () => (
  <section className="relative bg-surface overflow-hidden">
    {/* colorful splashes */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full bg-rose-300/25 blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-[460px] h-[460px] rounded-full bg-[hsl(var(--accent))]/20 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
    </div>

    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
      <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
        <div className="lg:col-span-7">
          <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">YOU VS. THEM</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.02]">
            You <em className="not-italic font-serif italic text-[hsl(var(--accent))]">own</em> everything.
            <br/>They <em className="not-italic font-serif italic">rent</em> it back to you.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-callout border border-border p-6 shadow-soft">
            <p className="font-serif text-lg md:text-xl leading-snug text-foreground">
              A typical SaaS stack runs <em className="italic font-semibold text-[hsl(var(--accent))]">$300–800/month</em> and lives on someone else's servers. MEP Claw is a one-time purchase on hardware that sits on your desk.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-card border border-border shadow-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="border-b border-border bg-surface/60">
                <th className="text-left p-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground w-[28%]"></th>
                {cols.map((c, i) => {
                  const claw = i === cols.length - 1;
                  return (
                    <th
                      key={c}
                      className={`text-left p-8 text-base font-bold tracking-tight ${
                        claw ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/8" : "text-muted-foreground"
                      }`}
                    >
                      {claw ? <em className="not-italic font-serif italic text-xl">{c}</em> : c}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={r.label} className={`border-b border-border last:border-b-0 ${ri % 2 === 1 ? "bg-surface/30" : ""}`}>
                  <td className="p-8 text-base font-semibold text-foreground">{r.label}</td>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={`p-8 ${i === r.values.length - 1 ? "bg-[hsl(var(--accent))]/8" : ""}`}
                    >
                      {renderCell(v, i === r.values.length - 1, r.label === "Monthly cost")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default Comparison;
