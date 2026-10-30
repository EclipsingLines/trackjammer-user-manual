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

{% include launchpad-grid.html top="newnav" top_lit="global" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="81=gray:3:LFO1:Selected LFO 1 (blinks);82=magenta:1:LFO2:LFO 2 (brightness shows its value);71=orange:3:Shp:Shape is the setting the value pads edit;41=orange:3:Sine:Sine shape (selected);21=red:1:Pol:Polarity. Green is unipolar, red is bipolar (default);22=green:3:Rtg:Retrigger on transport start (on by default)" hint="1@81,2@71,3@41" alt="Launchpad Global LFO page: LFO 1 selected, the shape setting picked, sine shape selected" caption="Tap LFO 1 (1), then Shape (2). The value pads set the shape (3)." %}

- Step pads 81 to 88 select LFO 1 to 8. The selected LFO blinks. The brightness of each pad shows its current value, so you can see the LFOs move. A bipolar LFO swings from dark to bright and back.
- Step pads 71 to 75 choose what the value pads edit: Shape, Rate, Depth, Phase, or Knob channel.

| Setting | Value pads |
|---|---|
| Shape | 41 to 47: sine, triangle, saw up, saw down, square, sample and hold, smooth random |
| Rate | 41 to 48 and 31 to 35: 16 bars, 8, 4, 2, 1 bar, 1/2, 1/2T, 1/4, 1/4T, 1/8, 1/8T, 1/16, 1/16T |
| Depth | 41 to 48 and 31 to 38: 0 to 100 in 16 steps |
| Phase | 41 to 48 and 31 to 38: 0 to 337 degrees in steps of about 22.5 |
| Knob channel | 41 to 48 and 31 to 38: MIDI channel 1 to 16 |

Options on the options row:

| Option | Pad | What it does |
|---|---|---|
| 21 | 21 | Unipolar (green) or bipolar (red) for the selected LFO |
| 22 | 22 | Retrigger on transport start, on (green) or off (red), for the selected LFO |
| 23 | 23 | New random seed. Works only on sample and hold and smooth random |
| 24 | 24 | Knob control on or off. A Global setting, not per LFO. See [Knob control]({% link modulation/knob-control.md %}) |
| 25 | 25 | CT track follow on or off. A Global setting, not per LFO |

Defaults: all LFOs are sine, rate 1 bar, depth 100, phase 0, bipolar, with retrigger on. Knob control and CT track follow are off. The knob channel uses the device preset (3 on Circuit Tracks) until you pick one.

The LFOs follow the clock. One bar is 96 clock ticks, so the phase does not drift. With retrigger on, the LFO restarts at the start of the bar count when the transport starts. With retrigger off it keeps running across restarts.

## Mod matrix: the Matrix panel

The matrix is not on the pads. Open it with the Matrix button in the header of the Godot window, next to Arranger. The panel is hidden until you open it. It only updates its live meters while it is open, but the slots keep working while it is hidden. The same panel also edits the eight LFOs and shows the CT knob map. See [Companion window]({% link companion/index.md %}) for the panel layout.

Sources:

- LFO 1 to 8.
- CC in: the last value received for a MIDI channel (1 to 16) and a CC number (0 to 127), scaled 0 to 1. Any CC from the Circuit input port works, including the CT knob CCs. New CC slots start on CC 74 (usually the filter cutoff) of channel 1.
- Step ramp: 0 to 1 across the track's pattern length.
- Step random: a seeded value from -1 to 1 for each step. "New each cycle" re-rolls it on every cycle.
- Step velocity: the step's velocity, 0 to 1.

Destinations:

- Play-time parameters: swing, humanize timing, humanize velocity, density depth, echo repeats and echo decay.
- Rhythm parameters, marked "(cycle)": beats, rotation, evenness, the second generator's beats and rotation, accent beats and syncopation. These change only when the track's loop wraps. Hand edits and locks are kept.
- Velocity (1 to 127) and gate (1 to 126), per step as it plays. A step with velocity or gate 0 (a rest) stays at 0.
- A CC lane (one of the four lanes), 0 to 127 or 0 to 16383 for an NRPN lane.

Each slot has a track (one track T1 to T8, or All), a kind (Param, Velocity, Gate or CC lane), a target, and an amount from -100 to +100 percent of the destination's range. Several slots on one destination add up. The result is clamped to the parameter's range. The base value is never written.

How to use the panel:

1. Pick a source on an empty row. This creates the slot with All tracks, Swing, and an amount of +50.
2. Set the track, kind, target and amount.
3. Choose "-" in the source list to clear the slot. Use Clear on a slot, or Clear all slots at the bottom.

## Gotchas

- LFO and matrix edits are not in undo. The panel's status line says so.
- Matrix providers run only while a slot needs them. An empty matrix costs nothing.
- Rhythm slots act only on the cycle wrap.
- The LFO and matrix settings are saved with the project. The panel's visibility is not.
