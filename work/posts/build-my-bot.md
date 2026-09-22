---
title: Wireframing Build My Bot, an e-commerce storefront for robot kits
dek: A System Analysis and Design assignment — use cases, user flow, and seven full-screen mockups for a fictional robot-kit retailer.
category: Presentations · Systems
date: ISTM 624, System Analysis and Design, Texas A&M
hero: ../assets/images/project-12.png
original_href: https://drive.google.com/file/d/1OlN6b3aIV0qhLenvX7OJZ1C-hG3dxwwV/view?usp=drive_link
original_label: View the original presentation
---

Despite what the name suggests, "Build My Bot" isn't a chatbot project. It's a mockup assignment for ISTM 624, System Analysis and Design, and the deliverable was a full set of screens for a fictional e-commerce site that sells robot kits — full assembled bots, individual components, classroom kits for teachers, and larger hobbyist builds. The point of the assignment wasn't the robots at all; it was practicing the discipline of going from a use case to a user flow to an actual clickable interface before any of it gets built.

## The use case behind the screens

Before sketching a single page, the assignment starts with why a customer would come to the site at all: buying something new, reviewing past orders, updating a payment method, leaving feedback, replacing a damaged item, claiming a warranty, or tracking a shipment. That list matters because it sets the design priority — since the customer is the system's most important user, every screen has to reduce friction toward those specific actions rather than just looking clean.

## Seven screens, one flow

The mockups walk the full path a returning or first-time shopper would take:

- **Landing page** — the entry point, built around a hero banner for the featured product, promotional tiles for bundles, and a product grid pulling in bestsellers.
- **Login and Sign-up** — standard email/password forms, each with a Google one-click sign-on option so returning users aren't forced to re-enter credentials.
- **Shop/Products** — a filterable grid (category, brand, price, specs) with sort options for price, feature, and top sellers, so someone browsing "classroom kits" isn't wading through hobbyist gear.
- **Product Details** — a carousel of product images, social proof (how many people bought it), and add-to-cart / add-to-wishlist actions.
- **Shopping Cart** — line items with quantity and color selection, a running order total, and a recommended add-on pulled from the current cart and past order history.
- **Track Order** — a map view of the shipment, delivery status, hub location, and carrier contact info, with the option to cancel or keep shopping from the same screen.

The full flow is clickable — I built it as a working Figma prototype rather than static frames, so the handoffs between screens (login → shop → cart → checkout → tracking) actually behave like a site instead of a set of pictures.

## Why mock up at all

The assignment's real lesson shows up in its own conclusion: mockups are cheap to iterate on and expensive to skip. Nailing down layout, color, and interaction before development starts means changes that would be costly once a product is in build — moving a filter panel, rethinking the cart's recommendation slot — cost almost nothing at the mockup stage. That's the actual argument of the exercise: not that this particular robot-kit storefront needed building, but that the mockup step is where a system's design gets cheap to change, right before it stops being cheap.
