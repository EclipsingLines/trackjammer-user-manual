---
layout: default
title: "Accent"
parent: "Beats"
nav_order: 4
description: "Accent patterns and accent behaviour."
---

# Accent

Accent picks which of the track's beats are accented and what the accent does to them. The accent can make a note louder, change its gate, add repeats, move it in time, or change the note itself.

Hold EDIT and tap pad 44 in the picker, or press RIGHT from Beat count.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="steps_4_floor,steps_4_floor,empty_row,empty_row,empty_row,empty_row,options_row,slots_row" pads="21=yellow:3:Vel:Accent changes velocity;22=yellow:1:Gate:Accent changes gate;23=yellow:1:Rpt:Accent adds repeats;24=yellow:1:Time:Accent moves timing;25=yellow:1:Note:Accent changes the note" hint="1@21" alt="Launchpad Beats Accent page: the step area sets how many steps are accented, and options 21 to 25 pick the accent type" caption="Tap Vel (1) to make accents change velocity." %}

## How it works

- The step area sets how many beats are accented. Tap the pad for the number you want (pad 81 is 1). It cannot be more than the beat count. To set it back to 0, hold CLEAR and tap an arrow pad while you are on this page.
- The value area sets the strength of the accent, from pad 41 (weakest) to pad 38 (strongest). The default is about the middle of the row.
- Options 21 to 25 pick what the accent does.

## Accent types

| Pad | Type | Accented steps change |
|---|---|---|
| 21 | Velocity | Their velocity |
| 22 | Gate | Their gate, the length of the note |
| 23 | Repeat | They gain repeats; see [Repeat]({% link beats/repeat.md %}) |
| 24 | Timing | They move forwards or backwards in time |
| 25 | Note change | Their note, using the track's scale and root |

The selected type is lit. The default type is Note change, which uses the scale and root set on [Params]({% link track/params.md %}).

## Accent complement

Accent complement is on [Params]({% link track/params.md %}), step pad 65. It reverses which steps the accent type favours.

## See also

- [Beat count]({% link beats/beats.md %}) for the beats that can be accented.
- [Evolution]({% link track/evolution.md %}) for actions that change the track every N cycles.
