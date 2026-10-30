---
layout: default
title: "Troubleshooting"
nav_order: 17
description: "Fixes for the most common MIDI, Launchpad and timing problems."
---

# Troubleshooting

Work down the list from the top. Most problems are a port name, a clock source or a device that was not connected when the app started.

## The Launchpad does not respond

- Check that the device is a Launchpad Mini MK3. Other Launchpad models are not supported.
- Check the port names in [MIDI setup]({% link getting-started/midi-setup.md %}). The defaults are `LPMiniMK3` for both directions. If the Launchpad shows a different name, set it with `--control-input` and `--control-output`, or in `midi_config.json`.
- Plug the Launchpad in and wait. The app tries again every 3 seconds.

## Pads are dark, or presses do nothing, after another program used the Launchpad

Restart TrackJammer, or unplug and plug the Launchpad back in. The app sends programmer mode again each time the Launchpad connects.

## The Circuit Tracks is not found

- Check the sequencer port names. The default is `Circuit Tracks` for input and output.
- Power the Circuit Tracks and connect it before the app starts, or wait: the app tries again every 3 seconds.

## Automatic connection is off, or it failed

- Check that `--no-auto-connect` is not on the command line of the program.
- If the connection tab in the app window shows the port lists, pick the input and output by hand.

## Nothing moves: the tracks are silent or stopped

The sequencer runs on the clock source in use. Check which one is active on [Global > Clock]({% link global/clock.md %}): the indicator in step pads 81 to 83 shows the source. Pad 81 is the master, 82 is internal and 83 is external.

- External (pad 83): the Circuit Tracks is the clock master. Press Play on it. TrackJammer follows its start and clock messages.
- To make TrackJammer the master, turn on option 21 on the Clock page and set the tempo. While TrackJammer is master, the clock from the Circuit Tracks is ignored.
- Check that the track is not muted. Hold SHIFT and tap the track again to unmute it.

## Undo does nothing

Undo and redo are not available in SESS, on Global > Projects, under the hold-EDIT picker, while the automaton view is open, or while a motion recording pass is open. Go back to EDIT and try again. See [Held pads and undo]({% link interface/held-pads-and-undo.md %}).

## A recording is missing

- The file is written only when the transport stops. Stop playback, then look again.
- A recording has the sequencer's output. Incoming messages from the Circuit Tracks are added only when Global > Settings option 6, "record external" (step pad 73), is on.
- Recordings are in Godot's user folder for this app, not in the `data` folder. See [Recording and files]({% link recording-and-files/index.md %}).

## Projects or settings are gone after an update

The projects, scenes and settings are in the `data` folder next to the program file. A new copy of the program in a new folder starts with an empty `data` folder. Copy the old `data` folder into the new one.

## Settings and projects are not saved

The app keeps its data in a `data` folder next to the program file, so it needs write access there. If it cannot create the folder, settings and projects cannot be saved. Move the program to a folder you can write to, and start it again.
