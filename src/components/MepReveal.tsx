import plumber from "@/assets/trade-plumber.jpg";
import electrician from "@/assets/trade-electrician.jpg";
import hvac from "@/assets/trade-hvac.jpg";
import gc from "@/assets/trade-gc.jpg";
import van from "@/assets/trade-van.jpg";
import crew from "@/assets/trade-crew.jpg";

type Card = { img: string; name: string; company: string };

const colA: Card[] = [
  { img: plumber, name: "Marcus Rivera", company: "Rivera Plumbing Co." },
  { img: hvac, name: "Tony Vasquez", company: "Vasquez Heating & Air" },
  { img: van, name: "Ray Delgado", company: "Delgado Contracting" },
];

const colB: Card[] = [
  { img: electrician, name: "Dale Whitcomb", company: "Whitcomb Electric" },
  { img: gc, name: "Sam Okafor", company: "Okafor Mechanical" },
  { img: crew, name: "Chris Boone", company: "Boone & Sons HVAC" },
];

const PhotoCard = ({ c }: { c: Card }) => (
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-elevated border border-border">
    <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-3">
      <div className="text-white font-bold text-sm leading-tight">{c.name}</div>
      <div className="text-white/75 text-xs mt-0.5">{c.company}</div>
    </div>
  </div>
);

const ScrollColumn = ({
  cards,
  direction,
  className = "",
}: {
  cards: Card[];
  direction: "up" | "down";
  className?: string;
}) => {
  const loop = [...cards, ...cards];
  return (
    <div className={`group relative h-[320px] md:h-[380px] overflow-hidden ${className}`}>
      <div
        className="flex flex-col gap-3 group-hover:[animation-play-state:paused]"
        style={{
          animation: `mep-scroll-${direction} 32s linear infinite`,
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

          {/* Right - two scrolling photo columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[220px] md:max-w-[420px] mx-auto w-full">
            <ScrollColumn cards={colA} direction="up" />
            <ScrollColumn cards={colB} direction="down" className="hidden md:block" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mep-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes mep-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default MepReveal;
