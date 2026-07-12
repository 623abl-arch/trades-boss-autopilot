import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const stackRows = [
  {
    layer: "CRM + Field Ops",
    tool: "CRM",
    note: "Open source CRM. 890+ clients on day one.",
    detail:
      "Self-hosted CRM holds every customer, lead, job, and visit on your own box. No per-seat fees, no data lock-in - your entire pipeline lives inside your private network and is queryable by the AI agent in real time.",
  },
  {
    layer: "Invoicing + Quotes",
    tool: "Invoices",
    note: "Quote → invoice → payment, all branded.",
    detail:
      "Send branded quotes, convert to invoices, accept Stripe/ACH, and reconcile - all triggered automatically from a Discord command or a Voice AI call outcome. Full API means the AI can do it without a human clicking.",
  },
  {
    layer: "File Storage",
    tool: "File Storage",
    note: "Permits, contracts, photos. Your private cloud.",
    detail:
      "A private drive for the whole team. Permits, signed contracts, manuals, and SOPs live on your hardware and are accessible from anywhere via Remote Access. No per-user storage fees ever.",
  },
  {
    layer: "Photo Management",
    tool: "Photos",
    note: "Geotagged jobsite photos on a map.",
    detail:
      "Field photos uploaded in Discord get routed to your photo library, auto-organized by job site address, and tagged for quick recall during invoicing, warranty work, or marketing.",
  },
  {
    layer: "Voice AI",
    tool: "Voice AI",
    note: "24/7 receptionist. Books visits in real time.",
    detail:
      "Best-in-class latency voice AI answers your phones, knows your services, checks live availability against the CRM, and books the visit before hanging up. Every call creates a CRM record automatically.",
  },
  {
    layer: "AI Agent Brain",
    tool: "AI Agent + AI Engine",
    note: "Local LLM. Searches your pricebook.",
    detail:
      "The reasoning layer that decides what to do with every inbound signal - reads context, drafts messages, builds quotes, dispatches techs. Routes between local AI Engine and cloud models via AI Routing for the best price/quality per task.",
  },
  {
    layer: "SMS",
    tool: "SMS",
    note: "Inbound + outbound. A2P 10DLC compliant.",
    detail:
      "Automated confirmations, reminders, review requests, and on-the-way texts - sent on your own SMS account so you keep the number and the deliverability reputation.",
  },
  {
    layer: "Field Communication",
    tool: "Discord + Mobile Briefings",
    note: "Where your crew already lives.",
    detail:
      "Discord is the ops hub - channels for new jobs, dispatch, photos, quote approvals. Mobile Briefings pushes your morning briefing straight to your phone. Both run free, on every device, and need zero training.",
  },
];

const FullStack = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-background">
      <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4"><span>The full stack</span></p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-5">
            Nothing hidden. Nothing rented.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Every tool MEP Claw runs is open source or self-hosted. Hover any layer to see why it's there.
          </p>
        </div>

        <div className="card-soft overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-10 py-5 border-b border-border bg-surface">
            <div className="col-span-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Layer</div>
            <div className="col-span-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tool</div>
            <div className="col-span-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Why it's there</div>
          </div>
          {stackRows.map((r, i) => {
            const open = openIdx === i;
            return (
              <div
                key={r.layer}
                onMouseEnter={() => setOpenIdx(i)}
                onMouseLeave={() => setOpenIdx((cur) => (cur === i ? null : cur))}
                onClick={() => setOpenIdx(open ? null : i)}
                className={`group border-b border-border last:border-b-0 transition-colors cursor-pointer ${
                  open ? "bg-surface" : "hover:bg-surface/60"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 px-10 py-7 items-center">
                  <div className="md:col-span-3 text-base text-muted-foreground">{r.layer}</div>
                  <div className="md:col-span-3 text-xl font-semibold text-foreground tracking-tight">{r.tool}</div>
                  <div className="md:col-span-6 flex items-center justify-between gap-4">
                    <span className="text-base text-muted-foreground">{r.note}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                        open ? "rotate-180 text-foreground" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-10 pb-7 md:pl-[calc(50%/2+2.5rem)] md:grid md:grid-cols-12">
                      <p className="md:col-start-7 md:col-span-6 text-base text-foreground/80 leading-relaxed border-l-2 border-accent/60 pl-4">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Accessible from anywhere via Remote Access. Secured with Public Routing. Runs on a Mini PC on your desk.
        </p>

        <div className="mt-10">
          <a
            href="/stack"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Why we chose each tool <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullStack;
