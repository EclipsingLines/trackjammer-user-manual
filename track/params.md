---
layout: default
title: "Params"
parent: "Track"
nav_order: 1
description: "Scale, root, speed, channel, device and other basic track parameters."
---

# Params

Params is the first Track page. It holds the basic settings of the selected track: scale and root, speed, the device and channel it sends to, and a few generator switches.

Hold EDIT and tap pad 41 in the picker. Opening the Track sub-mode lands on the Track page you used last, so use LEFT and RIGHT to get back to Params.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:Scal:Scale;84=purple:3:Root:Root note;86=purple:3:Spd:Speed;88=purple:3:Deep:Deep rhythm;72=purple:3:Cmpl:Complement;74=purple:3:Keep:Keep ratio;77=purple:3:Oct:Transpose octave;61=purple:3:Chan:MIDI channel;63=purple:3:Dev:Output device;65=purple:3:AccC:Accent complement;67=purple:3:Rst:Reset every N bars" hint="1@82,2@43" alt="Launchpad Track Params page: eleven step pads each pick one track setting, labelled Scal, Root, Spd and so on" caption="Tap Scale on the step area (1), then Major on the value row (2)." %}

Each setting has one step pad. Tap it to pick the setting, then use the value row to change it. The lit value pads show the current value.

## Settings

| Setting | Step pad | Value pads | What it does |
|---|---|---|---|
| Scale | 82 | 41 No scale, 42 Chromatic, 43 Major, 44 Natural minor, 45 Dorian, 46 Phrygian, 47 Lydian, 48 Mixolydian, 31 Locrian, 32 Harmonic minor, 33 Melodic minor, 34 Pentatonic major, 35 Pentatonic minor, 36 Blues, 37 Whole tone, 38 Diminished | Scale the track's notes are fitted to. It is the same list as Global > Key. |
| Root | 84 | White keys on 31 to 38 (C to C), black keys on the top row | Root note of the track. A track that follows the global key uses the global key instead (see [Harmony]({% link keys/harmony.md %})). |
| Speed | 86 | Top row 41 to 48: 1/32, 1/16, 1/8, 1/4, 1/2, 1x, 2x, 4x. Bottom row 31 to 37: 1/4T, 1/2T, 1T, 2T, 4T, 1/4., 1/2. Pad 38 switches to the odd divisions: 41 is 1/5, 42 is 1/7, 43 is 1/9, 44 is 2/5 and 45 is 3/5 (pad 38 again goes back) | How fast the track runs against the clock. The default, 1x, plays one step per sixteenth note. 1/4 plays one step per quarter note, and 2x plays twice as fast as 1x. |
| Deep rhythm | 88 | On or off | Builds the beats with a deep rhythm pattern (Toussaint) instead of the standard Euclidean spread. Off by default. |
| Complement | 72 | On or off | Inverts the beat generator. The same switch is Beats > Beat count, option 21. |
| Keep ratio | 74 | On or off | When the length changes, the beat count changes in proportion. Also on Beats > Length, option 21. |
| Transpose octave | 77 | On or off | What UP and DOWN do to a held track or step. On moves by an octave; off moves to the next scale note. |
| Channel | 61 | 41 to 48 and 31 to 38: channels 1 to 16 | MIDI channel the track sends on. |
| Device | 63 | 41 all outputs; then one pad per connected output | Output the track sends to. Pad 41 sends to every open output. The other pads pick one port. Only as many pads light as there are connected outputs. |
| Accent complement | 65 | On or off | Reverses which steps the accent type favours. It was the mutation complement on the old Pattern page. |
| Reset every N bars | 67 | 41 off, 42 is 1 bar, up to 38 is 15 bars | Returns the track to its first step every N bars, so it lines up with the bar. |

## Defaults

The starting channel, scale and root come from the output device preset. The Circuit Tracks preset starts tracks 1 to 8 on channels 1, 2, 10, 10, 10, 10, 16 and 15. The two synth tracks start in Phrygian with root C; the other tracks start with No scale. Device starts on all outputs. Speed starts at 1x, Keep ratio on, and the other switches off.

## See also

- [Feel]({% link track/feel.md %}) for swing and humanize.
- [Global settings]({% link global/settings.md %}) for the global swing and groove.
- [Length]({% link beats/length.md %}) and [Beat count]({% link beats/beats.md %}) for the rhythm.
