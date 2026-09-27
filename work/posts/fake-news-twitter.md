---
title: What three different papers on Twitter fake-news detection actually agree on
dek: A comparative literature review of structural, content, and network-based approaches to flagging misinformation in Twitter threads
category: Presentations · Data Science
date: Coursework
hero: ../assets/images/project-21.png
original_href: https://docs.google.com/presentation/d/1HKkCaxbBt1EfOrMJ4FzdX-3fHGtelE3TmBe5qL0htNE/edit?usp=sharing
original_label: View the original presentation
---

With Dipam Shah and Arya Kothari, I worked on a comparative review of research into automatically detecting fake news on Twitter — three papers, each taking a genuinely different angle on the same underlying question: what signals actually distinguish a false rumor from a true one as it spreads through a thread?

## Paper 1: thread structure and crowdsourced labels

Buntain and Golbeck's paper trains credibility models on two datasets — PHEME (330 labeled conversation trees, split 159 true / 68 false / 103 unverified) and CREDBANK (roughly 37 million tweets across 96 days, with accuracy ratings from Mechanical Turk annotators) — then tests whether those models transfer to a third, independent dataset built from BuzzFeed's Facebook fact-checking work. The feature set spans structural signals (tweet count, thread depth, hashtag/media/mention frequency), user signals (account age, follower counts, verification status), content signals (polarity, subjectivity, disagreement), and temporal signals.

The raw accuracy matters less than what happened when the models moved between datasets. The CREDBANK-trained model transferred well to BuzzFeed (73.8% ROC-AUC, 65.29% accuracy, close to its native performance), while the PHEME-trained model transferred badly (36.52% ROC-AUC, worse than chance). That's a useful negative result: an accuracy figure alone doesn't tell you whether a model learned something general about misinformation or just overfit to one dataset's collection quirks.

## Paper 2: feature engineering over algorithm choice

The second paper (Tanvir, Mahir, Akhter, and Huq) runs a more classic ML comparison — five algorithms (SVM, Naïve Bayes, Logistic Regression, LSTM, RNN) across four text-representation schemes (count vectors, word embeddings, TF-IDF, n-gram/character-level vectors), on data built around the 2010 Chile earthquake, where Twitter played a real role in both coordinating relief and spreading misinformation. SVM on TF-IDF came out on top after cross-validation, with Naïve Bayes and SVM both reaching a 0.94 F1-score on count-vector features. What's notable here is less the winning algorithm than the paper's own admitted gap: it used no entity-relationship or domain-knowledge features at all, despite how much "is this claim true" depends on knowing *what* the claim is about.

## Paper 3: mining the tweet metadata itself

The third paper (Nyow and Chua) argues existing fake-news datasets under-use the metadata Twitter already exposes, and derives new attributes from it — URL protocol and structure, headline word count, and log-transformed counts of tweet IDs, retweets, and favorites to correct for skew. Tested across SVM, Naïve Bayes, Logistic Regression, Decision Tree, and Random Forest, the enhanced feature set pushed Random Forest to 98.6% accuracy, 95.4% recall on the fake class, and a 97.2% F1-score — and a simpler Decision Tree came within 0.3% of that, at far lower complexity. The paper is upfront about a real weakness, though: its single most important feature is `url_protocol` (http vs. https), which is trivially easy for a bad actor to game by switching protocols.

## What the comparison actually shows

Lined up side by side, the three papers don't just differ in accuracy (65.29% vs. 89.34% vs. 98.3%, by our summary) — they differ in what they're actually testing. Paper 1 tests generalization across datasets, Paper 2 tests representation choice, Paper 3 tests feature engineering. The real takeaway from pulling these together wasn't "which number is highest" — it's that the highest-accuracy result is also the one most vulnerable to a single gameable feature, and the most rigorously tested result (cross-dataset transfer) posts the lowest accuracy of the three. Detecting fake news well seems to be less about finding a more powerful classifier and more about finding features an actor spreading misinformation can't cheaply fake.
