---
layout: default
title: "Basic operation"
parent: "Getting started"
nav_order: 4
description: "The handful of gestures that everything else is built on."
---

# Basic operation

These gestures are used on every page. Pad numbers are the ones shown in the [pad map]({% link interface/pad-map.md %}).

## Transport

Playback follows the clock source. With the Circuit Tracks as master, press Play on the Circuit. With TrackJammer as master (see [Global > Clock]({% link global/clock.md %})), the app plays on its own clock.

## Select a track

Tap a track pad in the right column. Track 1 is pad 89, track 8 is pad 19. The selected track is the one the grid edits.

## Mute, clear and copy a track

| Gesture | Result |
|---|---|
| Hold {% include pad.html name="shift" %} and tap a track | Mute or unmute that track |
| Hold {% include pad.html name="clear" %} and tap a track | Clear the track |
| Hold {% include pad.html name="dup" %} and tap a track | Copy the track |

With sticky shift on (Global settings option 83), a tap on SHIFT stays on until you tap it again.

{% include launchpad-grid.html top="newnav" top_lit="shift" track_sel=3 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,empty_row,empty_row" hint="1@95,2@69" alt="Launchpad: SHIFT in the top row and track 3 in the right column, to mute it." caption="Hold SHIFT (1), then tap track 3 (2)." %}

## Toggle a step

On Beats > Steps, a tap on a step pad turns the step on or off. The steps are the four rows of the step area.

{% include launchpad-grid.html top="none" right="none" presets="steps_4_floor,empty_row,empty_row,empty_row,empty_row,empty_row,options_row,slots_row" hint="1@82" alt="Launchpad step area with four steps on the floor, and step 2 to be tapped." caption="Tap a step (1) to turn it on or off." %}

## Select a step and set a value

Press and hold a step to select it. Then tap a value pad. What the value pads set depends on the page.

{% include launchpad-grid.html top="none" right="none" presets="steps_euclid_5_8,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="85=gray:3:Sel:The selected step;45=white:3:Set:Tap a value pad to set the value" hint="1@85,2@45" alt="Launchpad: step 5 selected in the step area, and a value pad highlighted in the value area." caption="Hold a step to select it (1), then tap a value pad (2)." %}

## Undo and redo

Hold {% include pad.html name="shift" %} and tap {% include pad.html name="clear" %} to undo the last edit. Hold SHIFT and tap {% include pad.html name="dup" %} to redo. The screen names the action it undid or redid. [Held pads and undo]({% link interface/held-pads-and-undo.md %}) lists where undo is not available.

## Regeneration and your edits

Changing a setting that regenerates the pattern, such as the length or the beat count, rewrites the unlocked steps. With the Global option "edits survive regen" on (the default), a hand edit locks its step, so your edits and locked steps stay. Turn the option off in [Global settings]({% link global/settings.md %}) if you want every regeneration to start from scratch.
