const stats = [
  { before: "$542/mo", after: "~$20/mo", label: "Software cost" },
  { before: "12 hrs/wk", after: "~2 hrs/wk", label: "Admin time" },
  { before: "6 logins", after: "1 box", label: "Tools to manage" },
  { before: "~3 missed calls/wk", after: "0", label: "Voicemail leads lost" },
];

const SavingsStory = () => (
  <section className="bg-background">
    <div className="container max-w-[1440px] mx-auto px-6 py-20 md:py-24">
      <div className="card-soft p-10 md:p-14">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4"><span>Customer story</span></p>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tightest leading-[1.15] mb-5">
              Solo plumber in Clearwater, FL.
            </h3>
            <p className="text-2xl font-semibold text-primary tracking-tight">
              $6,264 back in year one.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Burning $542/month on Jobber + CompanyCam + SMS + cloud storage. Spending 12 hours a week on admin after the truck pulled in. After switching: <span className="text-foreground font-medium">~$20/month total, ~10 hours back per week</span> - time he now spends with his kids or running an extra job.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-surface p-4">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">{s.label}</div>
                  <div className="text-xs text-muted-foreground line-through mb-1">{s.before}</div>
                  <div className="text-base font-bold text-foreground tracking-tight">{s.after}</div>
                </div>
              ))}
            </div>

            <p className="text-base text-foreground/90 mt-8 italic leading-relaxed border-l-2 border-primary/40 pl-5">
              "I get my evenings back. The agent answers everything I would've missed. First month it caught 4 jobs I never would've seen."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SavingsStory;
