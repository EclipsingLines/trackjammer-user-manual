---
layout: default
title: Pattern Length
parent: Pattern Page
nav_order: 1
---

# Pattern Length

{% include launchpad-grid.html presets="empty_row_step,empty_row_step_last_5,empty_row,empty_row" show_top=true page=1 subpage=0 %}

{% include generative_action_warning.html %}

In this subpage you can control the length of the currently selected track, adjusting this value will **IMMEDIATELY** change the sequence and several things will happen very quickly:

- The current Track Pattern Steps will clear.
- The current Pattern Length will be adjusted by adding or removing empty inactive steps.
- If the track parameter **Keep Ratio** is ON then the Beats Amount will be adjusted. If its OFF it will remain the same.
- The generative algorythm will place new active steps according to the new Pattern Length, the Beats Amount and the current Mutation settings.
- Same for each of the MIDI control subtracks on the current Track
- The timing algorythm will calculate the new playhead position based on the Pattern Length and Track Speed
- The sequence will continue playing on the current track, from the new position using the new steps.

{% include launchpad-grid.html presets="empty_row_step,empty_row_step_last_8,empty_row,empty_row" show_top=true page=1 subpage=0 %}

{: .note-title}
> Keep Ratio
>
> Depending on the current **Keep Ratio** track setting the sequence will try to adapt the number of beats to try to keep the current rhythm when adjusting the sequence or will keep the number of beats intact.
> Adjusting a 4 on the floor 16 step sequence (16 Length - 4 Beats) to a 32 step with **Keep Ratio ON** will create a 32 step sequence with 8 beats, keeping the 4 on the floor feeling.
> Adjusting a 4 on the floor 16 step sequence (16 Length - 4 Beats) to a 32 step with **Keep Ratio OFF** will create a 32 step sequence with 4 beats, halving the rhythms speed.

## Next Steps

Once you've set up the Pattern Length you can now:

- **[Generate Steps Algortyhmically →](pattern-beats.html)** - Use the procedural algorythm to generate a melody or rythm pattern
- **[Edit Steps manually →](../launchpad/)** - Take full control of your sequence and shape it to your liking
- **[Learn about **Keep Ratio** →](../track-settings/keep-ratio.html)** - Undertand how **Beats Amount** is recalculated
- **[Learn about **Timing Calculations** →](../advance/timing.html)** - Undertand how the **Playhead Position** is recalculated
