import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import QuantifiedOutcomes from "@/components/QuantifiedOutcomes";
import WhoItsFor from "@/components/WhoItsFor";
import OldVsNew from "@/components/OldVsNew";
import StackLogosCarousel from "@/components/StackLogosCarousel";
import CeoQuotes from "@/components/CeoQuotes";





const rows = [
  {
    eyebrow: "Command center",
    title: "The Centralized Discord Command Center.",
    body: "Eliminate app-switching for your management team. The entire back-office runs directly inside dedicated Discord channels, giving administrators a single interface to create clients, generate quotes, dispatch field technicians, check system health, and track real-time payments.",
    visualLabel: "Discord command center",
  },
  {
    eyebrow: "Your data",
    title: "The Twenty CRM Dashboard.",
    body: "Your customer and job history belong entirely to you, free from restrictive licensing. At the center of MEP Claw is a self-hosted instance of Twenty CRM, safely managing nearly a thousand rows of rich customer profiles, job scopes, individual visits, and communication history within your private network.",
    visualLabel: "Twenty CRM dashboard",
    reverse: true,
  },
  {
    eyebrow: "Field ops",
    title: "Address-Based Photo Routing.",
    body: "Clean up your company's camera rolls automatically. When technicians upload job site photos to Discord, the field-ops engine passes them to a self-hosted Immich photo server. The system automatically categorizes and organizes the images into dedicated visual albums linked to the customer's physical service address.",
    visualLabel: "Immich photo routing",
  },
  {
    eyebrow: "AI built in",
    title: "AI Receipt & Expense Extraction.",
    body: "Stop chasing paper invoices at the end of the month. When a field technician drops a material receipt photo into their chat, built-in Gemini AI instantly reads the document, extracts the vendor name, calculates the total cost, and prompts the manager to attach the expense to an active job.",
    visualLabel: "Receipt extraction",
    reverse: true,
  },
];

const WhatIsMepClaw = () => (
  <>
    <Navbar />

    {/* HERO */}
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5"><span>What is MEP Claw</span></p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              Think inside the box.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              A self-hosted stack that replaces your $400-800/mo SaaS bill with a one-time hardware buy. Dispatch, CRM, invoicing, voice AI - all on one button, all on your own server.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
              <Button variant="outline" size="lg" asChild><a href="/stack">See the stack</a></Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <StackLogosCarousel />
          </div>
        </div>
      </div>
    </section>

    {/* ALTERNATING ROWS */}
    <section className="bg-background py-24">
      <div className="container max-w-[1440px] mx-auto px-6 space-y-24 md:space-y-32">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              row.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-2xl border border-border bg-surface shadow-soft flex items-center justify-center text-sm text-muted-foreground">
                {row.visualLabel}
              </div>
            </div>
            <div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 text-accent text-[11px] font-bold mb-4">
                AI
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {row.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                {row.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                {row.body}
              </p>
              <a
                href="/#book"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                Watch a demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <QuantifiedOutcomes />
    <CeoQuotes />
    <WhoItsFor />
    <OldVsNew />
    <section className="bg-surface slant-top py-24">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest mb-5">
          See it run on your business.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          30-minute demo. We'll show you the exact flow for a shop like yours.
        </p>
        <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default WhatIsMepClaw;
