import founder from "@/assets/founder.jpg";
import { Check } from "lucide-react";

const credentials = [
  "Licensed plumber + general contractor",
  "Actively runs a crew in the field today",
  "MEP Claw runs his own business first",
  "Built every workflow on real jobsites",
];

const About = () => (
  <section className="bg-background">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-muted">
              <img
                src={founder}
                alt="MEP Claw founder"
                className="w-full h-auto block"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden md:block bg-card border border-border rounded-xl px-5 py-4 shadow-elevated max-w-[220px]">
              <div className="text-xs text-muted-foreground mb-1">Field-tested</div>
              <div className="text-sm font-semibold text-foreground leading-snug">
                Live on a real plumbing & GC operation
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5"><span>Built by contractors</span></p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-6">
            Built by contractors. Run by contractors.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            MEP Claw was built by plumbers, GCs, and field techs who got tired of software companies eating their profit margins. Founded by Ryan - a licensed contractor and former programmer - this stack runs his own field operations first and replaces slow apps with a dead-simple button system.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            You buy the hardware once, own your data completely, and never pay a per-user software subscription again.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{c}</span>
              </li>
            ))}
          </ul>

          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elevated transition-all"
          >
            Read our story
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
