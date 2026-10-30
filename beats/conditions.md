---
layout: default
title: "Conditions"
parent: "Beats"
nav_order: 6
description: "Trig conditions: fill, first, neighbour and more."
---

# Conditions

A trig condition lets a step fire only in some situations: while a fill is held, on the first cycle after start, or when a neighbouring track is playing.

Hold EDIT and tap pad 46 in the picker, or press RIGHT from Repeat.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="steps_4_floor_select,steps_4_floor,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" row5="gray:2:NONE:No condition,orange:3:FILL:Fill,red:3:!FIL:Not fill,blue:3:1ST:First cycle,purple:3:!1ST:Not first cycle,green:3:NBR:Neighbour played,pink:3:!NBR:Neighbour not played,off:::" hint="1@85,2@42" alt="Launchpad Beats Conditions page: step 5 is selected; the value row shows the seven conditions, each in its own colour" caption="Select step 5 (1), then tap FILL on the value row (2)." %}

## Select a step first

Conditions work on the selected step. Press and hold a step to select it, then tap a condition. With no step selected, the value pads do nothing.

## Conditions

| Pad | Condition | The step fires when |
|---|---|---|
| 41 | None | Always (the default) |
| 42 | Fill | A fill is held. Hold PERF (97) to fill while you play. |
| 43 | Not fill | No fill is held |
| 44 | First | It is the first cycle since the transport started, the track was reset, or a pattern was loaded |
| 45 | Not first | It is any other cycle |
| 46 | Neighbour played | The previous track fired its last step. Track 1 looks at track 8. |
| 47 | Neighbour not played | The previous track did not fire its last step |

The condition colours are the same on the value row and on the steps that have one: none is grey, fill is orange, not fill is red, first is blue, not first is purple, neighbour played is green and neighbour not played is pink.

## Gotchas

- A step must pass its chance and its condition. A condition does not replace the chance; both apply.
- This is a lockable page: LOOP works here as on Steps.

## See also

- [Steps]({% link beats/steps.md %}) for chance.
- [Performance]({% link perform/index.md %}) for the held fill and the other PERF controls.
