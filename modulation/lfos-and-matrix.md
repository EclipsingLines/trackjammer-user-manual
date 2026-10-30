---
layout: default
title: "LFOs and matrix"
parent: "Modulation"
nav_order: 2
description: "Routing LFOs and other sources to parameters."
---

# LFOs and matrix

The project has eight LFOs. You set their shape and speed on the Global > LFO page. The mod matrix has 16 slots that route a source (an LFO, a CC, or a step value) to a destination. An LFO does nothing to the sound until a matrix slot uses it.

{% include hardware-unverified.html text="The LFO and matrix features have not been checked on hardware. Confirm the result on the sound before relying on it." %}

## LFOs: Global > LFO

Open it with SHIFT + SESS (Global), then RIGHT five times from Global Settings. See [Global LFO]({% link global/lfo.md %}) for the full page.

{% include launchpad-grid.html top="newnav" top_lit="global" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="81=white:3:LFO1:Selected LFO 1 (blinks white);82=magenta:1:LFO2:LFO 2 (brightness shows its value);71=orange:3:Shp:Shape is the setting the value pads edit;41=orange:3:Sine:Sine shape (selected);21=purple:2:Pol:Unipolar or bipolar;22=green:3:Rtg:Retrigger on transport start" hint="1@81,2@71,3@41" alt="Launchpad Global LFO page: LFO 1 selected, the shape setting picked, sine shape selected" caption="Tap LFO 1 (1), then Shape (2). The value pads set the shape (3)." %}

- Step pads 81 to 88 select LFO 1 to 8. The selected LFO blinks white. Brightness shows its current value. A bipolar LFO runs dark, bright, dark.
- Step pads 71 to 75 choose what the value pads edit: Shape, Rate, Depth, Phase, or Knob channel.

| Setting | Value pads |
|---|---|
| Shape | 41 to 47: sine, triangle, saw up, saw down, square, sample and hold, smooth random |
| Rate | 41 to 48 and 31 to 35: 16 bars, 8, 4, 2, 1 bar, 1/2, 1/2T, 1/4, 1/4T, 1/8, 1/8T, 1/16, 1/16T |
| Depth | 41 to 48 and 31 to 38: 0 to 100 in 16 steps |
| Phase | 41 to 48 and 31 to 38: 0 to 337.5 degrees in steps of 22.5 |
| Knob channel | 41 to 48 and 31 to 38: MIDI channel 1 to 16 |

Options on the options row:

| Option | Pad | What it does |
|---|---|---|
| 21 | 21 | Unipolar or bipolar (selected LFO) |
| 22 | 22 | Retrigger on transport start, on or off (selected LFO) |
| 23 | 23 | New random seed (sample and hold, smooth random) |
| 24 | 24 | Knob control on or off. The Global setting `knob_control` |
| 25 | 25 | CT track follow on or off. The Global setting `ct_track_follow` |

Defaults: all LFOs are sine, rate 1 bar, depth 100, phase 0, bipolar, with retrigger on. Knob control and CT track follow are off. Knob channel 0 uses the device preset (3 on Circuit Tracks).

The LFOs follow the clock. One bar is 96 clock ticks, so the phase does not drift. Retrigger on restarts the LFO with the bar counter when the transport starts.

## Mod matrix: the Matrix panel

The matrix is not on the pads. Open it with the Matrix button in the header of the Godot window, next to Arranger. It is hidden until you open it, and it does not run while hidden. See [Companion window]({% link companion/index.md %}) for the panel layout.

Sources:

- LFO 1 to 8.
- CC in: the last value of a MIDI channel (1 to 16) and a CC number (0 to 127), scaled 0 to 1. Any CC works, including the CT knob CCs.
- Step ramp: 0 to 1 across the track's pattern length.
- Step random: a seeded value from -1 to 1 for each step. "New each cycle" re-rolls it on every cycle.
- Step velocity: the step's velocity, 0 to 1.

Destinations:

- Play-time parameters: swing, humanize timing, humanize velocity, density depth, echo repeats and echo decay.
- Rhythm parameters, marked "(cycle)": beats, rotation, evenness, the second generator's beats and rotation, accent beats and syncopation. These change only when the track's loop wraps. Hand edits and locks are kept.
- Velocity (1 to 127) and gate (1 to 126). Rests stay at 0.
- A CC lane (one of the four lanes), 0 to 127 or 0 to 16383 for an NRPN lane.

Each slot has a track (one track, or All), a kind, a target, and an amount from -100 to +100 percent of the destination's range. Several slots on one destination add up. The result is clamped to the parameter's range. The base value is never written.

How to use the panel:

1. Pick a source on an empty row. This creates the slot with All tracks, Swing, and an amount of +50.
2. Set the track, kind, target and amount.
3. Choose "-" in the source list to clear the slot. Use Clear on a slot, or Clear all slots at the bottom.

## Gotchas

- LFO and matrix edits are not in undo. The panel's status line says so.
- Matrix providers run only while a slot needs them. An empty matrix costs nothing.
- Rhythm slots act only on the cycle wrap.
- The LFO and matrix settings are saved with the project. The panel's visibility is not.
