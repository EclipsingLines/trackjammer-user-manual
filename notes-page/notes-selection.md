---
layout: default
title: Notes Selection
parent: Notes Page
nav_order: 1
---

# Note Selection

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_empty,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

{% include step-toggle-info.html %}

In this subpage you can edit the individual notes to be played on a step as well as the step type.

The **value area** displays a single octave keyboard.

The **first** button of the value area **Top row** shifts the octave down.
The **last** button of the value area **Top row** shifts the octave up.

Bright yellow pads are the notes that are **part** of the current scale.

Pale yellow pads are notes that are **not part** of the current scale.

Bright orange pads indicate active notes.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

The **extra area** displays 4 different selectable step types.

## Step Types

### Monophonic

Monophonic steps only play a single note, the

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_1,save_slots" show_top=true page=2 subpage=-1 %}

### Arpeggiated

Arpeggiated steps play a short sequence of several notes from the step notes in quick succession.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_2,save_slots" show_top=true page=2 subpage=-1 %}

### Chord

Chord steps play all the step notes at the same time.

Not all sound sources support playing more than one sound at a type. Check with your device's manufacturer if it supports polyphony.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_3,save_slots" show_top=true page=2 subpage=-1 %}

Spreading the notes across different MIDI channels for "paraphony" like some sound sources do is NOT currently supported.

### Strummed Chord

A strummed chord is a Chord where all the initial notes are played with a slight delay simulating the strumming of an instrument.

Not all sound sources support playing more than one sound at a type. Check with your device's manufacturer if it supports polyphony.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,keyboard_prhy_notes,extra_row_note_type_4,save_slots" show_top=true page=2 subpage=-1 %}

## Next Steps

Once you have modified a few steps you might want to try to:

- **[Edit Track Parameters →](../track-settings/index.html)** - Change track wide parameters like root note, track scale or speed.
- **[Edit the Intensity of a Step →](../notes-page/notes-selection.html)** - Change the velocity of the step
- **[Edit the Duration of a Step →](../notes-page/notes-selection.html)** - Change the gate of a step
