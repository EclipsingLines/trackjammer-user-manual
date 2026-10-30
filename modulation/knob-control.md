---
layout: default
title: "Knob control"
parent: "Modulation"
nav_order: 3
description: "Use hardware knobs to edit the current page."
---

# Knob control

With knob control on, the CT MIDI-track knobs edit the values of the current page. Knobs 1 to 8 (CC 80 to 87 on the knob channel) edit the eight values of the page from left to right. A knob move changes the track's own value. It is not a step lock. TrackJammer does not change the sounds on the CT. The knobs only send control data.

{% include hardware-unverified.html text="Knob control listens on one channel only: the knob channel set below, which is 3 by default from the Circuit Tracks preset. A knob on another channel is not heard unless that channel is set. This has not been checked on hardware." %}

## Turn it on

1. Open Global > LFO. See [Global LFO]({% link global/lfo.md %}).
2. Tap option 24 (pad 24) to turn knob control on. It is off by default.
3. To pick the knob channel, tap pad 75, then tap a value pad: 41 to 48 and 31 to 38 give channels 1 to 16. Tapping the channel that is already set returns to the preset channel.

{% include launchpad-grid.html top="newnav" top_lit="global" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="24=red:1:Knob:Knob control is off by default;25=red:1:Trk:CT track follow is off by default;75=orange:3:Ch:Pick the knob channel, then tap a value pad" hint="1@24,2@75" alt="Launchpad Global LFO page: option 24 turns knob control on, pad 75 picks the knob channel" caption="Tap option 24 to turn knob control on (1). Pad 75 picks the knob channel, then tap a value pad (2)." %}

The knob map in the companion window shows which knob edits which value.

## Pickup

A knob does nothing until it reaches the page's current value. It has to pass that value, or come within a small window of it, so nothing jumps. Changing the page drops every pickup, and the knobs must pick up again.

## What the knobs edit

| Page | Knobs 1 to 8 |
|---|---|
| Track > Params | Root, scale, channel, reset bars |
| Track > Feel | Swing, groove, humanize timing, humanize velocity |
| Track > Playback | Direction, launch quantize |
| Track > Voices | Echo, echo time, echo decay, voices, partner |
| Track > Evolution | Evolve every, evolve action, evolve amount, accumulate range |
| Track > Rules, Rack | None |
| Beats > Length | Length |
| Beats > Beats | Beats, evenness, beats B |
| Beats > Accent | Accents, accent strength |
| Beats > Steps, Repeat, Conditions, Drum map | None |
| Keys > Velocity | Velocity of steps 1 to 8 |
| Keys > Gate | Gate of steps 1 to 8 |
| Keys > Harmony | Global key, chord follow, follow transpose, harmonizer 1, harmonizer 2 |
| Keys > Voice | Inversion, spread, voice leading, arp octaves, arp seed, arp over progression |
| Keys > Notes, Type, Voicing, Source | None |
| CC 1 to CC 4 | Steps 1 to 8 of the lane. A moved step switches on. |
| Global > LFO | Shape, rate, depth and phase of the selected LFO |
| PERF | Knob 1 sets the density master |

On/off settings take the lower half of the knob as off and the upper half as on.

## Gotchas

- Knob moves on Keys > Velocity, Keys > Gate and the CC lane pages mark the steps they change as hand edits.
- Changing the page drops all pickups.

## CT track follow

Global > LFO option 25 (pad 25) turns CT track follow on. When it is on, a track-select message from the CT selects the matching TrackJammer track. Track 1 to 8 on the CT are assumed to map to TrackJammer tracks 1 to 8 in the same order. Off by default.

{% include hardware-unverified.html text="CT track follow has not been checked on hardware. The track order is an assumption." %}

For recording knob moves into a CC lane, see [Curves and motion]({% link cc/curves-and-motion.md %}).
