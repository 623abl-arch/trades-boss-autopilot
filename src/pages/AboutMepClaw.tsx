import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import idiocracy from "@/assets/idiocracy.png";
import SavingsCalculator from "@/components/SavingsCalculator";

const chapters = [
  {
    title: "The Idiocracy Rule",
    body: "We built this system around the movie Idiocracy - a world so simple that people just press a single giant button to get things done. Your technicians didn't get into the trades to sit in a truck filling out slow digital forms or fighting with messy app updates. With MEP Claw, your crew uses a simple chat channel where they log hours, route photos, track receipts, and send customer ETAs by just tapping a button.",
  },
  {
    title: "Software is Dead",
    body: "The software tools you need to run a business are already built and free to use, but big tech companies charge you hundreds a month per tech just to access your own data. Our founder Ryan is a licensed plumber and contractor who used to be a computer programmer. He got sick of watching his plumbing profits drain out of his business for bloated software his guys hated using - so he built a permanent, self-hosted fix.",
  },
  {
    title: "Real Field Testing",
    body: "We aren't tech executives sitting in a corporate high-rise. Every single line of automation in this stack was built on a live job site. We ran our own plumbing and service operations on this exact hardware first to make sure it actually works when you're standing in the dirt. We don't rent you software - we set up a physical server right inside your building that your company owns forever.",
  },
];

const AboutMepClaw = () => (
  <>
    <Navbar />

    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5"><span>About MEP Claw</span></p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              The story behind MEP Claw.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              Built by plumbers, GCs, and field techs who got tired of software companies eating their profit margins. One button. Your hardware. Your data. Forever.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
              <Button variant="outline" size="lg" asChild><a href="/stack">See the stack</a></Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-card max-w-sm">
              <img src={idiocracy} alt="Idiocracy - the one-button philosophy" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 space-y-16">
        {chapters.map((c) => (
          <article key={c.title}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tightest mb-5">{c.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>
    </section>

    <SavingsCalculator />

    <section className="bg-surface slant-top py-24">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest mb-5">
          One button. Your business.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          See the exact hardware and channels your shop will run on.
        </p>
        <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default AboutMepClaw;
