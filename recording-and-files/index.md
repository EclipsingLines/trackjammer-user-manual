---
layout: default
title: "Recording and files"
nav_order: 15
description: "MIDI recordings, project files and where data is stored."
---

# Recording and files

TrackJammer keeps two kinds of file: MIDI recordings, and projects. Projects and settings live in the data folder next to the program. Recordings go to Godot's user folder.

## Projects

Projects are saved in `data/sessions` as `.tjam` files. Each track has 64 project slots, so the 8 tracks give 512 in all. Save, load and delete them on [Global > Projects]({% link global/projects.md %}). The grid shows the 64 slots of the selected track. The short version: tap a slot to select it, SHIFT + tap saves into it, and UP loads the selected slot.

A project holds the patterns of each track, the scenes, the harmony and the performance settings. Projects saved in the earlier format are converted when they load. See [Migration]({% link migration.md %}).

## MIDI recordings

The app records the MIDI its sequencer sends:

- Recording is switched on when the app starts.
- It starts when the transport starts and stops when the transport stops.
- The file is written when the transport stops. Nothing is written while the transport is running.
- The file has one track per MIDI channel that sent something, named "Channel 1" and so on. Its tempo is always stored as 120 BPM, whatever tempo you played at; the notes sit on the right beats.
- Each file is named `recording_<date>T<time>.mid`, with dashes in the time, for example `recording_2026-10-30T19-42-07.mid`.
- Notes and controllers from the Circuit Tracks are recorded too when Global > Settings option 6, "record external" (step pad 73), is on. They are written to the file's "Channel 16" track, whatever channel they arrived on.

{% include warning.html text="Recordings are not saved in the data folder. Look for them in Godot's user folder for this app. Check the folder after your first recording." %}

{% include hardware-unverified.html text="The exact recording folder on each operating system has not been checked on a real build." %}

## Scenes and patch dumps

Scenes are stored in the project. When Global > Settings option 5, "save patch" (step pad 71), is on, storing a scene also asks the Circuit Tracks for its patch dumps and keeps them in memory, per scene. The patch dumps are not written to the project file, so they are gone when the app closes. See [Scenes and morph]({% link session/scenes-and-morph.md %}).

## Settings and presets

Global settings, the clock tempo, the hold-EDIT bookmarks and the home page are stored in `data/config/settings.json`. Device presets are in `data/presets/output`. In a build, the app copies its bundled presets there on every start, and replaces a copy that differs from the bundled file, so changes to `circuit_tracks.json` or `circuit_rhythm.json` are lost. Put your own preset in a file with a new name.

## Stability log

A stability log can be written as one row a minute to `data/telemetry`, one file per day. It is off by default. Turn it on in [Global > Clock]({% link global/clock.md %}), or start the app with `--telemetry`. Nothing in the log is sent anywhere.
