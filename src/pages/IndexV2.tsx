import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { ArrowUpRight } from "lucide-react";

/* ============================================================
   VERSION 2 — Editorial Broadsheet
   Inspired by a Sunday newspaper front page. Masthead, dateline,
   multi-column body copy with drop cap, "Inside this issue" rail,
   a numbered feature ledger, By-the-Numbers strip, Classifieds-
   style pricing, and a colophon footer. Hairline rules everywhere.
   ============================================================ */

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const inside = [
  { num: "A2", title: "The case against the SaaS stack", page: "Opinion" },
  { num: "A4", title: "Quotes in under ten seconds", page: "Field Report" },
  { num: "A6", title: "By the numbers: one live deployment", page: "Data" },
  { num: "B1", title: "Classifieds — hardware tiers, priced", page: "Market" },
  { num: "B3", title: "Letters from the shop floor", page: "Voices" },
];

const ledger = [
  {
    n: "01",
    kind: "Dispatch",
    head: "A receptionist that never sleeps, never quits.",
    dek: "Retell AI fields every call, books the job, drops it on the board before the phone stops ringing.",
  },
  {
    n: "02",
    kind: "Quotes",
    head: "Two thousand line items, one chat message.",
    dek: "Type the work. The pricebook does the math. The customer gets a portal in under ten seconds.",
  },
  {
    n: "03",
    kind: "Receipts",
    head: "A photo is a journal entry.",
    dek: "Snap the supply-house slip. Gemini extracts vendor, total, tax. It posts to the job. Books close themselves.",
  },
  {
    n: "04",
    kind: "Field",
    head: "Photos that file themselves.",
    dek: "Crews drop pictures in a Discord channel. The system routes them into the right client folder. Forever.",
  },
];

const numbers = [
  { v: "890", l: "Clients managed" },
  { v: "2,347", l: "Pricebook lines" },
  { v: "$20", l: "Monthly stack cost" },
  { v: "100%", l: "Data on your hardware" },
];

const classifieds = [
  { name: "Starter Node", techs: "1–5 techs", hw: "Mini PC", price: "$2,500" },
  { name: "Core Node", techs: "Up to 10", hw: "Mac Mini M4", price: "$3,800", star: true },
  { name: "Command Node", techs: "10–30", hw: "Mac Studio M4", price: "$5,800" },
  { name: "Fleet Node", techs: "30+", hw: "Large Desktop", price: "$7,500+" },
];

const IndexV2 = () => {
  useReveal();
  useEffect(() => {
    document.title = "MEP Claw — The Trades Broadsheet, Vol. 1";
  }, []);

  return (
    <div className="v2-editorial">
      <Navbar />

      {/* ─── Masthead ─── */}
      <header className="border-b-[3px] border-foreground">
        <div className="container max-w-[1400px] mx-auto px-6 pt-10 pb-6">
          <div className="flex items-end justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground border-b border-foreground/40 pb-3 mb-6">
            <span>Vol. I · No. 54</span>
            <span className="hidden md:block">{today}</span>
            <span>$0.00 / Always free to read</span>
          </div>
          <h1 className="display-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.88] font-black text-foreground text-center tracking-[-0.02em]">
            The Trades Broadsheet
          </h1>
          <p className="display-serif italic text-center text-muted-foreground mt-3 text-lg">
            “Owning the stack the SaaS world taught contractors to rent.”
          </p>
        </div>
      </header>

      {/* ─── Front-page lead ─── */}
      <section className="border-b border-foreground/30">
        <div className="container max-w-[1400px] mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 lg:border-r lg:border-foreground/30 lg:pr-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--accent))] font-bold mb-4">
              Front page · The lead story
            </p>
            <h2
              data-reveal
              className="display-serif text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.02em] mb-6"
            >
              A plumbing shop in Texas runs its entire business on a $400 Mini&nbsp;PC — and saves
              <span className="italic font-normal"> $7,000 a year</span> doing it.
            </h2>

            <div
              data-reveal
              className="md:columns-2 md:gap-8 text-[17px] leading-[1.65] text-foreground/85 [&>p]:mb-4 first-letter:font-black first-letter:text-[5rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:font-serif"
            >
              <p>
                For two decades the trades have been handed the same bargain: rent a stack of subscriptions
                — Jobber for scheduling, ServiceTitan for dispatch, CompanyCam for photos, Twilio for SMS —
                and let your customer list, your pricebook, and your job history live on someone else's server.
              </p>
              <p>
                MEP Claw is the counter-offer. Twenty CRM, Invoice Ninja, Nextcloud, Immich, a Retell voice
                agent and a Discord-based field interface, all pre-installed on a single Mini PC on your
                desk. Reachable from anywhere via Tailscale. Backed up to a NAS in the closet. Replaceable
                at any time because every piece is open source.
              </p>
              <p>
                The total monthly cost — Twilio, the VPS, optional AI tokens — clears <em>under fifty
                dollars</em>. The hardware is purchased once. The data, every byte, never leaves the shop.
              </p>
            </div>

            <a
              href="#ledger"
              className="inline-flex items-center gap-2 mt-8 border-b-2 border-foreground pb-1 text-sm font-bold uppercase tracking-[0.18em] hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition-colors"
            >
              Read the field report <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Inside this issue */}
          <aside className="lg:col-span-4" data-reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-4 border-b border-foreground pb-2">
              Inside this issue
            </p>
            <ul className="divide-y divide-foreground/20">
              {inside.map((i) => (
                <li key={i.num} className="py-3 flex items-baseline gap-3">
                  <span className="display-serif italic text-[hsl(var(--accent))] w-9 shrink-0">
                    {i.num}
                  </span>
                  <div className="flex-1">
                    <p className="display-serif text-lg leading-tight">{i.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                      {i.page}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border border-foreground p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-2">
                Late edition
              </p>
              <p className="display-serif text-2xl leading-tight">
                A2P 10DLC approval clears, outbound SMS now LIVE on customer phones.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Numbered Feature Ledger ─── */}
      <section id="ledger" className="border-b border-foreground/30">
        <div className="container max-w-[1400px] mx-auto px-6 py-16">
          <div className="flex items-end justify-between border-b-2 border-foreground pb-3 mb-8">
            <h3 className="display-serif text-3xl md:text-4xl font-black">The Ledger</h3>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Four workflows, audited
            </p>
          </div>
          <div className="divide-y divide-foreground/30">
            {ledger.map((row) => (
              <article
                key={row.n}
                data-reveal
                className="grid md:grid-cols-12 gap-6 py-8 group hover:bg-foreground/[0.03] transition-colors"
              >
                <div className="md:col-span-1 display-serif text-5xl italic text-[hsl(var(--accent))]">
                  {row.n}
                </div>
                <div className="md:col-span-2 text-[11px] uppercase tracking-[0.22em] font-bold pt-3">
                  {row.kind}
                </div>
                <h4 className="md:col-span-6 display-serif text-3xl md:text-4xl leading-[1.05] font-bold">
                  {row.head}
                </h4>
                <p className="md:col-span-3 text-foreground/75 leading-relaxed text-[15px]">
                  {row.dek}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <section className="border-b border-foreground/30 bg-foreground text-background">
        <div className="container max-w-[1400px] mx-auto px-6 py-16">
          <p className="text-[11px] uppercase tracking-[0.22em] text-background/70 font-bold mb-2">
            Page A6 · Data
          </p>
          <h3 className="display-serif text-4xl md:text-5xl font-black mb-10">
            By the numbers, from one live deployment.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-background/30 border-y border-background/40">
            {numbers.map((n) => (
              <div key={n.l} data-reveal className="py-8 px-4 first:pl-0">
                <p className="display-serif text-6xl md:text-7xl font-black leading-none tracking-[-0.02em]">
                  {n.v}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-background/70 mt-3">
                  {n.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Classifieds ─── */}
      <section className="border-b border-foreground/30">
        <div className="container max-w-[1400px] mx-auto px-6 py-16">
          <div className="flex items-end justify-between border-b-2 border-foreground pb-3 mb-8">
            <h3 className="display-serif text-3xl md:text-4xl font-black">Classifieds — Hardware</h3>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              One-time purchase · No subscriptions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/30 border border-foreground/30">
            {classifieds.map((t) => (
              <div
                key={t.name}
                data-reveal
                className={`relative bg-background p-6 ${
                  t.star ? "ring-2 ring-inset ring-[hsl(var(--accent))]" : ""
                }`}
              >
                {t.star && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.22em] font-bold text-[hsl(var(--accent))]">
                    ★ Editor's pick
                  </span>
                )}
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-2">{t.techs}</p>
                <h4 className="display-serif text-2xl mb-1">{t.name}</h4>
                <p className="text-sm text-muted-foreground mb-5 italic">{t.hw}</p>
                <p className="display-serif text-5xl font-black leading-none">{t.price}</p>
                <a
                  href="#"
                  className="mt-6 inline-block text-[11px] uppercase tracking-[0.22em] font-bold border-b border-foreground pb-1 hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))]"
                >
                  Reply to listing →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Letters from the shop floor ─── */}
      <section className="border-b border-foreground/30">
        <div className="container max-w-[1400px] mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold mb-2">Page B3</p>
            <h3 className="display-serif text-4xl font-black leading-[1.05]">
              Letters from the shop&nbsp;floor.
            </h3>
          </div>
          {[
            {
              q: "I cancelled four subscriptions the day we plugged it in. My accountant cried.",
              by: "— Owner, 8-tech plumbing shop, Austin",
            },
            {
              q: "My techs send a photo and it ends up in the right job folder. That's the whole pitch.",
              by: "— Lead dispatcher, HVAC, Phoenix",
            },
          ].map((l, i) => (
            <blockquote
              key={i}
              data-reveal
              className="display-serif text-2xl leading-snug border-l-2 border-[hsl(var(--accent))] pl-5"
            >
              <p className="italic">“{l.q}”</p>
              <footer className="not-italic text-sm uppercase tracking-[0.18em] text-muted-foreground mt-4 font-bold">
                {l.by}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ─── Colophon CTA ─── */}
      <section className="bg-foreground text-background">
        <div className="container max-w-[1400px] mx-auto px-6 py-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-background/70 mb-4">
            Colophon
          </p>
          <h3 className="display-serif text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.02em] max-w-4xl mx-auto">
            Set the type. Own the press. <em className="font-normal">Run the trade.</em>
          </h3>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-10 bg-background text-foreground px-8 py-4 font-bold uppercase tracking-[0.18em] text-sm hover:bg-[hsl(var(--accent))] hover:text-background transition-colors"
          >
            Subscribe to a demo <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default IndexV2;
