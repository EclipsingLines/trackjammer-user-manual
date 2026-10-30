---
layout: default
title: "Steps"
parent: "Beats"
nav_order: 1
description: "Switch steps on and off, select and lock them."
---

# Steps

Steps is the first Beats page and the one you land on after the Beats sub-mode. The step area shows the steps of the cycle. Tap a step to turn it on or off. Press and hold a step to select it, then the value row sets its chance.

Hold EDIT and tap pad 41 in the picker, or go there with the arrows from Beats.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="steps_4_floor_select,steps_4_floor,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" row5="cyan:3:12.5:Chance 12.5 percent,cyan:3:25:Chance 25 percent,cyan:3:33:Chance 33 percent,cyan:3:50:Chance 50 percent,cyan:1:66:Chance 66 percent,cyan:1:75:Chance 75 percent,cyan:1:87.5:Chance 87.5 percent,cyan:1:95:Chance 95 percent" row6="yellow:2:Last:Last or not last,off:::,off:::,yellow:2:Cyc:Cycle pattern,yellow:2:Len:Cycle length,off:::,off:::,green:3:95%:Chance on or off" hint="1@85,2@44" alt="Launchpad Beats Steps page: step 5 is selected; the top value row shows chance levels with 50 percent lit, and the bottom value row holds the chance type pads" caption="Select step 5 (1), then tap 50 on the value row (2) to give it a 50 percent chance." %}

## Turn steps on and off

Tap a step. The step area reads left to right, top row first: pad 81 is step 1 and pad 58 is step 32. Steps beyond the length of the track are dark.

Playing steps are drawn bright, and the playhead runs through them in the same order.

## Select a step

Press and hold a step to select it. The selected step is drawn grey. Chance and the other value pads act on the selected step.

## Chance

Chance sets how often a step fires. A step with no chance set always fires. Each value pad below sets a different kind of chance.

| Chance type | Set with | What it does |
|---|---|---|
| Probability | Top value row, 41 to 48 | The step fires on a random roll. The levels are 41 is 12.5 percent, 42 is 25, 43 is 33, 44 is 50, 45 is 66, 46 is 75, 47 is 87.5 and 48 is 95. The lit pads show the level. |
| Last or not last | Pad 31 | The step fires only if the previous step fired (Last), or only if it did not (Not last). Tap pad 31 again to swap. |
| Cycles | Pad 34 for the pattern, pad 35 for the length | The step fires only on the cycles marked in its pattern. Pad 34 shows the pattern on the top row; tap a pad to switch that cycle on or off. Pad 35 sets the pattern length on the top row, from 1 to 8 cycles. |

Pad 38 turns the probability chance on at 95 percent, or back off.

A step fires only when its chance and its trig condition (see [Conditions]({% link beats/conditions.md %})) both allow it.

## Lock and clear

- Hold LOCK (26) and tap a step to lock it, or to unlock it. A locked step keeps its values when the pattern is regenerated.
- Hold CLEAR (28) and tap a step to reset that one step, including its edits and its lock.
- Hold LOOP (25) and tap two steps to set a loop. See [Playback]({% link track/playback.md %}).

{% include warning.html text="A hand edit locks the whole step automatically while Global > Settings, option 7 ('Edits survive regen') is on. A locked step leaves the Euclidean beat spread, so other generated beats can move when the pattern is regenerated." title="Hand edits lock steps" %}

## See also

- [Length]({% link beats/length.md %}) and [Beat count]({% link beats/beats.md %}) for the generated steps.
- [Repeat]({% link beats/repeat.md %}) for repeats inside a step.
- On a drum rack track this page shows four lanes instead; see [Rules and rack]({% link track/rules-and-rack.md %}).
