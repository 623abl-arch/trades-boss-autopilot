import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Check, Terminal, Cpu, Zap, Shield, Database, Radio } from "lucide-react";

/* ============================================================
   VERSION 4 — Clean Dark Minimal (Linear / Vercel style)
   Centered tight hero · animated tabbed feature switcher ·
   bento capability grid · inline numbers row · 4 dark pricing
   cards · changelog list · status-bar footer line.
   ============================================================ */

const tabs = [
  {
    k: "quotes",
    label: "Quotes",
    title: "Type the work. Send a portal.",
    body: "A pricebook of 2,300+ line items, indexed and chat-searchable. One Discord message builds a customer profile, calculates totals, and texts a payment link in under ten seconds.",
    log: [
      "> /quote 50gal water heater + permit",
      "✓ pricebook hit · 4 lines · subtotal $1,840",
      "✓ customer profile created · Sarah M.",
      "✓ portal sent · sms · 8.2s",
    ],
  },
  {
    k: "voice",
    label: "Voice AI",
    title: "A receptionist that doesn't sleep.",
    body: "Retell AI fields every inbound call 24/7, qualifies the job, books it on the dispatch board, and posts a confirmation to the team channel before the phone stops ringing.",
    log: [
      "> incoming · +1 512 …",
      "✓ intent · water heater install",
      "✓ slot held · today 16:30",
      "✓ dispatched · #field-crew",
    ],
  },
  {
    k: "receipts",
    label: "Receipts",
    title: "A photo is a journal entry.",
    body: "Snap a supply-house receipt in chat. Gemini extracts vendor, total and tax category. Assign it to a job with one tap. CRM and books update in real time.",
    log: [
      "> attachment.jpg",
      "✓ vendor · Ferguson",
      "✓ total · $312.40 · tax 8.25%",
      "✓ posted · job #2147",
    ],
  },
  {
    k: "field",
    label: "Field",
    title: "Photos that file themselves.",
    body: "Crews drop job photos in their channel. A 4-hour sticky window routes them automatically into the right client folder on Nextcloud. No tagging, no upload screens.",
    log: [
      "> 12 photos dropped",
      "✓ sticky · 1421 Oak St · Cortez",
      "✓ routed · /clients/cortez/2026-06",
      "✓ archived",
    ],
  },
];

const bento = [
  { icon: Cpu, t: "One Mini PC", d: "Runs the entire stack on your desk." },
  { icon: Shield, t: "Tailscale + Cloudflare", d: "Private mesh, public on your domain." },
  { icon: Database, t: "Nightly backups", d: "To a NAS in the closet. +$600." },
  { icon: Radio, t: "Discord field UI", d: "Your team already uses it." },
  { icon: Zap, t: "<$50/mo, all in", d: "Twilio + VPS + optional AI tokens." },
  { icon: Terminal, t: "Open source, top to bottom", d: "Replaceable. No lock-in." },
];

const changelog = [
  { d: "May 14", tag: "Phase 8.1", t: "AI-extracted receipts go live in chat." },
  { d: "May 02", tag: "SMS W7", t: "Outbound 10DLC messaging fully rolled out." },
  { d: "Apr 28", tag: "Phase 7d", t: "Weather alerts attach to morning digests." },
  { d: "Apr 19", tag: "Phase 7b", t: "Per-tech morning briefings shipped." },
  { d: "Apr 06", tag: "Phase 6.5", t: "Independent timesheet hours on multi-man jobs." },
];

const IndexV4 = () => {
  useReveal();
  const [active, setActive] = useState(tabs[0].k);
  const cur = tabs.find((t) => t.k === active)!;

  useEffect(() => {
    document.title = "MEP Claw — The operating system for the trades";
  }, []);

  // auto-advance the tabs
  useEffect(() => {
    const id = setInterval(() => {
      setActive((k) => {
        const i = tabs.findIndex((t) => t.k === k);
        return tabs[(i + 1) % tabs.length].k;
      });
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="v4-min min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ─── Status pill bar ─── */}
      <div className="border-b border-border">
        <div className="container max-w-[1200px] mx-auto px-6 h-9 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--accent))] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
            </span>
            <span>All systems operational · Session 54 deployed</span>
          </span>
          <span className="hidden md:inline">v54 · changelog ↓</span>
        </div>
      </div>

      {/* ─── Centered tight hero ─── */}
      <section className="relative">
        <div className="container max-w-[1100px] mx-auto px-6 pt-24 pb-16 text-center">
          <p
            data-reveal
            className="inline-flex items-center gap-2 text-xs text-muted-foreground border border-border rounded-full px-3 py-1 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
            Now shipping to plumbing, HVAC and GC crews
          </p>
          <h1
            data-reveal
            className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-light leading-[1.02] tracking-[-0.03em] mb-8"
          >
            The operating system<br />
            <span className="text-muted-foreground">for the trades.</span>
          </h1>
          <p
            data-reveal
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
          >
            One Mini PC on your desk runs every workflow that used to cost you thousands a month.
            Under $50 all-in. Your data never leaves the shop.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore the platform <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-md text-sm font-medium hover:bg-muted transition-colors"
            >
              See pricing
            </a>
          </div>
        </div>

        {/* Product window mock */}
        <div data-reveal className="container max-w-[1100px] mx-auto px-6 pb-24">
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-[0_0_60px_-15px_hsl(var(--accent)/0.15)]">
            <div className="flex items-center gap-2 px-4 h-9 border-b border-border bg-muted/30">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-4 text-[11px] text-muted-foreground font-mono">
                mepclaw://shop · session 54
              </span>
              <span className="ml-auto text-[11px] text-[hsl(var(--accent))] font-mono">● live</span>
            </div>
            <div className="grid md:grid-cols-[200px_1fr] divide-x divide-border">
              <nav className="p-3">
                {tabs.map((t) => {
                  const a = t.k === active;
                  return (
                    <button
                      key={t.k}
                      onClick={() => setActive(t.k)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        a ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </nav>
              <div key={cur.k} className="p-7 animate-fade-in">
                <h3 className="text-xl font-medium mb-2">{cur.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl">
                  {cur.body}
                </p>
                <pre className="font-mono text-[12.5px] leading-7 text-muted-foreground bg-muted/40 border border-border rounded-lg p-4">
                  {cur.log.map((l, i) => (
                    <div key={i} className={l.startsWith(">") ? "text-foreground" : "text-[hsl(var(--accent))]"}>
                      {l}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Inline numbers row ─── */}
      <section className="border-y border-border">
        <div className="container max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["890", "Clients managed"],
            ["2,347", "Pricebook lines"],
            ["$20/mo", "Stack cost"],
            ["100%", "Data on your hardware"],
          ].map(([v, l], i) => (
            <div key={l} data-reveal className={`py-10 px-6 ${i === 0 ? "pl-0" : ""}`}>
              <p className="text-3xl md:text-4xl font-light tracking-[-0.02em]">{v}</p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bento capabilities ─── */}
      <section id="features" className="py-24">
        <div className="container max-w-[1100px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--accent))] font-medium mb-3">
              Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.02em]">
              Every piece of the stack,
              <span className="text-muted-foreground"> already wired together.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {bento.map((b, i) => (
              <div
                key={b.t}
                data-reveal
                className={`group rounded-xl border border-border bg-card p-6 hover:border-[hsl(var(--accent))]/50 transition-colors ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <b.icon className="w-5 h-5 text-[hsl(var(--accent))] mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-medium mb-1.5">{b.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing — minimal dark cards ─── */}
      <section id="pricing" className="py-24 border-t border-border">
        <div className="container max-w-[1100px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--accent))] font-medium mb-3">
              Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-[-0.02em]">
              One-time purchase.
              <span className="text-muted-foreground"> No subscriptions.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { n: "Starter", t: "1–5 techs", hw: "Mini PC", p: "$2,500", perks: ["Stack pre-installed", "Voice AI", "3-hr onboarding"] },
              { n: "Core", t: "Up to 10", hw: "Mac Mini M4", p: "$3,800", rec: true, perks: ["Everything in Starter", "Faster local AI", "Priority support"] },
              { n: "Command", t: "10–30", hw: "Mac Studio M4", p: "$5,800", perks: ["Everything in Core", "Dedicated AI brain", "Multi-location"] },
              { n: "Fleet", t: "30+", hw: "Desktop tower", p: "$7,500+", perks: ["Everything in Command", "Custom config", "White-glove deploy"] },
            ].map((t) => (
              <div
                key={t.n}
                data-reveal
                className={`relative rounded-xl border bg-card p-6 flex flex-col ${
                  t.rec ? "border-[hsl(var(--accent))]/40" : "border-border"
                }`}
              >
                {t.rec && (
                  <span className="absolute -top-2.5 left-6 text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--accent))] font-medium bg-background px-2">
                    Recommended
                  </span>
                )}
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.t}</p>
                <h3 className="text-xl font-medium mt-1">{t.n}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{t.hw}</p>
                <p className="text-4xl font-light tracking-[-0.02em] mt-6 mb-6">{t.p}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-[hsl(var(--accent))] mt-0.5 shrink-0" strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`text-center text-sm font-medium rounded-md py-2.5 transition-colors ${
                    t.rec
                      ? "bg-[hsl(var(--accent))] text-background hover:opacity-90"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  Get started →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Changelog ─── */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-[1100px] mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--accent))] font-medium mb-3">
              Changelog
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-[-0.02em]">
              Shipped, weekly.
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              A real production system. These are the last five things that landed.
            </p>
          </div>
          <ul className="divide-y divide-border">
            {changelog.map((c) => (
              <li
                key={c.t}
                data-reveal
                className="py-5 grid grid-cols-[80px_110px_1fr_auto] items-center gap-4 group hover:text-foreground transition-colors"
              >
                <span className="text-xs text-muted-foreground font-mono">{c.d}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--accent))] font-medium">
                  {c.tag}
                </span>
                <span className="text-sm">{c.t}</span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-32 border-t border-border">
        <div className="container max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-[-0.03em]">
            Own the stack.
            <br />
            <span className="text-muted-foreground">Run the trade.</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            Twenty minutes. We map your current SaaS spend to a single box on your desk.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-10 bg-foreground text-background px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a walkthrough <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default IndexV4;
