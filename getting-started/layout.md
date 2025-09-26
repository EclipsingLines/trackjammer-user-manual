---
layout: default
title: UI Layout
parent: Getting Started
nav_order: 3
description: "Configure MIDI devices and connections for the sequencer"
---
## Understanding the Default Interface

![Interface Overview](docs/img/interface-overview-labeled.jpg)
*Main interface elements labeled for reference*

### Track Display Buttons (Right Side)

Seven track buttons (Track 1-7) are visible on the right side of the interface. Track 1 is selected by default and highlighted.

The last button of the right side area is the Mute button and is used to mute track, subtracks and individual steps.

### Page Navigation (Top)

The top 8 buttons of the Launchpad are used to navigate the different "pages" and "subpages" of the app, its divided into 2 sections:

#### Page buttons (4 Top Right Buttons)

4 Page buttons allow to switch between the 6 different modes to use the app:

- Pattern Page {% include launchpad-drums.html inline=true %}.
- Notes Page {% include launchpad-keys.html inline=true %}.
- CC Subtracks Page {% include launchpad-user.html inline=true %}.
- Track Settings Page {% include launchpad-session.html inline=true %}.
- Sesssion Save/Load Page {% include launchpad-stop-solo-mute.html inline=true %}+{% include launchpad-session.html inline=true %}
- Global Settings {% include launchpad-stop-solo-mute.html inline=true %}+{% include launchpad-user.html inline=true %}

{: .note-title}
> Clear Session
> Holding the Clear Button and tapping User will clear the current session including Steps, Tracks, Mutations, Automations and Quick Save slots

#### Subpage buttons (4 Top Left Buttons)

The 4 arrow buttons switch between different subpages in the **Pattern**, **Notes** and **CC Subtracks** pages:

- Pattern subpages:
  - Pattern Length - {% include launchpad-up-arrow.html inline=true %}.
  - Pattern Beats - {% include launchpad-down-arrow.html inline=true %}.
  - Mutations - {% include launchpad-left-arrow.html inline=true %}.
  - Substeps - {% include launchpad-right-arrow.html inline=true %}.
  - Chance No Button.

- Notes subpages:
  - Velocity - {% include launchpad-up-arrow.html inline=true %}
  - Gate - {% include launchpad-down-arrow.html inline=true %}
  - Type - {% include launchpad-left-arrow.html inline=true %}
  - Variation - {% include launchpad-right-arrow.html inline=true %}
  - Note Selection - No Button

- CC Subtracks
  - Subtrack Selection - {% include launchpad-up-arrow.html inline=true %}{% include launchpad-down-arrow.html inline=true %}{% include launchpad-left-arrow.html inline=true %}{% include launchpad-right-arrow.html inline=true %}
  - Subtrack Settings - No Button

The selected subpage button is highlihgted to indicate the current selection.

Pressing on the currently selected subpage takes the user into the "No Button" subpage.

{: .note-title }
> Transposition and Rotation
>
> The Up and Down subpage buttons are also used to transpose tracks and steps by holding down a Track Button or step and tapping the Up or Down.
> The Left and Right subpae buttons are also used to rotate (nudge) tracks backwards and forwards by holding down a Track Button and tapping Left or Right

### Main Area (8x8 Grid)

The main area is composed of 4 sections:

#### Step Area (Rows: 1, 2, 3, 4)

The top 32 pads represent the Step Area, in this area you can visulize the steps on the current track sequence and allows depending on the subpage it allows for:

- Selecting track or subtrack parameters
- Toggling steps on and off
- Selecting steps for editing
- Duplicating steps
- Muting steps
- Transposing Steps

While in the **Pattern Length** **Pattern Beats** and **Mutations** subpages the step area allows selection of the total amount directly on the step area.

#### Value Area (Rows: 5, 6)

The next two rows display the value for the current target step and allow for editing step values when a step is selected or track wide values when not.

Different parameters use different display types, these are all covered in [Editing Steps](../sequencer/basic-editing.md).

{: .note-title }
> Current Target Step
>
> The Current Target Step is either the current step when no step is selected or the selected step

#### Extra Area (Row 7)

The Extra Area contains additional configuration parameters for editing a step in certain modes.

The extra are also contains the **Duplicate** and **Clear** combination buttons, these allow for duplicating and clearing different objects by holding down the button and tapping somewhere else.

- Clear: Holding clear allows you to clear and reset the values to default. You can clear in this way:
  - Steps
  - Tracks
  - Subtracks
  - Quick Save Slots

- Duplicate: Holding down duplicate allows you to duplicate the current selection into a separate object, you can duplicate using this method:
  - Steps
  - Tracks
  - Quick Save Slots

{: .note-title }
> Duplicating Tracks
>
> Duplicating Tracks do not duplicate the **original's** MIDI device or MIDI channel.
> It conserves the **target's** MIDI output configuration allowing you to instantly transfer a whole sequence from a device to another.

#### Quick Save (Row 8)

The Quick Save Area has 8 Quick Save slots that allow the user to quickly save and recall whole sequences.
Each Slot saves the whole state of the app at the moment, including **Tracks**, **Subtracks**,**Steps** and **Mutations**
