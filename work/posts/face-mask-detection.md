---
title: Building a face mask detector with OpenCV, during the year everyone needed one
dek: A computer-vision coursework project — training a Keras/TensorFlow classifier on facial landmarks and running it live over OpenCV video
category: Computer Vision · Coursework
date: OE2: Robotic Vision, Sardar Patel Institute of Technology
hero: ../assets/images/project-20.png
original_href: https://docs.google.com/presentation/d/1__K-br43_3Mn0PRCr5tQ-NEjdA1yS7Tvcr3ixDBvHTc/edit?usp=sharing
original_label: View the original presentation
---

This was the project for OE2: Robotic Vision, an open elective in SPIT's Computer Engineering program, and the brief was practical rather than academic: COVID-era mask mandates in densely populated spaces and large enterprises created a real enforcement problem that didn't scale to a person manually checking every face at every entrance. A working face mask detector removes that manual step entirely.

## The constraint the project actually names

The presentation is upfront about the hard part: the data, not the model architecture. At the time, there simply wasn't a large, readily available dataset of "with_mask" images to train against, which made the whole exercise more cumbersome than a typical image-classification task where you can lean on an existing labeled dataset.

## A two-phase pipeline: train once, deploy fast

The system splits cleanly into two phases. Training loads the mask-detection dataset from disk, trains a model using Keras and TensorFlow, and serializes the resulting detector back to disk. Deployment is a separate, lighter-weight step: load the already-trained mask detector, run face detection on incoming video, and classify each detected face as with_mask or without_mask. Splitting it this way means the expensive part — training — happens once offline, and the part that has to run in real time only has to do inference.

## Facial landmarks as the actual signal

Rather than trying to classify "mask or no mask" as an undifferentiated blob of pixels, the detector locates facial landmarks first — eyes, eyebrows, nose, mouth, and jawline — because a mask's presence is really a statement about which of those structures are visible. If the nose and mouth region is covered, that's the signal the classifier is actually keying on, not some more abstract texture pattern.

## What happens to every frame

The working pipeline is straightforward to trace: pull a frame from the camera stream, convert it to grayscale, run face detection to locate any faces present, and then for each detected face, crop the region of interest, resize and reshape it into the 4D input shape the trained network expects (the extra dimension is the batch dimension the model was trained to accept). The model then outputs a probability pair — P1 and P2, one for each class — and the frame gets labeled based on whichever probability wins.

## What this project actually was

There's no accuracy figure or benchmark in the source material, and I'm not going to invent one here — the honest description of this project is that it's a working demonstration of a two-phase computer-vision pipeline (train offline, deploy for real-time inference) applied to a problem that was, for a stretch of 2020 and 2021, genuinely everywhere. The mask-detection framing made it concrete; the actual skill being built was the OpenCV-plus-Keras pattern underneath it.
