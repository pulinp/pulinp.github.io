---
title: Three studies, three winning algorithms — what predicting employee churn actually depends on
dek: A comparative review of data mining approaches to attrition prediction, and why "best algorithm" turned out to be the wrong question
category: Presentations · Data Mining
date: Coursework
hero: ../assets/images/project-22.png
original_href: https://docs.google.com/presentation/d/1IvHJk7wFkoqmutZx35xWFRTGXfDNU23-_0yyTBqcKFE/edit?usp=sharing
original_label: View the original presentation
---

For a data warehousing and mining course, I put together a comparative review of three studies that all tackle the same practical HR problem — predicting which employees are likely to leave — using overlapping but not identical toolkits. Employee churn is expensive to replace for: it costs the trained employee's institutional knowledge, and time and money to backfill. All three papers frame the goal the same way — not just predicting *who* will leave, but building something an organization could actually act on to retain them.

## Study 1: SVM wins on IBM's HR dataset

The first study runs Decision Tree, Naïve Bayes, Logistic Regression, SVM, KNN, and Random Forest against IBM's HR Employee Attrition dataset — 1,470 records, originally 34 features, trimmed down to 30 after dropping ones like employee ID that carry no predictive signal. After comparing accuracy, precision, recall, and F-measure, SVM comes out ahead. The paper then applies Recursive Feature Elimination (RFE) — repeatedly fitting the model and dropping the weakest feature until 14 remain — and finds that the trimmed feature set *improves* accuracy and precision for almost every method tested, with SVM still on top. That's a useful result on its own: fewer, better-chosen features beat more, noisier ones.

## Study 2: Random Forest wins on Kaggle's HR analytics data

The second study, working from Kaggle's HR Analytics dataset (15,000 records — satisfaction rate, average monthly hours, salary band, department, and similar features), runs a similar comparison — linear SVM, Decision Tree, Random Forest, KNN, and Naïve Bayes — and this time Random Forest comes out clearly ahead, with linear SVM performing worst. Different dataset, different algorithm wins, which is the first hint that "best algorithm for churn prediction" isn't really a fixed answer.

## Study 3: Random Forest wins again, on real telecom HR data

The third study uses actual personnel records from an Indonesian telecommunications company — 16,649 employee records over a 2015–2017 window, reduced to 12 relevant attributes after preprocessing. Comparing Naïve Bayes, Decision Tree, and Random Forest with a 70/30 train/test split, Random Forest again wins, with 97.5% accuracy, ahead of Naïve Bayes at 96.6% and Decision Tree at 88.7%. The confusion-matrix breakdown is worth noting too: Decision Tree was the weakest specifically because of a high false-negative rate (16.9%) — meaning it was the worst of the three at catching employees who were *actually* about to leave, which is precisely the case a retention program can't afford to miss.

## What actually generalizes across all three

Putting the three side by side, the "winning" algorithm isn't consistent — SVM in one study, Random Forest in the other two — which on its own tells you the answer depends more on the dataset's structure and size than on any one algorithm being intrinsically superior. What *is* consistent is the workflow: clean and preprocess the data, compare multiple classifiers on the same accuracy/precision/recall/F-measure criteria rather than picking one method on faith, and treat feature selection as part of the modeling process rather than an afterthought. The real value across all three papers isn't a single number — it's a reusable comparison method that an organization could point at its own HR data and trust, rather than a "best" model asserted in the abstract and never checked against a second dataset.
