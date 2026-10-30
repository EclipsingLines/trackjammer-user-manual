---
layout: default
title: "First launch"
parent: "Getting started"
nav_order: 3
description: "What you see the first time you start the app."
---

# First launch

Start TrackJammer with the Launchpad and the Circuit Tracks connected. This is what happens:

1. The app opens the Launchpad and Circuit Tracks ports. A port that is not there yet is tried again every 3 seconds.
2. The Launchpad switches to programmer mode and the grid lights.
3. Press Play on the Circuit Tracks. Its start message starts the sequencer.

If the Circuit Tracks is not connected, the app runs its own clock instead. As soon as the Launchpad connects, the tracks play. When the Circuit Tracks connects later, its clock takes over.

## The default project

The project has eight tracks. With the Circuit Tracks preset, each track sends on these MIDI channels (1 to 16):

| Track | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Name on screen | Synth 1 | Synth 2 | Drum 1 | Drum 2 | Drum 3 | Drum 4 | Midi CC | Track 8 |
| Channel | 1 | 2 | 10 | 10 | 10 | 10 | 16 | 15 |

Track selection is on the right column of the Launchpad: track 1 is pad 89 at the top, track 8 is pad 19 at the bottom.

## The grid

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" track_sel=1 presets="steps_euclid_3_8,steps_euclid_5_8,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" playhead=16 playhead_ms=250 alt="Launchpad: the step grid with the playhead lit across the first 16 steps, track 1 selected in the right column." caption="Illustration: the step area with the playhead running. The screen you see depends on the page you are on." %}

Next, read [Basic operation]({% link getting-started/basic-operation.md %}) and the [pad map]({% link interface/pad-map.md %}).
