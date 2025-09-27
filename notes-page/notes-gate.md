---
layout: default
title: Note Gate
parent: Notes Page
nav_order: 3
---

# Step Gate

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select_beats,empty_row,empty_row,empty_row,empty_row,extra_row_note_type_2,save_slots" show_value_area=7 show_top=true page=2 subpage=1 %}

{% include step-selection-only-info.html %}

## What is Gate?

**Gate** refers to the duration of a note played by a **Step**. Modifying this value will shorten or extend a single note, which is useful for creating everything from short, staccato notes to long, sustained pads.

## How to Control the Gate

To change the **Gate** of a **Step**:

1. **Select the Step**: Long-press the **Step** you want to edit.
2. **Adjust the Value**: Use the **Value Area** on the **Launchpad** to adjust the **Gate** duration.

Generated **Steps** have a default **Gate** of 64 (half the **Step** duration), but this can be modified by [**Pattern Mutations**](../pattern-page/pattern-mutations.html). The actual **Gate** duration in seconds is relative to the **Track** speed.

## Next Steps

After adjusting the **Gate** of a **Step**, you might want to:

- **[Edit Track Parameters](../track-settings/index.html)**: Change **Track**-wide parameters like the root note, scale, or speed.
- **[Edit Step Velocity](notes-velocity.html)**: Change the intensity of the **Step**.
- **[Learn about Timing Calculations](../advanced/timing.html)**: Understand how the **Gate** duration is calculated in seconds.
