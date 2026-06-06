import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { posts } from "@/content/posts";

const RecommendedReading = () => (
  <section className="relative bg-background overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px]" />
    </div>
    <div className="container max-w-[1680px] mx-auto px-6 py-24 md:py-32 relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" /> RECOMMENDED READING
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05]">
            From the <em className="not-italic font-serif italic">field journal.</em>
          </h2>
        </div>
        <a
          href="#"
          className="self-start md:self-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground border-b border-foreground/30 hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors pb-1"
        >
          Browse all posts
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.filter((p) => p.slug === "what-is-self-hosting" || p.slug === "discord-for-contractors").map((p) => (
          <Link
            key={p.title}
            to={`/blog/${p.slug}`}
            className="group relative rounded-3xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-floating"
          >
            <div className={`relative h-48 bg-gradient-to-br ${p.tint} flex items-end p-6`}>
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
              <span className="relative text-[11px] font-bold uppercase tracking-[0.18em] bg-background/90 text-foreground px-3 py-1.5 rounded-full">
                {p.tag}
              </span>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-4 group-hover:text-[hsl(var(--accent))] transition-colors">
                {p.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-medium">{p.read}</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                  Read essay
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RecommendedReading;