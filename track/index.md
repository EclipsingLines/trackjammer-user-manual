---
layout: default
title: "Track"
nav_order: 4
has_children: true
description: "Track-level settings: scale, speed, feel, playback, voices and rules."
---

# Track

The Track sub-mode of EDIT holds the settings that shape one track as a whole: scale and root, speed, feel (swing, groove and humanize), play direction and loop, MIDI voices, changes that happen over time, cross-track rules and the drum rack.

Select the track first in the right column (pads 89, 79, 69, 59, 49, 39, 29 and 19 are tracks 1 to 8). Then open the sub-mode with EDIT (96): tap UP or DOWN with nothing held until the sub-mode reads Track, or hold EDIT and tap pad 21 in the picker.

{% include launchpad-picker.html sub_mode="track" page=2 hint="1@96,2@42" alt="Launchpad with EDIT held: the picker shows the Track pages, with page 2 Feel marked" caption="Hold EDIT (1), then tap a page on the value row (2). Page 2 is Feel." %}

## Pages

| Page | Picker pad | What it holds |
|---|---|---|
| [Params]({% link track/params.md %}) | 41 | Scale, root, speed, channel, device and the basic switches |
| [Feel]({% link track/feel.md %}) | 42 | Swing, groove and humanize |
| [Playback]({% link track/playback.md %}) | 43 | Play direction, loop and launch quantize |
| [Voices]({% link track/voices.md %}) | 44 | Echo, round-robin voices and the partner channel |
| [Evolution]({% link track/evolution.md %}) | 45 | Actions that run every N cycles |
| [Rules and rack]({% link track/rules-and-rack.md %}) | 46 and 47 | Rules link tracks together; the rack turns a track into four drum lanes |

With nothing held, LEFT and RIGHT step through these pages in the order above.

## Track or pattern

Channel, device, scale, root and octave range belong to the track. They stay the same when you switch pattern (see [Patterns and launching]({% link session/patterns-and-launching.md %})). The other settings on these pages are stored with the active pattern.

## Tips

- Hold a track in the right column and tap UP or DOWN to transpose it; hold it and tap LEFT or RIGHT to rotate it. With nothing held the arrows move between pages and sub-modes.
- The Track pages are also reachable from the picker, so you can jump straight to a page without walking through the others.

## See also

- [Beats]({% link beats/index.md %}) for the rhythm of the track.
- [Keys]({% link keys/index.md %}) for the notes.
- [Global]({% link global/index.md %}) for the global swing, groove and key.
