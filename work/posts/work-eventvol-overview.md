---
title: Designing for students who want to help, not search
dek: How EventVol's user research turned into a working volunteer-matching prototype — the full process, start to finish
category: Selected Work · Craft · HCI Research
date: Texas A&M, ISTM 680
back: ../index-new.html#work
hero: ../assets/images/eventvol-1.png
original_href: https://www.figma.com/design/kU1lP7jj6VxZWP5EI03KVE/ISDD-EVENTS-APP?node-id=696-23686&t=TYiX8gSBBkmd7BgE-1
original_label: Open the Figma prototype
---

Most of the work on this site is measured in adoption numbers and revenue lift. EventVol is here for a different reason — it's the project that shows the *process*, not just the output, and it's a full research-to-prototype cycle run the way I'd want any product built: interviews before assumptions, personas before features, and testing before calling anything done. This is the whole thing, start to finish — nine stages, one team of five, one trail of decisions that all trace back to something a real student said.

## The problem, in a student's own words

College students at Texas A&M who genuinely wanted to volunteer kept running into the same wall — a disorganized landscape of opportunities that didn't account for their class schedule, and for students without a car, no real answer for how to get there. This wasn't a hypothetical persona problem; it showed up directly in interviews, where one student summed up the whole project brief better than any spec could: *"I know I want to help, but where do I start with so many opportunities?"*

## 1. Research: what Aggies actually said, before we designed anything

We interviewed across the spectrum, not just the students already deep in service organizations — from someone who "loves agricultural research" to a peer mentor who coaches younger students, from a student who defines selfless service as "doing something for others' benefit without expecting personal gain" to one who ties volunteering directly to Texas A&M's own 12th Man tradition. Clustering the raw interview data into an affinity map surfaced recognizable themes: Uplifting Society, Travel Safety and Convenience, Research, Teaching and Guidance, Small Gestures, Self Growth, Food and Hunger, Health and Fitness, and — the most actionable cluster — Campus Suggestions.

That cluster is where the product direction started to crystallize. Specific, repeated requests included wanting dedicated apps for getting around after hours, a reliable notification system for volunteer opportunities, integrating everything into the existing TAMU app, and — tellingly — finding the Aggie Spirit campus bus service convenient. That last one mattered: it told us students already trusted an existing transit option, so a transportation feature didn't need to invent trust from scratch. Two threads came out of this phase stronger than anything else: **discovery is broken**, and **transportation is a real, repeated barrier**, not a minor inconvenience. Both became load-bearing assumptions for everything that followed.

*Source: [User Research & Affinity Mapping](https://drive.google.com/file/d/1P5GHt2i6cLziXTX-VVYf4z4yc1TqZnDe/view?usp=drive_link)*

## 2. Meet Samuel Smith, the student EventVol was built for

The research compressed into one persona: Samuel Smith, 24, a College Station-based Environmental Science major "profoundly looking for ways to apply his knowledge for the betterment of society." His pain points map directly onto the research — a disorganized system for finding opportunities, an academic schedule that routinely conflicts with his availability, and difficulty finding opportunities that actually match his interests, especially logistics-heavy ones like transportation help, food distribution, and blood donation drives. His goals: a platform that collates opportunities aligned to his interests, visibility for ongoing (not just one-off) roles, and a way for volunteers to coordinate logistics with each other. We built around Samuel specifically rather than a vaguer "student interested in volunteering" persona because the research made clear his problem — caring already, still getting stuck — was the sharpest and most solvable one in the data.

*Source: [User Personas](https://drive.google.com/file/d/1h-BkgUbv341lxCqyg4re_tPaLyXIAkit/view?usp=drive_link)*

## 3. Sizing up what already exists

Before committing to a feature set, we ran a lightning-demo review of the volunteer-matching apps already on the market — each teammate using an existing app cold for a few minutes and reporting back, deliberately fast rather than exhaustive, to get a first-time-user read rather than a feature checklist. What we found: most general volunteer platforms treat discovery as solved by search and filters, and none of them treated transportation as part of the product at all — even though it was one of the most-repeated blockers in our own interviews, on a campus where an existing, trusted transit option already had cultural buy-in nobody was tapping into. That gap — a validated need meeting a validated market hole — is what turned transportation coordination from a feature idea into a priority.

*Source: [Competitive Research](https://drive.google.com/file/d/19bJaPIW9ZhVdFds-B3cVMlMKOAPg7Pt9/view?usp=drive_link)*

## 4. Five mind maps, one direction

With the research and competitive scan done, each of us — Romit Bonkar, Vatsal Gabani, Aditya Naik, Gyandip Mallhi, and me — built an individual mind map first, independently, before any group session. That sequencing is deliberate: group ideation converges too fast on whoever talks first, and five independent maps built from the same research inputs converging on similar territory is a much stronger signal that we were ideating against the right constraints than a single brainstorm would be. The ideas that survived into the next phase clustered around opportunity discovery and matching, transportation coordination, event registration, and a post-event feedback loop — the overlap of five separate readings of the same research, not just the loudest voice in the room.

*Source: [Ideation](https://drive.google.com/file/d/1cGXDkZYklMP8gJ-S5OH50T9KncUwSvfS/view?usp=drive_link)*

## 5. Three flows that had to work

Ideation converged into three task flows, each tied to a specific research finding. **Discovery**: search or browse upcoming events, view details, register — built to handle both students who know what they want and students who don't yet. **Feedback**: rate and review a past event, closing with a thank-you and a look at other volunteers' reviews — a direct answer to the "reflection" stage students described wanting for themselves. **Transport**: check registered events, find available transport (including a carpool model built around student volunteers as drivers), confirm pickup details — the flow that came directly out of the competitive-research gap.

Underneath those flows sits the actual branching logic. Discovery branches on whether a student likes the first event they see, looping back to more browsing rather than dead-ending if not. Feedback branches on whether the student wants to give it at all, and whether they're satisfied with what they wrote before submitting. Transport is the most decision-heavy: it checks whether a student needs a ride, then whether they've found a suitable option, looping back through transport options rather than silently failing if not. Formalizing those branches — not just the happy path — is what meant no "no" in the flow ever became a dead end once real screens existed.

*Sources: [Task Flows](https://drive.google.com/file/d/1S0xLgKuwJ31zRyrbyG8hhBlpXyz-mr7B/view?usp=drive_link) · [User Flow](https://drive.google.com/file/d/1A3vlNbIub7T3kfOy3cXo1N1vMQZD3xlQ/view?usp=drive_link)*

## 6. Mapping the emotional arc, not just the clicks

A task flow tells you what a user clicks; a journey map tells you what they're feeling while they click it. We mapped five stages: **Awareness** ("I know I want to help, but where do I start?") — uncertain, overwhelmed, no clear starting point. **Exploration** ("It's like standing at the edge of many possibilities") — difficulty choosing between options that supposedly fit. **Engagement** — anxiety about committing to an organization without prior experience. **Involvement** ("I want my efforts to not just count, but to resonate with my core") — a desire to lead and innovate, balanced against real academic load. **Reflection** ("Service is a journey of growth, not just for those we help, but for us as well") — processing impact, sharing experience to inspire the next person.

Each stage paired with a concrete opportunity: guided onboarding for Awareness, an interactive matching experience for Exploration, a "try-before-you-commit" program for Engagement's anxiety, mentorship and flexible scheduling for Involvement, and a platform for sharing success stories at Reflection. That last one is the one that reached furthest — it's the seed of the feedback and rating flow, on the theory that a well-supported Reflection stage recruits the next Awareness-stage student without any additional marketing.

*Source: [User Journey Map](https://drive.google.com/file/d/1FBLzCwtyJ028QYNv9HljEnwnOxqpSDAY/view?usp=drive_link)*

## 7. From wireframes to a working prototype

Each of the three flows got wireframed as its own screen sequence, all anchored to a consistent bottom navigation — Home, Schedule, Saved, Registered, User — so moving between "finding an event" and "getting there" never felt like leaving the app. We kept these deliberately mid-fidelity: real layout and structure, no final visual styling, cheap enough to throw away so early feedback could focus on whether the *structure* worked (where the registration confirmation sits, whether transport should surface before or after registering) rather than anyone getting attached to a color palette that hadn't been decided yet. That feedback shaped real placement details — like putting "view transportation" directly on the event confirmation screen instead of a screen later. The validated wireframes became the basis for the full interactive Figma prototype linked at the top of this post.

*Source: [Wireframes/Prototype Doc](https://drive.google.com/file/d/1XTk0RAyrYfnfbZfIv8-zLY3G5rvUKqsh/view?usp=drive_link)*

## 8. One consistent visual language across five people

With five people building screens for three flows, the real risk wasn't any single bad decision — it was five slightly different interpretations of the same product drifting apart screen by screen. The style guide is what prevented that: a defined color palette, a typography scale, and a shared icon set, applied consistently across a discovery flow, a feedback flow, and a transportation flow that could easily have felt like three different apps stitched together. For a volunteer-matching platform specifically, that consistency isn't just polish — it's part of how the app earns trust with a first-time user who's already anxious about committing to an unfamiliar organization, a feeling the journey map surfaced directly at the Engagement stage.

*Source: [Style Guide](https://drive.google.com/file/d/1Nq078ma2Mkx9ldx_WJDgf_qbg-i-A8IN/view)*

## What shipped

A validated end-to-end prototype covering discovery, transportation coordination, and post-event feedback — three flows that trace directly back to specific research findings rather than assumed features. The proof isn't that EventVol is a polished app; it's that every major decision in it can be traced back to something a real student said in an interview. The clickable version of everything above is linked below.
