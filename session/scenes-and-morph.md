---
layout: default
title: "Scenes and morph"
parent: "Session"
nav_order: 2
description: "Scenes and the scene morph crossfader."
---

# Scenes and morph

A scene is one pattern per track: a snapshot of which pattern each of the eight tracks should play. Recalling a scene switches all eight tracks together, each at its own launch point.

{% include launchpad-grid.html top="newnav" top_lit="sess" rows=8 presets="empty_row,empty_row,empty_row,empty_row,empty_row,empty_row,empty_row,empty_row" right="scene" scenes="ab......" row8="purple:2:A:Crossfader all A,purple:1::Crossfader step 2,purple:1::Crossfader step 3,purple:1::Crossfader step 4,magenta:1::Crossfader step 5,magenta:1::Crossfader step 6,magenta:1::Crossfader step 7,magenta:2:B:Crossfader all B" hint="1@89,2@79" alt="Launchpad SESS scene column with scene 1 as morph A and scene 2 as morph B, and the bottom row as the crossfader" caption="Hold scene 1 (1), then tap scene 2 (2) to arm a morph. The bottom row becomes the crossfader." %}

## The scene column

| Gesture | Result |
|---|---|
| Tap a scene pad (89 = scene 1 down to 19 = scene 8) | Queues the scene. Each track launches at its own point. Tap the queued scene again to cancel |
| SHIFT + tap | Stores each track's active pattern as that scene |
| Hold DOWN + tap | Empties the scene. Its patterns stay in the pattern bank |

Scene colours: empty is dark, stored is blue, the last recalled is green, queued blinks orange, the scene the song is on is cyan. With SHIFT held, empty scenes show red (ready to store) and stored ones purple.

## Quick slots outside SESS

Pads 11-18 outside SESS are the same eight scenes, but they act at once and are not quantized.

- Tap: recall the scene immediately.
- SHIFT + tap: store the current patterns into that scene.
- CLEAR + tap: empty the scene.

Snapshot chaining still recalls these scenes. Use the SESS scene column when you want a scene change on the bar.

## Morph (crossfader)

A morph blends between two stored scenes while the sequence plays. It never writes into the patterns.

1. Hold scene A.
2. While holding it, tap scene B. Both must be stored and must differ.
3. The bottom row (11-18) becomes an eight-step crossfader: pad 11 is all A, pad 18 is all B. Tapping a step moves the blend there. Tapping the crossfader launches nothing.
4. To end it, tap scene A or B, or hold A and tap B again. The morph lands on the nearer scene. Tapping any other scene ends the morph and launches that scene.

Arming a morph recalls scene A first, so at position 0 the sound is scene A.

- Blended smoothly: velocity, gate, plain chance, CC and NRPN lane values, swing and humanize.
- Switched at the midpoint: step triggers, notes, PREVIOUS and TIMES chances, and the groove template.
- Not morphed: length, sub-steps, step types, accents and mutations.
- A track with no pattern in either scene, or the same pattern in both, does not morph.

{% include hardware-unverified.html text="The midpoint switch has not been checked on hardware for stuck notes, and the crossfader colours were not checked on a Launchpad." %}

## Program change per scene

A scene can send a MIDI program change on each track when it is applied, to recall a patch on the synth. Set it on the companion [Arranger panel]({% link companion/index.md %}): eight values per scene, -1 for none, 0-127 for the program.

- The program change goes out on the same tick as the pattern switch, before the boundary step's notes.
- It is a plain program change with no bank select.

{% include hardware-unverified.html text="Whether the Circuit Tracks picks the patch from a plain program change, and whether drum tracks ignore it, has not been checked on hardware." %}
