import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CtaFooter from "@/components/CtaFooter";
import SiteFooter from "@/components/SiteFooter";
import { posts } from "@/content/posts";

const BlogIndex = () => (
  <>
    <Navbar />
    <main className="bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 hero-wash pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px] pointer-events-none" />
        <div className="container max-w-[1680px] mx-auto px-6 pt-32 md:pt-40 pb-18 md:pb-24 relative">
          <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-5 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" /> FIELD JOURNAL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] max-w-4xl">
            All articles from the field journal.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mt-6">
            Three plain-English reads on self-hosting, software ownership, and why Discord works in the field.
          </p>
        </div>
      </section>

      <section className="container max-w-[1680px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              state={{ backTo: "/blog", backLabel: "Back to all posts" }}
              className="group relative rounded-3xl bg-card border border-border shadow-elevated overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-floating"
            >
              <div className={`relative h-52 bg-gradient-to-br ${post.tint} flex items-end p-6`}>
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:8px_8px]" />
                <span className="relative text-[11px] font-bold uppercase tracking-[0.18em] bg-background/90 text-foreground px-3 py-1.5 rounded-full">
                  {post.tag}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4 mb-4 text-sm">
                  <span className="text-muted-foreground font-medium">{post.read}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                    Read article
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-4 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {post.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    <CtaFooter />
    <SiteFooter />
  </>
);

export default BlogIndex;