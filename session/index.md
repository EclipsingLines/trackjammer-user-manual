---
layout: default
title: "Session"
nav_order: 9
has_children: true
description: "The SESS clip launcher: patterns, scenes, morph and song."
---

# Session

SESS (pad 98) turns the whole main grid into a clip launcher. Each column is a track and each row is one of its eight patterns. The right column becomes the eight scenes. Anything you queue starts at the launch point of its track, so the groove keeps running until then.

{% include launchpad-clips.html patterns="p.f.....,.q......" scenes="cfq....." song="ready" hint="1@98,2@72" alt="Launchpad clip launcher: pattern 1 of track 1 playing, pattern 2 of track 2 queued, scene 1 last launched, song ready" caption="Tap SESS (1), then tap pattern 2 on track 2 to queue it (2)." %}

## Pads in SESS

| Area | Pads | Use |
|---|---|---|
| Patterns | 81-88 (pattern 1) down to 11-18 (pattern 8) | Tap to queue that pattern on that track. A column is a track |
| Scenes | 89, 79, 69, 59, 49, 39, 29, 19 | Tap to queue scene 1-8. Every track launches its own pattern from the scene |
| Crossfader | 11-18, only while a morph is armed | Sets the blend between two scenes |
| Arrows | UP (91), DOWN (92), RIGHT (94) | RIGHT starts or stops the song. UP and DOWN are held as DUP and CLEAR for the copy and clear gestures. LEFT does nothing here |

## Pages in this section

- [Patterns and launching]({% link session/patterns-and-launching.md %}): what a pattern holds, launch points, copy and clear.
- [Scenes and morph]({% link session/scenes-and-morph.md %}): scene recall, the quick slots, the crossfader and program changes.
- [Song]({% link session/song.md %}): the arranger that plays scenes in order.
- [Projects]({% link global/projects.md %}): saving and loading whole projects, which is a Global page, not SESS.

## Good to know

- Undo and redo are off in SESS. Pads 27 and 28 are plain grid pads here, not DUP and CLEAR.
- SHIFT + SESS opens Global, not this view.
- Quick-slot pads 11-18 outside SESS recall at once. Inside SESS, the same pads are the eighth pattern row, so use the scene column for quantized scene changes.

{% include warning.html text="CLEAR + SESS resets every track, pattern and scene. Save the project first if you may want the current work back." %}
