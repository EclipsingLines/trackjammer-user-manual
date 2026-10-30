---
layout: default
title: "Voices"
parent: "Track"
nav_order: 4
description: "MIDI echo, round-robin voices and partner channel."
---

# Voices

Voices control how a track's notes are sent out. Echo repeats each note a few times, quieter each time. Voice mode and the partner channel let one track play through two MIDI channels, so one track can drive two synth voices.

Open it from Playback with RIGHT, or hold EDIT and tap pad 44 in the picker.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:Echo:Echo repeats;86=purple:3:Time:Echo time;73=purple:3:Dcy:Echo decay;78=purple:3:Voic:Voice mode;65=purple:3:Part:Partner channel" hint="1@82,2@43" alt="Launchpad Track Voices page: echo repeats on step pad 82, echo time 86, echo decay 73, voice mode 78 and partner channel 65" caption="Tap Echo repeats (1), then 2 on the value row (2)." %}

## Echo

| Setting | Step pad | Value pads |
|---|---|---|
| Repeats | 82 | 41 Off, 42 is 1, 43 is 2 ... 48 is 7, 31 is 8 |
| Time | 86 | 41 is 1 step ... 48 is 8 steps, counted at the track's speed |
| Decay | 73 | 41 is 10 percent, rising to 38 at 100 percent (16 values) |

Each repeat is quieter than the one before by the decay amount. Echo applies to notes from the sequencer only. Echo is off by default, and stopping the transport cancels any repeats still waiting.

## Voice mode

Voice mode (step pad 78) splits the notes of the track over two channels: the track's own channel and the partner channel.

- 41 Off (default): all notes on the track's channel.
- 42 Round-robin: each note alternates between the track channel and the partner.
- 43 Lowest free: each note goes to whichever channel has fewer notes sounding.
- 44 Pitch split: notes below the track's root stay on the track channel; higher notes go to the partner.

## Partner channel

The partner channel (step pad 65) is set with the value pads. Pad 41 is channel 1, pad 42 is channel 2, and so on up to pad 38 for channel 16. Tap the channel that is already set to remove it.

Example: a Circuit Tracks synth split across two voices can be track 1 on channel 1 with partner channel 2, and Round-robin voice mode.

## See also

- [Params]({% link track/params.md %}) for the track's own channel and device.
- [Playback]({% link track/playback.md %}) for the play direction.
