---
layout: default
title: "Harmony (Keys page)"
parent: "Keys"
nav_order: 7
description: "Follow the global harmony from the Keys sub-mode."
---

# Harmony (Keys page)

The Harmony page sets how one track follows the global harmony: the global key, the chord lane, the Circuit Tracks transpose, and up to two harmonizer voices. Each setting is per track. The overview of the whole system is on the [Harmony]({% link harmony/index.md %}) page.

## Where

Keys > Harmony (page 7). Hold EDIT, tap 23 (Keys), tap 47. The step pad picks a setting. The top value row, 41 to 48, sets its value.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="keys" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row1="off,orange:3:Glob:Follow global key,off,off,off,purple:2:Chrd:Chord follow,off,off" row2="off,off,purple:2:CT:Follow Circuit transpose,off,off,off,purple:2:Hrm1:Harmonizer voice 1,off" row3="off,off,off,off,purple:2:Hrm2:Harmonizer voice 2,off,off,off" row5="purple:2:Off,orange:3:On,off,off,off,off,off,off" hint="1@82,2@42" alt="Launchpad Keys Harmony page: the global key setting is picked with its On value lit; other settings are on the step rows" caption="Pick Follow global key on step 82 (1), then tap On on the top value row (2). Other settings sit on the step pads marked on the grid." %}

## Settings

| Step pad | Setting | Values on the top row |
|---|---|---|
| 82 | Follow global key | 41 Off, 42 On |
| 86 | Chord follow | 41 Off, 42 Scale, 43 Snap, 44 Transpose |
| 73 | Follow transpose (Circuit Tracks) | 41 Off, 42 On |
| 78 | Harmonizer voice 1 | 41 Off, 42 3rd, 43 5th, 44 6th, 45 Oct up, 46 Oct down |
| 65 | Harmonizer voice 2 | Same as voice 1 |

## What each setting does

- **Follow global key:** the track plays in the root and scale set on [Global > Key]({% link global/key.md %}). Drum tracks never follow. New projects turn it on for every track. Projects saved before this setting existed load with it off.
- **Chord follow:** adjusts the notes to the chord currently playing in the [Global > Chords]({% link global/chords.md %}) lane. Scale fits the notes to the track's scale on the chord root. Snap moves each note to the nearest chord tone. Transpose shifts each note by the distance of the chord root from the tonic. Chord follow does nothing while the chord lane is off.
- **Follow transpose:** the Circuit Tracks transpose applies to this track. It is on for melodic tracks and off for drum tracks by default. See [Global > Key]({% link global/key.md %}) for the listening channel.
- **Harmonizer:** adds one or two voices above each note, in the track's scale. 3rd, 5th and 6th are 2, 4 and 5 scale steps up (4, 7 and 9 semitones on No Scale or chromatic tracks). Oct up and Oct down are exact octaves. A voice that repeats a note already in the chord is dropped.

## Options and defaults

| Setting | Default |
|---|---|
| Follow global key | On for new projects, Off for old ones |
| Chord follow | Off |
| Follow transpose | On for melodic tracks, Off for drum tracks |
| Harmonizer voices | Off |

## Notes to know

- Nothing is written into the steps. Turning a setting off brings back the stored notes.
- Locked steps still follow the global key, but skip the chord lane and the Circuit Tracks transpose.
- Harmonizer voices can be locked per step. Chord follow and follow transpose cannot. See [Parameter locks]({% link modulation/parameter-locks.md %}).
- On a track that follows the global key, the Notes keyboard shows the global key. See [Notes]({% link keys/notes.md %}).
- The order of the stages is on the [Harmony]({% link harmony/index.md %}) page.

## Related

- [Voice]({% link keys/voice.md %}): inversion, spread and arpeggio settings that apply after these.
- [Global > Chords]({% link global/chords.md %}) and [Global > Key]({% link global/key.md %}): where the chords and the key are set.
