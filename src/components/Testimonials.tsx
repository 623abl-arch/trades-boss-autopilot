import { Star } from "lucide-react";

const testimonials = [
  { initials: "MR", name: "Mike R.", role: "Owner", company: "Signature Plumbing", quote: "Replaced our $600/mo Jobber subscription. Same features, my data stays on my own box. Paid for itself in week one." },
  { initials: "CD", name: "Carlos D.", role: "GM", company: "DG Mechanical", quote: "The voice agent books service calls while I'm on a roof. Caught 3 jobs last weekend that would have gone to voicemail." },
  { initials: "JT", name: "James T.", role: "Lead Electrician", company: "Tate Electric Co.", quote: "Setup took one call. The Discord command center is genius - my whole crew already lived there." },
  { initials: "SP", name: "Sara P.", role: "Operations", company: "Northwind HVAC", quote: "We were quoted $40k to build something custom. MEP Claw shipped a working stack in 48 hours." },
  { initials: "RV", name: "Ricky V.", role: "President", company: "Vega General Contracting", quote: "Owning our own CRM, file storage, and AI on one Mini PC is wild. No more per-seat fees as I hire." },
  { initials: "AK", name: "Aaron K.", role: "Field Supervisor", company: "Keller Roofing", quote: "AI quote engine writes proposals from a few photos. Closing rate is up. I'm not exaggerating." },
];

const Card = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="w-[380px] shrink-0 card-soft p-7 mx-3 hover:shadow-elevated transition-shadow">
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
      ))}
    </div>
    <p className="text-foreground text-base leading-relaxed mb-6 font-medium">"{t.quote}"</p>
    <div className="flex items-center gap-3 pt-5 border-t border-border">
      <div className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center font-semibold text-xs">
        {t.initials}
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{t.name}</div>
        <div className="text-muted-foreground text-xs">{t.role} · {t.company}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="bg-background overflow-hidden border-t border-border">
      <div className="container max-w-[1680px] mx-auto px-6 pt-20 md:pt-24 pb-10 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tight">4.8 / 5</span>
          <span className="text-muted-foreground text-sm">· based on real contractor feedback</span>
        </div>
      </div>

      <div className="group relative pb-24 md:pb-28">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default Testimonials;
