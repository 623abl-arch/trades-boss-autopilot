
Goal: Lighten the dark palette to feel closer to Discord's lighter dark mode (Discord uses around `#313338` for chat, `#2B2D31` for sidebar, `#1E1F22` for the deepest layer) while keeping the same blue accent.

## Current vs proposed (dark theme only)

| Token | Current | Proposed | Notes |
|---|---|---|---|
| `--background` | `222 14% 10%` (#16181c) | `222 10% 18%` (~#2B2D31) | Page bg → Discord sidebar shade |
| `--card` | `222 14% 14%` (#1f2227) | `220 8% 23%` (~#36373D) | Cards lift above bg |
| `--popover` | `222 14% 14%` | `220 8% 23%` | Match card |
| `--secondary` | `222 14% 18%` | `220 7% 28%` (~#42434A) | Buttons/chips |
| `--muted` | `222 14% 18%` | `220 7% 28%` | Same |
| `--surface` | `217 20% 16%` | `220 9% 21%` (~#32343A) | Alt section bands |
| `--callout` | `217 22% 19%` | `220 9% 26%` (~#3C3E45) | Callouts a touch brighter |
| `--border` | `220 12% 20%` | `220 6% 32%` (~#4C4E55) | More visible separators |
| `--input` | `220 12% 20%` | `220 6% 32%` | Match border |
| `--muted-foreground` | `218 11% 55%` | `220 9% 70%` | Slightly brighter secondary text for contrast on lighter bg |

Primary blue (`217 91% 60%`), destructive red, jobber green, and the four competitor tint chips stay the same — only the neutral grays shift up.

## Files to change

1. **`src/index.css`** — update the `:root` block with the new HSL values above. Light mode (`.light`) untouched.

That's the entire change. No component edits needed because every section already consumes these tokens (`bg-background`, `bg-card`, `bg-surface`, `bg-callout`, `border-border`, etc.), so the lift will apply site-wide automatically.

## What it'll look like

- Page background goes from near-black `#16181c` → Discord-ish `#2B2D31`
- Cards become a clearly lighter `#36373D` floating tile
- Section bands (savings banner, outcomes) sit between bg and card for gentle striping
- Borders become visible without being harsh
- Blue CTA + red ✕ + green/blue/purple/sky competitor chips will pop more against the lighter neutrals

Quick visual verification after applying is recommended since several sections layer translucent tints (`bg-primary/15`, `bg-card/40`) that will read brighter on the new base.
