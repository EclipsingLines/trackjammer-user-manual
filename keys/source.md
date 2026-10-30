---
layout: default
title: "Source"
parent: "Keys"
nav_order: 6
description: "Where notes come from: manual, random, stochastic and more."
---

# Source

Source decides where a track's notes come from. Manual, the default, plays the notes stored on each step. The other four sources generate notes: a melodic shape (Phrase), a looping random register (Random loop), a melodic walk (Markov), or a weighted draw from a set of notes per step (Stochastic). Each track has one source.

## Where

Keys > Source (page 6). Hold EDIT, tap 23 (Keys), tap 46. The top value row, 41 to 45, picks the source. The bottom value row, 31 to 38, sets the chosen source's settings. The step pad picks which setting is being edited.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row1="off,orange:3:Shape:Phrase shape setting,off,off,off,off,off,off" row5="purple:2:Man:Manual,magenta:3:Phr:Phrase in use,magenta:1:Loop:Random loop,magenta:1:Mkov:Markov,magenta:1:Stch:Stochastic,off,off,off" row6="purple:2:Rise:Rise,purple:2:Fall:Fall,purple:2:Arch:Arch,purple:2:Vall:Valley,purple:2:Zig:Zigzag,purple:2:Ped:Pedal,off,off" hint="1@42,2@82" alt="Launchpad Keys Source page: Phrase is the source in use, with its shape pads on the bottom value row" caption="Tap Phrase (1) on the top value row, then the Shape setting on step pad 82 (2). The bottom row shows the Phrase shapes." %}

## The sources

| Pad | Source | What it does |
|---|---|---|
| 41 | Manual | Plays the notes stored on each step. The default. |
| 42 | Phrase | Spreads a melodic shape over the track's active steps. |
| 43 | Random loop | A looping register of scale degrees that can drift. |
| 44 | Markov | Each note moves on from the previous generated note. |
| 45 | Stochastic | Each step holds a weighted set of notes. One note is drawn each time the step fires. |

Pads 46 to 48 do nothing.

## Settings for each source

| Source | Step pad | Values (bottom row) |
|---|---|---|
| Phrase | 82 Shape | 31 Rise, 32 Fall, 33 Arch, 34 Valley, 35 Zigzag, 36 Pedal |
| Phrase | 71 or 72 Range (scale steps) | 31 to 38 = 1, 2, 3, 4, 5, 7, 10, 14 |
| Phrase | 61 or 62 Density (how often it leaves the shape) | 31 to 38 = 0, 15, 30, 45, 60, 75, 90, 100 % |
| Random loop | 82 Lock | 31 to 38 = 0, 25, 50, 75, 85, 90, 95, 100 % |
| Markov | 82 Strength | 31 to 38 = 0, 18, 36, 54, 73, 91, 109, 127 |
| Markov | 71 or 72 Chord weight | 31 to 38 = 0, 15, 30, 45, 60, 75, 90, 100 % |
| Markov | 61 or 62 Approach tones | 31 Off, 32 On |
| Stochastic | none | Edit the weights on [Notes]({% link keys/notes.md %}) |

Random loop lock 100 means the loop repeats exactly. Lower values let more of the loop change each time round.

Option 21 is Keep, on Random loop only. Tapping 21 sets the lock to 100 and keeps the current loop. Hold CLEAR (28) and tap 21 to make a new register.

## Notes to know

- Phrase, Markov and Random loop write their generated notes into the steps each time a step fires. The notes you see on Notes are the last generated ones. Lock a step, or edit its notes by hand, to stop a step from being rewritten.
- Stochastic never changes the stored notes. Its draw is used only when the step plays. A step with no weighted notes plays its stored notes.
- Switching the source keeps the stored notes. Manual plays them again.
- Notes always stay inside the track's root, scale and octave range.
- [Track > Evolution]({% link track/evolution.md %}) can shift the Phrase pattern over time.

## Related

- [Notes]({% link keys/notes.md %}): where Stochastic weights are set.
- [Harmony]({% link keys/harmony.md %}): chord and key settings that apply after the source.
