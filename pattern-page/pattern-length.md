---
layout: default
title: Pattern Length
parent: Pattern Page
nav_order: 1
---

# Pattern Length

{% include launchpad-grid.html presets="empty_row_step,empty_row_step_last_5,empty_row,empty_row" show_top=true page=1 subpage=0 %}

{% include generative_action_warning.html %}

On this subpage, you can control the length of the currently selected **Track**'s **Pattern**. Adjusting this value will **IMMEDIATELY** regenerate the sequence.

Here’s what happens:

1. The current **Track** **Pattern** is cleared.
2. The **Pattern Length** is adjusted by adding or removing empty, inactive **Steps**.
3. If the [**Keep Ratio**](../track-settings/track-setting-keep-ratio.html) **Track** **Parameter** is on, the **Beats Amount** will be adjusted proportionally. Otherwise, it will remain the same.
4. The generative algorithm places new active **Steps** based on the new **Pattern Length**, the **Beats Amount**, and the current [**Mutation**](pattern-mutations.html) settings.
5. This process is repeated for each of the MIDI control **Sub-tracks** on the current **Track**.
6. The timing algorithm calculates a new playhead position based on the new **Pattern Length** and **Track** Speed.
7. The sequence continues playing from the new position with the new **Pattern**.

{% include launchpad-grid.html presets="empty_row_step,empty_row_step_last_8,empty_row,empty_row" show_top=true page=1 subpage=0 %}

{: .note-title}
> A Note on Keep Ratio
>
> The [**Keep Ratio**](../track-settings/track-setting-keep-ratio.html) setting determines how the number of beats is adapted when you change the **Pattern Length**.
>
> - With **Keep Ratio ON**, adjusting a 16-**Step** **Pattern** with 4 beats to 32 **Steps** will result in a 32-**Step** **Pattern** with 8 beats, preserving the rhythmic feel.
> - With **Keep Ratio OFF**, the same change would result in a 32-**Step** **Pattern** with 4 beats, halving the rhythm's effective speed.

## Next Steps

After setting the **Pattern Length**, you can:

- **[Generate Steps Algorithmically](pattern-beats.html)**: Use the procedural algorithm to generate a melody or rhythm **Pattern**.
- **[Edit Steps Manually](../notes-page/index.html)**: Take full control of your sequence and shape it to your liking.
- **[Learn about Keep Ratio](../track-settings/track-setting-keep-ratio.html)**: Understand how the **Beats Amount** is recalculated.
- **[Learn about Timing Calculations](../advanced/timing.html)**: Understand how the playhead position is recalculated.
