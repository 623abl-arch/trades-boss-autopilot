import deskImg from "@/assets/section-desk.jpg";
import { Cpu, HardDrive, Zap, Network } from "lucide-react";

const specs = [
  { icon: Cpu, label: "CPU", value: "Modern x86 / Apple Silicon" },
  { icon: HardDrive, label: "Storage", value: "1-4 TB NVMe SSD" },
  { icon: Zap, label: "Power", value: "Sips ~30W idle" },
  { icon: Network, label: "Network", value: "Cloudflare Tunnel + Tailscale" },
];

const Hardware = () => (
  <section className="bg-background">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-4"><span>The box</span></p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
            One Mini PC. Sits on your desk. Runs the whole business.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Purpose-built hardware - no Apple premium tax. We configure it for your trade, ship it to your door, and you plug it in. A Cloudflare Tunnel auto-connects it so your team and Voice AI can reach it from anywhere - securely, without opening a single port.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            CRM, invoicing, voice AI, Discord bot, file storage, photos, AI brain - all on one box that costs less than two months of ServiceTitan.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <span className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                  <s.icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  <div className="text-sm font-medium text-foreground">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-border shadow-elevated bg-muted">
            <img
              src={deskImg}
              alt="MEP Claw Mini PC on a clean desk"
              className="w-full h-auto block"
              width={1280}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hardware;
