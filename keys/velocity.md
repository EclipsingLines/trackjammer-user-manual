---
layout: default
title: "Velocity"
parent: "Keys"
nav_order: 2
description: "Per-step velocity."
---

# Velocity

Velocity sets how hard a step's notes are played (MIDI velocity 16 to 127). Sound sources that respond to velocity usually map it to volume or to the sound's brightness.

## Where

Keys > Velocity (page 2). Hold EDIT, tap 23 (Keys), tap 42.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor_select,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row5="yellow:2,yellow:2,yellow:2,yellow:2,yellow:2,yellow:2,yellow:2,yellow:0" row6="off,off,off,off,off,off,off,off" pads="47=white:3:Vel:Velocity 61, the nearest pad to the default 64" hint="1@85,2@47" alt="Launchpad Keys Velocity page: step 5 selected, value bars lit up to pad 47" caption="Hold step 5 (1), then tap a value pad (2). The bars show the velocity of the step." %}

## How to use it

1. Hold a step to select it. On this page a tap also selects the step.
2. Tap a value pad. The pad sets the velocity and the bars light up to it.

## Value pads

| Pad | Velocity | Pad | Velocity |
|---|---|---|---|
| 41 | 16 | 31 | 75 |
| 42 | 23 | 32 | 83 |
| 43 | 31 | 33 | 90 |
| 44 | 38 | 34 | 98 |
| 45 | 46 | 35 | 105 |
| 46 | 53 | 36 | 113 |
| 47 | 61 | 37 | 120 |
| 48 | 68 | 38 | 127 |

## Options and defaults

| Item | Setting |
|---|---|
| Default | 64 (half) for generated steps and for a step you turn on by tapping it |
| Range | 16 to 127 |

## Notes to know

- Accent (Beats > Accent, velocity type) changes velocity across steps. See [Accent]({% link beats/accent.md %}).
- A value you set here is protected from being regenerated while Global > Settings "Edits survive regen" is on, which is the default. See [Settings]({% link global/settings.md %}).
- With no step held or selected, pad taps change the step under the playhead.

## Related

- [Gate]({% link keys/gate.md %}): how long each note lasts.
- [Notes]({% link keys/notes.md %}): the notes these velocities apply to.
