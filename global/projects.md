---
layout: default
title: "Projects"
parent: "Global"
nav_order: 5
description: "Save, load, copy and delete projects."
---

# Projects

The Projects page is the save and load grid for whole projects. It replaces the old SESS project grid. Each track has its own bank of 64 project slots, and the whole main grid shows that bank.

{% include launchpad-grid.html top="newnav" top_lit="global" presets="steps_empty,steps_empty,steps_empty,steps_empty,steps_empty,steps_empty,steps_empty,steps_empty" hint="1@95,2@81" alt="Launchpad Global Projects page: the main grid as 64 project slots of the selected track" caption="Hold SHIFT (1), then tap a slot to save the current project there (2)." %}

## Using it

| Gesture | Result |
|---|---|
| Track pad | Selects the bank (track 1 to 8). Each track has 64 slots, 512 in all |
| Tap a slot | Selects it. Tap it again to deselect |
| SHIFT + tap a slot | Saves the current project into that slot |
| UP | Loads the selected project. An empty slot resets everything. The screen then goes to EDIT > Beats > Beats |
| DOWN | Toggles copy mode. The next slot you tap receives a copy of the selected project. A refused target keeps copy mode on |
| SHIFT + LEFT | Deletes the selected project and leaves copy mode |
| LEFT, RIGHT | Page through the Global pages |

UP, DOWN and SHIFT + LEFT only act when a project is selected.

{% include warning.html text="SHIFT + LEFT deletes the selected project file. Copy it first with DOWN if you want to keep it." %}

## Notes

- Projects are `.tjam` files in the sessions folder next to the program. The current format is 1.1. Older 1.0 projects load their quick slots as scenes. See [Migration]({% link migration.md %}).
- Pads 25-28 are plain slots here, so 27 and 28 are not DUP and CLEAR, and undo is off.
- CLEAR + SESS still resets everything, see [Session]({% link session/index.md %}).
