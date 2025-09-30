---
layout: default
title: Pattern Mutations
parent: Pattern Page
nav_order: 3
---

# Pattern Mutations

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_1,save_slots" show_value_area=6 show_top=true page=1 subpage=2 %}

{% include generative_action_warning.html %}

On this subpage, you can use procedural tools to modify, or "mutate," the current **Pattern**.

{: .note-title}
> Note
> Mutations will **not** add or remove active **Steps** from the **Pattern**; they only modify existing ones.

### Mutation Amount & Intensity

- **Mutation Amount**: Tapping a pad on the **Step Area** sets the number of **Steps** that will be mutated. The first pad is 0 (no mutation), and the last pad (corresponding to the **Pattern Length**) will attempt to mutate all active **Steps**.
- **Mutation Intensity**: Tapping on the **Value Area** sets the intensity of the mutation, from minimal (first pad of the 5th row) to full (last pad of the 6th row).

### Mutation Targets

Tapping an option in the **Extra Area** selects which **Parameters** of the **Steps** will be affected.

### Mutation Complement

The 6th pad in the **Extra Area** activates the mutation complement.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_5_complement,save_slots" show_value_area=6 show_top=true page=1 subpage=2 %}

When mutation complement if **OFF** (red pad, default behaviour) the mutation algorythm witll try to mutate the **strong beats** of the sequence more than the **weak beats**.

When mutation complement if **ON** (green pad) the mutation algorythm witll try to mutate the **weak beats** of the sequence more than the **strong beats**.

## Mutation Types

### Velocity Mutation

Changes the [**Velocity**](../notes-page/notes-velocity.html) of the mutated **Step** and its **Substeps**.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_1,save_slots" show_value_area=7 show_top=true page=1 subpage=2 %}

### Gate Mutation

Changes the [**Gate**](../notes-page/notes-gate.html) (note duration) of the mutated **Step** and its **Substeps**.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_2,save_slots" show_value_area=6 show_top=true page=1 subpage=2 %}

### Step Repeat

Adds [**Substeps**](pattern-substeps.html) to the mutated **Steps**, creating rolls or flams.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_3,save_slots" show_value_area=7 show_top=true page=1 subpage=2 %}

### Step Timing

Offsets the mutated **Step** forwards or backwards in the sequence.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_4,save_slots" show_value_area=7 show_top=true page=1 subpage=2 %}

### Note Change

Triggers a note change based on the melodic algorithm and the currently active **Track** scale.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_mutations_5,save_slots" show_value_area=7 show_top=true page=1 subpage=2 %}

{: .note-title}
> Current Active Scale
> The current scale is calculated from the [**Track Root**](../track-settings/track-setting-root.html) and the selected [**Track Scale**](../track-settings/track-setting-scale.html).

## Next Steps

After programmatically modifying your sequence, you can:

- **[Add Substeps](pattern-substeps.html)**: Create rolls, flams, and offset hits for accents and groove.
- **[Change Step Chance](pattern-chance.html)**: Use the **Step** chance tools to further evolve your sequence.
- **[Edit Step Notes](../notes-page/index.html)**: Take full control of your sequence and shape it to your liking.
