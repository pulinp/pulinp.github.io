---
title: What AXE and WAVE catch that a first glance misses
dek: Running four live websites through automated accessibility audits, and finding that visual minimalism and actual accessibility aren't the same thing
category: UX Research · Coursework
date: ISTM 624, Texas A&M
hero: ../assets/images/project-3.png
original_href: https://drive.google.com/file/d/1SdwkkmaSHN0IeEJBEJ2LafP-rzI9gX-4/view?usp=drive_link
original_label: View the original assessment (PDF)
---

For this ISTM 624 assignment, the task was to pick four live websites, form my own read of how accessible each one seemed, and then run them through AXE-Core 4.4.2 and WAVE to see how much the tools' findings matched — or didn't match — that first impression.

## The four sites

| Site | My first read | Tool | Issues flagged |
|---|---|---|---|
| news.ycombinator.com | Minimal-looking but genuinely hard to use — tiny heading text, no indication of which nav tab is active, poor search placement | AXE-Core | 257 |
| foodnetwork.com | Overwhelming, ad-heavy, but with a real content hierarchy and a Walmart API integration for adding ingredients to a cart | AXE-Core + WAVE | 219 (AXE) |
| data.gov.in | Visually busy but genuinely well-organized — strong color contrast, clear search placement, hover states on every widget | WAVE | Broken ARIA references, low-contrast text on some sections |
| healthcare.gov | Minimal, available in 32 languages, ordered layout | AXE-Core + WAVE | 16 (AXE) — the lowest of the four |

The gap between "looks clean" and "is accessible" is the headline finding here. Hacker News reads as the most minimal of the four sites and scored the worst — 257 flagged issues, mostly low color contrast between article text and its timestamp/author subtext, a logo with no text alternative behind its link, an unlabeled search field, and multiple links sharing the same accessible name so a screen reader can't distinguish them. Healthcare.gov, by contrast, is similarly plain but scored dramatically better, in part because of deliberate structural choices — ordered layout, consistent ARIA usage — that don't show up to a sighted user scanning the page.

## Where the tools disagree, and why that's useful

AXE-Core only surfaces what's broken. WAVE surfaces both the breakage and what's already implemented well — which ARIA tags are present, where the structural hierarchy is solid, which alternative text is doing its job. Running both on Food Network made that difference concrete: AXE flagged 219 issues around ARIA attributes, unlabeled frames, and low-contrast text (the pricing text inside the Walmart widget was nearly unreadable), while WAVE additionally credited the site for the accessibility work it had gotten right. That makes AXE better suited to someone already building — a straight punch list — and WAVE better suited to someone still learning what "accessible" actually looks like in practice, since it shows the positive examples alongside the failures.

## What carried across all four

A few failure modes showed up regardless of how different the sites otherwise were: missing or broken ARIA landmarks, image-based logos and content with no text alternative, and color-contrast choices that read fine to me on a first pass but that the tools caught immediately. That last point is the real lesson of the assignment — my own eyes, without an impairment to account for, are a genuinely unreliable accessibility check. The tools exist because a general user's read of "this seems fine" and a screen-reader user's actual experience of the same page can diverge completely, and none of the four sites here were exempt from that gap.
