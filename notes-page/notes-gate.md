---
layout: default
title: Note Gate
parent: Notes Page
nav_order: 3
---

# Step Gate

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_note_type_2,save_slots" show_value_area=7 show_top=true page=2 subpage=1 %}

{% include step-selection-only-info.html %}

## Gate

Gate refers to the step note duration, modifying this value will shorten or extend a single note.

Gate is useful for creatting sttacato notes and long pads.

## Control

To change the gate of a note, just select the note and adjust its value in the value area.

Generated steps have a default gate of 64 (half) but this value can be modified by the [Pattern Mutations](../pattern-page/pattern-mutations.md).

Actual gate duration in seconds is relative to the track speed.

## Next Steps

Once you have changed the duration of a step you could also:

- **[Edit Track Parameters →](../track-settings/index.html)** - Change track wide parameters like root note, track scale or speed.
- **[Edit the Intensity of a Step →](../notes-page/notes-selection.html)** - Change the velocity of the step
- **[Learn about **Timing Calculations** →](../advance/timing.html)** - Undertand how the **Gate Duration Seconds** is calculated
