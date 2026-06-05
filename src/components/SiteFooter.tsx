import logo from "@/assets/mep-claw-logo.png";
import { Github, Twitter, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      ["Features", "#features"],
      ["How it works", "#how-it-works"],
      ["Pricing", "#pricing"],
      ["The stack", "/stack"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Plumbing & MEP", "#what-is"],
      ["General contractors", "#what-is"],
      ["Handyman & solo", "#what-is"],
      ["Voice AI", "#features"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["About", "/about"],
      ["Customer stories", "#testimonials"],
      ["Savings calculator", "#savings"],
      ["Documentation", "#"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Contact", "#book"],
      ["Privacy", "#"],
      ["Terms", "#"],
      ["Status", "#"],
    ],
  },
];

const SiteFooter = () => (
  <footer className="invert-section bg-background border-t border-border">
    <div className="container max-w-[1680px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-2.5 mb-5">
            <img src={logo} alt="MEP Claw" className="w-8 h-8" />
            <span className="text-lg font-bold text-foreground tracking-tight">MEP Claw</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
            The operating system for trades businesses. Self-hosted, sovereign, ships pre-configured.
          </p>
          <div className="flex items-center gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold text-foreground mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MEP Claw, Inc. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built by contractors, for contractors.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
