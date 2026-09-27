---
title: Building the infrastructure team a founding PM doesn't have
dek: How multi-agent architecture compressed a 6-month research cycle into 8 weeks, with no dedicated infra team
category: Selected Work · AI · Agent Systems
date: VYBD.AI (formerly BulkMagic), Founding Product Manager
back: ../index-new.html#work
original_href: mailto:pulinpprabhu@gmail.com?subject=Walkthrough%3A%20AI%20agent%20marketplace
original_label: Ask for a walkthrough
---

As founding product manager at VYBD.AI — then still called BulkMagic — the job was building the process, and the systems underneath it, at the same time, not improving one that already existed, and without a dedicated infrastructure team to hand the hard engineering problems to. Market research that should have taken weeks was taking months, done by hand. Seller operations — onboarding, compliance, logistics — were manual at a scale where manual was already the ceiling.

## Three problems that looked separate and weren't

Slow research, manual seller operations, and a lack of infrastructure are the same problem at different layers, not three unrelated ones. Research was slow because there was no system doing the first pass automatically. Seller operations were manual because there was no platform coordinating supplier onboarding, KYC, and shipment tracking as one flow instead of three disconnected manual steps. And neither of those could get built by "hiring more people," because there was no infra team to hire into — the systems had to be architected, not staffed around.

## The AI Market Research Agent

Rather than a single monolithic tool, this was built as a multi-agent architecture — discrete agents handling different parts of the research pipeline, orchestrated together rather than one model trying to do everything at once. That architectural choice is what let the system hit 85% accuracy while still compressing the decision timeline from 6 months down to 8 weeks: breaking research into agent-sized subtasks made each piece verifiable and improvable on its own, instead of debugging one large opaque process.

## The micro-warehousing platform

On the operations side, the fix was orchestrating supplier onboarding, KYC, and shipment tracking as a connected platform rather than three separate manual workflows handed off between people. That connection is what actually moved the needle — vendor onboarding time dropped 60% not because any single step got faster in isolation, but because the handoffs between steps stopped being the bottleneck.

## Governing the roadmap, not just building one feature

Beyond the two flagship systems, the role included governing the AI roadmap for catalog automation and connected agent workflows more broadly — the ongoing work of deciding which manual seller process got automated next, and in what order, given a small team and a long list of candidates. That prioritization work cut manual operational gaps 40% across seller processes, which is really a measure of how well the roadmap sequencing held up under real constraints, not just how good any one agent was.

## The founding-PM lesson underneath all of it

Without a dedicated infra team, every architectural decision was also a product decision — there was no engineering org to absorb a bad choice quietly. Multi-agent architecture won out over a single large system specifically because it degrades gracefully: one agent underperforming doesn't take down the whole research pipeline, it's a discrete piece you can isolate and fix. That's the kind of decision a founding PM has to get right when there's no one downstream to catch the mistake, not just good systems design.
