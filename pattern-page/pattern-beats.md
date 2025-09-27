---
layout: default
title: Pattern Beats
parent: Pattern Page
nav_order: 2
---
# Pattern Beats Amount

{% include launchpad-grid.html presets="empty_row_step,empty_row_step,empty_row,empty_row" show_top=true page=1 subpage=1 %}

{% include generative_action_warning.html %}

In this subpage you can control the amount of automatically generated steps for the selected track, adjusting this value will **IMMEDIATELY** change the sequence and several things will happen very quickly:

- The current Track Pattern Steps will clear.
- The generative algorythm will place new active steps according to the [Pattern Length](pattern-length.html), the Beats Amount and the current [Mutation](pattern-mutations.html) settings.
- The sequence will continue playing on the current track, from the new position using the new steps.

{% include launchpad-grid.html presets="steps_4_floor_select,steps_4_floor,empty_row,empty_row" %}

## Next Steps

Once you've set up the Beats Amount you can now:

- **[Apply Steps Mutations →](pattern-mutations.html)** - Use the procedural algorythm to mutate and evolve your pattern
- **[Add substeps to Active Steps →](pattern-substeps.html)** - Create rolls, flams and offset hits for accents and groove
- **[Change Step Chance →](pattern-chance.html)** - Use the step play chance tools to further evolve your sequence
- **[Learn about **Euclidean Sequences** →](../advance/euclidean.html)** - Undertand how the **Playhead Position** is recalculated
