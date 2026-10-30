---
layout: default
title: "Home"
nav_order: 1
description: "User manual for TrackJammer, a generative MIDI sequencer for the Novation Launchpad Mini MK3."
permalink: "/"
---

# TrackJammer

TrackJammer is a generative MIDI sequencer. A Novation Launchpad Mini MK3 is its control surface: the pads show the sequencer, and you edit and play it from the grid. Eight tracks send Euclidean and generative patterns over MIDI to a Novation Circuit Tracks (the default device) or a Circuit Rhythm.

## What you need

| Item | Notes |
|---|---|
| Launchpad Mini MK3 | The only Launchpad model this version supports. |
| Novation Circuit Tracks | The default sound source. A Circuit Rhythm preset is also included. |
| A computer | Runs TrackJammer. Its window mirrors the pads and holds the settings and the guide. |

## Start here

1. [Installation]({% link getting-started/installation.md %}): unpack the program and keep its data folder.
2. [MIDI setup]({% link getting-started/midi-setup.md %}): connect the Launchpad and the Circuit Tracks.
3. [First launch]({% link getting-started/first-launch.md %}): what happens when the app starts.
4. [Basic operation]({% link getting-started/basic-operation.md %}): the gestures everything else uses.

## Modes at a glance

| Mode | Reached with | Use it for |
|---|---|---|
| EDIT (pad 96) | Tap 96 | Editing steps and parameters in four sub-modes: Track, Beats, Keys and CC |
| PERF (pad 97) | Tap 97 | Live performance: FX, density, randomize and mutate, tempo and mute scenes |
| SESS (pad 98) | Tap 98 | Clip launcher: patterns, scenes and the song |
| Global | SHIFT (95) + SESS (98) | Settings, chords, key, clock, projects and LFO |

The automaton view (SHIFT + EDIT) is drawn over the grid. It is a view, not a mode.

## The manual

- [Getting started]({% link getting-started/index.md %})
- [Interface]({% link interface/index.md %}): the pad map, modes and pages, held pads and undo
- [Track]({% link track/index.md %}), [Beats]({% link beats/index.md %}), [Keys]({% link keys/index.md %}) and [CC]({% link cc/index.md %}): the EDIT sub-modes
- [Perform]({% link perform/index.md %}), [Session]({% link session/index.md %}), [Global]({% link global/index.md %}) and [Automaton]({% link automaton/index.md %})
- [Modulation]({% link modulation/index.md %}) and [Harmony]({% link harmony/index.md %})
- [Companion window]({% link companion/index.md %})
- [Recording and files]({% link recording-and-files/index.md %})
- [Migration]({% link migration.md %}) for users of the earlier version, and [Troubleshooting]({% link troubleshooting.md %})
