---
title: How CouchDB commits — ACID, MVCC, and a two-step write
dek: A technical walkthrough of CouchDB's document model, its two-step commit process, and how it resolves conflicts without giving up availability.
category: Presentations · Databases
date: Coursework
hero: ../assets/images/project-15.png
original_href: https://docs.google.com/presentation/d/1nBECI42JrufiD6jdS3kxvzFVrMRkErzFda9Q-IJPLGM/edit?usp=sharing
original_label: View the original presentation
---

CouchDB is an open-source, document-oriented database that stores everything as JSON and is accessed entirely through a RESTful HTTP API — no custom driver or query protocol to learn, just HTTP calls. It was created by Damien Katz in April 2005, written in Erlang with a distributed architecture built for easy replication from the start; Katz later left the project to focus on Couchbase Server, and the Apache Software Foundation took over CouchDB in 2008. This presentation was a technical walkthrough of how it actually delivers its consistency guarantees under the hood, ending in a live demo of installing it, creating a database, and building documents and views.

## Getting ACID guarantees from an append-only file

CouchDB's approach to ACID compliance starts with an append-only write strategy: updates never overwrite data in place, they get appended, and document updates are serialized rather than applied concurrently. Every revision gets its own sequence ID (`_rev`), which is what makes multi-version concurrency control (MVCC) possible — readers can keep reading a consistent snapshot of the data without ever having to wait on an in-progress write.

That append-only guarantee is backed by a specific two-step commit process on disk. In step one, the document data and any associated index updates are flushed to disk by appending to the file. In step two, the database's header is rewritten into two identical, consecutive 4-kilobyte chunks at the start of the file. That redundancy is the safety net: if a crash happens mid-write, any partially flushed update is simply ignored, and whichever of the two header copies survived intact is the one CouchDB uses to recover.

## Compaction and distributed writes

Because nothing is overwritten in place, CouchDB accumulates redundant data over time — compaction is the cleanup step, cloning the live data to a new file and discarding what's stale, running automatically and without requiring any downtime. Distributed updates and aggregation both run through JavaScript map-reduce functions, applied incrementally as new documents arrive rather than recomputed against the whole dataset each time — which is also how CouchDB handles reporting-style queries without a separate analytics layer bolted on.

## Conflicts are resolved locally, not centrally

CouchDB's consistency model is built around local consistency rather than a single global lock: conflicting writes across replicas get surfaced as conflicts instead of one silently overwriting the other. Validation runs through JavaScript functions that receive context about the incoming change and can explicitly approve or deny it — giving CouchDB a programmable layer for enforcing rules before a write is accepted, rather than only after the fact.
