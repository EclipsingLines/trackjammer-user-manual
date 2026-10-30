---
layout: default
title: "Lanes and targets"
parent: "CC"
nav_order: 1
description: "Pick a CC or NRPN target and edit its lane."
---

# Lanes and targets

A lane is one of the four CC lanes of a track. The Settings page sets what the lane sends. The CC 1 to CC 4 pages show the lane's steps on the grid.

## Open a lane

1. Hold EDIT (pad 96).
2. Tap pad 24, CC, on the options row of the picker.
3. Tap pad 41 on the value row for Settings, or pads 42 to 45 for CC 1 to CC 4.

{% include launchpad-picker.html sub_mode="cc" page=1 hint="1@96,2@41" alt="Launchpad with EDIT held: the picker shows the CC pages with Settings selected" caption="Hold EDIT (1), then tap Settings on the value row (2). CC 1 to CC 4 are pads 42 to 45." %}

## Settings

| Setting | Values |
|---|---|
| Target | A CC or NRPN number. The choices come from the output device preset (Circuit Tracks, Circuit Rhythm). |
| Channel | MIDI channel 1 to 16 |
| MIDI share | On or off |

Use the step and value pads of the page to set them.

## Lane steps

Tap CC 1 to CC 4 in the picker to show that lane's steps on the step area.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="cc" track_sel=1 presets="steps_euclid_3_8,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" alt="Launchpad CC 1 page for track 1: the lane's steps on the step area" caption="CC 1 page of track 1. The step area shows the lane's steps." %}

## Notes

- A lane can target a CC or an NRPN. A CC lane runs from 0 to 127. An NRPN lane runs from 0 to 16383.
- The lane uses the track's length, speed and rotation, so it stays in step with the track.
- Lane settings and steps belong to the track's pattern. Switching patterns switches the lanes too.
- To shape a lane over time, use the curve editor in [Curves and motion]({% link cc/curves-and-motion.md %}).

{% include hardware-unverified.html text="The target and channel of a lane have not been checked against a real synth. Confirm the CC number on the sound before relying on it." %}
