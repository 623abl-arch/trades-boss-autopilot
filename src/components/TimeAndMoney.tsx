const workflows = [
  { trigger: "Phone rings at 8pm", title: "AI answers. Job created.", desc: "Voice agent qualifies the lead, books the visit, and drops a CRM record - while you're eating dinner.", time: "Saved: 15 min / call" },
  { trigger: '"New quote for Mike, water heater"', title: "Quote built. PDF sent.", desc: "Type one line in Discord. AI pulls your pricebook, builds the quote, sends the PDF to the client in 30 seconds.", time: "Saved: 25 min / quote" },
  { trigger: "Client approves quote", title: "Invoice auto-generated.", desc: "Webhook fires. Job status updates. Team notified in Discord. Invoice drafted. Zero manual data entry.", time: "Saved: 10 min / job" },
  { trigger: "Tech finishes the job", title: "Photos filed. Review requested.", desc: "Field photos geotagged to the jobsite automatically. Review text sent to client. All logged to the record.", time: "Saved: 20 min / job" },
];

const fmt = (n: number) => "$" + Math.round(n).toLocaleString();
const moSave = 562 - 20;

const TimeAndMoney = () => (
  <section className="bg-surface border-y border-border">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl mb-14">
        <p className="eyebrow mb-4"><span>The math</span></p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
          You're losing $300-800 every month. For what?
        </h2>
        <p className="text-lg text-muted-foreground">
          SaaS tools charge you forever, own your data, and still can't answer your phone. MEP Claw does more - for $20/month flat.
        </p>
      </div>

      {/* VS grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="card-soft p-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5 pb-4 border-b border-border">
            Typical SaaS stack
          </div>
          {[
            ["Jobber (5 users)", "$349/mo"],
            ["CompanyCam", "$59/mo"],
            ["ServiceTitan add-ons", "$99/mo"],
            ["SMS SMS", "$30/mo"],
            ["Cloud storage", "$25/mo"],
          ].map(([name, price]) => (
            <div key={name} className="flex justify-between items-baseline py-2.5 border-b border-border last:border-b-0">
              <span className="text-sm text-muted-foreground">{name}</span>
              <span className="text-sm font-medium text-muted-foreground">{price}</span>
            </div>
          ))}
          <div className="flex justify-between items-baseline mt-4 pt-4 border-t border-border">
            <span className="text-sm font-medium text-foreground">Monthly burn</span>
            <span className="text-3xl font-bold text-foreground tracking-tightest">$562</span>
          </div>
        </div>

        <div className="card-soft p-7 border-2 border-primary/30 bg-primary/[0.02]">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-5 pb-4 border-b border-border">
            Full stack on your hardware
          </div>
          {[
            ["CRM", "$0/mo"],
            ["Photos photos", "$0/mo"],
            ["SMS SMS", "~$10/mo"],
            ["Voice AI AI", "included"],
            ["File Storage storage", "$0/mo"],
          ].map(([name, price]) => (
            <div key={name} className="flex justify-between items-baseline py-2.5 border-b border-border last:border-b-0">
              <span className="text-sm text-muted-foreground">{name}</span>
              <span className="text-sm font-medium text-foreground">{price}</span>
            </div>
          ))}
          <div className="flex justify-between items-baseline mt-4 pt-4 border-t border-border">
            <span className="text-sm font-medium text-foreground">Monthly burn</span>
            <span className="text-3xl font-bold text-primary tracking-tightest">~$20</span>
          </div>
        </div>
      </div>

      {/* Savings banner */}
      <div className="invert-section bg-background rounded-2xl p-8 md:p-10 mb-14 shadow-elevated">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            [fmt(moSave), "saved per month"],
            [fmt(moSave * 12), "saved per year"],
            [fmt(moSave * 36), "saved over 3 years"],
            ["1 box", "on your desk"],
          ].map(([num, lbl], i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tightest leading-none mb-2">{num}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflows */}
      <p className="eyebrow mb-4"><span>Time you get back</span></p>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tightest mb-8">
        Four things MEP Claw handles so you don't have to.
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {workflows.map((w) => (
          <div key={w.title} className="card-soft p-6 hover:shadow-elevated transition-shadow">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">{w.trigger}</div>
            <div className="text-base font-semibold text-foreground tracking-tight mb-1.5">{w.title}</div>
            <div className="text-sm text-muted-foreground leading-relaxed mb-3">{w.desc}</div>
            <div className="text-xs font-semibold text-primary">{w.time}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TimeAndMoney;
