---
layout: default
title: "Drum map"
parent: "Beats"
nav_order: 7
description: "Generate rhythm rows from a two-dimensional drum map"
---

# Drum map

The drum map generates a rhythm from a small two-dimensional map. Two faders choose a point on the map, and a density pad sets how full the rhythm is. A normal track plays one map row (kick, snare, hat or percussion); a drum rack track plays one row per lane. Moving the point changes the rhythm without rewriting it by hand.

Hold EDIT and tap pad 47 in the picker, or press RIGHT from Conditions.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="empty_row,empty_row,empty_row,empty_row,empty_row,empty_row,options_row,slots_row" row1="cyan:3:X1:X position 1,cyan:3:X2:X position 2,cyan:3:X3:X position 3,cyan:3:X4:X position 4,cyan:1:X5:X position 5,cyan:1:X6:X position 6,cyan:1:X7:X position 7,cyan:1:X8:X position 8" row2="yellow:3:Y1:Y position 1,yellow:3:Y2:Y position 2,yellow:3:Y3:Y position 3,yellow:1:Y4:Y position 4,yellow:1:Y5:Y position 5,yellow:1:Y6:Y position 6,yellow:1:Y7:Y position 7,yellow:1:Y8:Y position 8" pads="21=green:3:On:Map on or off;22=orange:3:Kick:Kick row;23=orange:2:Snr:Snare row;24=orange:2:Hat:Hat row;25=orange:2:Perc:Percussion row" hint="1@84,2@73,3@21" alt="Launchpad Beats Drum map page: the top step row is the X fader and the second row the Y fader; option 21 switches the map on or off and options 22 to 25 choose the row" caption="Set X (1) and Y (2) on the step rows, then turn the map on with option 21 (3)." %}

## The map

- Step rows 81 to 88 are the X fader, from position 1 to 8. Each tap moves the X position.
- Step rows 71 to 78 are the Y fader, from position 1 to 8. Each tap moves the Y position.
- The value row sets the density of the chosen row, in 16 steps: 41 is 0 percent, then 7, 13, 20, 27, 33, 40 and 47 up to pad 48; 31 is 53, then 60, 67, 73, 80, 87 and 93, and pad 38 is 100 percent.

The lower step rows show a preview of the first 16 steps of the result. They do not change anything.

## Options

| Pad | Option | What it does |
|---|---|---|
| 21 | On or off | Turns the map on (green) or off (red). |
| 22 | Kick | The track plays the kick row. |
| 23 | Snare | The track plays the snare row. |
| 24 | Hat | The track plays the hat row. |
| 25 | Percussion | The track plays the percussion row. |

On a drum rack track, options 22 to 25 pick the rack lane instead of a drum row.

## What it writes

The drum map rewrites only the generated steps. Steps you edit by hand and locked steps stay as they are, as they do on [Length]({% link beats/length.md %}).

## See also

- [Rules and rack]({% link track/rules-and-rack.md %}) for the drum rack lanes.
- [Steps]({% link beats/steps.md %}) for editing steps by hand.
