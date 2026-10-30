---
layout: default
title: "Companion window"
nav_order: 14
description: "The on-screen window that mirrors the Launchpad."
---

# Companion window

The companion window is the on-screen window that mirrors the Launchpad. It shows what the pads cannot show well: the mode and page name, what the last pad you touched does, live status, a guide, and the Arranger and Matrix panels. You still make almost every change with the pads. The two panels are the exception: they edit on this window.

## Header

- **Mode line** (large text): the current mode, sub-mode and page, for example "GLOBAL > Projects (5/6)".
- **Guide: ON / OFF**: shows or hides the guide panel. It is the same setting as Global > Settings option 13.
- **Arranger**: opens the Arranger panel. It is hidden until you press the button.
- **Matrix**: opens the Mod Matrix panel. It is hidden until you press the button.

## Below the header

- **Picker label** (orange): shows while the hold-EDIT picker is open.
- **State label** (green): shows states such as FILL, LOOP, live repeat, and REC while motion recording is armed.
- **Readout**: "Touch a pad to see what it edits" at first, then the readout for the last pad you touched, for example "Step 5: on, notes C 04, vel 100, gate 60".

Status lines you may see include:

- "MORPH A>B n/8": a scene morph is armed, with its position. See [Scenes and morph]({% link session/scenes-and-morph.md %}).
- "KEY C Phrygian  CHORD V 7th  TRANSPOSE +5": the global key, the chord playing, and any CT transpose. See [Key]({% link global/key.md %}).
- "RULES A: T3 played > skip  B: off": the cross-track rules. See [Rules and rack]({% link track/rules-and-rack.md %}).
- "KNOBS: ...": knob control is on and lists the knobs it maps.

## Guide panel

The guide sits beside the pads and has three collapsible sections:

1. **Pad map and legend**: a labelled mini Launchpad for the current page. The legend lists only the colours on the pads now.
2. **Held-pad combos**: while SHIFT, EDIT, LOCK, CLEAR, DUP, LOOP, PERF, a track pad or a step is held, every combination that hold gives on this page.
3. **Where am I**: the breadcrumb (for example "EDIT > Beats > Accent (4/7)"), one line of purpose, and two or three things to try.

The guide updates when the page changes, not on every tick. It shows no change messages.

## Arranger panel

Opened with the Arranger header button. It holds the song list with Start and Stop, the transition and program settings for each scene, and is the only place to edit the song. See [Song]({% link session/song.md %}) and [Scenes and morph]({% link session/scenes-and-morph.md %}).

## Matrix panel

Opened with the Matrix header button. It has:

- Eight LFO rows: shape, rate, depth, phase, unipolar, retrigger, and a live meter. These are the same settings as Global > LFO.
- Sixteen matrix slots that route a source (an LFO, or the incoming CC) to a parameter.
- A knob map, when knob control is on.

The panel says in its status line that matrix and LFO edits are not undoable. See [LFOs and matrix]({% link modulation/lfos-and-matrix.md %}).

## Connection settings

- Set the ports with the command-line flags `--control-input`, `--control-output`, `--sequencer-input` and `--sequencer-output`, each taking a port name. Port names match by substring. `--no-auto-connect` turns off auto-connect.
- The defaults in the shipped `midi_config.json` are overridden by the user copy, and the flags override both.
- Auto-connect looks for the Launchpad and the Circuit Tracks at start and again every three seconds. On connect the Launchpad switches to programmer mode, and it returns to live mode on exit.
- A connection tab in the window shows input and output lists. It appears when auto-connect is off or has failed. You can tick more than one output.

For the setup steps, see [MIDI setup]({% link getting-started/midi-setup.md %}).
