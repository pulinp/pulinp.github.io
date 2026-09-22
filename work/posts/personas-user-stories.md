---
title: Four personas, four epics: writing user stories for a box-office system
dek: Breaking a ticketed-show booking platform into epics and story-pointed user stories for a manager, a telephone sales rep, a performance-booking rep, and a customer
category: Systems Design · Coursework
date: ISTM 624, Texas A&M
hero: ../assets/images/project-10.gif
original_href: https://drive.google.com/file/d/13rq0IH8eiBXJLeXDvqoVFgo0SAZ7vDpI/view?usp=drive_link
original_label: View the original user stories document (PDF)
---

This exercise revisits the same kind of box-office booking system as an earlier ISTM 624 use-case assignment, but from a different angle: instead of formal actor/trigger/alternate-course documentation, the job here is epics and story-pointed user stories for four roles — manager, telephone sales representative, performance-booking representative, and customer. Each epic frames why a role logs in at all; each story under it gets a description, acceptance criteria written in given/when/then form, the outline tasks needed to build it, ordered implementation steps, and a story-point estimate converted to man-days at a consistent 2-points-per-day rate.

## The stories, by role

| Persona | Epic | Story | Points | Est. |
|---|---|---|---|---|
| Manager | Coordinate teams via admin login | See master sales data and analyze profits | 4 | 2 days |
| Manager | " | Modify show timings and production details | 4 | 2 days |
| Manager | " | Arrange performances across show timings | 2 | 1 day |
| Telephone sales rep | Sell and promote tickets via sales login | See real-time seat availability | 3 | 1.5 days |
| Telephone sales rep | " | Access the patron list to send event invites | 4 | 2 days |
| Telephone sales rep | " | Modify or cancel bookings, print receipts | 5 | 2.5 days |
| Performance-booking rep | Schedule and waitlist performers via team login | View the performance-booking timeline | 3 | 1.5 days |
| Performance-booking rep | " | Add prospective events to the timeline | 4 | 2 days |
| Performance-booking rep | " | Maintain a waitlist of interested performers | 6 | 3 days |
| Customer | Browse shows and book a seat via login | Book a seat of choice | 6 | 3 days |
| Customer | " | View performance details before booking | 3 | 1.5 days |
| Customer | " | View and download past booking receipts | 8 | 4 days |

## What the estimates actually reveal

The heaviest single story in the whole set is the customer's past-bookings-and-receipts feature at 8 points — bigger than booking a seat in the first place. That tracks: seat booking is mostly a form flow against live data that the system already needs for other stories, while surfacing historical receipts means real persistence, retrieval, and document generation work that nothing else in the list reuses. The performance-booking rep's waitlist story is the second-heaviest at 6 points for the same underlying reason — it's not a lookup, it's a piece of state the system has to maintain and let a user edit over time.

## Why separate epics per role, instead of one shared backlog

Each role's epic is scoped to a distinct login and a distinct reason to be in the system at all — the manager needs administrator access for oversight, the sales rep needs a sales login built for phone-based transactions, the booking rep needs privileged access to a completely different part of the data model (performer scheduling, not ticket sales), and the customer needs none of that privilege at all. Structuring the backlog this way, instead of one undifferentiated list of features, keeps each story traceable to who actually asked for it and why — which is the same discipline a formal use case enforces, just expressed as story points instead of alternate courses.
