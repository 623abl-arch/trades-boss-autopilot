const SavingsBanner = () => (
  <section className="bg-surface py-6">
    <div className="container max-w-[1440px] mx-auto px-4">
      <div className="rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 text-primary text-lg flex-shrink-0">
          💰
        </span>
        <p className="text-foreground text-sm leading-relaxed">
          A typical Jobber + ServiceTitan + CompanyCam + Twilio stack runs{" "}
          <span className="font-semibold text-primary">$350-900/month</span> (Jobber $50-200, ServiceTitan $250-500, Housecall Pro $50-200) - every month, forever, and your data lives on their servers. MEP Claw runs the same workflows for under{" "}
          <span className="text-3xl md:text-4xl font-extrabold text-primary">$50/month</span>{" "}
          on hardware you own.
        </p>
      </div>
    </div>
  </section>
);

export default SavingsBanner;
