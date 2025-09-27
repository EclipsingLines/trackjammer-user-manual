---
layout: default
title: Sub-tracks
parent: MIDI Control
nav_order: 2
---

# Sub-tracks

**Sub-tracks** are a powerful feature in **TrackJammer** that allow you to create complex automation for your main musical **Patterns**. Each **Track** can have multiple **Sub-tracks**, each controlling a different CC or NRPN **Parameter**.

## What are Sub-tracks?

Think of a **Sub-track** as a separate sequencer lane that runs alongside the main **Track**. While the main **Track** plays your notes, the **Sub-tracks** can be used to automate **Parameters** like filter cutoff, resonance, or anything else that can be controlled via MIDI.

This separation of note and automation data allows for sophisticated, evolving modulations that are independent of the main **Pattern**.

## Key Features of Sub-tracks

### Independent Pattern Lengths

A **Sub-track** can have a different **Pattern** length from its parent **Track**. This is a powerful tool for creating polyrhythmic automation and long, evolving soundscapes.

- **Example**: Your main **Track** could have a 16-**Step** note **Pattern**, while a **Sub-track** controlling a filter cutoff could have a 24-**Step** **Pattern**. This creates a modulation that evolves over several repetitions of the main **Pattern**.

### Multiple Automation Patterns

You can create different types of automation **Patterns** on **Sub-tracks**:

- **Linear Patterns**: Create smooth ramps or slopes, perfect for filter sweeps or volume swells.
- **Euclidean Patterns**: Use Euclidean rhythms to generate rhythmic automation that can interact with your main **Pattern** in interesting ways.

### Real-Time Control

Just like the main **Tracks**, **Sub-tracks** can be manipulated in real-time from the **Launchpad**. You can mute, edit, and override automation on the fly, making it a powerful tool for live performance.

## Setting Up a Sub-track

1. **Select a Track**: Choose the **Track** you want to add automation to.
2. **Navigate to the MIDI Control Page**: Access the **MIDI Control Page** from the **Launchpad**.
3. **Choose a Sub-track**: Select an empty **Sub-track** slot.
4. **Assign a CC/NRPN Parameter**: Assign the **Sub-track** to control a specific CC or NRPN message.
5. **Create a Pattern**: Create a linear or Euclidean **Pattern** on the **Sub-track** to define the automation.

By using **Sub-tracks**, you can add incredible depth and movement to your music, transforming simple **Patterns** into complex, evolving performances.
