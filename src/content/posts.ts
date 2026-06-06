import article1 from "./article1.md?raw";
import article2 from "./article2.md?raw";
import article3 from "./article3.md?raw";

export type Post = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  read: string;
  tint: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "own-your-stack",
    tag: "Sovereignty",
    title: "You're Renting Your Own Business. Here's How to Stop.",
    excerpt:
      "Every month, contractors hand $200–$500 to software companies for tools they'll never own. Here's the math — and the way out.",
    read: "6 min read",
    tint: "from-sky-200/70 to-emerald-100/40",
    body: article1,
  },
  {
    slug: "what-is-self-hosting",
    tag: "Field Notes",
    title: "What Is Self-Hosting? (And Why Contractors Are Switching to It)",
    excerpt:
      "The plain-English version of self-hosting — what it is, what it costs, and whether it's right for your trade business.",
    read: "7 min read",
    tint: "from-amber-200/70 to-orange-200/50",
    body: article2,
  },
  {
    slug: "discord-for-contractors",
    tag: "Command Center",
    title: "Why We Use Discord to Run a Plumbing Business",
    excerpt:
      "Dispatch, crew chat, customer texts, invoices — all running through one free app your techs already know how to use.",
    read: "8 min read",
    tint: "from-indigo-200/70 to-fuchsia-100/40",
    body: article3,
  },
];