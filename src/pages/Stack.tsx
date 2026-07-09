import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import StackFlow from "@/components/StackFlow";
import FullStack from "@/components/FullStack";
import InteractiveDemo from "@/components/InteractiveDemo";
import StackLogosCarousel from "@/components/StackLogosCarousel";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tools = [
  {
    name: "Twenty CRM",
    category: "CRM + Field Ops",
    description:
      "Manages every customer, job, lead, and interaction. Tracks job status, contact history, and field notes.",
    whyNot:
      "Why not Jobber or ServiceTitan? They charge $100-400/mo and own your data. Twenty runs on your hardware. Your data never leaves your building.",
    cost: "$0/mo (self-hosted)",
    cloud: "$150-400/mo",
  },
  {
    name: "Invoice Ninja",
    category: "Invoicing + Quotes",
    description:
      "Sends branded quotes and invoices, tracks payments, handles multiple payment methods. Connects directly to the CRM.",
    whyNot:
      "Why not QuickBooks or FreshBooks? We needed invoicing that could be triggered automatically by the AI agent. Invoice Ninja has a full API. It does exactly that.",
    cost: "$0/mo (self-hosted) · Optional $40/yr to remove branding",
    cloud: "$30-80/mo",
  },
  {
    name: "Nextcloud",
    category: "File Storage",
    description:
      "Your team's shared drive. Job documents, contracts, permits, photos - all stored on your hardware, accessible from anywhere via Tailscale.",
    whyNot:
      "Why not Google Drive or Dropbox? You own the storage. No per-seat fees, no storage limits beyond your drive size.",
    cost: "$0/mo",
    cloud: "$10-25/mo per user",
  },
  {
    name: "Immich",
    category: "Photo Management",
    description:
      "Before/after job photos organized by job automatically. Techs upload from the field, photos are tagged and ready for invoices, reviews, and your portfolio.",
    whyNot:
      "Why not Google Photos? Google Photos has no job-based organization and can't hook into your CRM. Immich does both.",
    cost: "$0/mo (voluntary $99 one-time support payment optional)",
    cloud: "Part of a $30-80/mo field service bundle",
  },
  {
    name: "Retell AI",
    category: "Voice AI",
    description:
      "Answers your phones 24/7 with a live-sounding AI agent. Knows your services, your coverage area, your availability. Creates CRM records from every call automatically.",
    whyNot:
      "Why Retell and not a different voice AI? Best-in-class latency for voice. MCP tool integration means it can look up real data from your CRM during the call.",
    cost: "Usage-based ~$30-80/mo (your account, you control it)",
    cloud: "Answering service $200-500/mo",
  },
  {
    name: "NemoClaw + OpenRouter",
    category: "AI Agent Brain",
    description:
      "The reasoning layer behind every automation. Reads context, decides what action to take, writes the messages, generates quotes, and dispatches jobs.",
    whyNot:
      "Why OpenRouter? Routes to the best available model for each task. If one model goes down or gets expensive, we route around it. You're never locked into one AI provider.",
    cost: "Usage-based ~$10-20/mo (your account)",
    cloud: "You can't buy this as a product anywhere else.",
  },
  {
    name: "Twilio",
    category: "SMS",
    description:
      "Sends automated texts to customers - job confirmations, review requests, appointment reminders, and status updates.",
    whyNot:
      "Note: Twilio A2P registration takes 6-8 weeks. We file this on day one.",
    cost: "~$10-30/mo (your account)",
    cloud: "Included in $200-700/mo field service bundles",
  },
  {
    name: "Discord + Telegram",
    category: "Field Communication",
    description:
      "Discord is your internal ops hub - job commands, field photo uploads, quote approvals, and crew coordination all run here. Telegram delivers your daily morning briefing to your phone.",
    whyNot:
      "Why Discord? Every trades contractor already uses it or can learn it in 10 minutes. It runs on every device, works offline for reading, and has a full bot API.",
    cost: "$0/mo",
    cloud: "Slack $7-15/mo per user",
  },
  {
    name: "Tailscale",
    category: "Remote Access",
    description:
      "Gives you and your team secure access to the box from anywhere. No VPN setup, no port forwarding. Works on any device.",
    whyNot: "",
    cost: "Free for small teams",
    cloud: "N/A - most cloud software doesn't need this",
  },
  {
    name: "Cloudflare Tunnel",
    category: "Public Routing",
    description:
      "Exposes your box to the internet securely - no static IP, no VPS required. Retell AI webhooks, contact forms, and public APIs all route through here.",
    whyNot: "",
    cost: "$0/mo",
    cloud: "VPS hosting $5-20/mo",
  },
];

const ownershipCards = [
  {
    title: "No vendor can raise prices on you.",
    body: "The tools that run your business live on your hardware. Open source licenses mean no one can pull the rug.",
  },
  {
    title: "Your data never leaves your building.",
    body: "Customer records, job history, photos, invoices - all stored locally. Accessible to you, invisible to everyone else.",
  },
  {
    title: "You own every account.",
    body: "Retell, Twilio, OpenRouter - you sign up directly. If you ever stop working with us, everything keeps running.",
  },
];

const Stack = () => (
  <>
    <Navbar />

    {/* HERO */}
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5"><span>The stack</span></p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              The full stack. Nothing hidden.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              Every tool is open source or self-hosted. Here's what's on your box, why we chose it, and what the cloud alternative would cost you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
              <Button variant="outline" size="lg" asChild><a href="#stack-deep-dive">See every tool</a></Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <StackLogosCarousel />
          </div>

        </div>
      </div>
    </section>

    {/* REPLACED SAAS TRUTH TABLE */}
    <section className="bg-background py-20 md:py-24 border-t border-border">
      <div className="container max-w-[1680px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow mb-4"><span>What it replaces</span></p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
            One box. A dozen subscriptions, gone.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every row below is a paid SaaS tool a typical contractor is renting today. MEP Claw rolls them all onto your Mini PC.
          </p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-12 px-6 py-4 bg-surface border-b border-border text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
            <div className="col-span-4 md:col-span-3">Category</div>
            <div className="col-span-4 md:col-span-4">What you're paying for today</div>
            <div className="col-span-4 md:col-span-3">MEP Claw runs</div>
            <div className="hidden md:block md:col-span-2 text-right">SaaS cost</div>
          </div>
          {[
            ["Voice AI", "Answering service / IVR", "Retell AI", "$200-500/mo"],
            ["SMS", "Twilio / EZ Texting", "Twilio (your account)", "$50-150/mo"],
            ["CRM", "Jobber / ServiceTitan / Housecall Pro", "Twenty CRM", "$50-500/mo"],
            ["Invoicing & Payments", "QuickBooks / FreshBooks", "Invoice Ninja + Stripe", "$30-80/mo"],
            ["File Storage", "Dropbox / Google Drive", "Nextcloud", "$10-25/mo/user"],
            ["Jobsite Photos", "CompanyCam", "Immich", "$15-45/mo/user"],
            ["Team Chat", "Slack", "Discord", "$7-15/mo/user"],
            ["Pricebook", "Profit Rhino / FieldEdge add-on", "Built-in (2,300+ tasks)", "$50-150/mo"],
            ["Dispatch & Calendar", "ServiceTitan Dispatch", "Field-Ops + Discord", "Bundled $200+/mo"],
            ["Receipt Capture", "Expensify / Dext", "Gemini AI extract", "$5-20/mo/user"],
            ["AI Assistant", "—", "Jarvis (local + OpenRouter)", "—"],
            ["File Sync / Remote Access", "VPN service", "Tailscale", "$0-20/mo"],
          ].map(([cat, saas, ours, cost], i) => (
            <div
              key={cat}
              className={`grid grid-cols-12 px-6 py-5 items-center text-sm md:text-base ${
                i % 2 === 1 ? "bg-surface/40" : ""
              } border-b border-border last:border-b-0`}
            >
              <div className="col-span-4 md:col-span-3 font-semibold text-foreground">{cat}</div>
              <div className="col-span-4 md:col-span-4 text-muted-foreground line-through decoration-rose-500/60">{saas}</div>
              <div className="col-span-4 md:col-span-3 font-semibold text-[hsl(var(--accent))]">{ours}</div>
              <div className="hidden md:block md:col-span-2 text-right text-muted-foreground font-mono text-sm">{cost}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Add it up and the average contractor is renting $600-1,500/mo of SaaS to do what this one box does for under $50/mo in ongoing costs.
        </p>
      </div>
    </section>

    {/* HOW IT ALL CONNECTS */}
    <StackFlow />

    {/* FULL STACK overview */}
    <FullStack />

    {/* See the stack apps running */}
    <InteractiveDemo />

    {/* STACK DEEP DIVE */}
    <section id="stack-deep-dive" className="py-20 md:py-28 bg-surface">

      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Stack deep dive
        </h2>

        <Accordion type="multiple" className="space-y-4">
          {tools.map((tool, i) => (
            <AccordionItem
              key={tool.name}
              value={`tool-${i}`}
              className="rounded-xl border border-border bg-card px-6 overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left">
                  <span className="text-xl font-bold text-foreground">
                    {tool.name}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary w-fit">
                    {tool.category}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground text-base mb-4">
                  {tool.description}
                </p>
                {tool.whyNot && (
                  <p className="text-muted-foreground text-base mb-6 italic">
                    {tool.whyNot}
                  </p>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 rounded-lg border border-primary/30 bg-primary/5 p-4">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">
                      MEP Claw cost
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {tool.cost}
                    </p>
                  </div>
                  <div className="flex-1 rounded-lg border border-border bg-secondary/30 p-4">
                    <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-medium">
                      Cloud alternative
                    </p>
                    <p className="text-lg font-bold text-muted-foreground">
                      {tool.cloud}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* TOTAL COST COMPARISON */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          What this stack would cost in the cloud.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-8 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mb-3">
              MEP Claw after setup
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              ~$50-130
            </p>
            <p className="text-muted-foreground text-base">/mo - Retell + Twilio + OpenRouter only</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mb-3">
              Cloud equivalent
            </p>
            <p className="text-4xl md:text-5xl font-extrabold text-muted-foreground mb-2">
              $600-1,200
            </p>
            <p className="text-muted-foreground text-base">/mo - Jobber + answering service + storage + SMS</p>
          </div>
        </div>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The average trades business running this stack in the cloud pays{" "}
            <span className="text-foreground font-semibold">$600-1,200/mo</span>. MEP Claw runs the same capabilities for under{" "}
            <span className="text-primary font-bold">$130/mo</span> - on hardware you own.
          </p>
        </div>
      </div>
    </section>

    {/* YOUR DATA, YOUR RULES */}
    <section className="py-20 md:py-28 bg-surface">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Everything that can be self-hosted, is.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {ownershipCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Want to see the stack running live?
        </h2>
        <p className="text-muted-foreground text-base mb-8">
          Book a call. We'll show you the actual Dr. Plumbing setup.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href="/#book" className="text-base px-8 py-3">
            Book a Discovery Call →
          </a>
        </Button>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default Stack;
