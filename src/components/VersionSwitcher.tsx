import { useEffect, useState } from "react";

const VERSIONS = [1, 2, 3, 4] as const;
export type Version = (typeof VERSIONS)[number];

const STORAGE_KEY = "site-version";

export const getInitialVersion = (): Version => {
  if (typeof window === "undefined") return 1;
  const url = new URL(window.location.href);
  const q = url.searchParams.get("v");
  const fromUrl = q ? Number(q) : NaN;
  if (VERSIONS.includes(fromUrl as Version)) return fromUrl as Version;
  const stored = Number(localStorage.getItem(STORAGE_KEY));
  if (VERSIONS.includes(stored as Version)) return stored as Version;
  return 1;
};

export const applyVersionClass = (v: Version) => {
  const root = document.documentElement;
  VERSIONS.forEach((n) => root.classList.remove(`v${n}`));
  root.classList.add(`v${v}`);
  // Version 4 is dark; ensure dark mode class
  if (v === 4) root.classList.add("dark");
  else root.classList.remove("dark");
};

const VersionSwitcher = () => {
  const [version, setVersion] = useState<Version>(1);

  useEffect(() => {
    const v = getInitialVersion();
    setVersion(v);
    applyVersionClass(v);
  }, []);

  const pick = (v: Version) => {
    setVersion(v);
    localStorage.setItem(STORAGE_KEY, String(v));
    applyVersionClass(v);
    const url = new URL(window.location.href);
    url.searchParams.set("v", String(v));
    window.history.replaceState({}, "", url.toString());
    // Reload to ensure all components pick up version-specific layouts
    window.location.reload();
  };

  return (
    <div className="w-full border-b border-border bg-card/60 backdrop-blur">
      <div className="container max-w-[1680px] mx-auto px-6 h-9 flex items-center gap-1 text-xs">
        <span className="text-muted-foreground mr-2 font-medium">Design:</span>
        {VERSIONS.map((v) => {
          const active = v === version;
          return (
            <button
              key={v}
              onClick={() => pick(v)}
              className={`px-3 py-1 rounded-md font-semibold transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Version {v}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VersionSwitcher;
