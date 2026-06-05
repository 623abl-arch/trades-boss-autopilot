import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import DayInTheLife from "@/components/DayInTheLife";
import Features from "@/components/Features";

const timeline = [
  {
    week: "Week 1",
    title: "Foundation",
    items: [
      "Hardware ships or is configured on-site",
      "Docker stack deployed: Twenty CRM, Invoice Ninja, Nextcloud",
      "Cloudflare Tunnel set up - no VPS needed, your box is live on the internet",
      "Discord server built: channels for commands, logs, leads, field photos, daily summary",
      "Twilio A2P registration filed (starts the 6-8 week clock - we do this day one)",
    ],
  },
  {
    week: "Week 2",
    title: "Your Business, Loaded In",
    items: [
      "CRM schema configured for your trade (custom fields, job types, service categories)",
      "Pricebook imported - you provide the spreadsheet or PDF, we load it",
      "Existing customer data migrated from Jobber, ServiceTitan, or wherever you are now",
    ],
  },
  {
    week: "Week 3",
    title: "The Agent Goes Live",
    items: [
      "Retell AI voice agent configured with your services, coverage area, and tone",
      "Discord bot customized with your team roles and job types",
      "Quote engine tested: AI Quick Quote, pricebook lookup, and manual override all working",
      "Invoice Ninja templates branded to your company",
    ],
  },
  {
    week: "Week 4",
    title: "End-to-End Test",
    items: [
      "Full live test: inbound call → CRM record → job created → quote sent → approval → invoice",
      "Team walkthrough - your techs know how to use Discord and the field tools",
      "You're handed the keys",
    ],
  },
  {
    week: "Week 6-8",
    title: "SMS Goes Live",
    items: [
      "Twilio A2P approved - automated SMS to customers now active",
      "Review follow-up texts, job status updates, and morning briefings via Telegram enabled",
    ],
  },
];

const onboardingItems = [
  "Walk through your current workflow",
  "Map your service area and job types",
  "Review your existing pricebook or build one together",
  "Confirm hardware tier that fits your team size",
  "Set up your Cloudflare Tunnel and domain routing live on the call",
  "Answer every question before a single dollar ships",
];

const monthlyCosts = [
  {
    service: "Retell AI",
    what: "Answers your phones with a live AI voice agent",
    cost: "~$30-80/mo depending on call volume",
  },
  {
    service: "Twilio",
    what: "Sends and receives SMS to your customers",
    cost: "~$10-30/mo",
  },
  {
    service: "OpenRouter",
    what: "Powers the AI brain and quote engine",
    cost: "~$10-20/mo",
  },
];

const HowItWorksPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    {/* Hero */}
    <section className="py-20 md:py-28">
      <div className="container max-w-[1440px] mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Live in 30&nbsp;days.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Here's exactly what happens after you book a discovery call.
        </p>
      </div>
    </section>

    {/* A day in the life */}
    <DayInTheLife />

    {/* Platform features */}
    <Features />

    {/* Timeline */}
    <section className="py-16 md:py-24 bg-surface">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          The 4-Week Timeline
        </h2>
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8">
          {timeline.map((week) => (
            <div key={week.week} className="mb-12 last:mb-0 pl-8 relative">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
              <div className="rounded-xl border border-border bg-card p-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {week.week}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-4">{week.title}</h3>
                <ul className="space-y-3">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Onboarding Call */}
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
          Before we ship anything, we spend an hour together.
        </h2>
        <p className="text-muted-foreground text-center text-base mb-12 max-w-2xl mx-auto">
          What the onboarding call covers
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {onboardingItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#book">Book your discovery call →</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Monthly Costs */}
    <section className="py-16 md:py-24 bg-surface">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
          No subscriptions. Just usage.
        </h2>
        <p className="text-muted-foreground text-center text-base mb-12 max-w-2xl mx-auto">
          After setup, MEP Claw runs on three services you own and control.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-sm font-semibold text-primary uppercase tracking-wider">Service</th>
                <th className="py-4 px-4 text-sm font-semibold text-primary uppercase tracking-wider">What It Does</th>
                <th className="py-4 px-4 text-sm font-semibold text-primary uppercase tracking-wider">Typical Monthly Cost</th>
              </tr>
            </thead>
            <tbody>
              {monthlyCosts.map((row) => (
                <tr key={row.service} className="border-b border-border/50">
                  <td className="py-4 px-4 text-foreground font-medium text-base">{row.service}</td>
                  <td className="py-4 px-4 text-muted-foreground text-base">{row.what}</td>
                  <td className="py-4 px-4 text-foreground font-semibold text-base">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-base text-center max-w-3xl mx-auto leading-relaxed">
          Everything else - CRM, invoicing, file storage, photo management, Discord and Telegram bots - runs on your hardware.{" "}
          <span className="text-foreground font-semibold">Zero subscription cost.</span>
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to see it in action?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Book a discovery call. We'll walk you through the whole thing live.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href="#book">Book a Discovery Call →</a>
        </Button>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default HowItWorksPage;
