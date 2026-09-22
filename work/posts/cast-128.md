---
title: Inside CAST-128 — the block cipher quietly running inside PGP
dek: How CAST-128's Feistel structure and three rotating round functions work, and what three research papers found when they tried to attack, speed up, and stress-test it
category: Presentations · Security
date: Coursework
hero: ../assets/images/project-23.png
original_href: https://docs.google.com/presentation/d/1V9Jf_OGX6E2Da85IbAwAE6wEFmCV4JSL3mwqKsB2BdU/edit?usp=sharing
original_label: View the original presentation
---

For a cryptography course, I looked into CAST-128 (also called CAST5) — a symmetric-key block cipher designed in 1996 by Carlisle Adams and Stafford Tavares, best known as the default cipher in several versions of PGP and GPG, and approved by Canada's Communications Security Establishment for government use. It's not a cipher that gets much attention next to AES, but it's a genuinely elegant piece of design, and — per the research I reviewed alongside it — one of the few classic ciphers that has resisted being practically broken.

## How the cipher works

CAST-128 operates on 64-bit plaintext blocks with keys from 40 to 128 bits (in 8-bit increments), built as a Feistel network — encryption and decryption use the same structure, just with the round order effectively reversed. Key sizes up to 80 bits use 12 rounds; anything larger uses the full 16. Each round consumes two subkeys derived from the main key — a 32-bit masking key (Kmi) and a 5-bit rotation key (Kri) — and relies on eight 8×32-bit substitution boxes (S-boxes) built from bent functions, part of what the CAST design procedure specifies.

What makes CAST-128 distinctive is that it doesn't use the same round function throughout — it rotates between three:

- **Type 1** (rounds 1, 4, 7, 10, 13, 16): `f = ((S1[Ia] XOR S2[Ib]) − S3[Ic]) + S4[Id]`
- **Type 2** (rounds 2, 5, 8, 11, 14): `f = ((S1[Ia] − S2[Ib]) + S3[Ic]) XOR S4[Id]`
- **Type 3** (rounds 3, 6, 9, 12, 15): `f = ((S1[Ia] + S2[Ib]) XOR S3[Ic]) − S4[Id]`

Each type also combines the masking key with the data differently before the S-box lookups — addition, XOR, or subtraction, respectively — followed by a key-dependent left rotation. Cycling through those three operations across rounds, instead of repeating one, is a deliberate way of avoiding the structural regularity that makes some ciphers easier to analyze.

## What the follow-up research found

Beyond the cipher's own design, I reviewed three papers that stress-test CAST-128 from different angles.

**A differential power analysis attack** (Boey, Lu, O'Neill, and Woods) is notable mostly for what it says about the cipher's track record — at the time, CAST-128 was the only major algorithm that hadn't been practically broken on either FPGA or ASIC hardware. Using correlation power analysis — monitoring a device's power consumption during encryption and correlating it statistically against key candidates — the authors recovered the full 128-bit secret key, but only after 300,500 power traces, targeting the cipher's registers rather than its S-boxes. That's a real attack, but the trace count underlines how much effort it actually takes.

**A performance-enhancement study** (Krishnamurthy, Ramaswamy, Leela, and Ashalatha) modified the round function to run S-box pairs 1&2 and 3&4 on separate threads, implemented and timed in VHDL. The modified function's execution time dropped from 50ps to 40ps (20%), and the full algorithm's total execution time dropped from 1,285ps to 1,125ps (12.5%), without changing the cipher's security properties.

**An encryption-quality and security evaluation** (Krishnamurthy and Ramaswamy again) tested that modified version against the original using digital images, avalanche effect (60,000 plaintext pairs differing by one bit), histogram analysis, and key sensitivity — flipping a single bit of a 128-bit key and re-encrypting the same image produced a 99.61% pixel difference in the output, close to the ideal of complete unpredictability from a one-bit key change. Their conclusion: the modification improves speed without weakening the diffusion properties that make the cipher secure.

Together, the three papers make a coherent case: CAST-128 has held up under direct attack far better than its relatively low public profile would suggest, and the efficiency work on it hasn't come at the cost of the security guarantees the original design was built around.
