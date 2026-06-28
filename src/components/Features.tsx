import {
  PhoneCall, MessageSquare, FileText, Users, Calendar, Receipt,
  BookOpen, Send, FolderLock, LayoutDashboard, ArrowRight,
  Camera,
} from "lucide-react";

const features = [
  { label: "SMS & Voice AI",        desc: "24/7 texts and phone lines. AI answers calls, qualifies leads, and books visits automatically.", icon: PhoneCall, href: "/features/voice-ai" },
  { label: "Messaging & Inbox",     desc: "SMS, email, and missed-call replies in one shared team thread. Auto-replies handle the simple stuff.", icon: MessageSquare, href: "/solutions/discord" },
  { label: "Quotes & Invoices",     desc: "Send, sign, get paid. Build a quote from a 2,300-task pricebook in 60 seconds.", icon: FileText, href: "/features/quotes" },
  { label: "CRM & Dispatch",        desc: "Customers + scheduling. Every customer's full history in one place. Drag jobs onto techs on a live map.", icon: Users, href: "/features/crm" },
  { label: "Dashboard",             desc: "The whole business at a glance. Revenue, route, system health, reviews - one screen on your phone.", icon: LayoutDashboard, href: "/features/dashboard" },
  { label: "Field Photos & Maps",   desc: "Visual address-sorted history. Snap, upload, and find every jobsite photo by location.", icon: Camera, href: "/features/field-photos" },
  { label: "Pricebook",             desc: "2,300+ pre-loaded tasks with your markup. Consistent pricing across every truck and every tech.", icon: BookOpen, href: "/features/quotes" },
  { label: "Job & Visit Calendar",  desc: "Schedule from chat or voice, sync to your calendar, and tech updates flow back automatically.", icon: Calendar, href: "/features/crm" },
  { label: "Payments",              desc: "Apple Pay, Google Pay, ACH, card. No monthly gateway fee - just standard processing.", icon: Receipt, href: "/features/quotes" },
  { label: "File Storage",          desc: "Property docs, contracts, permits, jobsite photos - your private cloud, no per-GB fees.", icon: FolderLock, href: "/stack" },
  { label: "Notifications",         desc: "Only buzz when it matters. New leads and payments get pushed; nag-spam stays silent.", icon: Send, href: "/solutions/discord" },
];

const Features = () => (
  <section id="features" className="bg-surface border-y border-border">
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl mb-14">
        <p className="eyebrow mb-4"><span>Platform</span></p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest leading-[1.1] mb-5">
          A complete field-service operating system.
        </h2>
        <p className="text-lg text-muted-foreground">
          Pre-wired, fully integrated, and yours. Every layer runs locally on the box you own.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {features.map((f) => (
          <a
            key={f.label}
            href={f.href}
            className="bg-background p-8 hover:bg-card transition-colors group block"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2} />
            </div>
            <h3 className="font-semibold text-foreground text-base mb-2 tracking-tight">{f.label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowRight className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
