import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DiscordQuoteDemo from "@/components/DiscordQuoteDemo";

const trustLogos = ["Jobber", "ServiceTitan", "FieldEdge", "Housecall Pro", "CompanyCam"];

const Hero = () => {
  return (
  <section className="relative bg-background overflow-hidden">
    {/* radial wash */}
    <div className="absolute inset-0 hero-wash pointer-events-none" aria-hidden="true" />

    <div className="container max-w-[1680px] mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-28 relative">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left - copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 mb-7 shadow-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-foreground">
              Now shipping to plumbing, HVAC & GC crews
            </span>
          </div>

          <h1 className="text-[clamp(3rem,6.8vw,5.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-8">
            The{" "}
            <span
              className="italic font-normal text-[hsl(var(--accent))]"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.01em" }}
            >
              operating system
            </span>{" "}
            for the trades.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Eliminate expensive SaaS subscriptions. Switch to MepClaw and
            <span className="text-foreground font-medium"> save thousands in overhead and hours of manual work every week.</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Button variant="cta" size="lg" asChild>
              <a href="#features" className="group">
                Explore the platform <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right - Discord chat demo */}
        <div className="lg:col-span-5 relative">
          <DiscordQuoteDemo />
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-16 md:mt-20 pt-10 border-t border-border">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Replaces the SaaS stack contractors are tired of paying for
        </p>
        <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
          {trustLogos.map((name) => (
            <span
              key={name}
              className="relative z-10 bg-background px-3 text-lg md:text-xl font-bold text-foreground/60 tracking-tight"
            >
              <span className="relative inline-block">
                {name}
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-1/2 h-px bg-destructive -rotate-[4deg]"
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
