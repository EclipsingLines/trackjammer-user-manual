---
layout: default
title: "Patterns and launching"
parent: "Session"
nav_order: 1
description: "Eight patterns per track and how to launch them."
---

# Patterns and launching

Each track has eight patterns. A pattern is a complete part for that track, so you can keep several versions of a bassline or drum groove and switch between them in SESS without losing the others.

{% include launchpad-clips.html patterns="p.f.....,.q......" song="off" hint="1@98,2@72" alt="Launchpad clip launcher: track 1 plays pattern 1, track 2 has pattern 2 queued" caption="Track 1 plays pattern 1. Track 2 has pattern 2 queued and starts it at its launch point." %}

## What a pattern holds

| Per pattern | Stays with the track |
|---|---|
| Steps, notes and step locks | Mute |
| Length, beats and rotation | MIDI channel and device |
| Speed and generator settings (Euclid, accents, mutations, evolution) | Scale, root and octave range |
| Note source and its state | Track notes and follow global key |
| CC and NRPN lanes, drum rack lanes | Chord and transpose following, echo and voice output settings |
| | Launch quantize |

Edits always go to the active pattern. Switching patterns keeps the playhead running, but FIRST conditions and the evolution count restart for that track.

## Launching a pattern

1. Tap SESS (98).
2. Tap the pattern pad in that track's column. It blinks while queued.
3. The switch happens at the track's launch point, set on [Track > Playback]({% link track/playback.md %}) under LAUNCH:

| LAUNCH | Pad | When the switch happens |
|---|---|---|
| Next bar | 41 (default) | At the next bar of the bar master. The playhead keeps running |
| Next cycle | 42 | When the track wraps back to its first step |
| Immediate | 43 | As soon as it is queued |

- A track that is not playing never wraps, so a Next cycle launch waits. Use Immediate, or cancel the launch.
- With the transport stopped, a Next bar launch waits for bar 0 of the next start.
- Each track can have one pending launch. A new one replaces it. Tapping the queued pattern again cancels it.
- Switching to an empty pattern starts a blank pattern.

Pad colours: an empty pattern is almost dark, a stored one is a dim version of its track's colour, the playing one is bright, and a queued one blinks. Each track column has its own colour.

## Copy, duplicate and clear

| Gesture | Result |
|---|---|
| SHIFT + tap a stored pattern | Picks it as the copy source. It blinks orange. Empty patterns are refused |
| SHIFT + tap another pad | Pastes the source there, on any track. The source stays picked for more pastes |
| SHIFT + tap the source again | Drops the pick. A plain tap also drops it |
| Hold UP + tap | Duplicates the pattern into the track's next free slot. A message says so if none is free |
| Hold DOWN + tap | Clears the pattern. A queued launch of it is cancelled |

{% include warning.html text="Hold DOWN and tap clears that pattern at once. Undo and redo do not work in SESS, so copy the pattern first if you might need it." %}

## Related

- [Scenes and morph]({% link session/scenes-and-morph.md %}): a scene is one pattern per track.
- [Song]({% link session/song.md %}): plays scenes in order.
- [Track > Playback]({% link track/playback.md %}): where the launch point is set.
