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

| Setting | Step pad | Value pads |
|---|---|---|
| Target | 62 | The p-th choice of the track's list. The lists come from the output device preset (Circuit Tracks, Circuit Rhythm) and differ per track. |
| MIDI share | 67 | Any value pad toggles it. On means the lane uses the track's own MIDI channel. |
| Channel | 54 | 41 to 48 and 31 to 38 are channels 1 to 16. Picking a channel turns MIDI share off. |

First pick the lane with the top step row: pads 81 and 82 are lane 1, 83 and 84 lane 2, 85 and 86 lane 3, 87 and 88 lane 4. Then pick the setting on its step pad and set it on the value pads. The three setting pads sit in different rows; they light up on the grid.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="cc" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row1="gray:3:L1:Lane 1,gray:3:L1:Lane 1,green:1:L2:Lane 2,green:1:L2:Lane 2,yellow:1:L3:Lane 3,yellow:1:L3:Lane 3,orange:1:L4:Lane 4,orange:1:L4:Lane 4" pads="62=orange:3:Tgt:Target (selected);67=purple:2:Shr:MIDI share;54=purple:2:Ch:Channel" hint="1@81,2@62" alt="Launchpad CC Settings page: lane pads on the top step row, and the Target, MIDI share and Channel setting pads" caption="Pick lane 1 on pad 81 (1), then Target on pad 62 (2). MIDI share is pad 67 and Channel is pad 54." %}

## Lane steps

Tap CC 1 to CC 4 in the picker to show that lane's steps on the step area. Tap a step to switch it on or off. Options 21 to 24 pick the field the pads edit: 21 Beats, 22 Value, 23 Chance, 24 Offset. Tap the same option again to deselect it. Option 25 arms motion recording.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="cc" track_sel=1 presets="steps_euclid_3_8,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" alt="Launchpad CC 1 page for track 1: the lane's steps on the step area" caption="CC 1 page of track 1. The step area shows the lane's steps." %}

## Notes

- A lane can target a CC or an NRPN, depending on the target picked. A CC lane runs from 0 to 127. An NRPN lane runs from 0 to 16383.
- The Beats field sets how many hits the lane's Euclidean pattern has, and regenerates the lane. That clears all of the lane's steps, including hand edits and the steps a curve wrote.
- The lane uses the track's length, speed and rotation, so it stays in step with the track.
- Lane settings and steps belong to the track's pattern. Switching patterns switches the lanes too.
- To shape a lane over time, use the curve editor in [Curves and motion]({% link cc/curves-and-motion.md %}).

{% include hardware-unverified.html text="The target and channel of a lane have not been checked against a real synth. Confirm the CC number on the sound before relying on it." %}
