---
layout: default
title: Pattern Beats
parent: Pattern Page
nav_order: 2
---
# Pattern Beats

{% include launchpad-grid.html presets="empty_row_step,empty_row_step,empty_row,empty_row" show_top=true page=1 subpage=1 %}

{% include generative_action_warning.html %}

On this subpage, you can control the number of automatically generated **Steps** for the selected **Track**. Adjusting this value will **IMMEDIATELY** regenerate the **Pattern**.

Here’s what happens:

1. The current **Track** **Pattern** is cleared.
2. The generative algorithm places new active **Steps** based on the [**Pattern Length**](pattern-length.html), the new **Beats Amount**, and the current [**Mutation**](pattern-mutations.html) settings.
3. The sequence continues playing from its new position using the new **Pattern**.

{% include launchpad-grid.html presets="steps_4_floor_select_beats,steps_4_floor,empty_row,empty_row" show_top=true page=1 subpage=1 %}

## Next Steps

After setting the **Beats Amount**, you can:

- **[Apply Mutations](pattern-mutations.html)**: Use the procedural algorithm to mutate and evolve your **Pattern**.
- **[Add Substeps](pattern-substeps.html)**: Create rolls, flams, and offset hits for accents and groove.
- **[Change Step Chance](pattern-chance.html)**: Use the **Step** chance tools to further evolve your sequence.
- **[Learn about Euclidean Sequences](../advanced/scales-modes.html)**: Understand how **TrackJammer** generates rhythmic **Patterns**.
