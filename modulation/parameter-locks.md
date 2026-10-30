---
layout: default
title: "Parameter locks"
parent: "Modulation"
nav_order: 1
description: "Per-step overrides of track parameters."
---

# Parameter locks

A parameter lock sets one track parameter to one value on one step. The lock applies only while that step plays. The track's own value does not change, and the other steps are not affected.

{% include hardware-unverified.html text="The gesture has not been tried on a Launchpad with a synth. In the app code a pad counts as held after 0.2 seconds, and a step pad that is still down when you tap the value pad counts too." %}

## Where

Fourteen parameters can be locked. They are on the pages below, and a lock only works while the parameter you have picked on the page is one of them. The other parameters of those pages (direction, launch quantize, follow global key, arp octaves and so on) and every other page keep the usual meaning of holding a step.

| Page | Picker pad | Lockable parameters |
|---|---|---|
| [Track > Feel]({% link track/feel.md %}) | 42 | Swing, groove template, humanize timing, humanize velocity |
| [Track > Voices]({% link track/voices.md %}) | 44 | Echo repeats, echo time, echo decay, voice mode, voice partner channel |
| [Keys > Harmony]({% link keys/harmony.md %}) | 47 | Harmonizer voice 1, harmonizer voice 2 |
| [Keys > Voice]({% link keys/voice.md %}) | 48 | Voicing inversion, voicing spread, voice leading |

Keys > Voicing edits the step itself, so it has no locks. Its voicing settings that can be locked are on Keys > Voice.

{% include launchpad-picker.html sub_mode="track" page=2 hint="1@96,2@42" alt="Launchpad with EDIT held: the picker shows the Track pages with Feel on the value row" caption="Hold EDIT (1), then tap Feel on the value row (2). Feel is one of the lockable pages." %}

## How to lock a step

1. On a lockable page, tap a step pad to pick the parameter you want to lock. A quick tap picks it, as before. The step pads are the parameter picker here.
2. Hold a step pad and tap a value pad. The step is locked to the value that pad would set.
3. To lock several steps, hold them together. Each held step gets the lock.

A step beyond the pattern length ignores the pad. The display shows "Beyond the pattern".

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_4_floor,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" row1="cyan:1,cyan:1,hotpink:3:Lock:Step 3 has a lock,cyan:1,gray:3:Held:Held step 5,cyan:1,cyan:1,cyan:1" row5="purple:2,purple:2,purple:2,hotpink:3:Lock:Value step 5 is locked to,purple:2,purple:2,purple:2,purple:2" hint="1@85,2@44" alt="Launchpad Feel page: step 3 has a parameter lock, step 5 is held, and a value pad is locked" caption="Hold step 5 (1), then tap a value pad (2). Step 5 is locked to that value." %}

## What the pads show

| Colour | Meaning |
|---|---|
| Hot pink step | Locked for the parameter you picked |
| Dim pink step | Has locks, but for other parameters |
| Grey step | The step you are holding |
| Green step | The playhead. It draws over the lock marker |
| Hot pink value pad | The value the held step is locked to |
| Dim orange value pad | The track's value, when the step has no lock |

The companion status line names the lock while you hold a step, for example "STEP 4 LOCK swing 62, echo 3". With no step held it lists the parameters locked on the page.

## Clearing a lock

- CLEAR (pad 28) tapped while a step is held, or CLEAR held and then a step tapped, clears the lock of the picked parameter on that step.
- SHIFT + CLEAR + step, on a lockable page, clears all locks of that step.
- On Beats > Steps and the Keys step pages, SHIFT + CLEAR + step clears only that step's locks. Plain CLEAR + step resets the whole step, and that drops its locks too.

Each lock gesture and each clear is one undo step. See [Held pads and undo]({% link interface/held-pads-and-undo.md %}).

## Gotchas

- Partner channel: tapping the locked channel again locks "none" (-1).
- Echo and voice locks change the step's echo and voice settings while that step plays.
- Drum rack: lane 0 follows the track's steps and takes the locks. Rack lanes 1 to 3 have no locks, but they follow lane 0's swing and groove delay for the step.
- A parameter lock is not the same as the LOCK pad (26). The LOCK pad protects a step from being regenerated. A parameter lock changes one setting while the step plays. A step can have both.
- Locks travel with patterns. DUP + step copies them with the step.

See also [LFOs and matrix]({% link modulation/lfos-and-matrix.md %}) for the modulation that changes values over time.
