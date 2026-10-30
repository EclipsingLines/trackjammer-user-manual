---
layout: default
title: "Curves and motion"
parent: "CC"
nav_order: 2
description: "Draw curves and record knob movements into lanes."
---

# Curves and motion

There are two ways to fill a lane without setting every step by hand. The curve editor writes a generated shape across the lane. Motion recording writes the moves of a CT knob into the lane while the transport plays.

{% include hardware-unverified.html text="The curve editor and motion recording have not been tried on hardware. Motion recording only writes when a lane's channel and CC number match the knob that moves." %}

## Curve editor

Option 22 on EDIT > CC > Settings opens the curve editor for the lane that page has picked. Option 22 again goes back. Leaving the page closes the editor. Every change applies at once.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="cc" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,slots_row" row1="yellow:1,yellow:1,yellow:1,yellow:2,yellow:2,yellow:2,yellow:3,yellow:3" row5="orange:3:None:Shape none (default),cyan:1:Lin:Linear shape,cyan:1:Exp:Exponential shape,cyan:1:Log:Logarithmic shape,cyan:1:S:S-curve shape,cyan:1:Tri:Triangle shape,cyan:1:Sine:Sine shape,cyan:1:Walk:Random walk shape" pads="21=red:1:REC:Motion recording arm;22=cyan:1:Back:Back to the lane settings;23=cyan:1:Go:Apply the curve again;24=cyan:1:Seed:New seed for the random walk;25=cyan:3:SE:Switch the bottom value row between start and end" hint="1@42,2@38" alt="Launchpad curve editor: a yellow ramp on the step area, shape pads on the top value row, options 21 to 25 on the options row" caption="Tap a shape on the top value row (1). Then set the start or end level on the bottom value row (2)." %}

The step area previews the curve as yellow levels. Grey steps are locked or hand edited. Dim steps are outside the loop.

| Option | Pad | What it does |
|---|---|---|
| REC | 21 | Arms motion recording |
| Back | 22 | Returns to the lane settings |
| Go | 23 | Applies the curve again. With CLEAR held, removes the curve and the steps it wrote. |
| Seed | 24 | New seed for the random walk |
| SE | 25 | Switches the bottom value row between start and end |

Shapes on pads 41 to 48: none, linear, exponential, logarithmic, S-curve, triangle, sine, random walk.

The bottom value row (pads 31 to 38) gives eight levels from 0 up to the lane's maximum, 127 or 16383 on an NRPN lane. Option 25 chooses whether those levels set the start or the end. Set both. Defaults are shape none, start 0 and end 127.

{% include warning.html text="Setting the shape to none removes the steps the curve wrote. Locked and hand-edited steps keep their values." %}

## Gotchas

- Regenerating the lane (Euclidean or linear) clears its hand edits, including the steps a curve wrote.
- Random walk gives a different result for each seed. Option 24 re-rolls it.
- Curve settings and lane steps are saved with the lane and are part of the track's pattern.

## Motion recording

Arm motion recording in any of three places:

- PERF pad 88, a toggle when nothing is held. Dim red is off, red is armed, and it blinks white during a pass.
- EDIT > CC > Settings, option 21.
- EDIT > CC > CC 1 to CC 4 pages, option 25.

{% include launchpad-perf.html density=3 hint="1@97,2@88" alt="Launchpad PERF grid: pad 88 at the end of the first FX row arms motion recording" caption="Tap PERF (1), then tap pad 88 to arm motion recording (2)." %}

While the arm is on and the transport runs, an incoming CC that matches an enabled lane (same channel and CC number) writes that value at the lane's current step.

- One value per step. The last move wins.
- The step is switched on and marked as edited, so a later curve keeps it.
- There is no mapping table. A lane records only the knob moves whose channel and CC number match the lane. For example, a lane on channel 1 with CC 80 records the knob that sends CC 80 on channel 1.
- A pass runs from the first recorded value until you disarm or the transport stops. Each pass is one undo step named Motion rec. Undo is refused while a pass is open.
- Disarming in the middle of a pass commits it. Stopping the transport ends the pass but leaves the arm on.
- The arm is not saved with the project.

Motion recording is separate from [knob control]({% link modulation/knob-control.md %}). Knob control changes the values of the current page. Motion recording writes into the CC lanes.
