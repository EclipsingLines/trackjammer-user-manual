---
layout: default
title: "Settings"
parent: "Global"
nav_order: 1
description: "Global options on the step pads."
---

# Settings

The first Global page holds 13 options. Each one sits on a step pad. Press the step pad to pick the option, then use the value pads to set it. Boolean options flip when you press any value pad.

{% include launchpad-grid.html top="newnav" top_lit="global" rows=3 row1="gray:0::,gray:2:Scr:Scroll text (option 1),gray:0::,gray:2:Shf:Sticky SHIFT (option 2),gray:0::,gray:2:Dup:Sticky DUP (option 3),gray:0::,gray:2:Clr:Sticky CLEAR (option 4)" row2="gray:2:Pch:Save patch (option 5),gray:0::,gray:2:Ext:Record external (option 6),gray:0::,gray:2:Reg:Edits survive regen (option 7),gray:2:Bar:Bar master (option 8),gray:0::,gray:2:Chn:Chain length (option 9)" row3="gray:0::,gray:2:Fol:Chain follows bar master (option 10),gray:0::,gray:2:Swg:Global swing (option 11),gray:0::,gray:2:Grv:Global groove (option 12),gray:0::,gray:2:Gde:Show guide (option 13)" alt="Launchpad Global Settings page: the 13 options on their step pads" caption="Each lit step pad is one option. Press it to pick the option, then set the value on the value pads." %}

## Options

Settings are kept in your settings file, so they apply to every project.

| # | Option | Step pad | Default | What it does |
|---|---|---|---|---|
| 1 | Scroll text | 82 | Off | Lets the Launchpad show scrolling text messages |
| 2 | Sticky SHIFT | 83 | Off | SHIFT stays on after a tap |
| 3 | Sticky DUP | 85 | Off | DUP (27) stays on after a tap |
| 4 | Sticky CLEAR | 87 | Off | CLEAR (28) stays on after a tap. Undo and redo never latch |
| 5 | Save patch | 71 | Off | When a scene is stored, asks the device for its patch dumps and keeps them in memory for that scene (Circuit Tracks: two SysEx messages) |
| 6 | Record external | 73 | Off | Adds incoming Circuit Tracks messages to the MIDI recording. See [Recording and files]({% link recording-and-files/index.md %}) |
| 7 | Edits survive regen | 75 | On | On: regenerating a track keeps hand edits. Off: regeneration rewrites every unlocked step |
| 8 | Bar master | 76 | Clock | Which bar counter drives the bars, the polymeter reset and resync. Value pad 41 = Clock, 42 = Selected track, 43-48 and 31-32 = Tracks 1-8 |
| 9 | Chain length | 78 | 1 | Bars between snapshot-chained scenes. Value pads 41-48 and 31-38 = 1 to 16 bars |
| 10 | Chain follows bar master | 62 | On | On: chaining counts the bar master's bars. Off: counts clock bars from the transport start |
| 11 | Swing | 64 | 50 | Global swing from 50 to 75, added to each track's own swing. The value pads step up from 50 at pad 41 to 75 at pad 38. See [Feel]({% link track/feel.md %}) |
| 12 | Groove | 66 | Straight | Groove template for tracks set to inherit the global groove. Pads 41 Straight, 42 MPC 54, 43 MPC 58, 44 MPC 62, 45 MPC 66, 46 Laid back, 47 Rushed hats, 48 12/8 shuffle, 31 Drunk |
| 13 | Show guide | 68 | On | Shows the guide panel in the companion window. Same setting as the Guide button |

{% include tip.html text="Sticky DUP and sticky CLEAR make the held pad latch. Undo and redo are the exception: their gesture never latches, so SHIFT + CLEAR still works with sticky CLEAR on." %}

## Related

- [Feel]({% link track/feel.md %}): the track's own swing and groove.
- [Companion window]({% link companion/index.md %}): where the guide lives.
