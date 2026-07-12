import plumber from "@/assets/trade-plumber.jpg";
import electrician from "@/assets/trade-electrician.jpg";
import hvac from "@/assets/trade-hvac.jpg";
import gc from "@/assets/trade-gc.jpg";
import van from "@/assets/trade-van.jpg";
import crew from "@/assets/trade-crew.jpg";
import landscape from "@/assets/trade-landscape.jpg";
import femaleTech from "@/assets/trade-female-tech.jpg";
import crewGroup from "@/assets/trade-crew-group.jpg";
import carpenter from "@/assets/trade-carpenter.jpg";
import roofer from "@/assets/trade-roofer.jpg";
import concrete from "@/assets/trade-concrete.jpg";

type Card = { img: string; name: string; company: string };

const colA: Card[] = [
  { img: plumber, name: "Marcus Rivera", company: "Rivera Plumbing Co." },
  { img: hvac, name: "Tony Vasquez", company: "Vasquez Heating & Air" },
  { img: van, name: "Ray Delgado", company: "Delgado Contracting" },
  { img: landscape, name: "Javier Ortiz", company: "J&R Landscaping" },
  { img: carpenter, name: "Mike Halloran", company: "Halloran Framing" },
  { img: roofer, name: "Derrick Pace", company: "Pace Roofing" },
];

const colB: Card[] = [
  { img: electrician, name: "Dale Whitcomb", company: "Whitcomb Electric" },
  { img: gc, name: "Sam Okafor", company: "Okafor Mechanical" },
  { img: crew, name: "Chris Boone", company: "Boone & Sons HVAC" },
  { img: femaleTech, name: "Erin Wescott", company: "Western Trades Co." },
  { img: crewGroup, name: "Bramer Crew", company: "Bramer Landscapes" },
  { img: concrete, name: "Nate Kowalski", company: "Kowalski Concrete" },
];

const PhotoCard = ({ c }: { c: Card }) => (
  <div className="relative flex-shrink-0 w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-2xl overflow-hidden shadow-elevated border border-border">
    <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-3">
      <div className="text-white font-bold text-sm leading-tight">{c.name}</div>
      <div className="text-white/75 text-xs mt-0.5">{c.company}</div>
    </div>
  </div>
);

const ScrollLane = ({
  cards,
  direction,
  className = "",
}: {
  cards: Card[];
  direction: "left" | "right";
  className?: string;
}) => {
  const loop = [...cards, ...cards];
  return (
    <div className={`group relative h-[200px] md:h-[220px] overflow-hidden ${className}`}>
      <div
        className="flex gap-4 group-hover:[animation-play-state:paused]"
        style={{
          animation: `mep-scroll-${direction} 40s linear infinite`,
          width: "max-content",
        }}
      >
        {loop.map((c, i) => (
          <PhotoCard key={`${direction}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
};

const MepReveal = () => {
  return (
    <section className="relative bg-background border-t border-border overflow-hidden">
      <div className="container max-w-[1680px] mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - MEP typography */}
          <div>
            <div className="space-y-1 md:space-y-2">
              {["Mechanical", "Electrical", "Plumbing"].map((word) => (
                <h2
                  key={word}
                  className="font-bold tracking-tightest leading-[0.95] text-foreground text-[clamp(3rem,7vw,6rem)]"
                >
                  <span className="text-[hsl(var(--accent))] font-black">
                    {word[0]}
                  </span>
                  <span className="text-[0.55em] font-bold align-baseline">{word.slice(1)}</span>
                </h2>
              ))}
            </div>
            <p className="mt-8 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
              The trades that keep buildings running.{" "}
              <span className="text-foreground font-medium">
                MEP Claw is built for all of them.
              </span>
            </p>
          </div>

          {/* Right - two horizontal scrolling photo lanes */}
          <div
            className="flex flex-col gap-4 w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 96px, black 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 96px, black 100%)",
            }}
          >
            <ScrollLane cards={colA} direction="left" />
            <ScrollLane cards={colB} direction="right" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mep-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes mep-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default MepReveal;
