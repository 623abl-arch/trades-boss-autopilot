import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaFooter = () => (
  <section id="book" className="invert-section relative bg-background overflow-hidden border-t border-border">
    <div className="container max-w-5xl mx-auto px-6 py-28 md:py-40 text-center relative">
      <p className="text-xs font-bold tracking-[0.3em] text-[hsl(var(--accent))] mb-6">GET STARTED</p>
      <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tightest mb-8 leading-[1.02]">
        Own your operation.
        <br className="hidden md:block" />
        <em className="not-italic font-serif italic text-[hsl(var(--accent))]">Stop renting it.</em>
      </h2>
      <p className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-12 max-w-2xl mx-auto leading-snug sr-only">
        Removed
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="cta" size="lg" asChild>
          <a href="#book" className="group">
            Book a discovery call
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#pricing">View pricing</a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground mt-10 tracking-[0.15em] uppercase font-semibold">
        No monthly SaaS · No per-seat fees · No vendor can shut you off
      </p>
    </div>
  </section>
);

export default CtaFooter;
