---
layout: default
title: "Type"
parent: "Keys"
nav_order: 4
description: "Note type per step: single note, chord and more."
---

# Type

Type decides what a step plays: a single note, an arpeggio, a chord or a strummed chord. The type also decides which patterns are offered on the [Voicing]({% link keys/voicing.md %}) page. The value pads on this page are the same keyboard as on [Notes]({% link keys/notes.md %}), so you can edit the notes here too.

## Where

Keys > Type (page 4). Hold EDIT, tap 23 (Keys), tap 44. The four step types are on the options row, pads 21 to 24.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row5="off::Oct-:Octave down,yellow:1:C#:C sharp,yellow:1:D#:D sharp,off,yellow:1:F#:F sharp,yellow:1:G#:G sharp,yellow:1:A#:A sharp,off::Oct+:Octave up" row6="yellow:1:C:C,yellow:1:D:D,yellow:1:E:E,yellow:1:F:F,yellow:1:G:G,yellow:1:A:A,yellow:1:B:B,yellow:1:C:C one octave up" row7="purple:2:Mono:Monophonic (one note),orange:3:Arp:Arpeggio,purple:2:Chord:Chord,purple:2:Strum:Strummed chord,off,off,off,off" hint="1@83,2@22" alt="Launchpad Keys Type page: step 3 selected, the Arp type lit on the options row, the note keyboard on the value pads" caption="Hold step 3 (1), then tap 22 for Arp (2). The lit pad is the type the step plays. The value pads show the note keyboard." %}

## How to use it

1. Hold a step to select it.
2. Tap a type pad on the options row:

| Pad | Type | Plays |
|---|---|---|
| 21 | Mono | One note |
| 22 | Arp | The step's notes one after another, in the order of the arpeggio pattern picked on Voicing |
| 23 | Chord | All of the step's notes together, plus the chord shape picked on Voicing, built on the step's first note |
| 24 | Strum | The step's notes with a short delay between them, like a strummed chord |

The lit pad shows the step's current type.

## Options and defaults

| Item | Setting |
|---|---|
| Type | Set per step, pads 21 to 24 |
| No step selected | Pads 21 to 24 set the track's default type |

## Notes to know

- Changing a step's type rebuilds its sub-steps from the first pattern of the new type. Pick the exact pattern afterwards on [Voicing]({% link keys/voicing.md %}).
- A Mono step has no voicing patterns, so Voicing does nothing on it.
- Arp and Strum need more than one note in the step to be audible as such. Add notes on the keyboard.
- The keyboard taps on this page add and remove notes exactly as on Notes, and the octave pads 41 and 48 work too.
- The arpeggio options, octaves and seed, are on [Voice]({% link keys/voice.md %}).
- Use [Notes]({% link keys/notes.md %}) to change the notes themselves.
