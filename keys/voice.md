---
layout: default
title: "Voice"
parent: "Keys"
nav_order: 8
description: "Voice settings of the Keys sub-mode."
---

# Voice

Voice shapes the notes of a chord or an arpeggio after the pattern has been applied: how the chord is inverted and spread, whether successive chords move smoothly, and how the arpeggio runs.

## Where

Keys > Voice (page 8). Hold EDIT, tap 23 (Keys), tap 48. The step pad picks a setting. The top value row, 41 to 48, sets its value. Some settings have two step pads; either one works.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row1="off,orange:3:Inv:Inversion (step pad 82),off,off,purple:2:Sprd:Spread (also 86),off,off,off" row2="purple:2:VL:Voice leading (also 72),off,off,off,purple:2:Oct:Arp octaves (also 76),off,off,off" row3="purple:2:Seed:Arp seed (also 62),off,off,off,purple:2:Prog:Arp over progression (also 66),off,off,off" row5="orange:3:0,purple:2:1,purple:2:2,purple:2:3,off,off,off,off" hint="1@82,2@43" alt="Launchpad Keys Voice page: Inversion is picked and the value 2 is lit on the top value row" caption="Pick Inversion on step 82 (1), then tap 43 for two inversions (2)." %}

## Settings

| Step pad | Setting | Values on the top row |
|---|---|---|
| 82 | Inversion | 41 = 0, 42 = 1, 43 = 2, 44 = 3 |
| 85 or 86 | Spread | 41 Close, 42 Open, 43 Drop 2, 44 Drop 3 |
| 71 or 72 | Voice leading | 41 Off, 42 On |
| 75 or 76 | Arp octaves | 41 = 1, 42 = 2, 43 = 3, 44 = 4 |
| 61 or 62 | Arp seed | 41 Free, 42 = 1, 43 = 2, 44 = 3, 45 = 5, 46 = 8, 47 = 13, 48 = 21 |
| 65 or 66 | Arp over progression | 41 Off, 42 On |

## What each setting does

- **Inversion:** moves the lowest note up an octave, once for each step. 0 leaves the chord as it is.
- **Spread:** Close, Open, Drop 2 and Drop 3 are the four ways the chord's notes are spread across the octaves.
- **Voice leading:** chooses the inversion and the octave that sit closest to the previous chord on this track. The memory resets when the transport starts.
- **Arp octaves:** how many octaves the arpeggio spans. It applies to every arp pattern.
- **Arp seed:** Free gives a new random order each time the arp plays. A number gives the same random order every time.
- **Arp over progression:** an arp step plays the chord currently in the chord lane, instead of its own notes.

## Options and defaults

| Setting | Default |
|---|---|
| Inversion | 0 |
| Spread | Close |
| Voice leading | Off |
| Arp octaves | 1 |
| Arp seed | Free |
| Arp over progression | Off |

At these defaults the voicing stage does nothing. Set one of the settings to hear a change.

## Notes to know

- Inversion, spread and voice leading can be locked per step. See [Parameter locks]({% link modulation/parameter-locks.md %}).
- The voicing settings act on chords and arpeggios. A Mono step is not changed by them.
- The chord comes from the chord lane. See [Global > Chords]({% link global/chords.md %}).

## Related

- [Voicing]({% link keys/voicing.md %}): the arp, chord and strum pattern picked first.
- [Harmony]({% link keys/harmony.md %}): the chord follow and harmonizer settings.
