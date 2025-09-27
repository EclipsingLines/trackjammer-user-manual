---
layout: default
title: Pattern Mutations
parent: Pattern Page
nav_order: 3
---

# Pattern Mutations

{% include launchpad-grid.html presets="empty_row_step,empty_row_step_last_8,empty_row,empty_row" %}

{% include generative_action_warning.html %}

{: .note-title}
> Note
>
> Mutations will **NOT** add or remove active steps to the pattern.

In this subpage you can control use the procedural tools to modify the current sequence.

Tapping a pad on the Step Area will set the Mutation amount:

- The first pad of the step area means 0. No Steps will be mutated. This is the default value.
- The last pad of the sequence (same as the current [Pattern Length](pattern-length.html)) means Full and will try to mutate all active steps.

Tapping on the Value Area will set the Mutation Intensity:

- The first pad of the 5th row means 0. Minimal Mutation will be aplied to the mutated steps.
- The last pad of the 6th row means full intensity and will apply the full range of mutation for the selected values.

Tapping on one of the options in the Extra Area will select what Mutation Targets to affect on the mutated steps. Currently available Mutations:

- Velocity
- Gate
- Step Repeat
- Step Timing
- Note Change

Depending on the selected mutations, several things can happen at the same time.

- The generative algorythm will calculate new weight tables for the current sequence based on the mutation settings.
- Each step of the sequence will be adjusted according to the weight table and the selected **Mutation Targets**

{% include launchpad-grid.html presets="steps_4_floor_select,steps_4_floor,empty_row,empty_row" %}

## Velocity Mutation

Changes the [Velocity](../notes-page/notes-velocity.html) of the mutated step and it's subteps.

## Gate Mutation

Changes the [Note press duration](../notes-page/notes-gate.md) of the mutated step and it's subteps.

## Step Repeat

Add [Substeps](pattern-substeps.html) to the mutated steps.

## Step Timing

Offsets the mutated step forwards or backwards in the sequence.
NOT WORKING IN THE CURRENT VERSION

## Note Change

Triggers a note change according to the melodic algorythm from the available notes in the current active track scale.

{: .note-title}
> Current Active Scale
>
> The current is calculated from the [Track Root](../track-settings/root-note.html) and the selected [Track Scale](../track-settings/track-scale.html)

## Panned Future Mutations

The release version will also support pitch bend and aftertouch mutations.

## Next Steps

Once you've programatically modified your sequence you can:

- **[Add substeps to Active Steps →](pattern-substeps.html)** - Create rolls, flams and offset hits for accents and groove
- **[Change Step Chance →](pattern-chance.html)** - Use the step play chance tools to further evolve your sequence
- **[Edit Step Notes →](../notes-page/index.md)** - Take full control of your sequence and shape it to your liking
