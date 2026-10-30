---
layout: default
title: "Evolution"
parent: "Track"
nav_order: 5
description: "Let a track change by itself over time."
---

# Evolution

Evolution lets a track change on its own. Every N cycles it runs one action: rotate the pattern, re-mutate it, shift the phrase, transpose it, or accumulate a drift in the notes.

Open it from Voices with RIGHT, or hold EDIT and tap pad 45 in the picker.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:Every:Cycles between actions;87=purple:3:Act:Action;88=purple:3:Act:Action;75=purple:3:Amt:Amount;76=purple:3:Amt:Amount;63=purple:3:Rng:Accumulate range;64=purple:3:Rng:Accumulate range" hint="1@82,2@45" alt="Launchpad Track Evolution page: every-N-cycles on step pad 82, action on 87 and 88, amount on 75 and 76, accumulate range on 63 and 64" caption="Tap Every (1), then 4 on the value row (2): the action runs every 4 cycles." %}

## Settings

| Setting | Step pad | Value pads |
|---|---|---|
| Every | 82 | 41 Off; 42 to 48 are 1 to 7 cycles; 31 to 37 are 8 to 14; 38 is 16 |
| Action | 87 or 88 | 41 Rotate, 42 Re-mutate, 43 Shift phrase, 44 Transpose, 45 Accumulate |
| Amount | 75 or 76 | 41 to 48 are -8 to -1; 31 to 38 are +1 to +8 |
| Accumulate range | 63 or 64 | 41 to 48 are 1 to 8 scale steps; 31 to 36 are 9 to 14. Pads 37 and 38 do nothing |

## Actions

- Rotate moves the pattern by the amount. Locked steps move with it. The change is stored.
- Re-mutate runs the accent and mutation pass again. Locks and hand edits are kept. The change is stored.
- Shift phrase moves the offset of the Phrase note source (see [Source]({% link keys/source.md %})). The notes change from the next steps that fire.
- Transpose moves the unlocked steps by the amount, once. The change is stored.
- Accumulate adds the amount to the notes every N cycles and wraps inside the accumulate range. It is played, not stored, and locked steps keep their notes.

A cycle is the track's length in steps, as set on [Playback]({% link track/playback.md %}). The companion window counts down to the next action.

## Gotchas

- Evolution is off when Every is set to Off. This is the default. The other defaults are action Rotate, amount +1 and accumulate range 7.
- Moving the action away from Accumulate resets the accumulator to 0, which brings back the original notes.
- The accumulator is not saved with the project. It restarts at 0 whenever the transport starts.

## See also

- [Keys > Source]({% link keys/source.md %}) for the phrase source that Shift phrase moves.
- [Steps]({% link beats/steps.md %}) for locking steps. Transpose and Accumulate leave locked steps alone.
