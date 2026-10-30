---
layout: default
title: "Rules and rack"
parent: "Track"
nav_order: 6
description: "Track rules and the drum rack view."
---

# Rules and rack

Rules and Rack are the two last Track pages. Rules let one track change its steps when another track plays. Rack turns a track into a four-lane drum rack. Both are off until you turn them on.

## Rules

A track has two rules, A and B. Each rule watches a source track and, when a condition holds on that track's last step, changes this track's step.

Open Rules with RIGHT from Evolution, or hold EDIT and tap pad 46 in the picker.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:SrcA:Rule A source;84=purple:3:CndA:Rule A condition;87=purple:3:ActA:Rule A action;72=purple:3:AmtA:Rule A amount;75=purple:3:SrcB:Rule B source;78=purple:3:CndB:Rule B condition;63=purple:3:ActB:Rule B action;66=purple:3:AmtB:Rule B amount" hint="1@82,2@42" alt="Launchpad Track Rules page: rule A and rule B, each with source, condition, action and amount step pads" caption="Tap Rule A source (1), then track 1 on the value row (2)." %}

| Setting | Rule A pad | Rule B pad | Values |
|---|---|---|---|
| Source | 82 | 75 or 76 | 41 Off; 42 to 48 are tracks 1 to 7; 31 is track 8. A track can use itself as its source |
| Condition | 84 or 85 | 78 or 61 | 41 Played, 42 Not played, 43 Accented |
| Action | 87 or 88 | 63 or 64 | 41 Mute step, 42 Accent, 43 Fill, 44 Skip, 45 Transpose |
| Amount | 72 or 73 | 66 or 67 | Used by Transpose, in scale steps: 41 to 48 are -12, -9, -7, -5, -4, -3, -2, -1; 31 to 38 are +1, +2, +3, +4, +5, +7, +9, +12 |

- The actions: Mute step silences the step. Accent raises its velocity. Fill turns a rest into a hit. Skip silences the step and leaves it out of the cycle count, so the pass takes longer. Transpose shifts the notes at play time without changing the stored steps.
- Muted tracks are left alone, and a locked step only takes Accent.
- The condition is read from the source track's last step that was processed.
- Each tick reads every track's state from the tick before, so the order of the tracks does not change the result.
- Rules are off by default and are saved with the project. The companion window shows them on one line, such as RULES A: T3 played > skip.

## Rack

The rack gives a track four lanes, one drum per row of the step area. Lane 1 is the track's own steps. Lanes 2 to 4 are extra drum lanes. Each lane has its own MIDI note.

Open Rack with RIGHT from Rules, or hold EDIT and tap pad 47 in the picker.

{% include launchpad-rack.html lanes="x...x...,..x...x.,xxxxxxxx,....x..." page=1 bar=6 hint="1@83,2@44" alt="Launchpad drum rack view: four lanes of eight steps, with lane 1 on the top row" caption="Tap a step in a lane (1). The value row shows the selected step's chance and velocity (2)." %}

| Setting | Step pads | Values |
|---|---|---|
| Rack on | 82 | 42 on, 41 off |
| Channel | 85 or 86 | 41 is the device drum channel (channel 10 on the Circuit Tracks); 42 to 48 and 31 to 38 are channels 1 to 15 |
| Note, lane 1 | 71 or 72 | 41 follows the device's default drum note. Pad 31 is that same note, 42 to 48 are 7 to 1 semitones below it and 32 to 38 are 1 to 7 above it |
| Note, lane 2 | 75 or 76 | As lane 1 |
| Note, lane 3 | 61 or 62 | As lane 1 |
| Note, lane 4 | 65 or 66 | As lane 1 |

{% include hardware-unverified.html text="The rack is described from the app code. It has not been tried with a Launchpad and a drum machine." %}

With the Circuit Tracks preset the four lanes start on notes 60, 62, 64 and 65.

Once the rack is on, Beats > Steps shows the four lanes:

1. Tap a step in a lane to turn it on or off.
2. Options 21 to 24 pick the page: steps 1 to 8, 9 to 16, 17 to 24 or 25 to 32. A page past the end of the length is dark.
3. Press and hold a lit step to select it. The value row then sets its chance (41 to 48: 1/8, 1/4, 1/3, 1/2, 2/3, 3/4, 7/8, 19/20; tap the lit pad again to turn the chance off) and its velocity (31 to 38: 16 to 127).
4. LOCK and a tap locks a step; CLEAR and a tap resets it.

## Gotchas

- Generators (Euclid, accents, rotation, evolution and randomize) act on lane 1 only.
- A copy of a track made with DUP copies lane 1 only.
- Lane rotation is not built yet.
- Lanes are part of the pattern, so they switch with it. Projects saved before the rack existed have no lanes and load with the rack off.
- Track mute silences all four lanes.

## See also

- [Steps]({% link beats/steps.md %}) for the step editing that the rack lanes share.
- [Drum map]({% link beats/drum-map.md %}) for generating a rhythm for the rack.
- [Evolution]({% link track/evolution.md %}) for actions that run every N cycles.
