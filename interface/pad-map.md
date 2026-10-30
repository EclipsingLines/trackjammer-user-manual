---
layout: default
title: "Pad map"
parent: "Interface"
nav_order: 1
description: "Every pad of the Launchpad Mini MK3 and what it does in the new layout."
---

# Pad map

The Launchpad Mini MK3 is an 8 by 8 grid of pads, with a top row of control pads and a right column of track pads. Every pad has a number. Pad numbers are counted from the bottom left (11) to the top right (88) of the grid.

{% include launchpad-grid.html top="newnav" right="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" numbers="true" alt="Launchpad Mini MK3 pad layout with pad numbers: the top control row, the right track column, the step area, the value area, the options row and the scene row." caption="The pad numbers used throughout this manual." %}

## Top row

| Pad | Name | Use with nothing held |
|---|---|---|
| 91 | UP | Previous EDIT sub-mode |
| 92 | DOWN | Next EDIT sub-mode |
| 93 | LEFT | Previous page of the current sub-mode (previous Global page in Global) |
| 94 | RIGHT | Next page of the current sub-mode (next Global page in Global) |
| 95 | SHIFT | Modifier. SHIFT + track mutes the track |
| 96 | EDIT | Editing. Hold for the page picker |
| 97 | PERF | Performance grid. Hold for FILL |
| 98 | SESS | Clip launcher. SHIFT + SESS opens Global |

Pad 99, the corner, is not a control.

## Track column

Tracks 1 to 8 are pads 89, 79, 69, 59, 49, 39, 29 and 19, from top to bottom. A tap selects the track. In SESS the same pads are the scenes.

## Main grid

| Area | Pads | Use |
|---|---|---|
| Step area | 81-88, 71-78, 61-68, 51-58 | 32 steps. On parameter pages, the step pads pick a setting |
| Value area | 41-48, 31-38 | 16 values for the selected setting or step |
| Page options | 21-25 | Options of the current page. Pad 25 is LOOP (held) on pages that allow locks |
| Held options | 26 LOCK, 27 DUP, 28 CLR | Modifier pads you hold while you tap another pad |
| Scene row | 11-18 | Scenes 1 to 8. A tap recalls the scene at once |

Each grid pad is numbered as 10 times (8 minus its row) plus its column, counting the top row as row 0 and the left column as column 1. So the top row is 81 to 88 and the bottom row is 11 to 18.

In SESS, and on Global > Projects, the whole 8 by 8 grid is one screen.

{% include tip.html text="The app window has a guide panel that lists the colours and the held-pad combinations for the current page. It can be hidden with Global option 68." %}
