---
title: Designing Instacart for business customers, not just households
dek: An APM case study on prioritization, go-to-market, and measuring a feature nobody had built yet
category: Product Strategy · Case Study
date: Instacart Associate Product Manager Program
hero: ../assets/images/project-26.png
original_href: ../assets/documents/APMInstacart.pdf
original_label: Read the full case study (PDF)
---

This case study came out of Instacart's Associate Product Manager program — one of the more competitive early-career PM tracks to get into, and a chance to work a real prioritization-through-measurement exercise end to end rather than just one slice of it. The brief: grow Instacart's business-customer segment, a smaller and less obvious side of the marketplace than the household grocery orders most people associate with the product.

## Anchoring on a North Star, not a feature list

The North Star Metric is "Growing Business Customers," which sounds obvious until you map out how many sides of the marketplace that actually touches: the business customers themselves, but also the retailers who need deeper integration to serve them, and the advertisers who want to reach them at volume. The persona that grounds the whole case is Marco — a solo small-business owner who needs an affordable way to save time, restock supplies for his cafe, and handle both routine and last-minute purchases.

## Three features, scored with RICE

| Feature | Reach | Impact | Confidence | Effort | Score |
|---|---|---|---|---|---|
| Bulk Save | 9 | 8 | 9 | 4 | 162.0 |
| Frequency Optimizer & Cost Saver Dashboard | 7 | 6 | 7 | 5 | 58.8 |
| Menu Scan (AI list generator) | 5 | 8 | 6 | 8 | 30.0 |

**Bulk Save** auto-applies a discount once a target quantity is reached, with a visible badge marking eligible products — low effort, high confidence, and a flywheel effect: it boosts retailer demand and creates a natural advertising surface for bulk-eligible products at the same time. **Frequency Optimizer & Cost Saver Dashboard** helps businesses see how adjusting order cadence unlocks bulk or auto-order savings. **Menu Scan** lets restaurants generate a tailored order list by scanning a menu — an early, practical use of Instacart's own GPT integration to remove the friction of building a list from scratch. Bulk Save wins the prioritization clearly: widest reach, lowest effort, highest confidence.

## Go-to-market for the winning feature

The plan splits cleanly into product-led and sales-led channels. On the product side, a visible Bulk Save badge and proactive nudges ("Add 5 more to avail bulk discount") do the selling inside the product itself. On the sales side: targeted email and in-app notifications, social proof from early-access business testimonials, and a reach strategy built on geographic segmentation plus identifying high-volume personal-account users who look like they'd convert to business accounts. The positioning statement makes the differentiation explicit: *"With our Bulk Save feature you're not just buying in bulk but saving in bulk too... our automatic discount application and visible Bulk Save icon allow you to instantly recognize and take advantage of savings opportunities without the guesswork."*

## Measuring whether any of it actually worked

The hypothesis is specific and falsifiable: a Bulk Save feature that auto-applies bulk discounts increases both business-user acquisition and average order value. Testing that combines usability interviews on the prototype, A/B testing to isolate the discount's effect on order behavior, and funnel analytics to catch where users drop off between browsing and checkout. On the metrics side, the plan tracks the expected wins (order value, adoption rate, usage rate, retention, DAU/MAU) alongside the metrics that would catch it going wrong — CAC versus LTV, to check the feature isn't just buying growth at an unsustainable cost.

## Guardrails, because a discount feature can backfire quietly

The risk section is where this case study earns its stripes as a real product plan rather than just a growth pitch: perfect order rate has to hold as volume increases, margin impact has to stay within bounds so the discounts don't erode the business case, and there's an explicit watch for customers becoming over-reliant on bulk buying in a way that distorts demand forecasting. The response plan if any of that trips — phased rollout, a structured data review, and a defined path to restructure or communicate differently — is built in from the start rather than left as a "we'll figure it out" afterthought.
