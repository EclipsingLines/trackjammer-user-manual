---
layout: default
title: "Type"
parent: "Keys"
nav_order: 4
description: "Note type per step: single note, chord and more."
---

# Type

Type decides what a step plays: a single note, an arpeggio, a chord or a strummed chord. The type also decides which voicing patterns are offered on the [Voicing]({% link keys/voicing.md %}) page.

## Where

Keys > Type (page 4). Hold EDIT, tap 23 (Keys), tap 44. The four step types are on the options row, pads 21 to 24.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row7="purple:2:Mono:Monophonic (one note),orange:3:Arp:Arpeggio,purple:2:Chord:Chord,purple:2:Strum:Strummed chord,off,off,off,off" hint="1@83,2@22" alt="Launchpad Keys Type page: step 3 selected, the Arp type lit on the options row" caption="Hold step 3 (1), then tap 22 for Arp (2). The lit pad is the type the step plays." %}

## How to use it

1. Hold a step to select it.
2. Tap a type pad on the options row:

| Pad | Type | Plays |
|---|---|---|
| 21 | Mono | One note |
| 22 | Arp | The notes in quick succession, in an arpeggio pattern |
| 23 | Chord | All of the step's notes together |
| 24 | Strum | The notes with a short delay between them, like a strummed chord |

The lit pad shows the step's current type.

## Options and defaults

| Item | Setting |
|---|---|
| Type | Set per step, pads 21 to 24 |
| No step held or selected | Pads 21 to 24 set the track's default type |

## Notes to know

- Changing a step's type rebuilds its sub-steps from the first pattern of the new type. Pick the exact pattern afterwards on [Voicing]({% link keys/voicing.md %}).
- A Mono step has no voicing patterns, so Voicing does nothing on it.
- The arpeggio options, octaves and seed, are on [Voice]({% link keys/voice.md %}).
- Use [Notes]({% link keys/notes.md %}) to change the notes themselves.
