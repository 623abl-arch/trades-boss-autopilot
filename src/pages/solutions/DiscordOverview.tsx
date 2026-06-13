import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Hash, Volume2 } from "lucide-react";
import discordMascot from "@/assets/discord-mascot.png.asset.json";

const DiscordOverview = () => (
  <>
    <Navbar />

    {/* HERO */}
    <section className="relative bg-surface slant-bottom pb-28">
      <div className="container max-w-[1680px] mx-auto px-6 pt-16 md:pt-20 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-6">
              DISCORD · OVERVIEW
            </p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold text-foreground leading-[1.02] tracking-tightest mb-6">
              Run your entire business on Discord.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-9 max-w-xl">
              One place for your team, your customers, and your AI. Every job, call,
              quote, and conversation lives in a channel you already know how to use.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg">Get a demo</Button>
              <Button variant="outline" size="lg">See it in action</Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-card shadow-floating border border-border flex items-center justify-center">
              {/* Discord logo */}
              <svg viewBox="0 0 127.14 96.36" className="w-32 md:w-44" fill="#5865F2" aria-label="Discord">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* WHAT IS DISCORD */}
    <section className="bg-background pt-24 pb-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
          <img
            src={discordMascot.url}
            alt="Discord mascot"
            className="w-24 h-24 md:w-32 md:h-32 shrink-0 object-contain"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              What is Discord?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discord is a free group chat app that runs right on your phone, tablet, or office computer. Instead of blowing up your phone with disorganized group texts or losing track of paper notes, Discord acts as your internal command center where every job, text, and photo has its own organized room.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION TITLE */}
    <section className="bg-background pt-24 pb-10">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          A channel for everything.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your team already lives in Discord. We just give every part of your
          business its own room.
        </p>
      </div>
    </section>

    {/* CHAT EXAMPLES */}
    <section className="bg-background pb-24">
      <div className="container max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {[
          { name: "incoming-calls", desc: "Every call your AI answers shows up here with a transcript and the booked job." },
          { name: "new-jobs",       desc: "Fresh leads land in this channel - claim it with a click and dispatch the tech." },
          { name: "quotes-invoices", desc: "Send, sign, and get paid without leaving the chat." },
          { name: "field-team",     desc: "Crews drop photos, status updates, and parts requests from the truck." },
        ].map((c) => (
          <div key={c.name} className="rounded-2xl border border-border bg-card shadow-soft p-6">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Hash className="w-4 h-4 text-muted-foreground" />
              <span>{c.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-surface slant-top py-24">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-5">
          See your shop running on Discord.
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          A 30-minute demo with the exact channels and workflows for your trade.
        </p>
        <Button variant="cta" size="lg">Book a demo</Button>
      </div>
    </section>

    <SiteFooter />
  </>
);

export default DiscordOverview;