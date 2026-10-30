---
layout: default
title: "Perform"
nav_order: 8
description: "The PERF grid: FX, density, randomize, tempo and mute scenes."
---

# Perform

PERF (pad 97) is a grid of momentary performance tools. Press a pad to hear its effect; release it and the sound goes back to what the pattern says. Effects play on top of the pattern and write nothing into your steps. Randomize and mutate edit the steps for as long as you hold them, and keep the edit only if you release them with SHIFT held.

{% include launchpad-perf.html hint="1@97,2@81" alt="Launchpad PERF grid: FX pads on the top two rows, density fader, randomize and mutate rows, tempo row and mute scenes" caption="Tap PERF (1), then hold a stutter pad (2). Release it to stop." %}

## Entering and leaving

- Tap PERF (97) to enter. Holding PERF in any mode fires FILL while it is held, which the FILL conditions on [Conditions]({% link beats/conditions.md %}) use. A hold does not enter PERF.
- SHIFT + PERF is a different gesture: it queues a resync of all tracks for the next bar and leaves the mode as it is.
- Tap EDIT or any other mode to leave. Leaving PERF, or stopping the transport, ends every FX and reverts any hold that is still down.

## Pads

| Pads | What they do |
|---|---|
| 81-87, 71-78 | Performance FX (see below). Pads 84, 74, 77 and 78 are empty |
| 88 | Arms or disarms motion recording. It is a toggle, not a momentary pad. See [Knob control]({% link modulation/knob-control.md %}) |
| 61-68 | Density fader: 0, 15, 30, 50, 60, 75, 90, 100 |
| 51-54 | Randomize at 25, 50, 75 and 100 % |
| 55-58 | Mutate at 25, 50, 75 and 100 % |
| 41-48 | Tempo: tap, nudge, ramps and hold. Lit only while TrackJammer is the clock master |
| 31-38 | Mute scenes 1-8 |
| 21-28, 11-18 | Options and quick slots, unchanged. 27 and 28 are the held DUP and CLEAR pads, so SHIFT + 28 is undo and SHIFT + 27 is redo |

The right column still selects tracks: tap a track pad to select it, SHIFT + tap to mute it. If you hold a track pad while using FX, randomize or mutate, the effect applies only to that track (hold several to use several). With no track pad held, FX apply to all tracks, while randomize and mutate apply to the selected track.

## Performance FX

Hold an FX pad to play the effect. Release it and each track rejoins the place it would have been in, with no drift.

| Pad | Effect |
|---|---|
| 81, 82, 83 | Stutter at 1/16, 1/32 or 1/16-triplet rate: retriggers the step |
| 85, 86, 87 | Beat repeat of the last 1, 2 or 4 steps |
| 71 | Reverse: plays the loop backwards |
| 72 | Half time |
| 73 | Double time |
| 75 | Roll: a retrigger that speeds up the longer you hold it, down to every tick |
| 76 | Scramble: plays the loop in a random order, with a new seed on each press |

- Half time and double time cancel each other out when held together.
- When effects meet on one track, the step order comes from beat repeat first, then scramble, then reverse. Roll wins over stutter. Time effects combine freely with these.
- Holding a second pad of the same effect (say stutter 1/32 under a held 1/16) keeps it running after you let go of the first.
- SHIFT + release does not keep an effect. FX always stop when released.

## Density

- Pads 61-68 set a master value from 0 to 100 (the values above). Pad 64 (50) is "as written", so the pattern plays unchanged.
- Below 50 the master thins hits, taking non-accented hits first. Above 50 it adds hits in rests, choosing from the Euclidean pulse positions.
- Hold a density pad to hear it. Release returns the master to its earlier value. SHIFT + release keeps the new value. A kept density is not an undo step.
- The pad nearest the current master value is lit green. The default is 50, and the master is saved with the project.

## Randomize and mutate

- Randomize (51-54) re-rolls that share of the steps: each one gets a new on/off at the pattern's density and, if it plays, a new note in the effective key.
- Mutate (55-58) re-runs the accent and mutation pass, then moves the notes of that share of active steps by one or two scale degrees. Triggers stay as they are.
- Neither changes length or beats, and both leave locked and hand-edited steps alone.
- The target is the held track pad (or pads). With none held, it is the selected track.
- Hold to audition; release without SHIFT reverts the change.
- SHIFT + release keeps the change as one undo step labelled "Randomize" or "Mutate". Undo it with SHIFT + CLEAR, see [Held pads and undo]({% link interface/held-pads-and-undo.md %}).

## Tempo

These pads only work while TrackJammer is the clock master (Global > Clock, option 21). Otherwise they stay dark and a tap shows "Not clock master". See [Clock]({% link global/clock.md %}).

| Pad | Action |
|---|---|
| 41 | Tap tempo: the average of the last four tap intervals. A pause longer than 2 s starts a new count |
| 42, 43 | Nudge slower or faster by 4 % while held. Release returns to the set tempo |
| 44, 45 | Ramp down or up 10 BPM over 4 bars |
| 46, 47 | Ramp down or up 10 BPM over 16 bars |
| 48 | Hold: stops a running ramp and keeps the tempo reached so far. It is lit brighter while a ramp runs |

- A ramp starts on the next bar. Pressing a ramp while another one runs adds to it.
- Ramps move in fixed 10 BPM steps, not toward a target tempo.
- Tempo is limited to 20-300 BPM.

## Mute scenes

Pads 31-38 store and recall the mute state of all eight tracks.

1. SHIFT + tap a pad to store the current mutes.
2. Tap the pad to recall them. With the transport stopped they apply at once; with it running they apply on the next bar.
3. A recall pad blinks orange while it is queued and turns green once applied. Stored scenes are blue. Tapping an empty one shows "Scene n empty".

- Only one recall can be queued. A second tap replaces the first.
- Mute scenes are saved with the project.

## Related

- [Clock]({% link global/clock.md %}): clock master and tempo settings.
- [Session]({% link session/index.md %}): patterns and scenes, which change at a bar boundary rather than instantly.
- [Interface: modes and pages]({% link interface/modes-and-pages.md %}): how the modes fit together.
