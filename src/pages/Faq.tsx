import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

const Faq = () => (
  <>
    <Navbar />
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <p className="eyebrow mb-5"><span>FAQ</span></p>
        <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
          Frequently asked questions.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Coming soon.
        </p>
      </div>
    </section>
    <SiteFooter />
  </>
);

export default Faq;
