---
title: Designing a check-in kiosk with a two-day deadline and one load-bearing decision
dek: Apollo Urgent Care's patient check-in flow — built to guarantee an emergency never waits behind a form
category: Case Study · HCI Research
date: Texas A&M, Human-Computer Interaction
hero: ../assets/images/apollo-5.png
original_href: https://www.figma.com/design/AV3LtHLNQDPD8AitsO3kFC/Apollo-Urgent-Care-Kiosk?node-id=0-1&t=TKuB81jNaVS8U1ne-1
original_label: Open the Figma design
---

Apollo Urgent Care was a group project for my Human-Computer Interaction class, built under a genuinely tight constraint: design a patient check-in kiosk, from scratch, in two days. The brief was specific — create a check-in form an incoming patient could fill out as quickly as possible to get assigned a doctor, applying everything we'd covered in class about cognitive design, affordance, and flow.

## My role, under a two-day clock

With a prototype as the only realistic deliverable in that window, my contributions focused on two things: deciding the actual sequence of screens, and figuring out how a patient could get assigned a doctor with the least possible delay — for an urgent care kiosk, that's the entire point of the product, not a nice-to-have. I also worked directly on the prototype design itself alongside the rest of the team.

Before any visual design happened, we built a wireframe mapping the patient's journey and the order screens needed to appear in. Under a two-day timeline, that wireframe did real work: it let the team split up and build the actual screens in parallel with confidence that they'd fit together, instead of discovering conflicts once the visual design was already underway.

## The decision that shaped everything else

The core design choice was routing patients differently based on urgency rather than treating every check-in as the same transaction. A patient who indicates an emergency gets fast-tracked straight to doctor assignment with no further questions; a patient who isn't in a rush gets a more complete check-in form, because there's time for it. You can't optimize a check-in flow for speed and completeness at the same time for every patient, so the design has to decide, per patient, which one matters more in the moment — and it has to decide that on screen 2, not screen 6.

## Seven screens, one branch

**Screen 1** is a welcoming interface with a blue background — chosen specifically to convey credibility, trust, professionalism, and calm — instructing the patient to touch the screen to begin.

**Screen 2** asks the single most important question in the kiosk: does the patient have an emergency? This is where the urgency-based routing actually takes effect.

**The emergency path (Screen 3):** selecting "Yes" skips every subsequent question. The patient is assigned a doctor immediately, with no further delay. For a genuine emergency, every additional screen between arrival and treatment is a cost, and this path is designed to have as close to zero of them as possible.

**The non-emergency path (Screens 4–7):** selecting "No" leads to a check for returning-patient status. Returning patients can schedule by entering insurance details — or scan their insurance card directly, skipping manual entry. New patients fill out a check-in form capturing whatever information is needed for the appointment. Both paths converge at Screen 7, where a doctor is assigned and the kiosk displays an estimated wait time.

## Why the wait-time estimate matters as much as the assignment

It would have been enough, functionally, to end the flow at "a doctor has been assigned." Showing the estimated wait time on top of that closes a different gap — the anxiety of not knowing how long an unfamiliar process will take. For a kiosk built under urgent-care conditions, where patients are already stressed by whatever brought them in, that one additional piece of information does real work reducing uncertainty at the exact moment the interaction ends.

## What a two-day constraint actually forces

There wasn't time in this project for extensive user testing or multiple design rounds. What that constraint forced instead was clarity about the one decision that mattered most — the urgency branch — and discipline about not building screens the team couldn't justify against it. Seven screens, one branch point, two converging paths: built to guarantee that patients whose situation is time-critical never sit through questions designed for the patients who have time to spare. You can click through the whole thing yourself in the [interactive demo](https://www.figma.com/proto/AV3LtHLNQDPD8AitsO3kFC/Apollo-Urgent-Care-Kiosk?node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down) — same seven screens, same one branch, live.
