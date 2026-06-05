import logo from "@/assets/mep-claw-logo.png";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Users, BarChart3, ChevronDown, MessagesSquare, Bot, Layers } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

const mepclawLinks = [
  { href: "/what-is-mepclaw", icon: MessagesSquare, label: "Overview", desc: "What is MEP Claw?" },
  { href: "/stack", icon: Layers, label: "The stack", desc: "Every tool on your box" },
];

const discordLinks = [
  { href: "/solutions/discord", icon: MessagesSquare, label: "Overview",  desc: "Run your business on Discord" },
  { href: "/solutions/discord/bot", icon: Bot,  label: "Bot",  desc: "A command for everything" },
];

const featureLinks = [
  { href: "/features/dashboard", icon: BarChart3, label: "Dashboard",          desc: "The whole business at a glance" },
  { href: "/features/quotes",    icon: FileText,  label: "Quotes & Invoices",  desc: "Send, sign, get paid" },
  { href: "/features/crm",       icon: Users,     label: "CRM & Dispatch",     desc: "Customers + scheduling" },
  { href: "/features/voice-ai",  icon: Phone,     label: "Voice AI",           desc: "AI receptionist 24/7" },
];

const categories = [
  { key: "mepclaw",  label: "MEP Claw", links: mepclawLinks },
  { key: "discord",  label: "Discord",  links: discordLinks },
  { key: "features", label: "Features", links: featureLinks },
] as const;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/70">
      <div className="container max-w-[1680px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="MEP Claw" className="w-8 h-8" />
          <span className="text-[17px] font-bold text-foreground tracking-tight">MEP Claw</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative group">
            <button className="px-4 py-2 text-sm font-semibold text-foreground rounded-md inline-flex items-center gap-1 group-hover:bg-muted transition-colors">
              Solutions <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="bg-card border border-border rounded-xl shadow-floating overflow-hidden grid grid-cols-3 gap-2 p-4 min-w-[760px]">
                {categories.map((cat) => (
                  <div key={cat.key}>
                    <p className="px-3 pt-1 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {cat.label}
                    </p>
                    <ul className="space-y-1">
                      {cat.links.map((f) => (
                        <li key={f.label}>
                          <a
                            href={f.href}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                          >
                            <span className="mt-0.5 w-8 h-8 rounded-md bg-surface flex items-center justify-center shrink-0">
                              <f.icon className="w-4 h-4 text-foreground" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-foreground">
                                {f.label}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {f.desc}
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="/about" className="px-4 py-2 text-sm font-semibold text-foreground rounded-md hover:bg-muted transition-colors">
            About
          </a>
          <a href="/faq" className="px-4 py-2 text-sm font-semibold text-foreground rounded-md hover:bg-muted transition-colors">
            FAQ
          </a>
          <a href="/#pricing" className="px-4 py-2 text-sm font-semibold text-foreground rounded-md hover:bg-muted transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#book" className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2">
            Sign in
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#book">Book a demo</a>
          </Button>
        </div>
      </div>
      <VersionSwitcher />
    </header>
  );
};

export default Navbar;
