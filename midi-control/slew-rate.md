---
layout: default
title: Slew Rate Automation
parent: MIDI Control
nav_order: 3
---

# Slew Rate Automation

Slew Rate automation is a feature in **TrackJammer** that allows you to create smooth transitions between different **Parameter** values. Instead of jumping instantly from one value to another, Slew Rate creates a gradual change, resulting in a more natural and musical sound.

## What is Slew Rate?

In synthesis, "slew" or "glide" is the time it takes for a **Parameter** to change from one value to another. A fast slew rate means the change is almost instant, while a slow slew rate results in a gradual, gliding transition.

This is particularly useful for avoiding "zipper noise," an audible artifact that can occur when a **Parameter** changes too abruptly.

## How Slew Rate Works in TrackJammer

In **TrackJammer**, you can apply Slew Rate automation to any CC or NRPN **Parameter** on a **Sub-track**. This allows you to control the smoothness of your automation with precision.

### Key Features

- **Timing Control**: You can set the Slew Rate to be synchronized with the tempo of your **Session**, ensuring that your transitions are always in time with your music.
- **Musical Applications**: Slew Rate is perfect for creating evolving pads, smooth filter sweeps, and gentle, organic-sounding modulations.
- **Integration with CC/NRPN**: Slew Rate automation is fully integrated with the CC/NRPN system, allowing you to add a layer of smoothness to any automation you create.

## Setting Up Slew Rate Automation

1. **Select a Sub-track**: Choose a **Sub-track** that is already assigned to a CC or NRPN **Parameter**.
2. **Navigate to the Slew Rate Page**: Access the **Slew Rate Page** for that **Sub-track** from the **Launchpad**.
3. **Set the Slew Rate Value**: Adjust the Slew Rate to control the transition time. A higher value will result in a slower, more gradual change.
4. **Enable Slew Rate**: Activate the Slew Rate for the **Sub-track**.

### Example: Creating a Slow Filter Sweep

1. **Assign** a **Sub-track** to control your synthesizer's filter cutoff (e.g., `CC 74`).
2. **Create** a **Pattern** on the **Sub-track** that jumps between a low value and a high value.
3. **Enable** Slew Rate and set a slow value.

Now, instead of the filter jumping abruptly between the two values, it will glide smoothly, creating a classic filter sweep effect.

By using Slew Rate automation, you can add a new level of polish and musicality to your automated **Patterns**, creating sounds that are rich, dynamic, and full of life.
