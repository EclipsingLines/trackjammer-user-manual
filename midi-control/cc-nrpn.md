---
layout: default
title: CC/NRPN Control
parent: MIDI Control
nav_order: 1
---

# CC/NRPN Control

MIDI Control Change (CC) and Non-Registered Parameter Number (NRPN) messages are essential for controlling external hardware and software instruments. This guide explains how to use them in **TrackJammer** to automate **Parameters** and create expressive performances.

## What are CC and NRPN Messages?

- **Control Change (CC)**: These are standard MIDI messages used to control a wide range of **Parameters**, such as filter cutoff, resonance, volume, and panning. Most synthesizers and **DAWs** respond to CC messages.
- **Non-Registered Parameter Numbers (NRPN)**: These are an extension of the MIDI protocol that allow for much higher resolution control (16,384 steps compared to the 128 steps of a standard CC message). NRPNs are often used for fine-grained control over sensitive **Parameters** like pitch or filter frequency.

## Configuring CC and NRPN Messages

You can configure CC and NRPN messages on a per-**Track** basis, allowing each **Track** to control different **Parameters** on different devices.

### Assigning CC/NRPN to a Track

1. **Select a Track**: Choose the **Track** you want to configure.
2. **Navigate to the MIDI Control Page**: Use the **Launchpad** to access the **MIDI Control Page** for the selected **Track**.
3. **Select a Parameter**: Choose the **Parameter** you want to automate (e.g., filter cutoff).
4. **Assign a CC or NRPN Number**: Enter the CC or NRPN number that corresponds to the **Parameter** on your external device.

### Practical Example: Automating a Filter Cutoff

Let's say you want to automate the filter cutoff of an external synthesizer, which responds to CC message 74.

1. **Select** the **Track** that is sending MIDI to your synthesizer.
2. **Navigate** to the **MIDI Control Page**.
3. **Select** an available automation slot.
4. **Assign** it to `CC 74`.
5. **Create** an automation **Pattern** on a **Sub-track** to control the filter cutoff.

## Real-Time Control

You can manipulate CC and NRPN automation in real-time using the **Launchpad**, allowing for expressive, on-the-fly adjustments during a performance.

- **Live Tweaking**: Adjust automation levels and shapes during playback.
- **Muting Automation**: Temporarily disable automation to revert to a static **Parameter** value.
- **Layering Control**: Combine pre-programmed automation with live overrides for dynamic results.

By mastering CC and NRPN control, you can transform your static **Patterns** into living, breathing musical phrases.
