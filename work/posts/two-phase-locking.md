---
title: Making concurrent database transactions behave like serial ones
dek: A walkthrough of the Two-Phase Locking protocol, its failure modes, and how multiple-granularity locking scales it to real databases
category: Presentations · Databases
date: Coursework
hero: ../assets/images/project-17.png
original_href: https://docs.google.com/presentation/d/1xnrDg4fc78-4awnHkeiIa-WiREmARZP0RgiwHeo8v58/edit?usp=sharing
original_label: View the original presentation
---

This was a group presentation for a database systems course — myself, Abhishek Revadekar, Manav Sanghavi, and Aditi Kandoi — on one of the core problems in DBMS design: how do you let multiple transactions run at the same time without them corrupting each other's data, while still getting the same guarantees you'd get if they ran one after another?

## The problem locking solves

When transactions execute concurrently, isolation — one of the ACID properties — isn't automatically preserved. If two transactions read and write the same data items in an interleaved order, the result can diverge from any serial execution of those same transactions. The standard fix is locking: a transaction can only access a data item while holding a lock on it, requested from a concurrency-control manager in one of two modes — shared (S), for read-only access, and exclusive (X), for read/write access. Any number of transactions can hold shared locks on an item at once, but an exclusive lock is, well, exclusive: no other transaction can hold any lock on that item at the same time.

The catch is that locking alone doesn't guarantee serializability — it's entirely possible to write a locking scheme where transactions acquire and release locks correctly and *still* produce results a serial execution never would. That's the gap Two-Phase Locking closes.

## The two phases

2PL splits every transaction's lifetime into two phases relative to locking:

- **Growing phase:** the transaction can acquire locks, but cannot release any.
- **Shrinking phase:** the transaction can release locks, but cannot acquire any new ones.

Once a transaction releases its first lock, it's crossed into the shrinking phase and can never go back to acquiring. The moment a transaction takes its *last* lock — the boundary between the two phases — is its **lock point**, and the protocol's serializability guarantee falls directly out of it: transactions can be shown to be serializable in the order of their lock points. 2PL also allows lock conversions — upgrading a shared lock to exclusive during growing, or downgrading exclusive to shared during shrinking — for flexibility without breaking the two-phase discipline.

That guarantee isn't free. Strict two-phase locking can hurt concurrency: transactions may hold locks longer than they need to, lock too early, and block others that would otherwise proceed. And the protocol doesn't eliminate deadlock — two transactions can still each hold a lock the other is waiting on, forcing one to be rolled back — or starvation, where a transaction waiting on an exclusive lock keeps getting passed over by a stream of compatible shared-lock requests from other transactions.

In practice, 2PL comes in a few flavors depending on how strict the release discipline is: **conservative (static) 2PL** acquires every lock upfront and releases them all at the end, deadlock-free but not cascade-free; **strict 2PL** holds exclusive locks until commit, preventing cascading rollback but not deadlock; and **rigorous 2PL** holds *both* shared and exclusive locks until commit, avoiding cascading rollback at the same deadlock risk as strict.

## Scaling it up: multiple granularity

Locking individual records is fine until a transaction needs to touch most of a table — then acquiring thousands of record-level locks is pure overhead. Multiple granularity locking solves this by organizing data into a hierarchy (database → area → file → record) where locking a node implicitly locks everything beneath it. Fine-grained locks (deep in the tree) give high concurrency at the cost of overhead; coarse-grained locks (near the root) are cheap but block more than necessary.

The mechanism that makes this work is **intention locks**: intention-shared (IS) and intention-exclusive (IX) signal that a transaction holds, or intends to acquire, explicit locks further down the tree, so a second transaction can check compatibility without walking the whole subtree. A few rules govern it — lock the root first; lock a node in S/IS mode only if its parent is held in IX or IS; lock a node in X/SIX/IX mode only if its parent is held in IX or SIX; and, critically, the whole scheme still has to obey two-phase discipline. It's a clean example of a correctness protocol (2PL) and a performance optimization (the granularity hierarchy) composing without either one compromising the other's guarantee.
