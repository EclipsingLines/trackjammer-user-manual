---
layout: default
title: "Feel"
parent: "Track"
nav_order: 2
description: "Swing, groove templates and humanize."
---

# Feel

Feel moves notes a little around the grid and changes their strength. Swing and groove push notes late in a repeating pattern. Humanize adds small random changes to timing and velocity.

Open it from Params with RIGHT, or hold EDIT and tap pad 42 in the picker.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:Swng:Swing;87=purple:3:Grv:Groove;88=purple:3:Grv:Groove;75=purple:3:HumT:Humanize timing;76=purple:3:HumT:Humanize timing;63=purple:3:HumV:Humanize velocity;64=purple:3:HumV:Humanize velocity" hint="1@82,2@43" alt="Launchpad Track Feel page: swing on step pad 82, groove on 87 and 88, humanize on the lower step pads" caption="Tap Swing (1), then value pad 43 (2) to set swing 54." %}

## Settings

| Setting | Step pad | Default | Values |
|---|---|---|---|
| Swing | 82 | 50 (straight) | 50 to 75 |
| Groove | 87 or 88 | Global | Global, or one of nine templates |
| Humanize timing | 75 or 76 | 0 (off) | 0 to 6 ticks |
| Humanize velocity | 63 or 64 | 0 (off) | 0 to 40 |

## Swing

Swing delays every second step by part of the step length. 50 is straight, 66 is close to a triplet feel and 75 is a hard shuffle.

Value pads: 41 = 50, 42 = 52, 43 = 54, 44 = 56, 45 = 58, 46 = 60, 47 = 62, 48 = 64, 31 = 66, 32 = 68, 33 = 70, 34 = 71, 35 = 72, 36 = 73, 37 = 74, 38 = 75.

The track's swing adds to the global swing (Global > Settings, option 11, step pad 64): effective swing = 50 + (track - 50) + (global - 50), kept between 50 and 75.

## Groove

A groove is a repeating timing and velocity pattern that runs across the steps, added on top of swing. It is written for a 6-tick step and scales with the track's speed.

Value pads: 41 = Global (use the global groove), 42 = Straight, 43 = MPC 54, 44 = MPC 58, 45 = MPC 62, 46 = MPC 66, 47 = Laid back, 48 = Rushed hats, 31 = 12/8 shuffle, 32 = Drunk.

The global groove is set on Global > Settings, option 12, step pad 66. Tracks left on Global use it.

## Humanize

Humanize timing (step pad 75 or 76) gives each note a random delay of up to the chosen number of ticks. Value pads 41 to 47 are 0 to 6 ticks. Pads 48 and 31 to 38 do nothing.

Humanize velocity (step pad 63 or 64) gives each note a random change of plus or minus the chosen amount. Value pads: 41 = 0, 42 = 3, 43 = 5, 44 = 8, 45 = 11, 46 = 13, 47 = 16, 48 = 19, 31 = 21, 32 = 24, 33 = 27, 34 = 29, 35 = 32, 36 = 35, 37 = 37, 38 = 40.

The random change is not stored in the pattern. A note is never moved before its own step position, so on straight steps humanize only ever makes notes later.

## See also

- [Playback]({% link track/playback.md %}) for the play direction and loop.
- [Global settings]({% link global/settings.md %}) for the global swing and groove.
