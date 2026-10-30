---
layout: default
title: "Length"
parent: "Beats"
nav_order: 2
description: "Pattern length and cycle length."
---

# Length

Length sets how many steps are in one cycle of the selected track, from 1 to 32. The track loops through them and then starts again.

Hold EDIT and tap pad 42 in the picker, or press RIGHT or LEFT from Steps to reach this page.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="21=green:3:Keep:Keep ratio on or off;81=purple:3:1:Length 1 step;58=purple:3:32:Length 32 steps" hint="1@21" alt="Launchpad Beats Length page: pad 21 toggles keep ratio; the step area sets the length, from pad 81 for one step to pad 58 for 32" caption="Pad 21 (1) switches Keep ratio on or off." %}

## Set the length

Tap a step in the step area. The pad you tap becomes the last step of the cycle: pad 81 is 1 step and pad 58 is 32 steps. Steps are counted left to right, top row first.

Changing the length regenerates the generated beats for the new length. The beat count stays, or changes in proportion if Keep ratio is on.

{% include warning.html text="Changing the length regenerates the generated beats. Hand edits and locked steps are kept only while Global > Settings, option 7 ('Edits survive regen') is on, which is the default. Use SHIFT + CLEAR to undo a length change." %}

## Keep ratio

Keep ratio decides what happens to the beat count when the length changes.

| Keep ratio | Example: 16 steps with 4 beats, changed to 32 steps |
|---|---|
| On | 32 steps with 8 beats. The rhythm keeps its feel. |
| Off | 32 steps with 4 beats. The same beats are spread over twice the time. |

Keep ratio is pad 21 on this page, and the same switch is on [Params]({% link track/params.md %}) (step pad 74).

## See also

- [Beat count]({% link beats/beats.md %}) for the number of beats.
- [Speed on Params]({% link track/params.md %}) for how fast the cycle runs.
- [Held pads and undo]({% link interface/held-pads-and-undo.md %}) for undo.
