import { useEffect, useState } from "react";
import zuckImg from "@/assets/quote-zuck.png";
import cubanImg from "@/assets/quote-cuban.png";
import jensenImg from "@/assets/quote-jensen.png";
import whitehurstImg from "@/assets/quote-whitehurst.png";

const ceoQuotes = [
  { quote: "Open-source software is generally more secure and safer due to increased scrutiny.", author: "Mark Zuckerberg", role: "CEO of Meta", image: zuckImg },
  { quote: "Software is dead because everything's going to be customized to your unique utilization.", author: "Mark Cuban", role: "Entrepreneur", image: cubanImg },
  { quote: "Every company in the world today needs to have an OpenClaw strategy.", author: "Jensen Huang", role: "CEO of NVIDIA", image: jensenImg },
  { quote: "We are seeing open source become the default choice for the modern enterprise, displacing the legacy, high-cost models that held companies hostage for decades.", author: "Jim Whitehurst", role: "CEO of Red Hat", image: whitehurstImg },
];

const contractorQuotes = [
  { quote: "Replaced our $600/mo Jobber subscription. Same features, my data stays on my own box.", author: "Mike R.", role: "Owner, Signature Plumbing", initials: "MR" },
  { quote: "The voice agent books service calls while I'm on a roof. Caught 3 jobs last weekend that would have gone to voicemail.", author: "Carlos D.", role: "GM, DG Mechanical", initials: "CD" },
  { quote: "Setup took one call. The Discord command center is genius - my whole crew already lived there.", author: "James T.", role: "Lead Electrician, Tate Electric", initials: "JT" },
  { quote: "Owning our own CRM, file storage, and AI on one Mini PC is wild. No more per-seat fees as I hire.", author: "Ricky V.", role: "President, Vega GC", initials: "RV" },
];

const CeoQuotes = () => {
  const length = Math.max(ceoQuotes.length, contractorQuotes.length);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((i) => i + 1), 7000);
    return () => clearInterval(t);
  }, []);
  const leaderIdx = tick % ceoQuotes.length;
  const contractorIdx = tick % contractorQuotes.length;
  const setLeaderIdx = (i: number) => setTick(i);
  const setContractorIdx = (i: number) => setTick(i);

  const leader = ceoQuotes[leaderIdx];
  const contractor = contractorQuotes[contractorIdx];

  return (
    <section className="relative bg-background border-t border-border overflow-hidden">
      {/* soft background splashes */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[hsl(var(--accent))]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full bg-sky-400/10 blur-3xl" />

      <div className="container max-w-[1680px] mx-auto px-6 py-20 md:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEADERS - left/above */}
          <div className="lg:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-foreground/60 shrink-0" aria-hidden="true" />
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.02]">
                What <em className="not-italic font-serif italic">leaders</em> are saying
              </h2>
            </div>
            <figure
              key={`l-${leaderIdx}`}
              className="relative rounded-2xl border border-border bg-card p-7 md:p-9 shadow-elevated animate-in fade-in duration-700"
            >
              <div className="absolute -top-4 left-7 text-5xl text-[hsl(var(--accent))]/60 font-serif leading-none">"</div>
              <div className="flex items-start gap-5">
                <img
                  src={leader.image}
                  alt={leader.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-border shrink-0"
                />
                <div className="flex-1">
                  <p className="text-base md:text-lg text-foreground/90 italic leading-snug">
                    {leader.quote}
                  </p>
                  <figcaption className="mt-4 text-sm not-italic">
                    <span className="font-semibold text-foreground">{leader.author}</span>
                    <span className="text-muted-foreground"> · {leader.role}</span>
                  </figcaption>
                </div>
              </div>
            </figure>
            <div className="flex gap-2 mt-4">
              {ceoQuotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLeaderIdx(i)}
                  aria-label={`Show leader quote ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === leaderIdx ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
          </div>

          {/* CONTRACTORS - right/below */}
          <div className="lg:pt-40">
            <div className="mb-8 flex items-center gap-4 lg:justify-end">
              <span className="h-px w-12 bg-foreground/60 shrink-0 lg:order-1 lg:hidden" aria-hidden="true" />
              <span className="hidden lg:inline-block h-px w-12 bg-foreground/60 shrink-0" aria-hidden="true" />
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.02]">
                What <em className="not-italic font-serif italic">contractors</em> are saying
              </h2>
            </div>
            <figure
              key={`c-${contractorIdx}`}
              className="relative rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-7 md:p-9 shadow-elevated animate-in fade-in duration-700"
            >
              <div className="absolute -top-4 right-7 text-5xl text-sky-500/50 font-serif leading-none">"</div>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shrink-0 border border-border">
                  {contractor.initials}
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-foreground/90 italic leading-snug">
                    {contractor.quote}
                  </p>
                  <figcaption className="mt-4 text-sm not-italic">
                    <span className="font-semibold text-foreground">{contractor.author}</span>
                    <span className="text-muted-foreground"> · {contractor.role}</span>
                  </figcaption>
                </div>
              </div>
            </figure>
            <div className="flex gap-2 mt-4">
              {contractorQuotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setContractorIdx(i)}
                  aria-label={`Show contractor quote ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === contractorIdx ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoQuotes;
