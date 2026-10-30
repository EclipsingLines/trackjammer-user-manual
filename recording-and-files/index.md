---
layout: default
title: "Recording and files"
nav_order: 15
description: "MIDI recordings, project files and where data is stored."
---

# Recording and files

TrackJammer keeps two kinds of file: MIDI recordings, and projects. Projects and settings live in the data folder next to the program. Recordings go to Godot's user folder.

## Projects

Projects are saved in `data/sessions` as `.tjam` files. Each track has 64 project slots, so the 8 tracks give 512 in all. Save, load and delete them on [Global > Projects]({% link global/projects.md %}). The short version: tap a slot to select it, SHIFT + tap saves into it, and UP loads the selected slot.

A project holds the patterns of each track, the scenes, the harmony and the performance settings. Projects saved in the earlier format are converted when they load. See [Migration]({% link migration.md %}).

## MIDI recordings

The app records the MIDI its sequencer sends:

- Recording is switched on when the app starts.
- It starts when the transport starts and stops when the transport stops.
- The file is written when the transport stops. Nothing is written while the transport is running.
- Each file is named `recording_<date>_<time>.mid`, for example `recording_2026-10-30_19-42-07.mid`.
- Notes and controllers from the Circuit Tracks are recorded too when Global option 6, "record external", is on.

{% include warning.html text="Recordings are not saved in the data folder. Look for them in Godot's user folder for this app. Check the folder after your first recording." %}

{% include hardware-unverified.html text="The exact recording folder on each operating system has not been checked on a real build." %}

## Scenes and patch dumps

Scenes are stored in the project. When Global option 5, "save patch", is on, storing a scene also asks the Circuit Tracks for its patch dumps and keeps them in memory, per scene. The patch dumps are not written to the project file, so they are gone when the app closes. See [Scenes and morph]({% link session/scenes-and-morph.md %}).

## Settings and presets

Global settings, the clock tempo, the hold-EDIT bookmarks and the home page are stored in `data/config/settings.json`. Device presets are in the app's `presets` folder, and your own presets can go in `data/presets`.

## Stability log

A stability log can be written as one row a minute to `data/telemetry`, one file per day. It is off by default. Turn it on in [Global > Clock]({% link global/clock.md %}), or start the app with `--telemetry`. Nothing in the log is sent anywhere.
