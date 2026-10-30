---
layout: default
title: "LFO"
parent: "Global"
nav_order: 6
description: "The eight LFOs."
---

# LFO

The LFO page sets up the eight project LFOs: their shape, rate, depth, phase and polarity. The LFOs do nothing to the sound until the Mod Matrix routes them to a parameter. Routing is done on the companion [Matrix panel]({% link modulation/lfos-and-matrix.md %}).

{% include launchpad-grid.html top="newnav" top_lit="global" row1="cyan:2:L1:LFO 1,cyan:2:L2:LFO 2,cyan:2:L3:LFO 3,cyan:2:L4:LFO 4,cyan:2:L5:LFO 5,cyan:2:L6:LFO 6,cyan:2:L7:LFO 7,cyan:3:L8:LFO 8 (selected)" row2="gray:2:Shp:Shape (value pads 41-47),gray:2:Rte:Rate,gray:2:Dep:Depth,gray:2:Pha:Phase,gray:2:Knb:Knob channel,gray:0::,gray:0::,gray:0::" row7="gray:2:Uni:Unipolar or bipolar (option 21),gray:2:Rtg:Retrigger on transport start (option 22),gray:2:Seed:New random seed (option 23),gray:2:Knb:Knob control on or off (option 24),gray:2:CT:CT track follow on or off (option 25),gray:0::,gray:0::,gray:0::" hint="1@81,2@71" alt="Launchpad Global LFO page: eight LFO pads on the top row, the setting pads below them, and the LFO options on the options row" caption="Tap an LFO (1), then pick the setting to edit (2). The value pads set it." %}

## Choosing an LFO and a setting

- Step pads 81-88 select LFO 1-8. The selected LFO blinks white. Each LFO pad brightness shows that LFO's current value, so a bipolar LFO goes dark, bright, dark as it swings.
- Step pads 71-75 pick what the value pads edit: Shape, Rate, Depth, Phase, and Knob channel.

## Values

| Setting | Value pads | Choices |
|---|---|---|
| Shape | 41-47 | Sine, triangle, saw up, saw down, square, sample and hold, smooth random |
| Rate | 41-48, 31-35 | 13 rates, slowest first: 16 bars, 8, 4, 2, 1 bar, 1/2, 1/2 triplet, 1/4, 1/4 triplet, 1/8, 1/8 triplet, 1/16, 1/16 triplet |
| Depth | 41-48, 31-38 | 16 steps from 0 to 100 |
| Phase | 41-48, 31-38 | 16 steps from 0 to 337.5 degrees, in 22.5 degree steps |
| Knob channel | 41-48, 31-38 | MIDI channel 1-16 for the CT knobs. Tapping the channel already set returns it to the device preset (channel 3 on the Circuit Tracks) |

## Options (selected LFO)

| Pad | Option | Default | What it does |
|---|---|---|---|
| 21 | Unipolar or bipolar | Bipolar | Unipolar runs 0 to 1, bipolar runs -1 to 1 |
| 22 | Retrigger | On | Restarts the LFO on transport start |
| 23 | New seed | Seed = LFO number | Gives sample and hold and smooth random a new sequence. Applies to those two shapes only |
| 24 | Knob control | Off | Lets the CT knobs edit the current page. A Global setting, shown here too. See [Knob control]({% link modulation/knob-control.md %}) |
| 25 | CT track follow | Off | Lets the Circuit Tracks track-select message change the TrackJammer track. A Global setting, shown here too |

All LFOs start as sine, with a rate of one bar, depth 100, phase 0, bipolar and retrigger on.

{% include hardware-unverified.html text="CT track follow (option 25) reads the Circuit Tracks track-select message. Whether its track index matches TrackJammer's order has not been checked on hardware." %}

## Notes

- LFO edits are not in undo. Edits made in the Matrix panel are not undoable either.
- The Matrix panel edits the same LFOs, and a change in either place shows in the other.
- Knob control and motion recording are described in [Knob control]({% link modulation/knob-control.md %}).
