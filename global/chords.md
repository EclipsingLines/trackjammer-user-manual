---
layout: default
title: "Chords"
parent: "Global"
nav_order: 2
description: "Chord slots for chord progressions."
---

# Chords

The Chords page holds one global chord progression lane: up to eight slots, each with a scale degree, a chord type and a length in bars. Tracks set to follow the chords (on [Keys > Harmony]({% link keys/harmony.md %})) use the chord that is playing now. The lane is on or off, and it uses no track.

{% include launchpad-grid.html top="newnav" top_lit="global" row1="blue:1:1:Chord slot 1,blue:1:2:Chord slot 2,blue:1:3:Chord slot 3,blue:1:4:Chord slot 4,blue:1:5:Chord slot 5,blue:1:6:Chord slot 6,blue:1:7:Chord slot 7,blue:1:8:Chord slot 8" row5="purple:2:I:Degree I,purple:2:II:Degree II,purple:2:III:Degree III,purple:2:IV:Degree IV,purple:2:V:Degree V,purple:2:VI:Degree VI,purple:2:VII:Degree VII,purple:2:Tri:Chord type Triad" row6="purple:2:7th:Chord type 7th,purple:2:Sus2:Chord type sus2,purple:2:Sus4:Chord type sus4,purple:2:Pwr:Chord type power,purple:2:1b:Length 1 bar,purple:2:2b:Length 2 bars,purple:2:3b:Length 3 bars,purple:2:4b:Length 4 bars" row7="gray:2:Lane:Lane on or off (option 21),gray:2:Mkv:Markov on or off (option 22),gray:0::,gray:0::,gray:0::,gray:0::,gray:0::,gray:0::" hint="1@81,2@41" alt="Launchpad Global Chords page: eight slot pads on the top row, degree and type pads, length pads, and the lane and Markov options" caption="Tap a slot (1), then tap a value to set its degree, type or length (2)." %}

## Editing a slot

- Tap a step pad (81-88) to select a slot. Hold CLEAR and tap a slot to clear it. Hold DUP and tap a slot to copy the selected slot onto it.
- The value pads edit the selected slot:
  - 41-47: degree I to VII.
  - 48, 31, 32, 33, 34: type Triad, 7th, Sus2, Sus4 and Power.
  - 35-38: length 1 to 4 bars.
- The first value-pad press on an empty slot fills it with degree I, a triad and one bar, and then applies your change.

{% include hardware-unverified.html text="The type pads cross the row boundary (pad 48, then 31-34). The layout follows the app code and has not been checked on a Launchpad." %}

## Options

| Pad | Option | Default | What it does |
|---|---|---|---|
| 21 | Lane | Off | Turns the progression on. With the lane off, chord follow does nothing |
| 22 | Markov | Off | At the end of the lane, the next pass gets new degrees from a seeded Markov table. Slots you wrote are never overwritten |

## How it plays

- The lane moves on with the bar master's bars. Each slot holds for its length in bars.
- Empty slots are skipped.
- A transport start, or bar 0, restarts the lane.
- The playing slot is lit in the playhead colour on the Launchpad (the selected slot blinks). The Launchpad scroll text shows "SLOT n" with its chord, and the companion status line shows "CHORD" with the chord now playing.

## Related

- [Harmony]({% link harmony/index.md %}): how the progression, key and voicing fit together.
- [Key]({% link global/key.md %}): the global key the chords sit in.
