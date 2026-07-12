import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowRight, Wrench, Cpu, Radio, FileText } from "lucide-react";

/* ============================================================
   VERSION 3 — Field Manual / Warm Industrial
   Asymmetric split hero with a giant rotating index number,
   a horizontal "shop floor" scroller of capabilities, a
   numbered field-protocol timeline, a stamped pricing shelf
   and a marquee of operator voices. Earthy & confident.
   ============================================================ */

const protocols = [
  { n: "00", t: "07:12", title: "Morning digest fires", body: "Each tech gets today's jobs, addresses, and weather risk as a single Discord card." },
  { n: "01", t: "08:04", title: "Voice AI books a job", body: "The voice AI takes a call cold, qualifies, slots a 4:30 install, drops it on the board." },
  { n: "02", t: "11:46", title: "Quote in 9 seconds", body: "Tech types '50gal heater + permit'. Pricebook builds it. Customer signs from a text link." },
  { n: "03", t: "14:21", title: "Receipt → journal entry", body: "Photo of a supply-house slip. Gemini lifts vendor, total, tax. Posts to the job. Bookkeeping is done." },
  { n: "04", t: "17:55", title: "Late-warning catches a no-show", body: "A tech hasn't clocked out 25 min past ETA. The owner is paged before the customer calls." },
];

const shopfloor = [
  { icon: Cpu, k: "01", h: "One Mini PC", d: "Runs the entire stack. Lives on your desk. Reachable via Remote Access from anywhere." },
  { icon: Wrench, k: "02", h: "CRM", d: "Customers, jobs, pricebook — 2,300+ line items, indexed and chat-searchable." },
  { icon: Radio, k: "03", h: "Discord ops", d: "Your field interface. Quotes, photos, timesheets, receipts — all in chat." },
  { icon: FileText, k: "04", h: "Invoices", d: "Quotes, invoices, Stripe, ACH, Apple Pay. Customer portal at your domain." },
];

const operators = [
  "Cancelled 4 subscriptions on day one.",
  "My pricebook is 2,300 lines. It builds quotes in chat.",
  "Receipts go from glovebox to bookkeeping in a photo.",
  "Voice AI books while we're under a house.",
  "Backups run nightly to a NAS in the closet.",
  "The data never leaves the shop. Ever.",
];

const IndexV3 = () => {
  useReveal();
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "MEP Claw — Field Manual, Edition 54";
  }, []);

  return (
    <div className="v3-manual">
      <Navbar />

      {/* ─── Asymmetric Hero ─── */}
      <section className="relative overflow-hidden border-b-2 border-foreground/15">
        <div className="container max-w-[1500px] mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 relative z-10">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-[hsl(var(--accent))] mb-6">
              Field Manual · Edition 54 · Issued to the trades
            </p>
            <h1
              data-reveal
              className="display-condensed text-[clamp(3.5rem,9vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.01em] text-foreground"
            >
              Built on the<br />
              <span className="text-[hsl(var(--accent))] italic">shop floor</span>,<br />
              not in a SaaS dashboard.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed">
              MEP Claw is the operating system contractors would have built for themselves if they'd had a
              spare year. One Mini PC. Every workflow. Under $50 a month, total.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#protocols"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 font-bold uppercase tracking-[0.16em] text-sm hover:bg-[hsl(var(--accent))] transition-colors"
              >
                Read the protocols <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#shopfloor"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-7 py-4 font-bold uppercase tracking-[0.16em] text-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Tour the shop floor
              </a>
            </div>
          </div>

          {/* Stamp / spec block */}
          <aside data-reveal className="lg:col-span-5 relative">
            <div className="absolute -top-6 -right-2 display-condensed text-[14rem] leading-none font-black text-[hsl(var(--accent))]/15 select-none pointer-events-none">
              54
            </div>
            <div className="relative border-2 border-foreground bg-background p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] font-bold border-b border-foreground/30 pb-3 mb-4">
                Specimen · Operating Stack
              </p>
              <dl className="text-sm divide-y divide-foreground/15">
                {[
                  ["Stack", "CRM · Invoices · File Storage · Photos"],
                  ["Voice", "Voice AI receptionist (24/7)"],
                  ["Field UI", "Discord, with bot commands"],
                  ["Hosting", "Mini PC + Remote Access + Cloudflare"],
                  ["Backup", "Nightly to local NAS (+$600)"],
                  ["Monthly cost", "≈ $20 stack + $15–30 SMS"],
                ].map(([k, v]) => (
                  <div key={k} className="py-3 flex gap-4">
                    <dt className="w-28 uppercase tracking-[0.18em] text-[11px] font-bold text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="flex-1 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="display-condensed italic text-[hsl(var(--accent))] mt-5">
                "Approved for shop deployment."
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Shop floor: horizontal scroll ─── */}
      <section id="shopfloor" className="bg-foreground text-background py-20">
        <div className="container max-w-[1500px] mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-[hsl(var(--accent))] mb-3">
                Chapter 01 · Walk the shop floor
              </p>
              <h2 className="display-condensed text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]">
                Four parts. One machine.
              </h2>
            </div>
            <div className="hidden md:flex gap-2 text-xs uppercase tracking-[0.18em] text-background/60">
              ← drag →
            </div>
          </div>
          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-hide"
          >
            {shopfloor.map((s) => (
              <article
                key={s.k}
                data-reveal
                className="snap-start shrink-0 w-[88%] sm:w-[60%] md:w-[40%] lg:w-[28%] bg-background text-foreground border-2 border-background p-7 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="display-condensed text-5xl font-black text-[hsl(var(--accent))]">
                    {s.k}
                  </span>
                  <s.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="display-condensed text-3xl font-extrabold uppercase mb-3">
                  {s.h}
                </h3>
                <p className="text-foreground/75 leading-relaxed text-[15px]">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Protocols Timeline ─── */}
      <section id="protocols" className="py-24">
        <div className="container max-w-[1500px] mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-[hsl(var(--accent))] mb-3">
              Chapter 02 · One day, end to end
            </p>
            <h2 className="display-condensed text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]">
              Field protocols, in the order they fire.
            </h2>
          </div>

          <ol className="relative border-l-2 border-foreground/20 ml-6 md:ml-12 space-y-12">
            {protocols.map((p) => (
              <li key={p.n} data-reveal className="relative pl-10 md:pl-16 group">
                <span className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-[hsl(var(--accent))] border-4 border-background flex items-center justify-center text-[10px] font-black text-background">
                  •
                </span>
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-2">
                    <p className="display-condensed text-3xl font-extrabold">{p.t}</p>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mt-1">
                      Protocol {p.n}
                    </p>
                  </div>
                  <div className="md:col-span-10 border-l-2 border-foreground/15 pl-6 group-hover:border-[hsl(var(--accent))] transition-colors">
                    <h3 className="display-condensed text-3xl md:text-4xl font-extrabold uppercase leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-foreground/75 mt-2 text-lg leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Pricing shelf ─── */}
      <section className="bg-[hsl(var(--surface))] py-24 border-y-2 border-foreground/15">
        <div className="container max-w-[1500px] mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-[hsl(var(--accent))] mb-3">
              Chapter 03 · From the parts shelf
            </p>
            <h2 className="display-condensed text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]">
              Pick the box. Pay once. Own it.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "Starter", hw: "Mini PC · 1–5 techs", p: "$2,500" },
              { n: "Core", hw: "Mac Mini M4 · up to 10", p: "$3,800", rec: true },
              { n: "Command", hw: "Mac Studio M4 · 10–30", p: "$5,800" },
              { n: "Fleet", hw: "Desktop · 30+", p: "$7,500+" },
            ].map((t) => (
              <div
                key={t.n}
                data-reveal
                className={`relative border-2 p-7 bg-background hover:-translate-y-1 transition-transform ${
                  t.rec ? "border-[hsl(var(--accent))] shadow-[6px_6px_0_0_hsl(var(--foreground))]" : "border-foreground"
                }`}
              >
                {t.rec && (
                  <span className="absolute -top-3 left-5 bg-[hsl(var(--accent))] text-background text-[10px] uppercase tracking-[0.22em] font-bold px-3 py-1">
                    Shop pick
                  </span>
                )}
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-muted-foreground">
                  {t.hw}
                </p>
                <h3 className="display-condensed text-4xl font-extrabold uppercase mt-2">{t.n}</h3>
                <p className="display-condensed text-6xl font-black mt-6">{t.p}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-bold border-b-2 border-foreground pb-1 hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))]"
                >
                  Request a build →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Operators marquee ─── */}
      <section className="py-16 overflow-hidden">
        <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-[hsl(var(--accent))] text-center mb-8">
          Voices from the field
        </p>
        <div className="relative">
          <div className="flex gap-12 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            {[...operators, ...operators].map((q, i) => (
              <span
                key={i}
                className="display-condensed text-3xl md:text-5xl font-extrabold uppercase text-foreground/85"
              >
                {q}
                <span className="mx-8 text-[hsl(var(--accent))]">★</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── End-of-manual CTA ─── */}
      <section className="bg-foreground text-background py-24 border-t-2 border-foreground">
        <div className="container max-w-[1500px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-end">
          <h2 className="display-condensed text-5xl md:text-7xl font-extrabold uppercase leading-[0.9]">
            Stop renting the<br />
            <span className="text-[hsl(var(--accent))]">tools of your trade.</span>
          </h2>
          <div>
            <p className="text-background/75 text-lg mb-6">
              Book a 20-minute walkthrough. We'll show you the exact box your shop needs and what to
              cancel the day it ships.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-background px-8 py-4 font-bold uppercase tracking-[0.18em] text-sm hover:bg-background hover:text-foreground transition-colors"
            >
              Schedule a build review <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default IndexV3;
