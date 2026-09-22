---
title: Launching one insurance app for a company that had never had one
dek: 500K+ users in six months, without risking trust on a product handling live policies and claims
category: Selected Work · Zero-to-One · Fintech
date: ICICI Lombard, Technical Product Manager
back: ../index-new.html#work
original_href: https://drive.google.com/file/d/13S4RebOj6an3I0DSTXd2G1W-MsrJAPIr/view?usp=sharing
original_label: View résumé detail
---

Before this project, ICICI Lombard's health, motor, and travel insurance products each lived in their own disconnected legacy flow — separate systems, separate experiences, no single place a customer could manage everything they held with the company. The brief was to unify all of it into one cross-platform digital app. The constraint that made this hard wasn't technical ambition, it was risk: this product would handle live policies and active claims for real customers, so there was no room to treat it like a typical consumer app launch where you ship fast and iterate on trust later.

## Rebuilding payment before rebuilding anything else

The first structural fix was the payment gateway — moving from a fragmented setup into one centralized, policy-linked system with automated reconciliation. This wasn't a visible feature; it was foundational plumbing. But it's also where a fintech product either earns or loses trust fastest, because payment failures and reconciliation errors are the failure mode customers actually notice and remember. Getting this right first cut issuance time 40% and transaction failures 18% — both of which mattered less as standalone metrics and more as the precondition for everything built on top of them being trustworthy.

## Shipping features in phases instead of one big launch

Rather than a single all-at-once rollout, go-to-market was phased per feature — each capability released, measured, and validated before the next one shipped. For a product touching active insurance policies, that phasing was the actual risk-management strategy: a big-bang launch across health, motor, and travel simultaneously would have made it much harder to isolate what was working and what wasn't, or to contain a problem if one showed up.

## Testing before assuming

Digital insurance cards and push notifications didn't ship on the assumption that customers would want them — they went through behavior-based A/B testing first. That discipline is easy to skip when you're the incumbent with a captive customer base, but it's exactly the muscle that keeps a zero-to-one launch honest: the fact that ICICI Lombard already had millions of policyholders didn't mean every new feature idea was automatically going to land the way it did on a whiteboard. That testing work added $100K+ in quarterly revenue on its own, and the GTM for three new features built on the same phased, tested approach lifted customer adoption 30% and NPS by 3 points.

## The result

500K+ users onboarded in six months, policy conversion up 22% — an estimated $4.2M+ in new premium revenue — on a product that never had the luxury of "we'll fix it in the next release" for the parts that touched money or coverage. The headline number is the user count, but the harder achievement was getting there without a payment failure or a trust incident along the way, on a product where either one would have cost far more than a slow launch ever could.
