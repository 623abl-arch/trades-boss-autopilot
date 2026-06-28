import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const DiscordBot = () => (
  <>
    <Navbar />

    {/* HERO */}
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5"><span>Discord · Bot</span></p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              Turn text messages into automated business actions.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              Stop clicking through complicated software menus. Just text your custom Discord bot to dispatch a tech, update a client, or log a material expense instantly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild><a href="/#book">Book a demo</a></Button>
              <Button variant="outline" size="lg" asChild><a href="/solutions/discord">Discord overview</a></Button>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-card shadow-floating border border-border flex items-center justify-center">
              <svg viewBox="0 0 127.14 96.36" className="w-40 md:w-52" fill="#5865F2" aria-label="Discord">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECOND SECTION */}
    <section className="bg-background py-24">
      <div className="container max-w-[1680px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            A command for everything.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
            Your team already knows how to text. Our bot - 8,000+ lines of custom Node.js running on your box - handles the back-end data entry.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Each tech gets their own private <code className="px-1.5 py-0.5 rounded bg-surface text-foreground text-sm">#name-ops</code> channel with a numbered menu. One tap. No app to learn.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-border bg-surface shadow-elevated overflow-hidden">
            <div className="px-5 py-3 border-b border-border bg-card flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">#daniel-ops</span>
            </div>
            <div className="p-6 font-mono text-sm text-foreground/90 space-y-1.5">
              {[
                ["1", "jobs", "see today's assigned visits"],
                ["2", "arrive", "clock in on a visit"],
                ["3", "leave", "clock out"],
                ["4", "menu", "show this menu"],
                ["5", "notes", "add notes to a visit"],
                ["6", "help", "topic-dispatched help"],
                ["7", "crew", "see who's on a job"],
                ["8", "assign", "manager: add tech to job"],
                ["9", "unassign", "manager: remove tech"],
                ["10", "reassign", "manager: swap LEAD/HELPER"],
              ].map(([n, cmd, desc]) => (
                <div key={n} className="flex gap-3">
                  <span className="text-[hsl(var(--accent))] w-6 text-right">{n}</span>
                  <span className="text-foreground font-semibold w-20">{cmd}</span>
                  <span className="text-muted-foreground">— {desc}</span>
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-border text-xs text-muted-foreground">
                Plus contextual: <span className="text-foreground">sms JOB-XXXX</span>, <span className="text-foreground">eta JOB-XXXX</span>, <span className="text-foreground">hu &lt;note&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default DiscordBot;
