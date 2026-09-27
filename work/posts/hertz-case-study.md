---
title: Redesigning Hertz for the moment a rental actually goes wrong
dek: A full cognitive, affective, and ethical design audit — then a working Figma prototype to prove it
category: Case Study · HCI Research
date: Texas A&M, ISTM 680
hero: ../assets/images/hertz-1.png
original_href: https://drive.google.com/file/d/1VGNm8-kKXQbmC3YhqPopG8oWgJmC6W7u/view?usp=sharing
original_label: Read the full project report (PDF)
---

Car rental apps have one job that sounds simple — get someone into a car quickly — but the users behind that job are rarely uniform. This redesign of the Hertz Car Rental app was built around four distinct groups: business travelers who need logistics to disappear into the background of a trip, families and vacationers booking for varied group sizes, last-minute planners who need the app to work under time pressure, and international students who don't own a car but rely on rentals for road trips and getting around the city. Designing for all four at once meant the interface had to be fast for the confident user and forgiving for the first-time one, simultaneously.

## Walking the actual journey

New users land on informative splash screens covering quick rides, flexible rentals, and CO2 emissions, before choosing to log in, sign up, or continue as a guest. Signup includes clear error handling on bad input and OTP verification for security. Once in, the homepage uses GPS to surface nearby rental locations alongside upcoming rentals and recent searches, so a returning user never starts from zero. Picking a pickup location opens a date picker that only shows real availability, car selection shows CO2 emissions transparently for every option, and booking closes with a confetti-backed success screen plus the option to add the reservation straight to Apple Wallet.

## The cognitive design layer

**Conceptual models:** the original app leaned on users' assumed understanding of how car rental works; the redesign fixes that with splash screens that state the app's purpose plainly and pop-ups that explain button functionality as they're encountered.

**Affordance and signifiers:** color contrast drives button visibility, and icons for discover, history, profile, and filter follow conventions a user would already recognize from other apps — paired with text labels so screen readers can carry the same meaning.

**Constraints:** a numeric-only keyboard for data entry and a date picker that removes unavailable dates from selection entirely, rather than letting a user pick one and then telling them it's invalid.

**Feedback and memory:** notification-style pop-ups handle errors and successes, with the booking confirmation's confetti moment doing double duty as feedback and delight. Recognition-over-recall shows up in placeholder text and email suggestions during signup, and a visible recent-searches list means an interrupted booking session is easy to resume. When memory fails entirely, "forgot password" and "forgot ID" flows are backed by a help section accessible from every screen.

## Designing for more than the default user

Accessibility wasn't a separate pass — it's built into the same feature set. High color contrast and industry-standard iconography support color blindness, screen-reader compatibility uses real labels and alt text, speech-to-text is wired into major input fields, adjustable text size ships from first launch, and translation support serves users who think in a language other than the app's default.

## Where ethics shaped the product, not just the polish

A CO2 emissions percentage on every vehicle option turns an invisible environmental cost into something a user can actually weigh. The interface deliberately excludes advertisements to protect focus, keeping price and the booking action pinned where they can't be missed. And privacy is handled transparently — a plain-language note that data is protected with 256-bit encryption, paired with Face ID as the authentication method.

## From audit to a working prototype

The written analysis above is the reasoning; it still needed to survive contact with an actual interface. The redesign was built out screen by screen in a [Figma prototype](https://www.figma.com/design/yzVhCAGD2cVOzNrzb6SO59/PROJECT-HCI?node-id=0-1&t=MbegjrqKGoXEVElE-1) — the same flow described above, but now something a reviewer could actually click through rather than just read about. That's where an affordance or a constraint either holds up or doesn't: whether the numeric-only keyboard really does feel invisible when entering a phone number, whether price and the booking button stay legible once the bottom nav is removed during checkout, whether the confetti moment lands as delight or noise. Every cognitive-design decision above needed a real screen to prove itself against, and building the accessibility commitments into actual components — not just describing them — is what would make them usable by an engineering team picking this up next.

## The throughline

None of these decisions were made in isolation. The CO2 transparency, the ad-free layout, the explicit encryption messaging — each is a small trust-building signal, and trust is the actual currency of a car rental transaction: you're handing a stranger your payment details and getting into a vehicle you've never driven, often under time pressure. A redesign that only optimized for booking speed would have missed the point. This one optimized for booking speed *and* the confidence to complete it.
