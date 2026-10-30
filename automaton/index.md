---
layout: default
title: "Automaton"
nav_order: 11
description: "The cellular automaton view."
---

# Automaton

The automaton view turns the main grid into a cellular automaton. On each step, the live cells in the playhead column trigger their tracks. It is a view, not a mode. While it is open, the whole main grid is the automaton.

{% include hardware-unverified.html text="The automaton has not been tried on hardware. The NOTES row mode, where each row sends a chord, comes from the spec and was not traced in the code." %}

## Open and leave

Hold SHIFT and tap EDIT.

{% include launchpad-top-newnav.html lit="shift,edit" hint="1@95,2@96" alt="Launchpad top row: SHIFT then EDIT pressed" caption="Hold SHIFT (1), then tap EDIT (2). EDIT is bright while the automaton is on and dim when it is off." %}

- EDIT (pad 96) shows whether the automaton is on. Bright is on, dim is off.
- Tap EDIT, PERF or SESS, or press SHIFT + EDIT again, to leave the view. Choosing a mode or a page also closes it.
- Opening it from PERF, SESS or Global switches to EDIT first.
- While it is open, the hold-EDIT picker is not available, and the sticky pads and the undo gesture are off. Pads 27 and 28 are grid cells here, not DUP and CLEAR.

## The grid

Each pad of the main grid (pads 11 to 88) is one cell. Tap a cell to toggle it.

{% include launchpad-grid.html top="newnav" top_lit="edit" rows=8 right="none" hint="1@81,2@11" alt="Launchpad main grid used as the automaton: the top row is track 1 and the bottom row is track 8" caption="Tap a cell to toggle it (1). In TRACKS rows, the top row is track 1 and the bottom row is track 8 (2)." %}

Two row modes:

| Mode | Rows | Use |
|---|---|---|
| TRACKS (default) | Top row is track 1, bottom row is track 8 | Each live cell in a row triggers that track |
| NOTES | Each row is a scale degree of the selected notes track, lowest at the bottom | Each row plays a note of that track's scale |

The playhead column moves one column per step and wraps every eight steps. It is lit while the automaton is on.

## Arrows

| Pad | With nothing held | With SHIFT |
|---|---|---|
| UP (91) | Randomize, with a new seed and about 35 percent alive | Turn the automaton on or off |
| DOWN (92) | Clear the grid | Switch rows between TRACKS and NOTES |
| LEFT (93) | Next rule: Conway, HighLife, Seeds, Wolfram 1-D | Previous rule |
| RIGHT (94) | Next rate: 1, 2, 4, 8 or 16 steps | Previous rate |

{% include launchpad-top-newnav.html lit="up,down,left,right" hint="1@91,2@93" alt="Launchpad top row: the four arrows, UP and LEFT" caption="UP (1) randomizes the grid. LEFT (2) picks the next rule." %}

The Wolfram 1-D rule is always rule 30. Its number cannot be changed on the pads.

## Output

- On each step, the live cells in the playhead column trigger their tracks through the track's normal output. The notes use the track's channel, velocity and gate.
- The automaton runs only while the view is open and the automaton is on. Closing the view stops it.

## Gotchas

- Tap cells only while the view is open. Leaving the view stops the output.
- Undo and the sticky pads do not work in this view. Use SHIFT + CLEAR outside the view to undo. See [Held pads and undo]({% link interface/held-pads-and-undo.md %}).
