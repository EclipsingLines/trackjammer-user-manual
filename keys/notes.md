---
layout: default
title: "Notes"
parent: "Keys"
nav_order: 1
description: "Pick the notes of each step on the keyboard."
---

# Notes

The Notes page sets the notes a step plays. The value area is a keyboard: tap a key to add that note to the selected step, tap it again to remove it.

## Where

Keys > Notes (page 1). Hold EDIT, tap 23 (Keys), tap 41. The step area is for turning steps on and off, and the value area is the keyboard.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor_select,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row5="off::Oct-:Octave down,yellow:1:C#:C sharp,yellow:1:D#:D sharp,off,yellow:1:F#:F sharp,yellow:1:G#:G sharp,yellow:1:A#:A sharp,off::Oct+:Octave up" row6="yellow:1:C:C,yellow:1:D:D,yellow:1:E:E,yellow:1:F:F,yellow:1:G:G,yellow:1:A:A,yellow:1:B:B,yellow:1:C:C one octave up" row7="purple:2:Mono:Monophonic step,orange:3:Arp:Arpeggio step,purple:2:Chord:Chord step,purple:2:Strum:Strummed chord step,off,off,off,off" hint="1@85,2@33" alt="Launchpad Keys Notes page: step 5 selected, a keyboard on the two value rows, step type pads on the options row" caption="Hold step 5 (1), then tap E (2) on the keyboard. The step type shown is Arpeggio." %}

## How to use it

1. Hold a step to select it. The keyboard edits that step's notes.
2. Tap a key on the value area. The note is added. Tap it again to remove it.
3. To change the step type, use pads 21 to 24 (Mono, Arp, Chord, Strum). See [Type]({% link keys/type.md %}).

## Keyboard layout

| Pad | Key |
|---|---|
| 41 | Octave down |
| 42 | C sharp |
| 43 | D sharp |
| 44 | (no key: there is no black key between E and F) |
| 45 | F sharp |
| 46 | G sharp |
| 47 | A sharp |
| 48 | Octave up |
| 31 to 37 | C D E F G A B |
| 38 | C, one octave up |

The octave is the track's keyboard octave. It runs from 0 to 10. Changing it moves the keys; it does not change notes already in the steps.

## Options and defaults

| Item | Setting |
|---|---|
| Step type | Pads 21 to 24 |
| Keyboard octave | Pads 41 (down) and 48 (up) |
| Empty step | Plays nothing |

## Notes to know

- Tapping a key stores the note in the track's own key. On a track that follows the global key, the keyboard shows the global key, and the stored note is converted back to the track's key. See [Harmony]({% link keys/harmony.md %}).
- When the track's source is Stochastic and a step is selected, a tap changes that note's weight instead. Each tap steps the weight through absent, 1, 2, 3, 4 and removed. See [Source]({% link keys/source.md %}).
- Phrase, Markov and Random loop sources write their own notes into the steps each time the step fires, unless the step is locked or has been edited by hand. The notes you see are then the last generated ones.
- Notes are kept inside the track's root, scale and octave range.

## Related

- [Velocity]({% link keys/velocity.md %}) and [Gate]({% link keys/gate.md %}): how loud and how long.
- [Voicing]({% link keys/voicing.md %}): the pattern for an arpeggio, chord or strum step.
