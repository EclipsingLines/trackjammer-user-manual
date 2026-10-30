---
layout: default
title: "Gate"
parent: "Keys"
nav_order: 3
description: "Per-step gate length."
---

# Gate

Gate is how long each note of a step lasts. It is a length in MIDI clock ticks, with 24 ticks to a quarter note. A short gate gives staccato notes and a long gate gives sustained notes. A gate of 127 is a tied note, which has no pad on this page.

## Where

Keys > Gate (page 3). Hold EDIT, tap 23 (Keys), tap 43.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor_select,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row5="yellow:2,off,off,off,off,off,off,off" row6="off,off,off,off,off,off,off,off" pads="41=white:3:16:Shortest gate, 16 ticks. Generated steps start here" hint="1@85,2@41" alt="Launchpad Keys Gate page: step 5 selected, the first gate pad lit" caption="Hold step 5 (1), then tap a gate pad (2). Pad 41 is the shortest gate, 16 ticks, which is also what generated steps start with." %}

## How to use it

1. Hold a step to select it. On this page a tap also selects the step.
2. Tap a value pad. The bars light up to the chosen gate.

## Value pads

| Pad | Ticks | Pad | Ticks |
|---|---|---|---|
| 41 | 16 | 31 | 75 |
| 42 | 23 | 32 | 83 |
| 43 | 31 | 33 | 90 |
| 44 | 38 | 34 | 98 |
| 45 | 46 | 35 | 105 |
| 46 | 53 | 36 | 113 |
| 47 | 61 | 37 | 120 |
| 48 | 68 | 38 | 126 |

## Options and defaults

| Item | Setting |
|---|---|
| Generated step (Euclidean, randomize) | 16 ticks, the lowest pad |
| Step you turn on by tapping it | 64 ticks, between pads 47 (61) and 48 (68) |
| Tied note | 127, not on a pad |

A tied note is not switched off by its gate. It ends when the next note of the same track and channel starts.

{% include note.html title="Gate and speed" text="The gate is counted in ticks, so how long it sounds depends on the track speed. At the default speed (1x) a step is 6 ticks long, so the lowest gate, 16 ticks, is about two and a half steps. The pads have no shorter gate." %}

## Notes to know

- The top pad is 126, so a tied note (127) cannot be picked on this page. Knob control also stops at 126.
- With no step held or selected, pad taps change the step under the playhead.

## Related

- [Velocity]({% link keys/velocity.md %}): how hard each note is played.
- [Track > Params]({% link track/params.md %}): the track speed, which sets how many ticks each step lasts.
