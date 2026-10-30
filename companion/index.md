---
layout: default
title: "Companion window"
nav_order: 14
description: "The on-screen window that mirrors the Launchpad."
---

# Companion window

The companion window is the on-screen window that mirrors the Launchpad. It shows what the pads cannot show well: the mode and page name, what the last pad you touched does, live status, a guide, and the Arranger and Matrix panels. You still make almost every change with the pads. The two panels are the exception: they edit on this window. Below the header it also draws the pads, a row of eight track buttons and the eight quick slots; clicking them with the mouse works like pressing the same pad on the Launchpad, so you can try the app without hardware.

## Header

- **Mode line** (large text): the current mode, sub-mode and page, for example "GLOBAL › Projects (5/6)" or "EDIT › Beats › Accent (4/7)". In PERF it reads "PERF" and in the clip launcher "SESSION".
- **Guide: ON / OFF**: shows or hides the guide panel. It is the same setting as Global > Settings option 13.
- **Arranger**: opens the Arranger panel. It is hidden until you press the button.
- **Matrix**: opens the Mod Matrix panel. It is hidden until you press the button.

## Below the header

- **Picker label** (orange): shows while the hold-EDIT picker is open.
- **Status line** (green): live states and a few always-on readouts, described below.
- **Readout**: "Touch a pad to see what it edits" at first, then the readout for the last pad you touched, for example "Chord slot 2: V 7th, 2 bars [selected]" on the Chords page.

The status line can show:

- "KEY C Phrygian  CHORD V 7th  TRANSPOSE +5": the global key (always), the chord now playing (only while the chord lane is on) and any CT transpose. See [Key]({% link global/key.md %}).
- "CLOCK master 120.0 BPM": who is the clock (master, internal or external) and the tempo. See [Clock]({% link global/clock.md %}).
- "MORPH 1>3 4/8": a scene morph is armed, with scenes A and B and the crossfader position. See [Scenes and morph]({% link session/scenes-and-morph.md %}).
- "FILL ACTIVE", "LOOP 3-7", "LIVE REPEAT" and "EVOLVE Rotate in 3": the performance gestures and the evolution countdown of the selected track.
- "REC": motion recording is armed. "KNOBS: ...": knob control is on, listing what the knobs map to. A held step also lists its parameter locks.
- "RULES ...": the cross-track rules, only on Track > Rules. See [Rules and rack]({% link track/rules-and-rack.md %}).
- Lines for the automaton view, the drum map and the drum rack pages when you are on them.

## Guide panel

The guide sits beside the pads and has three collapsible sections:

1. **Pad map and colours**: a labelled mini Launchpad for the current page. The legend lists only the colours on the pads now.
2. **Held pad combos**: while SHIFT, EDIT, LOCK, CLEAR, DUP, LOOP, PERF, a track pad or a step is held, every combination that hold gives on this page.
3. **Where am I**: the breadcrumb (for example "EDIT › Beats › Accent (4/7)"), one line of purpose, and two or three things to try.

The guide updates when the page changes, not on every tick. It shows no change messages.

## Arranger panel

Opened with the Arranger header button. It is the only place to edit the song.

- **Header**: a Start / Stop button and a line saying where the song is (entry, bar and next entry).
- **Song**: one row per entry with its scene, length in bars (1-64), follow actions A and B with a chance each, and arrows to move or remove it. "+ Entry" adds one. The playing entry is highlighted.
- **Scene details**: pick a scene. For a stored scene you can set a program change for each of the eight tracks (-1 for none). For any scene you can set the transition played when the song leaves it: none, fill, density or FX, with its length in bars, amount and FX. See [Song]({% link session/song.md %}) and [Scenes and morph]({% link session/scenes-and-morph.md %}).

## Matrix panel

Opened with the Matrix header button. It has:

- A **Clear all slots** button, and a status line with the number of slots in use. It also says that edits here are not in undo.
- **CT knobs**: a short note on whether knob control is on (a Global setting) and which MIDI channel the knobs use, with the knob map when it is on.
- **LFOs**: eight rows with shape, rate, depth, phase, unipolar, retrigger and a live meter. These are the same settings as Global > LFO.
- **Matrix**: sixteen slots. Each slot picks a source (an LFO, an incoming CC with channel and number, or a step ramp, step random or step velocity source), a track (or all), what it affects (a parameter, velocity, gate or a CC lane) and an amount from -100 to +100 %, with a live meter. See [LFOs and matrix]({% link modulation/lfos-and-matrix.md %}).

## Connection settings

- Set the ports with the command-line flags `--control-input`, `--control-output`, `--sequencer-input` and `--sequencer-output`, each taking a port name. Port names match by substring. `--no-auto-connect` turns off auto-connect.
- The defaults in the shipped `midi_config.json` are overridden by the user copy, and the flags override both.
- Auto-connect looks for the Launchpad and the Circuit Tracks at start and again every three seconds. On connect the Launchpad switches to programmer mode, and it returns to live mode on exit.
- A connection tab in the window shows a Launchpad input list and a Circuit output list, each with a connect button. It appears when auto-connect is off or has not connected both ports, and it closes when you change track or mode. You can select more than one output.

For the setup steps, see [MIDI setup]({% link getting-started/midi-setup.md %}).
