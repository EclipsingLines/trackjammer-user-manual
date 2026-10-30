---
layout: default
title: "Global"
nav_order: 10
has_children: true
description: "Project-wide settings, chords, key, clock, projects and LFOs."
---

# Global

Global holds the project-wide settings and tools. Open it by holding SHIFT (95) and tapping SESS (98). The SESS pad is lit red while you are in Global.

{% include launchpad-top-newnav.html lit="global" hint="1@95,2@98" alt="Launchpad top row: hold SHIFT, then tap SESS to open Global" caption="Hold SHIFT (1), then tap SESS (2)." %}

## Pages

| Page | Name | How to get there from Settings | What it holds |
|---|---|---|---|
| 1 | [Settings]({% link global/settings.md %}) | Start page | The 13 global options |
| 2 | [Chords]({% link global/chords.md %}) | RIGHT once | The chord progression lane |
| 3 | [Key]({% link global/key.md %}) | RIGHT twice | Global root, scale, home page and CT channel |
| 4 | [Clock]({% link global/clock.md %}) | RIGHT three times | Clock master and tempo |
| 5 | [Projects]({% link global/projects.md %}) | RIGHT four times | Whole-project save slots |
| 6 | [LFO]({% link global/lfo.md %}) | RIGHT five times | The eight project LFOs |

## Moving around

- LEFT and RIGHT move between pages. Hold nothing else while you press them.
- The companion window shows the page as, for example, "GLOBAL > Projects (5/6)".
- Tap EDIT to leave Global. You return to the last EDIT sub-mode and page you used, not to the home page.
- On Settings, Key and LFO the step pads choose which setting you edit, and the value pads set it. On Chords the step pads are the eight chord slots. On Clock they only show who is the clock, and the value pads set the tempo. Projects is different: the whole grid is save slots.

Some values are saved in the project and some in your settings file, so they apply to every project. Each page says which.

## Related

- [Session]({% link session/index.md %}): the clip launcher, which shares the SESS pad.
- [Modulation]({% link modulation/index.md %}): the LFO pool and knob control, which the LFO page and Matrix panel set up.
- [Harmony]({% link harmony/index.md %}): chords, key and how they reach the tracks.
