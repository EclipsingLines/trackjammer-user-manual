---
layout: default
title: "Installation"
parent: "Getting started"
nav_order: 1
description: "Download, unpack and start TrackJammer on Windows, macOS or Linux."
---

# Installation

TrackJammer is a desktop program. It keeps projects and settings in a `data` folder next to the program file, so put the program where you can write files.

## Install

1. Download the TrackJammer build for your operating system and unpack it into its own folder.
2. Keep that folder somewhere you can write to, for example your Documents folder.
3. Start the program file. Then connect your hardware as described in [MIDI setup]({% link getting-started/midi-setup.md %}).

{% include note.html text="This manual does not list minimum operating-system versions. Check the download page for them." %}

## The data folder

The first time the program starts, it creates a `data` folder next to the program file:

| Folder | Contents |
|---|---|
| `data/config` | `settings.json`: the global settings, the clock tempo and the hold-EDIT bookmarks |
| `data/sessions` | Projects, saved as `.tjam` files: 64 slots per track, 512 in all |
| `data/presets` | Device presets (`input` and `output` subfolders) |
| `data/logs`, `data/cache` | Reserved for program logs and temporary files |
| `data/recordings` | Created, but MIDI recordings are not written here (see [Recording and files]({% link recording-and-files/index.md %})) |

The stability log goes to `data/telemetry`, and only while it is switched on in [Global > Clock]({% link global/clock.md %}).

{% include warning.html text="Your projects, scenes and settings live in the data folder. A new program file in a new folder starts with an empty data folder, so copy the old data folder across when you update." %}

MIDI recordings are not stored in this folder. See [Recording and files]({% link recording-and-files/index.md %}).
