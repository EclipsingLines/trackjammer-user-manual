---
layout: default
title: UI Layout
parent: Getting Started
nav_order: 3
description: "General UI Overview"
---
## Understanding the Default Interface

{% include full-launchpad.html %}

### Track Display Buttons (Right Side)

{% include launchpad-track-arrow.html %}

Seven track buttons (Track 1-7) are visible on the right side of the interface. Track 1 is selected by default and highlighted.

{% include launchpad-stop-solo-mute.html %}

The last button of the right side area is the Mute button and is used to mute track, subtracks and individual steps.

### Page Navigation (Top)

{% include launchpad-top-row.html %}

The top 8 buttons of the Launchpad are used to navigate the different "pages" and "subpages" of the app, its divided into 2 sections:

#### Pattern Page

{% include launchpad-drums.html %}

The pattern page allows for changing the pattern by adujsting: Steps, Length, Beats, Mutations, Chance and Substeps.

Find detailed information in the [Pattern Page Section](../pattern-page/index.html)

#### Notes Page

{% include launchpad-keys.html %}

The notes page allows for changing the melody by adjusting: Notes, Velocity, Gate, Step Type and Variation

Find detailed information in the [Notes Page Section](../notes-page/index.html)

#### CC Subtracks Page

{% include launchpad-user.html %}

The CC subtracks page allows for editing the midi control subtracks by: Selecting a subtrack or editing subtrack parameters.

Find detailed information in the [MIDI Control Section](../midi-control/index.html)

#### Track Settings Page

{% include launchpad-session.html inline=true %}

The Track Settings page allows for setting track wide parameters like: speed, scale, root note and other settings.

Find detailed information in the [Track Settings Section](../track-settings/index.html)

#### Sesssion Save/Load Page

{% include launchpad-stop-solo-mute.html inline=true %}+{% include launchpad-session.html inline=true %}

The Session Save/Load page allows for session management here there are controls for saving, loading, duplicating and deleting session save files.

Find detailed information in the [Track Settings Section](../session-page/index.html)

#### Global Settings

{% include launchpad-stop-solo-mute.html inline=true %}+{% include launchpad-user.html inline=true %}

The Global settings allows for changing app wide settings like: scrolling text on...

Find detailed information in the [Track Settings Section](../global-settings/index.html)

{: .note-title}
> Clear Session
>
> Holding the Clear Button and tapping User will clear the current session including Steps, Tracks, Mutations, Automations and Quick Save slots

#### Subpage buttons (4 Top Left Buttons)

{% include launchpad-arrows.html %}

The 4 arrow buttons switch between different subpages in the **Pattern**, **Notes** and **CC Subtracks** pages:

#### Pattern Length / Velocity / Subtrack 1

{% include launchpad-up-arrow.html inline=true %}

Allows editing the Pattern Length when in the Pattern page.
Allows editing note Velocity when in the Note page.
Allows editing the MIDI control Subtrack 1.

#### Pattern Beats / Gate / Subtrack 2

{% include launchpad-down-arrow.html inline=true %}

Allows editing the Pattern Beat amount when in the Pattern page.
Allows editing note Gate when in the Note page.
Allows editing the MIDI control Subtrack 2.

#### Mutations / Type / Subtrack 3

{% include launchpad-left-arrow.html inline=true %}

Allows editing the Pattern Mutations when in the Pattern page.
Allows editing note Type when in the Note page.
Allows editing the MIDI control Subtrack 3.

#### Substeps / Variation / Subtrack 4

{% include launchpad-right-arrow.html inline=true %}

Allows editing the Pattern Substeps when in the Pattern page.
Allows editing note Variations when in the Note page.
Allows editing the MIDI control Subtrack 4.

#### Chance / Note / Subtrack settings

NO BUTTON

{: .note }
Pressing on the currently selected subpage takes the user into the "No Button" subpage.

Allows editing the Step Chance when in the Pattern page.
Allows editing the step Notes when in the Note page.
Allows editing the MIDI control Subtrack settings.

{% include launchpad-arrows.html %}

{: .note-title }
> Transposition and Rotation
>
> The Up and Down subpage buttons are also used to transpose tracks and steps by holding down a Track Button or step and tapping the Up or Down.
> The Left and Right subpae buttons are also used to rotate (nudge) tracks backwards and forwards by holding down a Track Button and tapping Left or Right

### Main Area (8x8 Grid)

The main area is composed of 4 sections:

#### Step Area (Rows: 1, 2, 3, 4)

{% include launchpad-grid.html presets="steps_r_1,steps_r_2,empty_row,empty_row" %}

The top 32 pads represent the Step Area, in this area you can visulize the steps on the current track sequence and allows depending on the subpage it allows for:

- Selecting track or subtrack parameters
- Toggling steps on and off
- Selecting steps for editing
- Duplicating steps
- Muting steps
- Transposing Steps

While in the **Pattern Length** **Pattern Beats** and **Mutations** subpages the step area allows selection of the total amount directly on the step area.

#### Value Area (Rows: 5, 6)

{% include launchpad-grid.html presets="value_chance" %}

The next two rows display the value for the current target step and allow for editing step values when a step is selected or track wide values when not.

Different parameters use different display types, these are all covered in [Editing Steps](../sequencer/basic-editing.md).

{: .note-title }
> Current Target Step
>
> The Current Target Step is either the current step when no step is selected or the selected step

#### Extra Area (Row 7)

{% include launchpad-grid.html presets="extra_row_empty" %}

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

{% include launchpad-grid.html presets="save_slots" %}

The Quick Save Area has 8 Quick Save slots that allow the user to quickly save and recall whole sequences.
Each Slot saves the whole state of the app at the moment, including **Tracks**, **Subtracks**,**Steps** and **Mutations**
