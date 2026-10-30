---
layout: default
title: "Repeat"
parent: "Beats"
nav_order: 5
description: "Ratchets and step repeats."
---

# Repeat

Repeat puts extra hits inside one step, so a single step plays a short roll: several notes in the time of one step. In the old manual this page was called Substeps.

Hold EDIT and tap pad 45 in the picker, or press RIGHT from Accent.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="steps_4_floor_select,steps_4_floor,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="21=yellow:3:Even:Repeats spread evenly;22=yellow:1:Accl:Repeats packed to the start;23=yellow:1:Decl:Repeats packed to the end;24=yellow:1:Str:Cycle the repeat strength" hint="1@85,2@22" alt="Launchpad Beats Repeat page: step 5 is selected; options 21 to 24 pick the repeat pace and strength" caption="Select step 5 (1), then choose Accel for repeats packed toward the start (2)." %}

## Select a step first

Repeat works on the selected step only. Press and hold a step to select it. With no step selected, the value pads and options do nothing.

## Repeat hits (value row)

Each value pad switches one repeat hit on the selected step on or off. A lit pad is a hit. The pads run from left to right through the step's timeline. A step has 8 repeat slots by default.

## Pace and strength (options)

| Pad | Option | What it does |
|---|---|---|
| 21 | Even | Hits are spread evenly across the step. This is the default. |
| 22 | Accel | Hits start close together at the beginning of the step and spread out towards its end. |
| 23 | Decel | Hits start spread out and bunch up towards the end of the step. |
| 24 | Strength | Cycles the pace strength 2, 3, 1, 2 and so on. A higher number bends the spacing more. The number shows after the pace name, for example Accel 2. It has no effect on Even. |

{% include hardware-unverified.html text="The spacing of Accel and Decel is worked out from the app code and has not been checked by ear on hardware." %}

## Gotchas

- This is a lockable page: hold LOOP and tap to set a loop here, as on Steps.

## See also

- [Steps]({% link beats/steps.md %}) for the step and its chance.
- [Accent]({% link beats/accent.md %}) for the Repeat accent type, which adds repeats to accented steps.
