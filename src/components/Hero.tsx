import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DiscordQuoteDemo from "@/components/DiscordQuoteDemo";
import MiniStackFlow from "@/components/MiniStackFlow";
import dispatchButtons from "@/assets/dispatch-buttons.png.asset.json";

type Slide = {
  tab: string;
  headline: React.ReactNode;
  description: React.ReactNode;
  visual: React.ReactNode;
};

const slides: Slide[] = [
  {
    tab: "The OS",
    headline: (
      <>
        The{" "}
        <span
          className="italic font-normal text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.01em" }}
        >
          operating system
        </span>{" "}
        for the trades.
      </>
    ),
    description: (
      <>
        Eliminate expensive SaaS subscriptions. Switch to MEP Claw and
        <span className="text-foreground font-medium"> save thousands in overhead and hours of manual work every week.</span>
      </>
    ),
    visual: <DiscordQuoteDemo />,
  },
  {
    tab: "What it is",
    headline: (
      <>
        One Mini PC.{" "}
        <span
          className="italic font-normal text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.01em" }}
        >
          Runs your whole stack.
        </span>
      </>
    ),
    description: (
      <>
        It ships to your door with everything pre-installed — CRM, invoicing, a 24/7 AI receptionist, quotes, photos, dispatch. It sits on your desk.
        <span className="text-foreground font-medium"> You own it. There's nothing to subscribe to.</span>
      </>
    ),
    visual: <MiniStackFlow />,
  },
  {
    tab: "How it works",
    headline: (
      <>
        No forms.{" "}
        <span
          className="italic font-normal text-[hsl(var(--accent))]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.01em" }}
        >
          Just buttons.
        </span>
      </>
    ),
    description: (
      <>
        Dispatch a job, book a visit, log a receipt, clock in —
        <span className="text-foreground font-medium"> every workflow is a tap.</span> No forms, no data entry, no app your techs will refuse to open.
      </>
    ),
    visual: (
      <div className="rounded-2xl border border-border bg-[#1e1f22] shadow-floating overflow-hidden p-4 md:p-6 flex items-center justify-center h-full min-h-[520px]">
        <img src={dispatchButtons.url} alt="Discord dispatch buttons" className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg" />
      </div>
    ),
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 9000);
    return () => clearInterval(id);

  }, []);

  const slide = slides[active];

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0 hero-wash pointer-events-none" aria-hidden="true" />

      <div className="container max-w-[1680px] mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-28 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - copy */}
          <div className="lg:col-span-7">
            <div key={`h-${active}`} className="animate-fade-in">
              <h1 className="text-[clamp(3rem,6.8vw,5.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-8">
                {slide.headline}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                {slide.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Button variant="cta" size="lg" asChild>
                <a href="#features" className="group">
                  Explore the platform <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - visual */}
          <div className="lg:col-span-5 relative">
            <div key={`v-${active}`} className="animate-fade-in min-h-[520px] md:min-h-[560px] flex">
              <div className="w-full flex">{slide.visual}</div>
            </div>
          </div>
        </div>

        {/* Tabs (replaces old trust strip) */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {slides.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  i === active
                    ? "bg-foreground text-background shadow-soft"
                    : "bg-card text-muted-foreground border border-border hover:text-foreground hover:border-foreground/30"
                }`}
                aria-pressed={i === active}
              >
                {s.tab}
                {i === active && (
                  <span
                    key={`bar-${active}`}
                    className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-[hsl(var(--accent))]/70 origin-left"
                    style={{ animation: "hero-tab-progress 9s linear forwards" }}
                  />

                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-tab-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
