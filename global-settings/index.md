---
layout: default
title: Global Settings Page
nav_order: 5
has_children: true
permalink: /global-settings/
---

# Global Settings

{% include launchpad-grid.html presets="null,null,null,null,null,null,extra_row_empty,save_slots" show_top_global=true page=0 %}

The **Global Settings Page** allows you to customize core behaviors of your **Launchpad** controller to better suit your workflow.

{% include launchpad-session.html inline=true %}

## Scrolling Text

- **Default Behavior**: When you adjust a **Parameter**, its name and value scroll across the **Launchpad** **Grid**.
- **Function**: This setting allows you to turn the scrolling text display **ON** or **OFF**. Disabling it can provide a cleaner visual experience if you are already familiar with the **Parameter** layouts.

## Sticky Mute

- **Default Behavior**: The **Mute** button is momentary. **Tracks** are muted only while you hold down the button.
- **Function**: This setting changes the **Mute** button into a toggle. Press it once to mute a **Track**, and press it again to unmute.

## Sticky Duplicate

- **Default Behavior**: The **Duplicate** button is momentary. You must hold it while selecting the source and destination pads.
- **Function**: This setting changes the **Duplicate** button into a toggle. Press it once to enter Duplicate mode, then select your source and destination pads. Press **Duplicate** again to exit the mode.

## Sticky Clear

- **Default Behavior**: The **Clear** button is momentary. You must hold it while selecting the **Track** or **Pattern** to clear.
- **Function**: This setting changes the **Clear** button into a toggle. Press it once to enter Clear mode, select what you want to clear, and then press **Clear** again to exit.

## Save Patch

- **Default Behavior**: The sequencer will **Not try** to save or load the internal state on the output synth.
- **Function**: This setting changes the **Quick Save** function to send a patch dump request to the output device, if the device responds with a patch, it will be saved along with the rest of the sequencer. When using **Quick Load** the sequencer will try to restore the saved patch.

{. :note }
>
> Not all devices support patch dump request, check with your manufacturer.

{. :note }
>
> Loading a patch while the sequence is running may cause some small audio hiccups.
> This is due to the internal changes resetting audio sources, audio phases, LFOs and other parameters and it's **not** and issue with the sequencer.

## Record External

- **Default Behavior**: The **MIDI Recorder** will only record **sequencer events**.
- **Function**: This setting will enable recording **External MIDI** events along with the internal ones. This allows for recording a **whole performance** including filter sweeps, effects activations and mixer controls.

{. :note }
>
> External events are saved into the midi channel 16 of the recorder. In later version these might be saved into a separate .mid file
