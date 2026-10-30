---
layout: default
title: "Held pads and undo"
parent: "Interface"
nav_order: 3
description: "Shift, Lock, Duplicate, Clear, Loop and undo/redo gestures."
---

# Held pads and undo

Some pads act as modifiers. You hold them and tap a second pad. The held pads are SHIFT (95), LOCK (26), LOOP (25), DUP (27), CLEAR (28) and PERF (97).

## Combinations

| Hold | And tap | Result |
|---|---|---|
| {% include pad.html name="shift" %} | A track | Mute or unmute the track |
| {% include pad.html name="clear" %} | A track | Reset every step of that track (its settings stay) |
| {% include pad.html name="dup" %} | A track | Copy the selected track onto the tapped track (speed and channel are not copied) |
| {% include pad.html name="lock" %} | A step | Lock or unlock that step |
| {% include pad.html name="clear" %} | A step | Reset that one step: its edits and its lock go, and its generated value comes back |
| {% include pad.html name="loop" %} | A start step, then an end step | Set a loop on a page that allows locks (either order) |
| {% include pad.html name="clear" %} + {% include pad.html name="loop" %} | | Clear the loop |
| {% include pad.html name="perf" %} | | Fill while held. Used by the Fill conditions |
| {% include pad.html name="shift" %} + {% include pad.html name="perf" %} | | Resync all tracks on the next bar |
| {% include pad.html name="shift" %} + {% include pad.html name="sess" %} | | Open Global |
| {% include pad.html name="clear" %} + {% include pad.html name="sess" %} | | Empty every track's steps, restore its channel, scale and root defaults, and empty all scenes and stored patterns |

Track and step combinations with LEFT, RIGHT, UP and DOWN are in [Modes and pages]({% link interface/modes-and-pages.md %}).

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" held="26" presets="steps_4_floor,empty_row,empty_row,empty_row,empty_row,empty_row,options_row,slots_row" hint="1@26,2@83" alt="Launchpad: LOCK in the options row is held, and a step is tapped to lock it." caption="Hold LOCK (1), then tap a step (2) to lock it. Tap it again with LOCK held to unlock it." %}

## Sticky modifiers

Global > Settings has three options that make a held modifier stay on after a tap: sticky SHIFT (option 2, step pad 83), sticky DUP (option 3, step pad 85) and sticky CLEAR (option 4, step pad 87). Undo and redo never latch. See [Global settings]({% link global/settings.md %}).

## Undo and redo

| Gesture | Result |
|---|---|
| SHIFT + CLEAR (95 + 28) | Undo the last edit |
| SHIFT + DUP (95 + 27) | Redo |

The screen names the action, for example "Undo: ...". Undo and redo are not available:

- in SESS;
- on Global > Projects;
- under the hold-EDIT picker;
- while the automaton view is open;
- while a motion recording pass is open (see [CC]({% link cc/index.md %})).

With a step pad held in EDIT, SHIFT + CLEAR does not undo. It clears that step's parameter locks instead (see [Parameter locks]({% link modulation/parameter-locks.md %})).

{% include launchpad-grid.html top="newnav" top_lit="shift" presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" hint="1@95,2@28" alt="Launchpad: SHIFT in the top row and CLEAR in the options row, to undo." caption="Hold SHIFT (1), then tap CLEAR (2): undo. SHIFT + DUP (27) redoes." %}

{% include tip.html text="Matrix and LFO edits in the companion window are not part of undo." %}
