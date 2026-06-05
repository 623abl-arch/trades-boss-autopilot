import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import QuantifiedOutcomes from "@/components/QuantifiedOutcomes";
import type { ReactNode } from "react";

export type FeatureRow = {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  /** Mock UI rendered to the right (or left when reversed) */
  visual: ReactNode;
  reverse?: boolean;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  heroVisual: ReactNode;
  /** Inline quote-with-stats card under hero (unused in current design) */
  proof?: {
    tag: string;
    quote: string;
    author: string;
    role: string;
    stats: { value: string; label: string }[];
  };
  sectionTitle?: string;
  rows: FeatureRow[];
  /** Optional technical deep-dive link */
  technicalHref?: { label: string; href: string };
};

const FeatureLanding = ({
  eyebrow,
  title,
  intro,
  heroVisual,
  rows,
  technicalHref,
}: Props) => (
  <>
    <Navbar />

    {/* HERO */}
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5"><span>{eyebrow}</span></p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              {intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
              {technicalHref && (
                <Button variant="outline" size="lg" asChild>
                  <a href={technicalHref.href}>{technicalHref.label}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">{heroVisual}</div>
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
              <div className="w-full max-w-md">{row.visual}</div>
            </div>
            <div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 text-accent text-[11px] font-bold mb-4">
                AI
              </span>
              {row.eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {row.eyebrow}
                </p>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                {row.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                {row.body}
              </p>
              <a
                href={row.cta?.href ?? "/#book"}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
              >
                {row.cta?.label ?? "Watch a demo"} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <QuantifiedOutcomes />
    <section id="book" className="bg-surface slant-top py-24">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest mb-5">
          See it run on your business.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          30-minute demo. We'll show you the exact flow for a shop like yours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
          {technicalHref && (
            <Button variant="outline" size="lg" asChild>
              <a href={technicalHref.href}>{technicalHref.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default FeatureLanding;