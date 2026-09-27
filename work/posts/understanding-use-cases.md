---
title: Writing three use cases before writing a line of code
dek: A systems-analysis exercise in formal use-case writing — actors, triggers, and alternate courses — for a box-office ticketing system
category: Systems Design · Coursework
date: ISTM 624, Texas A&M
hero: ../assets/images/project-2.png
original_href: https://drive.google.com/file/d/1PV5CYrmVjLoryxxGY2rpwDnEubDycJ69/view?usp=drive_link
original_label: View the original use case document (PDF)
---

A user story tells you what someone wants and how you'll know it's done. A use case forces you to go further: actor, trigger, preconditions, a normal course of numbered steps, one or more alternative courses for when something doesn't go to plan, postconditions, and a table tracing every input and output back to its source and destination. For ISTM 624's systems analysis and design course, the assignment was to write three of these for a ticketed-show booking system, one per actor, and the value of the exercise is almost entirely in the alternate courses — the parts a looser spec would skip.

## Telephone sales representative: booking around a caller who can't see the screen

The rep's use case is built around the fact that the customer is on the phone, not looking at the system themselves. The normal course walks through entering caller details, pulling real-time seat availability, checking for a special offer code, and generating an invoice — but the alternate courses are where the design work actually happens. If no tickets are available at the requested time, the rep redirects the caller to a different showtime rather than dead-ending the call. If a discount code doesn't update the cost, the rep tries a different code rather than the transaction just failing silently. And if the customer wants to pay cash, the system issues a partial ticket that blocks the seat for a four-day window — a real business rule about how long a seat can be held without payment, made explicit instead of left as an assumption.

## Patron: the self-service path, with its own failure modes

The patron's use case follows someone browsing shows directly: pick a show, pick a date, pick a time and seat count, see availability, review cost, pay. Its alternate courses mirror the rep's — no tickets at the chosen time sends the patron back to pick a different time or a different show entirely, and a failed payment lets them retry with different details rather than restarting the whole booking. The postconditions close the loop deliberately: the seat is blocked in the backend and reflected across other systems, and the patron is notified — data consistency and confirmation aren't afterthoughts, they're part of what "done" means for this use case.

## Manager: reporting instead of booking

The third actor doesn't book anything — the manager's use case is about turning the same underlying sales and production data into a decision. Visit the reports tab, pick a timeline, see the data, choose from the visualization types the portal offers, and download. The alternate courses are about iteration: changing the requested timeline without starting over, or generating a second visualization from the same underlying data rather than re-pulling it.

## Why the structure matters more than the specific system

What ties the three together is the same shared preconditions every use case relies on (authenticated login, a real-time-connected backend) and the same discipline of specifying what happens when the happy path breaks — not the ticketing domain itself. That's the actual skill the assignment is testing: a requirements document that only describes success is a document that hasn't been stress-tested yet.
