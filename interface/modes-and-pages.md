---
layout: default
title: "Modes and pages"
parent: "Interface"
nav_order: 2
description: "EDIT sub-modes, their pages and how to move between them."
---

# Modes and pages

The top row chooses a mode. EDIT has four sub-modes, and each sub-mode has its own pages. The arrows move between pages and sub-modes.

## Modes

| Mode | How | What it is |
|---|---|---|
| EDIT | Tap {% include pad.html name="edit" %} | Step and parameter editing, in the sub-modes below |
| PERF | Tap {% include pad.html name="perf" %} | Performance grid: FX, density, randomize and mutate, tempo and mute scenes. Tap enters PERF when you let go. See [Perform]({% link perform/index.md %}) |
| SESS | Tap {% include pad.html name="sess" %} | Clip launcher: patterns, scenes and the song. See [Session]({% link session/index.md %}) |
| Global | SHIFT + SESS | Six pages of global settings. See [Global]({% link global/index.md %}) |

Tapping EDIT from PERF, SESS or Global returns to EDIT on the sub-mode and page you used last.

## EDIT sub-modes and pages

Pages are listed in the order that LEFT and RIGHT step through them. The picker pad is the pad that opens the page with the hold-EDIT picker.

| Sub-mode | Pages, in order | Picker pads |
|---|---|---|
| Track (pad 21) | Params, Feel, Playback, Voices, Evolution, Rules, Rack | 41 to 47 |
| Beats (pad 22) | Steps, Length, Beats, Accent, Repeat, Conditions, Drum map | 41 to 47 |
| Keys (pad 23) | Notes, Velocity, Gate, Type, Voicing, Source, Harmony, Voice | 41 to 48 |
| CC (pad 24) | Settings, CC 1, CC 2, CC 3, CC 4 | 41 to 45 |

The sub-mode pads 21 to 24 are the ones shown in the picker. Each page is described in its section: [Track]({% link track/index.md %}), [Beats]({% link beats/index.md %}), [Keys]({% link keys/index.md %}) and [CC]({% link cc/index.md %}).

## Arrows

| Gesture | Result |
|---|---|
| LEFT / RIGHT, nothing held | Previous / next page. They stop at the first and last page; they do not wrap round |
| UP / DOWN, nothing held | Previous / next EDIT sub-mode. Opens on that sub-mode's last page |
| Track held + LEFT / RIGHT | Rotate the track |
| Track held + UP / DOWN | Transpose the track |
| Step held + UP / DOWN | Transpose the held steps |

On Global, LEFT and RIGHT move between the Global pages.

## The hold-EDIT picker

Hold EDIT (96) for a moment. The options row shows the four sub-modes, and the top value row shows the pages of the sub-mode you are in. Tap a sub-mode to open it on its last page, or tap a page to open it. Let go of EDIT to return to the normal display.

{% include launchpad-picker.html sub_mode="beats" page=3 bookmarks="track:1,beats:3,keys:6,-" hint="1@96,2@43" alt="Launchpad with EDIT held: the picker shows the Beats sub-mode, with page 3 (Beats) lit." caption="Hold EDIT (1), then tap 43 (2) to open Beats > Beats." %}

The bottom value row, 31 to 38, holds bookmarks. While EDIT is held, tap one to jump to the sub-mode and page saved in it. The jump closes the picker. Hold EDIT and press SHIFT with a bookmark pad to save the current place there. Hold EDIT and press CLEAR with a bookmark pad to empty it.

## Home page

Tap EDIT while already in EDIT to jump to the home page. The default home page is Beats > Steps. You can change it on Global > Key, in the step pads 75 and 76.
