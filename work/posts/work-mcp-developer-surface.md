---
title: Turning a wiki nobody read into an MCP server that answers itself
dek: How a 93% cut in feature-support turnaround removed Product and Engineering as a bottleneck
category: Selected Work · Developer Platforms · AI
date: HireEZ, Senior Product Manager
back: ../index-new.html#work
original_href: mailto:pulinpprabhu@gmail.com?subject=Walkthrough%3A%20MCP%20developer%20surface
original_label: Ask for a walkthrough
---

At HireEZ, Sales GTM and Account Management had a question they needed to answer dozens of times a week: *does the product support X?* The honest answer usually lived somewhere between the master feature database and a set of markdown docs that Engineering kept current on every release — but neither was built for a salesperson to search under time pressure. So the question routed through Product and Engineering instead, every time, turning a lookup into a ticket.

## The bottleneck was retrieval, not information

The information Sales needed already existed, sitting in a structured database and a set of maintained docs — not undocumented, not tribal knowledge locked in someone's head. The bottleneck was that neither of those sources was queryable by the people who needed answers fastest, in the format they needed them in, at the moment a prospect or customer was asking. Every "does it support X" question became a Slack message to Product, which became a context-switch for someone who wasn't the actual source of truth either, just a faster router to it.

## Building the surface Sales actually needed

The fix was a custom MCP server sitting on top of the internal integration dashboard, not a new wiki or a better search bar bolted onto an existing tool. It queries the master database and the markdown docs directly, and surfaces live feature-support answers natively inside Claude. That distinction matters: instead of asking Sales to learn a new internal tool, the answer showed up inside a tool they were already using to think through a deal or draft a customer response.

## Why this was the right lever to pull

There were other ways to attack this problem — better internal search, a dedicated FAQ, a Slack bot with canned responses. Most of those would have added a new surface for someone to maintain and Sales to remember to check. An MCP server sidesteps that: it doesn't duplicate the data, it queries the systems Engineering already keeps current, which means the answers stay accurate without anyone taking on a second job updating a parallel source of truth.

## The result

Turnaround on feature-support questions cut 93%, and Product and Engineering stopped being a bottleneck for GTM entirely for this category of question. The bigger shift goes beyond speed: a question that used to require a human router now resolves at the moment someone's actually having the conversation where it matters.
