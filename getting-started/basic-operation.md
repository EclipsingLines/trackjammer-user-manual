---
layout: default
title: Basic Operation
parent: Getting Started
nav_order: 5
---

# Basic Operation

Master the essential controls and workflow of the {{ site.product_name }}. This guide covers the fundamental operations you'll use in every session, from session management to pattern editing.

![Basic Controls Interface](docs/img/basic-controls-interface.jpg)
*The essential controls for daily sequencer operation*

## Transport Controls

The current version of {{ site.product_name }} does not provide transport controls or clock signals of any kind.

These come from the controlled device, for the purposes of this guide: the Novation Circuit Tracks.

## Track Selection

The sequencer provides seven independent tracks, each with its own pattern, scale, and MIDI settings. Understanding track selection is crucial for efficient workflow.

![Track Selection Interface](docs/img/track-selection.jpg)
*Track selection showing active track highlighted and track states*

### Switching Tracks

- **Launchpad**: Press the corresponding track pad on the right edge of the grid
- **Visual Feedback**: The selected track is highlighted in a different color

When you select a track, the entire interface updates to show that track's settings:

- Pattern grid displays the track's steps
- Parameter panel shows track-specific values
- Scale and key settings reflect the track's musical configuration

### Track States

Each track can be in one of several states:

- **Active**: Track is playing and contributing to the output
- **Muted**: Track is running but not sending MIDI data
- **Solo**: Only this track is audible (mutes all others)
- **Selected**: Track is currently being edited (highlighted interface)

## Pattern Editing Basics

Every track contains a pattern made up of individual steps. Understanding how to edit these patterns is fundamental to using the sequencer effectively.

### Understanding Steps

A pattern consists of up to 32 steps, though the default is 16. Each step can be:

- **Active**: Will trigger a note when the sequencer reaches this position
- **Inactive**: Will be skipped during playback
- **Current**: The step currently being played (moves automatically during playback)

### Adding and Removing Steps

- **Launchpad**: Press any pad in the main 8x8 grid to toggle that step, long pressing a pad selects that step
- **Visual Feedback**: Active steps appear brighter/colored, inactive steps are dim, selected steps blink

![Step Editing](docs/img/step-editing-example.jpg)
*Before and after example of adding steps to create a new pattern*

### Pattern Length

You can change how many steps the pattern uses:

- **Default**: 16 steps (covers 4 beats in 4/4 time)
- **Range**: 1-32 steps
- **Launchpad**: While on the **Pattern Length** subpage tap on the **Step Area** to adjust the pattern legnth.

When you change pattern length, the sequencer automatically adjusts the loop point.

{: .note-title}
> Keep Ratio
> Depending on the current **Keep Ratio** track setting the sequence will try to adapt the number of beats to try to keep the current rhythm when adjusting the sequence or will keep the number of beats intact.
> Adjusting a 4 on the floor 16 step sequence (16 Length - 4 Beats) to a 32 step with **Keep Ratio ON** will create a 32 step sequence with 8 beats, keeping the 4 on the floor feeling.
> Adjusting a 4 on the floor 16 step sequence (16 Length - 4 Beats) to a 32 step with **Keep Ratio OFF** will create a 32 step sequence with 4 beats, halving the rhythms speed.

{: .warning }
> Generative Action!
> This action regenerates the track pattern using the new parameter values.
> There's no undo in the current version.
> Quick Save your sequence if you found something you might want to hear again before performing any **Generative Action**

### Beats Parameter

Controls how many beats (active steps) the Euclidean algorithm places in the pattern:

- **Range**: 0 to current pattern length
- **Effect**: More beats = denser rhythm, fewer beats = sparser rhythm

{: .warning }
> Generative Action!
> This action regenerates the track pattern using the new parameter values.
> There's no undo in the current version.
> Quick Save your sequence if you found something you might want to hear again before performing any **Generative Action**

## Next Steps

Now that you understand basic operation:

1. **[Set up MIDI routing →](../midi-setup.html)** - Connect your synthesizers and configure MIDI
2. **[Learn the Launchpad interface →](../launchpad/pad-layout.html)** - Master hardware control
3. **[Explore Euclidean rhythms →](../euclidean/introduction.html)** - Understand the mathematical foundation

The basic operations covered here form the foundation for all advanced features. Once these feel natural, you'll be ready to explore the sequencer's more sophisticated capabilities like generative algorithms, automation, and advanced pattern editing.

---

*Ready to connect your MIDI gear? Continue to [MIDI Setup →](../midi-setup.html)*
