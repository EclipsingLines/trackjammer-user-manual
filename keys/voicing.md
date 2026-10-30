---
layout: default
title: "Voicing"
parent: "Keys"
nav_order: 5
description: "Chord voicing and inversion."
---

# Voicing

Voicing picks the pattern a step uses for its type: the chord shape of a chord step, the arpeggio pattern of an arp step, or the strum pattern of a strum step. Pick the type first on [Type]({% link keys/type.md %}). Mono steps have no voicing patterns.

## Where

Keys > Voicing (page 5). Hold EDIT, tap 23 (Keys), tap 45. The patterns are on the value pads.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_4_floor_select,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row5="purple:2:Uni,purple:2:Oct,purple:2:5th,purple:2:Maj,purple:2:Min,purple:2:Maj7,purple:2:Min7,purple:2:Dom7" row6="purple:2:Dim,purple:2:Aug,purple:2:Sus2,purple:2:Sus4,purple:2:Add9,purple:2:mA9,purple:2:Pow,purple:2:Clus" pads="44=orange:3:Maj:Major triad, the pattern in use" hint="1@85,2@44" alt="Launchpad Keys Voicing page with a chord type: sixteen chord patterns on the value pads, Major lit" caption="Hold step 5 (1), then tap a pattern pad (2). This example is a chord step; the pads list the chord patterns." %}

## The patterns

Chord steps have 16 patterns. They fit on the value pads with no layers.

| Pad | Chord | Pad | Chord |
|---|---|---|---|
| 41 | Unison | 31 | Diminished |
| 42 | Octave | 32 | Augmented |
| 43 | Fifth | 33 | Sus2 |
| 44 | Major | 34 | Sus4 |
| 45 | Minor | 35 | Add9 |
| 46 | Maj7 | 36 | Minor add9 |
| 47 | Min7 | 37 | Power |
| 48 | Dom7 | 38 | Cluster |

Strum steps have 16 patterns on the same pads, in this order: Down Fast, Down Slow, Up Fast, Up Slow, Down-Up, Up-Down, Random Tight, Random Loose, Flamenco, Fingerpick, Tremolo, Rake Down, Rake Up, Brush Down, Brush Up, Harmonic. Pad 41 is Down Fast and pad 38 is Harmonic.

Arpeggio steps have 19 patterns, so they need two layers. The first layer is pads 41 to 48 and 31 to 37, holding Up, Down, Up-Down, Down-Up, Random, Alt, Oct Up, Oct Down, Spiral Up, Spiral Down, Skip Up, Skip Down, 3rds Up, 3rds Down and Penta. Pad 38 is the layer switch, labelled More. On the second layer, pads 41 to 44 hold Chrome, As Played, Converge and Diverge, and pad 38 switches back.

## Options and defaults

| Item | Setting |
|---|---|
| Pattern | Set per step. With no step held or selected, the pad changes the step under the playhead |
| Arp octaves and seed | On [Voice]({% link keys/voice.md %}); they apply to all arp patterns |

## Notes to know

- The pad list follows the step's type. A step set to Chord shows chord patterns, and so on.
- A chord pattern adds its notes on top of the step's first note. Arp and Strum patterns put the step's own notes in order or time, so give the step more than one note.
- Picking a pattern rebuilds that step's sub-steps.
- Use [Type]({% link keys/type.md %}) to change the type first, and [Voice]({% link keys/voice.md %}) for the arp octaves and the seed.
