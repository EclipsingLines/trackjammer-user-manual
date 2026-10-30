---
layout: default
title: "MIDI setup"
parent: "Getting started"
nav_order: 2
description: "Connect the Launchpad Mini MK3 and your synth or drum machine."
---

# MIDI setup

TrackJammer uses two MIDI connections:

| Connection | Device | Default port name |
|---|---|---|
| Control surface | Launchpad Mini MK3: pad input and output | `LPMiniMK3` |
| Sequencer | Circuit Tracks: clock in, notes and CC out | `Circuit Tracks` |

The app looks for both ports when it starts and checks again every 3 seconds, so a device plugged in later is picked up. Names are matched by substring: a port called `Circuit Tracks 1` matches `Circuit Tracks`.

## Launchpad programmer mode

When the Launchpad connects, the app switches it to programmer mode, which lets the app light every pad. When the app exits or the Launchpad disconnects, the Launchpad goes back to live mode.

## Choose the port names

The app reads the names from three places. Each later one wins:

1. The `midi_config.json` shipped with the program. Its values are the names in the table above.
2. A `midi_config.json` in Godot's user folder (`user://`). If this file exists, it is used instead of the shipped one, so it must give all four names.
3. Command-line arguments.

| Setting | Command-line argument | JSON key |
|---|---|---|
| Launchpad input | `--control-input <name>` | `control_surface.input_name` |
| Launchpad output | `--control-output <name>` | `control_surface.output_name` |
| Circuit input | `--sequencer-input <name>` | `sequencer.input_name` |
| Circuit output | `--sequencer-output <name>` | `sequencer.output_name` |
| Turn automatic connection off | `--no-auto-connect` | (command line only) |

The shipped file looks like this:

```json
{
	"control_surface": {
		"input_name": "LPMiniMK3",
		"output_name": "LPMiniMK3"
	},
	"sequencer": {
		"input_name": "Circuit Tracks",
		"output_name": "Circuit Tracks"
	}
}
```

{% include note.html text="The user folder is not the data folder. It is Godot's per-application folder, and its location depends on your operating system." %}

## Connect by hand

If automatic connection is turned off, or it fails, the connection tab in the app window shows the input and output lists. You can select more than one output.

## Virtual port and all devices

Where the platform allows it, the app also opens a virtual MIDI output port. A track whose device is set to all devices sends to every open output, including that virtual port. See [Track > Params]({% link track/params.md %}).

## Clock

The sequencer runs on one clock source at a time. By default the Circuit Tracks is the clock master. To make TrackJammer the master instead, see [Global > Clock]({% link global/clock.md %}). Playback problems are covered in [Troubleshooting]({% link troubleshooting.md %}).
