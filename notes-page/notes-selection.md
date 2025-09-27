---
layout: default
title: Notes Selection
parent: Notes Page
nav_order: 1
---

# Note Selection

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_empty,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

{% include step-toggle-info.html %}

On this subpage, you can edit the individual notes played by a **Step** and change the **Step Type**.

The **Value Area** displays a single-octave keyboard.

- The **first button** of the **Value Area's** top row shifts the octave down.
- The **last button** of the **Value Area's** top row shifts the octave up.

The colors of the pads indicate their status:

- **Bright Yellow**: Notes that are part of the current scale.
- **Pale Yellow**: Notes that are not part of the current scale.
- **Bright Orange**: Active notes.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

The **Extra Area** displays four selectable **Step Types**.

## Step Types

### Monophonic

A monophonic **Step** plays a single note.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_1,save_slots" show_top=true page=2 subpage=-1 %}

### Arpeggiated

An arpeggiated **Step** plays a short sequence of notes in quick succession.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

### Chord

A chord **Step** plays all of its assigned notes at the same time. Note that not all sound sources support polyphony.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_3,save_slots" show_top=true page=2 subpage=-1 %}

### Strummed Chord

A strummed chord is a chord where each note is played with a slight delay, simulating the strum of an instrument. This also requires a polyphonic sound source.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_4,save_slots" show_top=true page=2 subpage=-1 %}

## Next Steps

After modifying a few **Steps**, you might want to:

- **[Edit Track Parameters](../track-settings/index.html)**: Change **Track**-wide parameters like the root note, scale, or speed.
- **[Edit Step Velocity](notes-velocity.html)**: Change the intensity of the **Step**.
- **[Edit Step Gate](notes-gate.html)**: Adjust the duration of the **Step**.
