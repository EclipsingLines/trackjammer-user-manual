---
layout: default
title: Basic Operation
parent: Getting Started
nav_order: 5
---

# Basic Operation

This guide covers the fundamental controls and workflow of **TrackJammer**, from managing your **Session** to editing a **Pattern**.

![Basic Controls Interface](docs/img/basic-controls-interface.jpg)
*The essential controls for daily operation.*

## Transport Controls

The current version of **TrackJammer** does not provide its own transport controls or clock signals. Instead, it relies on the connected **MIDI Device**. For the purposes of this guide, we will assume this is a Novation Circuit Tracks.

- **Press Play, Continue, or Stop** on your output device to start or stop the sequence.
- **Change the tempo** on your output device to speed up or slow down your sequence.

## Track Selection

**TrackJammer** provides seven independent **Tracks**, each with its own **Pattern**, scale, and MIDI settings.

![Track Selection Interface](docs/img/track-selection.jpg)
***Track** selection, showing the active **Track** highlighted and various **Track** states.*

### Switching Tracks

- **On the Launchpad**: Press the corresponding **Track** pad on the right edge of the **Grid**.
- **Visual Feedback**: The selected **Track** is highlighted in a different color.

When you select a **Track**, the entire interface updates to show that **Track's** settings, including its **Pattern**, **Parameters**, and musical configuration.

### Track States

Each **Track** can be in one of several states:

- **Active**: The **Track** is playing and sending MIDI data.
- **Muted**: The **Track** is running but not sending MIDI data.
- **Solo**: Only this **Track** is audible.
- **Selected**: The **Track** is currently being edited.

## Pattern Editing Basics

Every **Track** contains a **Pattern** made up of individual **Steps**.

### Understanding Steps

A **Pattern** consists of up to 32 **Steps** (the default is 16). Each **Step** can be:

- **Active**: Triggers a note when the sequencer reaches this position.
- **Inactive**: Skipped during playback.
- **Current**: The **Step** currently being played.

### Adding and Removing Steps

- **On the Launchpad**: Press any pad in the main 8x8 **Grid** to toggle that **Step**. A long press on a pad selects that **Step**.
- **Visual Feedback**: Active **Steps** are brightly colored, inactive **Steps** are dim, and selected **Steps** blink.

![Step Editing](docs/img/step-editing-example.jpg)
*An example of adding **Steps** to create a new **Pattern**.*

### Pattern Length

You can change the number of **Steps** in a **Pattern**:

- **Default**: 16 **Steps** (four beats in 4/4 time).
- **Range**: 1-32 **Steps**.
- **On the Launchpad**: While on the **Pattern Length** subpage, tap on the **Step** area to adjust the **Pattern** length.

When you change the **Pattern** length, the sequencer automatically adjusts the loop point.

{: .note-title}
> Keep Ratio
> Depending on the current **Keep Ratio** **Track** setting, the sequence will either adapt the number of beats to maintain the current rhythm or keep the number of beats intact.
> For example, adjusting a 16-**Step** "four on the floor" **Pattern** (16 Length, 4 Beats) to 32 **Steps** with **Keep Ratio ON** will create a 32-**Step** sequence with 8 beats, preserving the feel. With **Keep Ratio OFF**, it will create a 32-**Step** sequence with 4 beats, halving the rhythm's speed.

{: .generative }
> Generative Action!
> This action regenerates the **Track** **Pattern** using the new **Parameter** values. There is no undo in the current version. Be sure to save your sequence if you create something you want to keep before performing a **Generative Action**.

### Beats Parameter

This controls how many beats (active **Steps**) the Euclidean algorithm places in the **Pattern**.

- **Range**: 0 to the current **Pattern** length.
- **Effect**: More beats create a denser rhythm; fewer beats create a sparser one.

## Next Steps

Now that you understand the basic operations:

1. **[Set up MIDI routing](../midi-setup.html)** to connect your synthesizers.
2. **[Learn the Launchpad interface](../launchpad/pad-layout.html)** to master hardware control.
3. **[Explore Euclidean rhythms](../euclidean/introduction.html)** to understand the mathematical foundation.

These basic operations are the foundation for all of **TrackJammer's** advanced features. Once you are comfortable with them, you will be ready to explore more sophisticated capabilities.

---

*Ready to connect your MIDI gear? Continue to the [**MIDI Setup** guide](../midi-setup.html).*
