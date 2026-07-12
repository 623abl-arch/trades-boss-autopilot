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
...
          {/* Right - two horizontal scrolling photo lanes */}
          <div
            className="flex flex-col gap-4 w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, black 80px, black 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, black 80px, black 100%)",
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
