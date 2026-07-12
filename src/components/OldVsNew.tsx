const rows = [
  {
    task: "Creating Quotes & Estimates",
    oldTitle: "Manual Data Entry",
    oldBody:
      "Copy-pasting client details and manually building line-item bids inside bulky, disconnected software setups.",
    multiplier: "15×",
    multiplierLabel: "Faster estimating",
    newTitle: "Instant Chat-to-Quote Bot",
    newBody:
      'Type a quick line like "new quote [Client Name]" straight into your team chat. The bot instantly logs the CRM profile and generates a branded, textable estimate portal.',
  },
  {
    task: "Managing Job Site Photos",
    oldTitle: "Messy Camera Rolls & Group Chats",
    oldBody:
      "Scrolling through endless personal phone photos trying to find a specific pipe repair from months ago when a customer asks for proof.",
    multiplier: "100%",
    multiplierLabel: "Visual map histories",
    newTitle: "Geotagged Photos Photo Vault",
    newBody:
      "Open-source Photos automatically tags your job photos and pins them onto a visual map by service address. Pull up any property to see its entire visual history instantly.",
  },
  {
    task: "Tracking Material Receipts",
    oldTitle: "Glovebox Chaos & Manual Entry",
    oldBody:
      "Stash crinkled supply house receipts in truck cup holders, then waste weekends manually typing line items into your books.",
    multiplier: "0",
    multiplierLabel: "Manual data entry",
    newTitle: "Instant Bot Scan & Expense Log",
    newBody:
      "Snap a quick picture of the bill and drop it into your tech chat channel. The bot scans the slip, extracts the vendor and totals, and logs the expense for you.",
  },
];

const OldVsNew = () => (
  <section className="bg-background">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl mb-14 mx-auto text-center">
        <p className="eyebrow mb-5"><span>Old way vs. MEP Claw</span></p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.05]">
          The same job, done with a fraction of the friction.
        </h2>
      </div>

      <div className="space-y-6">
        {rows.map((r) => (
          <div key={r.task}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-3 pl-1">
              {r.task}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] rounded-2xl overflow-hidden border border-border bg-card shadow-soft">
              {/* OLD */}
              <div className="p-8 md:p-10 bg-rose-500/[0.06] border-l-2 border-rose-500/40">
                <p className="text-[11px] font-bold tracking-[0.22em] text-rose-600 dark:text-rose-400 mb-3">
                  OLD WAY
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {r.oldTitle}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {r.oldBody}
                </p>
              </div>

              {/* MULTIPLIER */}
              <div className="flex flex-col items-center justify-center px-10 py-6 md:py-8 border-y md:border-y-0 md:border-x border-border bg-background">
                <div className="font-serif italic text-6xl md:text-7xl text-primary leading-none mb-2">
                  {r.multiplier}
                </div>
                <div className="text-[10px] md:text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase text-center whitespace-nowrap">
                  {r.multiplierLabel}
                </div>
              </div>

              {/* NEW */}
              <div className="p-8 md:p-10 bg-emerald-500/[0.07] border-l-2 border-emerald-500/50">
                <p className="text-[11px] font-bold tracking-[0.22em] text-emerald-700 dark:text-emerald-400 mb-3">
                  WITH MEP CLAW
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {r.newTitle}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {r.newBody}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OldVsNew;
