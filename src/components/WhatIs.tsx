import { useState } from "react";
import {
  Zap,
  Receipt,
  Camera,
  Clock,
  ChevronDown,
  MessageSquare,
  Mail,
  Phone,
  Mic,
  ArrowRight,
} from "lucide-react";

type Feature = {
  id: string;
  icon: typeof Zap;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    id: "quotes",
    icon: Zap,
    title: "Quotes in <10 seconds.",
    body:
      "Type one simple message in chat to instantly pull from your 2,300+ item trade pricebook, build a client profile, and text a professional payment portal straight to the customer.",
  },
  {
    id: "receipts",
    icon: Receipt,
    title: "Receipt logging.",
    body:
      "Techs just snap a photo of a supply house receipt in chat. Gemini AI instantly extracts the vendor, total, and tax category, then prompts them with a 1-tap emoji menu to assign it directly to an active job - updating your CRM and bookkeeping backend in real time.",
  },
  {
    id: "photos",
    icon: Camera,
    title: "Photo routing.",
    body:
      "Field crews drop job photos straight into their private chat channels. By simply typing an address or relying on our smart 4-hour \u201Csticky\u201D window, the system automatically routes and archives the files into secure, client-specific cloud albums.",
  },
  {
    id: "timesheets",
    icon: Clock,
    title: "Crew timesheets.",
    body:
      "No slow, clunky apps for your field team to fight with. Technicians clock in and out with a simple 1-tap menu, accurately tracking independent hours on multi-man jobs.",
  },
];

const inboxItems = [
  {
    icon: Phone,
    label: "New lead - Voice AI",
    snippet: "Booked Sarah M. for a water heater install today at 4:30 PM.",
    tint: "bg-foreground text-background",
  },
  {
    icon: Mail,
    label: "Angela Cortez - New email",
    snippet: "Hello, I'd like a quote on a panel upgrade. Could someone…",
    tint: "bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]",
  },
  {
    icon: MessageSquare,
    label: "Rosie Sims - New text",
    snippet: "Hey! Is anyone available to come look at our AC today?",
    tint: "bg-emerald-500/15 text-emerald-600",
  },
  {
    icon: Mic,
    label: "Discord - Field crew",
    snippet: "@dispatch finished the Oak St call, headed to next stop.",
    tint: "bg-indigo-500/15 text-indigo-600",
  },
];

const WhatIs = () => {
  const [open, setOpen] = useState<string>(features[0].id);

  return (
    <section id="what-is" className="bg-surface">
      <div className="container max-w-[1680px] mx-auto px-6 py-28 md:py-40">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="eyebrow justify-center mb-5 !text-[hsl(var(--accent))]">
            <span>MEP Claw&apos;s Operating System</span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-6">
            Digital sovereignty for the modern contractor.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            One Mini PC on your desk runs every workflow that used to cost you
            thousands a month - and the data never leaves your shop
          </p>
        </div>

        {/* Split: inbox mock + accordion */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Inbox mock */}
          <div className="relative">
            <div className="flex gap-3">
              {/* Phone column */}
              <div className="w-[110px] shrink-0 rounded-2xl bg-card border border-border shadow-elevated p-3 flex flex-col">
                <div className="text-[10px] font-semibold text-muted-foreground mb-3 px-1">
                  Claw Inbox
                </div>
                <div className="flex-1 rounded-xl bg-foreground/95 p-2 flex items-end justify-between">
                  <div className="h-6 w-6 rounded-md bg-background/15" />
                  <div className="h-5 min-w-5 px-1.5 rounded-full bg-[hsl(var(--accent))] text-white text-[10px] font-bold flex items-center justify-center">
                    7
                  </div>
                </div>
              </div>

              {/* Message stack */}
              <div className="flex-1 space-y-3">
                {inboxItems.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-card border border-border shadow-soft p-3.5 flex gap-3 items-start"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${m.tint}`}
                    >
                      <m.icon className="w-4.5 h-4.5" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground truncate">
                        {m.label}
                      </div>
                      <div className="text-xs text-muted-foreground leading-snug line-clamp-2">
                        {m.snippet}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div>
            {/* Progress bar */}
            <div className="flex gap-1.5 mb-6">
              {features.map((f) => (
                <div
                  key={f.id}
                  className={`h-[3px] flex-1 rounded-full transition-colors ${
                    open === f.id ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <ul className="divide-y divide-border border-y border-border">
              {features.map((f) => {
                const isOpen = open === f.id;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? "" : f.id)}
                      className="w-full flex items-center gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="w-10 h-10 rounded-full bg-[hsl(var(--accent))]/12 text-[hsl(var(--accent))] flex items-center justify-center shrink-0">
                        <f.icon className="w-4.5 h-4.5" strokeWidth={2} />
                      </span>
                      <span className="flex-1 text-lg md:text-xl font-semibold text-foreground tracking-tight">
                        {f.title}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-6"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-14 pr-2 text-muted-foreground leading-relaxed">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-9 py-4 text-base font-semibold shadow-elevated hover:opacity-90 transition-opacity"
              >
                Get a demo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
