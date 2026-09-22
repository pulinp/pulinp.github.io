# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Pulin Prabhu's personal portfolio site, deployed via GitHub Pages to the custom domain `pulinpprabhu.com` (see `CNAME`). Pure static HTML/CSS/JS — no build step, no bundler, no package manager, no test suite.

**Two generations of the site currently coexist:**
- `index.html` — the **live, currently-deployed** site (jQuery/ion-icons vCard template with a portfolio grid + modal galleries).
- `index-new.html` — the **work-in-progress redesign** (branch `redesign-sept`), not yet promoted to `index.html`. This is where active development happens. Do not confuse the two — check which one the user means before editing.

## Local development

There is no dev server script or build command. To preview changes:

```bash
python3 -m http.server 8000
# then open http://localhost:8000/index-new.html
```

Serving over HTTP is **required**, not optional: `work/post.html` and the Machine-mode renderer use `fetch()` to load markdown files, which fails silently under `file://`.

## Verification (no test suite exists)

There's no linter or test runner configured. The verification pattern used throughout this repo's history:
- **JS syntax**: `node --check path/to/file.js` (or extract inline `<script>` blocks with a quick Python regex and check those).
- **HTML tag balance**: Python's `html.parser.HTMLParser`, walking start/end tags and asserting the stack empties cleanly.
- **Resource/route smoke test**: run the local server above and `curl -s -o /dev/null -w "%{http_code}"` each changed path.
- **Content correctness** (for `work/posts/*.md`): run the front-matter parser and `marked.parse()` logic against real files in Node to confirm they render without silently swallowing content.

## Architecture: index-new.html

A single HTML file with inline `<style>` for the design system: CSS custom properties (`--paper`, `--ink`, `--accent`, etc.) on `:root`, redefined under both `prefers-color-scheme: dark` and an explicit `data-theme="dark"` override. Fonts are Fraunces (serif headings), Archivo (body), IBM Plex Mono (labels/eyebrows/mono UI).

Sections (each a `<section id="...">`, scroll-spied by the nav): `about`, `experience`, `work` (Selected work), `publications`, `writing`, `toolkit`, `credentials`, `archive`, `contact`.

**Three view modes**, toggled by a fixed bottom-bar (`.bb-mode` buttons) without ever re-fetching content — switching modes only toggles which of `#siteView` / `#machineView` / `#chatView` is visible:
- **Human** — the normal styled page.
- **Machine** — a raw, monochrome, literal-markdown dump of the whole site (`buildMachineMarkdown()` in `index-new.html`'s own inline script), meant to be read by AI agents, not humans. Literal `#`/`##`/`**`/`[text](url)` markdown syntax is deliberately left visible and unstyled — that's intentional, not a rendering bug. Link URLs render at reduced opacity next to the label.
- **Chat** — an "Ask about Pulin" chat UI backed by `window.claude.use('sample')` (runs on the visitor's own Claude account), grounded only in the KB (see below). Answers come back as `{answer, cardIds}` JSON; `cardIds` become clickable citation chips.

A command palette (⌘K / Ctrl+K / `/`) is **homepage-only** — it is not wired into `work/post.html`.

## Architecture: shared modules (`assets/js/`, `assets/css/`)

Both `index-new.html` and `work/post.html` load the same three scripts (`<script src>`, not modules — everything is a real global on `window`) plus one shared stylesheet:

- **`assets/js/kb.js`** — the single source of truth `KB` array (every About/Experience/Selected-work/Publication/Writing/Toolkit/Credential/Archive entry as one flat list of `{id, type, tag, title, body, link, ...}` records), plus `kbById`, the chat system prompt (`RULES`/`KB_TEXT`), and shared helpers: `mdLink()`, `sectionForEntry(e)` (maps a KB id to its homepage anchor), `renderRawMarkdownToHTML()` (the raw-markdown-to-HTML renderer used by Machine mode everywhere).
- **`assets/js/mode-switch.js`** — generic Human/Machine/Chat toggle. Looks for `#siteView`/`#machineView`/`#chatView` by id; works on any page that defines them, doesn't care what's inside them.
- **`assets/js/chat-widget.js`** — the Ask-chat behavior (message list, `sample.json()` calls, citation chips). `flashSection(target)` is context-aware: if the target section exists on the current page it scrolls to it in place; if not (e.g. called from a `work/post.html` page, which has no `#about` etc.), it navigates to `../index-new.html#target` instead.
- **`assets/css/modes.css`** — bottom-bar, `.machine-doc`, and `.chat-view`/`.chat-sidebar` styling, shared by both pages.

Load order matters: `kb.js` → `mode-switch.js` → `chat-widget.js` → each page's own inline script. Page-specific pieces stay inline: `index-new.html` keeps `buildMachineMarkdown()` (whole-site dump) and the command palette; `work/post.html` keeps its own fetch-and-render logic and `buildPostMachineMarkdown()` (single-post dump).

Design tokens (the `:root` custom-property block) are currently **duplicated** verbatim between `index-new.html` and `work/post.html`'s own `<style>` blocks rather than factored into a shared stylesheet — keep both in sync if you change the palette.

## Architecture: `work/` (the archive/case-study blog)

`work/post.html` is one reusable template, not 40 separate files. It reads `?p=<slug>` from the URL, `fetch()`es `work/posts/<slug>.md`, and renders it. It has the same Human/Machine/Chat modes as the homepage (Machine mode here shows a per-post markdown dump — front matter folded into a short header, then the raw body, then the original-work link — built by `buildPostMachineMarkdown()`).

Each `work/posts/*.md` file is hand-authored front matter + a markdown body:

```
---
title: ...
dek: ...
category: ...
date: ...
hero: ../assets/images/whatever.png   (optional)
back: ../index-new.html#work          (optional; defaults to #archive)
original_href: <the real external artifact — PDF, Slides, Figma, Drive>
original_label: ...
---
(markdown body)
```

The front-matter parser (inline in `work/post.html`) is hand-rolled, not a real YAML parser: it splits on the first `\n---` after the opening `---` and reads simple `key: value` lines. Markdown body rendering uses `marked.js` (loaded from a pinned CDN version) for Human mode.

**Content conventions**, if adding or editing a post:
- Voice is first-person as Pulin, grounded only in the real source material (the linked PDFs in `assets/documents/`, or content fetched from the original Drive/Slides/Figma link) — never invented metrics or claims.
- Every post ends by linking to the **actual original artifact**, once, via `original_href`/`original_label` — don't also re-link the same URL elsewhere in the body (this was a real bug fixed once already: don't reintroduce duplicate links to the same URL on one page).
- If a project has multiple original artifacts (e.g. a written report + a Figma prototype), the primary `original_href` should be the fuller/canonical one (the report, the design file), with the secondary artifact linked once inline in the body — not the other way around.
- New/renamed posts must be kept in sync in three places: the `work/posts/<slug>.md` file itself, the archive/selected-work links in `index-new.html`, and the corresponding `arc-*`/`case-*` entry in the `KB` array in `assets/js/kb.js` (which also drives the Machine-mode whole-site index and the chat's grounding text).
- `assets/documents/` holds the local PDFs referenced as original sources for some posts (Design Diary entries, a couple of case studies); `assets/images/` holds hero images, largely reused from the old `index.html`'s project gallery.

## Other files

- `animated-avatar.html` — a standalone, unrelated experiment; not linked from the main site.
- `index.txt` — leftover placeholder copy from the original template scaffold; not used by any page.
