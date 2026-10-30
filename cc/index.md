---
layout: default
title: "CC"
nav_order: 7
has_children: true
description: "MIDI CC and NRPN lanes on each track."
---

# CC

The CC sub-mode of EDIT holds the MIDI control lanes of the selected track. Each track has four lanes, CC 1 to CC 4. A lane sends its values as MIDI control messages (a CC or an NRPN) on its own channel.

{% include hardware-unverified.html text="Lanes, curves and motion recording were built from the app code and the specs. The messages they send have not been checked on a Circuit Tracks or a synth." %}

## Where to find it

| Page | Picker pad | What it holds |
|---|---|---|
| Settings | 41 | The target, channel and MIDI share of each lane. Option 21 arms motion recording. Option 22 opens the curve editor. |
| CC 1 to CC 4 | 42 to 45 | The steps of lane 1 to 4. Option 25 arms motion recording. |

The picker is the hold-EDIT view. The CC sub-mode itself is pad 24 in the picker.

{% include launchpad-picker.html sub_mode="cc" page=2 hint="1@96,2@42" alt="Launchpad with EDIT held: the picker shows the CC pages with CC 1 selected" caption="Hold EDIT (1), then tap CC 1 on the value row (2)." %}

## Notes

- A lane uses the track's length, speed and rotation. Each lane has its own Euclidean pattern, its own steps and its own curve.
- A new lane is on, follows the track's MIDI channel and has no steps yet (Beats 0), so it sends nothing until you add some. SHIFT + UP, DOWN, LEFT or RIGHT on any CC page switches lane 1, 2, 3 or 4 on or off.
- Lane settings and steps are part of the track's pattern, so they switch with the pattern. See [Patterns and launching]({% link session/patterns-and-launching.md %}).
- The Mod Matrix can route a source to a CC lane. See [LFOs and matrix]({% link modulation/lfos-and-matrix.md %}).

## Pages in this section

- [Lanes and targets]({% link cc/lanes-and-targets.md %}): the Settings page and the lane steps.
- [Curves and motion]({% link cc/curves-and-motion.md %}): the curve editor, and recording CT knob moves into a lane.
