---
title: Presenting a fraud detection system at ICCCNT 2021
dek: Conference slides for a machine learning approach to catching fraud across two very different transaction datasets
category: Presentations · Data Science
date: Coursework
hero: ../assets/images/project-24.png
original_href: https://docs.google.com/presentation/d/1Clgv-yKCBgQ2GsWi4rtnBdxpe1OBtnv-6hQ8o-kvoY8/edit?usp=sharing
original_label: View the original presentation
---

These are the slides for "A Fraud Detection System Using Machine Learning," presented at the 12th ICCCNT 2021 conference at IIT Kharagpur, co-authored with Dr. Dhananjay Kalbande, Tania Rajabally, and Anisha Gharat. The starting problem is a real operational one: manual fraud review doesn't scale. Studies cited in the presentation suggest 93% of merchants manually review only 1–10% of orders for fraud, which is slow, costly, and still leaves plenty of false negatives slipping through. The objective was to build a machine learning model that could score transactions as fraudulent or genuine in real time, closer to an automated moderator than a manual audit process.

## Two datasets, two different fraud problems

The work splits into two separate transaction domains, because "fraud" doesn't look the same in each one.

**Online payment transactions**, using the PaySim simulated dataset, went through a fairly standard pipeline: cleaning data types and missing values, binary-encoding the fraud label, and analyzing transaction patterns before modeling. Two of those patterns were genuinely telling red flags rather than generic features — transactions where both the sender's old and new account balances were zero despite a non-zero transferred amount, and the same pattern on the recipient's side. Those aren't subtle statistical signals; they're basically accounting inconsistencies that a rules engine alone might miss but that jump out once you're looking at balance deltas directly. Because fraud is a small minority of transactions, the analysis also had to account for that skew directly, using AUPRC (area under the precision-recall curve, which behaves better than accuracy on imbalanced classes) alongside the confusion matrix, precision, recall, and the bias-variance tradeoff for the XGBoost classifier specifically.

**Credit card transactions**, using the standard "Creditcard" fraud dataset, needed a different set of tools: SMOTE (Synthetic Minority Over-sampling) to address the same class-imbalance problem from a different angle, feature scaling, dimensionality reduction, hyperparameter tuning, and testing across several ML algorithms while evaluating with ROC curves.

## Results

On the online payment dataset, XGBoost was the top performer, reaching 99.99% accuracy. On the credit card dataset, an LGBM (LightGBM) classifier performed best, at 97.63% accuracy. The presentation backs both results with confusion matrices and per-algorithm comparison tables rather than reporting a single headline number in isolation — worth noting given how easy it is for a fraud model to post a misleadingly high accuracy simply by predicting "not fraud" on a heavily imbalanced dataset. The team also built a results dashboard using IBM Watson to visualize the output, turning the model's predictions into something a non-technical stakeholder could actually read.

## Why two datasets instead of one

The more interesting design choice, in retrospect, is treating online payment fraud and credit card fraud as genuinely separate problems rather than forcing one pipeline to cover both. They share a goal — flag the fraudulent transaction before it clears — but the feature engineering, the class-imbalance handling, and even the winning algorithm differ between them. That's a fair reflection of fraud detection in practice: the signal that catches a fabricated balance transfer isn't the same signal that catches a stolen credit card number, and a system that pretends otherwise is likely to underperform on at least one of the two.
