---
layout: default
title: Basic Operation
parent: Getting Started
nav_order: 3
---

# Basic Operation

Master the essential controls and workflow of the {{ site.product_name }}. This guide covers the fundamental operations you'll use in every session, from playback control to pattern editing.

![Basic Controls Interface](docs/img/basic-controls-interface.jpg)
*The essential controls for daily sequencer operation*

## Transport Controls

The transport section controls playback and timing for the entire sequencer. These controls work identically whether you're using the software interface or a connected Launchpad.

### Play/Pause

- **Software**: Click the Play button in the transport bar
- **Launchpad**: Press the dedicated Play pad (typically green when stopped, red when playing)
- **Function**: Starts or pauses playback of all active tracks simultaneously

When you press Play, all tracks begin from their current positions and maintain sync with each other. The sequencer's internal clock ensures perfect timing regardless of pattern lengths or speed settings.

### Stop

- **Software**: Click the Stop button (square icon)
- **Launchpad**: Press the Stop pad
- **Function**: Immediately stops all playback and resets all tracks to position zero

Stop is different from Pause - it returns everything to the beginning, ready for a fresh start.

### Reset

- **Software**: Click the Reset button (circular arrow)
- **Launchpad**: Hold Shift + Stop (varies by Launchpad model)
- **Function**: Returns all tracks to step 1 without stopping playback

Reset is useful for syncing up tracks that have gotten out of phase or starting a new section while maintaining the groove.

## Track Selection

The sequencer provides seven independent tracks, each with its own pattern, scale, and MIDI settings. Understanding track selection is crucial for efficient workflow.

![Track Selection Interface](docs/img/track-selection.jpg)
*Track selection showing active track highlighted and track states*

### Switching Tracks

- **Software**: Click any of the seven track buttons on the left side
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

- **Software**: Click any step in the pattern grid to toggle it on/off
- **Launchpad**: Press any pad in the main 8x8 grid to toggle that step
- **Visual Feedback**: Active steps appear brighter/colored, inactive steps are dim

![Step Editing](docs/img/step-editing-example.jpg)
*Before and after example of adding steps to create a new pattern*

### Pattern Length

You can change how many steps the pattern uses:

- **Default**: 16 steps (covers 4 beats in 4/4 time)
- **Range**: 1-32 steps
- **Software**: Adjust the "Length" parameter in the right panel
- **Launchpad**: Use the parameter editing pads

When you change pattern length, the sequencer automatically adjusts the loop point. Existing steps beyond the new length are preserved but won't play until you extend the length again.

## Essential Parameters

Three parameters form the core of every pattern and should be understood before diving deeper into the sequencer.

### Beats Parameter

Controls how many beats (active steps) the Euclidean algorithm places in the pattern:

- **Range**: 0 to current pattern length
- **Effect**: More beats = denser rhythm, fewer beats = sparser rhythm
- **Real-time**: Changes take effect immediately, even during playback

### Length Parameter  

Sets the total number of steps in the pattern:

- **Range**: 1-32 steps
- **Common Values**: 16 (4/4 time), 12 (3/4 time), 8 (half-time feel)
- **Relationship**: Beats are distributed across this length using the Euclidean algorithm

### Speed Multiplier

Controls how fast this track plays relative to the master tempo:

- **1x**: Normal speed (default)
- **2x**: Double speed (twice as fast)
- **1/2x**: Half speed
- **Other Values**: 1/4x, 4x, and other musical divisions

![Parameter Editing](docs/img/parameter-editing.jpg)
*Parameter editing interface showing beats, length, and speed controls*

## Basic Workflow

Here's a typical workflow for creating your first pattern from scratch:

### 1. Select a Track

Choose which of the seven tracks you want to work with. Start with Track 1 if you're just beginning.

### 2. Set the Foundation

- **Length**: Start with 16 steps for a standard 4/4 pattern
- **Beats**: Try 4 beats for a basic house rhythm
- **Speed**: Leave at 1x for normal timing

### 3. Listen and Adjust

- Press Play to hear the generated pattern
- Adjust the Beats parameter to find a rhythm you like
- Try different Length values to create different feels

### 4. Fine-tune Individual Steps

- Toggle specific steps on/off to customize the pattern
- Add or remove beats to create fills or breaks
- Experiment with different combinations

### 5. Set Musical Parameters

- Choose a scale that fits your track
- Set the root note (key) for your composition
- Assign the MIDI channel for your target synthesizer

## Keyboard Shortcuts

Essential keyboard shortcuts for efficient operation:

- **Spacebar**: Play/Pause
- **S**: Stop
- **R**: Reset
- **1-7**: Select tracks 1-7
- **Delete**: Clear selected track
- **Escape**: Return to main view

## Next Steps

Now that you understand basic operation:

1. **[Set up MIDI routing →](../midi-setup.html)** - Connect your synthesizers and configure MIDI
2. **[Learn the Launchpad interface →](../launchpad/pad-layout.html)** - Master hardware control
3. **[Explore Euclidean rhythms →](../euclidean/introduction.html)** - Understand the mathematical foundation

The basic operations covered here form the foundation for all advanced features. Once these feel natural, you'll be ready to explore the sequencer's more sophisticated capabilities like generative algorithms, automation, and advanced pattern editing.

---

*Ready to connect your MIDI gear? Continue to [MIDI Setup →](../midi-setup.html)*
