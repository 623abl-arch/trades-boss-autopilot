const stats = [
  { value: "890", label: "Clients managed" },
  { value: "2,347", label: "Pricebook line items" },
  { value: "$20/mo", label: "Total stack cost" },
  { value: "100%", label: "Data on your hardware" },
];

const ProvenStats = () => (
  <section className="invert-section bg-background border-y border-border">
    <div className="container max-w-[1680px] mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <p className="eyebrow justify-center mb-4">
          <span>Proven in the field</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Numbers from a real, live deployment.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-background p-8 md:p-10 text-center">
            <p className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest mb-2">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProvenStats;
