---
layout: default
title: "Modulation"
nav_order: 12
has_children: true
description: "Parameter locks, LFOs, the mod matrix and knob control."
---

# Modulation

Modulation lets a track change its sound over time without you editing every step. The features below work in different ways. Parameter locks and the mod matrix never overwrite the track's own value. Knob control is different: a knob move changes the value itself.

| Feature | Where | What it does |
|---|---|---|
| [Parameter locks]({% link modulation/parameter-locks.md %}) | Hold a step on a lockable page | Sets one parameter to one value on one step |
| [LFOs and matrix]({% link modulation/lfos-and-matrix.md %}) | Global > LFO, and the Matrix panel | LFOs and other sources add an offset to parameters, velocity, gate and CC lanes |
| [Knob control]({% link modulation/knob-control.md %}) | Global > LFO, option 24 | The CT knobs edit the values of the current page |
| [Curves and motion]({% link cc/curves-and-motion.md %}) | EDIT > CC | Writes a lane from a curve, or from CT knob moves |

{% include hardware-unverified.html text="None of the modulation features has been checked on a Launchpad with Circuit Tracks. Hold timings, knob channels and the LFO results are from the app code and specs." %}

## Where to start

Parameter locks need only the grid. Start there. LFOs and the mod matrix come next, because the matrix panel is needed to route them. Knob control is the last step, and it depends on the knob channel and the CT setup.
