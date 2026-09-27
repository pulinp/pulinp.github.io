---
title: Shazam's one button, and everything built to protect it
dek: A cognitive-design teardown of an app with exactly one job — and no excuse for making it hard to find
category: Design Diary · UX Teardown
date: ISTM 680, Texas A&M
hero: ../assets/images/article-4.png
original_href: ../assets/documents/Design_Diary_Part_4.pdf
original_label: Read the original design diary entry (PDF)
---

I got introduced to Shazam the way most people probably do: a song played at a gathering, everyone half-recognized the melody, nobody knew the name. I tapped the button, it identified the track in seconds, and it's been on my phone ever since — including on my Apple Watch, and it got real use at a 90's Bollywood party where I quickly identified and saved half a dozen songs I'd never have found otherwise. For this design diary entry, right after a class session on the building blocks of cognitive design, I wanted to look at how an app built around a single core action actually earns that simplicity.

## Affordance and signifiers, concentrated in one place

Shazam's whole interface is organized around a single, unmistakable button. It's large, high-contrast, and dead center — there's no ambiguity about what it does or where to find it. What impressed me more was how that same centered, prominent treatment carries over to secondary actions: opening a track in your streaming app, saving it to your library. The app reuses that same visual language for secondary actions, not just the primary button.

## Discoverability

Beyond the main button, "My Music" and search are clearly labeled and easy to find. The detail that stood out to me as a former mobile developer: the moment a song is identified, the lyrics button does a pop-up animation that grabs your attention and pulls you toward it. It's a small piece of motion design doing the job that a tutorial or tooltip would otherwise have to do.

## Feedback

This is where Shazam does its best work. While it's listening, a waveform animation shows it's actively processing. The moment it identifies a track, there's haptic feedback paired with a bright, attention-grabbing color transition before the song name resolves — feedback that's both functional (confirming the action worked) and a little theatrical (adding a beat of anticipation). Even outside the core flow, notification-style feedback is used consistently to convey status.

## Conceptual models

Splash screens and in-app explainer moments consistently set expectations before asking for action — you're told what a feature does and why you'd want it before you're asked to use it, which is a small thing that adds up across a whole app.

## The takeaway

Shazam is a useful case study precisely because it does one thing. There's no roadmap complexity to hide behind — if the core interaction isn't fast, obvious, and satisfying, the app has no reason to exist. Every design choice I found, from the button's centering to the waveform animation to the lyrics pop-up, is in service of that one interaction being unmissable and rewarding. It's a good reminder that constraint is often what makes an interface easy to critique well — there's nowhere for a weak affordance to hide.
