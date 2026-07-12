import { useEffect, useState } from "react";

type LogoItem = {
  name: string;
  slug?: string; // simpleicons slug
  color: string;
  fallbackMark?: string; // short text mark when no simpleicons entry
};

const stackLogos: LogoItem[] = [
  { name: "CRM", color: "#7C3AED", fallbackMark: "20" },
  { name: "Photos", slug: "immich", color: "#4250AF" },
  { name: "Invoices", color: "#000000", fallbackMark: "IN" },
  { name: "File Storage", slug: "nextcloud", color: "#0082C9" },
  { name: "Voice AI", color: "#10B981", fallbackMark: "R" },
  { name: "AI Agent", color: "#F97316", fallbackMark: "N" },
  { name: "SMS", slug: "twilio", color: "#F22F46" },
  { name: "Discord", slug: "discord", color: "#5865F2" },
];

type Props = {
  eyebrow?: string;
  className?: string;
};

const StackLogosCarousel = ({ eyebrow = "The Stack", className = "" }: Props) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % stackLogos.length), 1800);
    return () => clearInterval(t);
  }, []);
  const logo = stackLogos[idx];

  return (
    <div className={`w-full max-w-sm ${className}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6 text-center">
        {eyebrow}
      </div>
      <div className="relative h-48 flex items-center justify-center overflow-hidden">
        <div
          key={logo.name}
          className="flex flex-col items-center gap-5 animate-fade-in"
        >
          <div
            className="w-24 h-24 flex items-center justify-center"
            style={{ color: logo.color }}
          >
            {logo.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color.replace("#", "")}`}
                alt={logo.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <span
                className="text-4xl font-black tracking-tight"
                style={{ color: logo.color }}
              >
                {logo.fallbackMark}
              </span>
            )}
          </div>
          <div className="text-xl font-bold text-foreground tracking-tight">
            {logo.name}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-6">
        {stackLogos.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === idx ? "w-6 bg-foreground" : "w-1 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StackLogosCarousel;
