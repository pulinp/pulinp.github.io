---
title: Wireframing a robot-parts retailer, page by page, before any pixels
dek: A wireframe assignment for a fictional robotics e-commerce site — working out login, browsing, cart, and order tracking before any visual design begins
category: Systems Design · Coursework
date: ISTM 624, Texas A&M
hero: ../assets/images/project-4.png
original_href: https://drive.google.com/file/d/1PTLp_g9QIZUGYF5cTOBdaWR8rShXfyY1/view?usp=drive_link
original_label: View the original wireframe assignment (PDF)
---

For ISTM 624, the assignment paired a fictional e-commerce concept — "Build My Bot," a retailer selling complete robots, individual components, classroom kits, and hobbyist-scale kits — with the job of wireframing the full purchase path before any real visual design happens. The brief for the customer is simple: browse by category, examine products, add to a basket, review the order, pay, then track and eventually reference a purchased item's manual.

## The pages, and what each one has to resolve

**Landing page** carries the ribbon navigation (home, how it works, features, shop, pricing, contact, cart, profile), a hero product, and a grid of featured items — its job is orienting a first-time visitor toward the shop without forcing a decision yet.

**Login and sign-up** both support Google one-click sign-in alongside a standard username/password flow, and both keep the same promotional messaging visible so a user isn't dropped into a dead-end authentication screen.

**Shop/products** is the page doing the most work: a left-rail filter panel for category and specification, a sort dropdown (price, feature, best-selling), and a search bar for filter options that aren't visible in the panel — because a catalog spanning full robots down to individual components needs more than one way to narrow it.

**Product details** shows a photo carousel, a purchase-count signal ("how many people bought this"), and add-to-cart/wishlist actions — deliberately showing the filters that got the user there, so backing out doesn't mean losing your place.

**Shopping cart** does something the rest don't: it surfaces a recommended product and short video based on the current cart and past order history, alongside a past-orders section for reordering directly. That's the one wireframe in the set that's explicitly proposing a recommendation algorithm, not just laying out a form.

**Track order** closes the loop with a map, current status, the last hub the shipment passed through, and both a carrier phone number and a support email — plus the option to cancel the order from the same screen, rather than routing a user elsewhere to do it.

## A shared visual grammar, established up front

Before any of the actual pages, the assignment set two conventions and held them throughout: the logo sits in a 21:9 ratio in the same corner on every page (wide enough to be both readable and comfortably clickable), and a generic image placeholder marks every spot where a real product photo will eventually go. Small as it sounds, agreeing on that grammar before wireframing the first page is what keeps seven separate screens from drifting into seven separate visual languages.

## What the exercise is actually teaching

The conclusion lands on four reasons wireframes earn their place before development: they connect information architecture to visual design so a developer knows what's actually being built, they force consistent presentation of the same type of information across pages, they identify what functionality a page is meant to support, and they force a decision about what content gets priority through space and placement. The real argument underneath all four is cost — a wireframe is fast and cheap to redraw; the same fundamental change made after development has started touches everything downstream.
