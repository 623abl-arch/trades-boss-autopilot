import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SiteFooter from "@/components/SiteFooter";

const PricingPage = () => {
  useEffect(() => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative bg-surface pt-24 md:pt-32 pb-0">
        <div className="container max-w-[1680px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5">
              PRICING
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-6">
              Simple, one-time pricing.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pick the box for your team size. Pay once. Own it forever.
            </p>
          </div>
        </div>
      </section>
      <Pricing />
      <SiteFooter />
    </>
  );
};

export default PricingPage;
