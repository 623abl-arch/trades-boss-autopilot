# Plan: Dump all site copy to chat

## Goal
Paste all human-readable marketing text from every page of the site into chat, organized with the page name as a header.

## Approach
Use a headless browser (Playwright) against the running local preview to visit each route and extract only the visible text (stripping code, class names, and hidden nodes). This is more accurate than parsing JSX because it captures the same words a visitor sees, in reading order, including text from shared components (Navbar, Footer, CTAs).

## Routes to capture
Main pages:
- `/` — Landing (Index)
- `/what-is-mepclaw`
- `/about`
- `/how-it-works`
- `/pricing`
- `/faq`
- `/stack`
- `/blog` and a sample `/blog/:slug`

Feature pages:
- `/features/crm`
- `/features/dashboard`
- `/features/field-photos`
- `/features/quotes`
- `/features/voice-ai`

Solution pages:
- `/solutions/discord-bot`
- `/solutions/discord-overview`

## Output format
Pasted directly in chat as plain text:

```
=== PAGE: Landing (/) ===
<all visible copy in reading order>

=== PAGE: What is MEP Claw (/what-is-mepclaw) ===
...
```

## Notes
- No file changes. Read-only extraction.
- If total output exceeds a single message, I'll split across 2–3 messages grouped by section (main pages, feature pages, solution pages, blog).
- I'll skip duplicate navbar/footer text after the first page and note "(shared nav/footer omitted)" to keep it readable.
