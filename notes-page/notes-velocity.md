---
layout: default
title: Note Velocity
parent: Notes Page
nav_order: 2
---

# Step Velocity

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_note_type_2,save_slots" show_value_area=7 show_top=true page=2 subpage=0 %}

{% include step-selection-only-info.html %}

## Velocity

Velocity is the intensity value for playing a MIDI note, sound sources that react to velocity very commonly have this value control the **volume** of the generated sound.

In order to use Velocity with your output device make sure that it can recieve velocity data, check with your device's manufacturer.

## Control

To change the velocity of a note, just select the note and adjust its value in the value area.

Generated steps have a default velocity of 64 (half) but this value can be modified by the [Pattern Mutations](../pattern-page/pattern-mutations.md).

## Next Steps

Once you have changed the velocity of a step you could move to:

- **[Edit Track Parameters →](../track-settings/index.html)** - Change track wide parameters like root note, track scale or speed.
- **[Edit the Duration of a Step →](../notes-page/notes-selection.html)** - Change the gate of a step.
