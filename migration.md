---
layout: default
title: "Migration"
nav_order: 16
description: "Coming from the old version of TrackJammer: what moved and what changed."
---

# Migration

This page is for people who used the earlier version of TrackJammer. The new layout has eight tracks and a different top row. Pads changed roles, and several pages moved or were renamed.

## Gesture map

| Earlier gesture | Pad or place before | Now |
|---|---|---|
| Mute a track (shift + track) | Pad 19, right column bottom | SHIFT (95) + track. Pad 19 is now track 8 |
| Track settings page | SES (95) | EDIT, Track sub-mode: tap 96, or hold EDIT + 21 |
| Pattern page | DRM (96) | EDIT, Beats sub-mode: hold EDIT + 22 |
| Notes page | KEY (97) | EDIT, Keys sub-mode: hold EDIT + 23 |
| CC sub-tracks page | USR (98) | EDIT, CC sub-mode: hold EDIT + 24 |
| Project grid (save and load) | Old shift pad 19 + SES (95) | Global > Projects: SHIFT + SESS, then RIGHT four times |
| Clip launcher | none | SESS (98) |
| Global settings | Old shift pad 19 + USR (98) | SHIFT (95) + SESS (98) |
| "No modifier" page | Pad 90, on screen only | Page 1 of each sub-mode. Pad 90 is gone |
| Subpages U, D, L, R | Pads 91 to 94, tap again to turn off | LEFT and RIGHT change page. UP and DOWN change sub-mode |
| Quick save slots 1 to 8 | Pads 11 to 18 | Scenes 1 to 8, on the same pads |
| Clear the session, including quick slots | CLEAR (28) + USR (98) | CLEAR (28) + SESS (98): empty all tracks' steps, scenes and stored patterns |
| Accent complement | Pad 26 on the Mutations page | Track > Params, near the end of the list. Pad 26 is now LOCK |
| Clear one step | none | Hold CLEAR (28) + tap the step |
| Lock one step | none | Hold LOCK (26) + tap the step |
| Duplicate, transpose and rotate | DUP (27); track or step held with the arrows | Unchanged |
| Sticky mute | Global option | Sticky shift: Global > Settings option 2, step pad 83 |

Pad 98 is now SESS, and the picker opens sub-modes on pads 21 to 24. See [Pad map]({% link interface/pad-map.md %}) and [Modes and pages]({% link interface/modes-and-pages.md %}).

## Pages renamed or moved

| Earlier name | Now |
|---|---|
| Pattern page | Beats: Steps, Length, Beats, Accent, Repeat, Conditions, Drum map |
| Mutations | Beats > Accent. Its types are the same. The step area sets the accented steps |
| Substeps | Beats > Repeat |
| Step chance | Beats > Steps. The value area sets the chance |
| Notes page | Keys: Notes, Velocity, Gate, Type, Voicing, Source, Harmony, Voice |
| Variations | Keys > Voicing |
| Track settings | Track > Params. Feel, Playback, Voices, Evolution, Rules and Rack are new pages |
| MIDI control and sub-tracks | CC sub-mode: Settings, CC 1 to CC 4. Each lane shares the track's length |
| Session (projects) | Global > Projects, with the same save and load ideas |
| Quick slots | Scenes. A scene holds the patterns that each track uses, not a whole snapshot |
| Step type names | Mono, Arp, Chord and Strum, on Keys > Type |

## Changed

- There are eight tracks, not seven.
- Undo and redo exist: SHIFT + CLEAR and SHIFT + DUP. The old "no undo" warnings no longer apply.
- The old manual said recordings go to the data folder. They are written to Godot's user folder.
- The Launchpad support is the Mini MK3 only.
- TrackJammer can be the clock master (Global > Clock).
- Projects are `.tjam` files. Older files are converted when loaded.

## Not in this version

The old manual described these, but the app has no pad or screen for them now.

- Solo. Mute is SHIFT + track.
- The slew rate page. Smoothing between steps still happens in the engine, but there is no page for it.
- Independent lane lengths for CC lanes. Lanes share the track's length.
- MIDI Learn, and the Ctrl+M connection dialog. No trace of either was found in the app. Connections are set as described in [MIDI setup]({% link getting-started/midi-setup.md %}).
- The Advanced section's claims about microtonal tunings, world scales, metric modulation and bass-line integration. These are not in the app.
- The "hold the current page to open the no-modifier page" rule.
