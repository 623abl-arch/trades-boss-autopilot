import { useMemo } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import CtaFooter from "@/components/CtaFooter";
import { posts } from "@/content/posts";

type BlogPostLocationState = {
  backTo?: string;
  backLabel?: string;
};

const renderMarkdown = (md: string) => {
  const blocks = md.split(/\n{2,}/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed === "---") return <hr key={i} className="my-12 border-border" />;
    if (trimmed.startsWith("# ")) return null; // title rendered separately
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="font-serif text-3xl md:text-4xl text-foreground mt-14 mb-6 leading-tight">
          {trimmed.slice(3)}
        </h2>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split(/\n/).map((l) => l.replace(/^- /, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 my-6 text-lg text-muted-foreground leading-relaxed marker:text-[hsl(var(--accent))]">
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(it) }} />
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="text-lg text-muted-foreground leading-relaxed my-5"
        dangerouslySetInnerHTML={{ __html: inline(trimmed) }}
      />
    );
  });
};

const inline = (s: string) =>
  s
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(/\n/g, "<br />");

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const post = posts.find((p) => p.slug === slug);
  const { backTo, backLabel } = useMemo(() => {
    const state = (location.state as BlogPostLocationState | null) ?? null;
    return {
      backTo: state?.backTo ?? "/blog",
      backLabel: state?.backLabel ?? "Back to all posts",
    };
  }, [location.state]);
  if (!post) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <article className="bg-background">
        <header className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 hero-wash pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-[hsl(var(--accent))]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-24 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,_hsl(var(--foreground))_1px,_transparent_0)] [background-size:22px_22px] pointer-events-none" />
          <div className="container max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20 md:pb-28 relative">
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-[hsl(var(--accent))] mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {backLabel}
            </Link>
            <p className="text-xs font-bold tracking-[0.25em] text-[hsl(var(--accent))] mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[hsl(var(--accent))]" />
              {post.tag.toUpperCase()} · {post.read}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[1.05] mb-8">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed border-l-2 border-[hsl(var(--accent))] pl-6">
              {post.excerpt}
            </p>
          </div>
        </header>
        <div className="container max-w-3xl mx-auto px-6 py-16">
          {renderMarkdown(post.body)}
        </div>
      </article>
      <CtaFooter />
      <SiteFooter />
    </>
  );
};

export default BlogPost;