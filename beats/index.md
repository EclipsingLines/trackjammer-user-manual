---
layout: default
title: "Beats"
nav_order: 5
has_children: true
description: "Euclidean beats, step editing, accents, repeats and conditions."
---

# Beats

The Beats sub-mode edits the rhythm of the selected track: which steps play, how long the cycle is, how many beats the Euclidean generator places, how steps are accented, repeated and conditioned, and the drum map.

Open it with EDIT (96): tap EDIT, then tap UP or DOWN with nothing held until the sub-mode reads Beats, or hold EDIT and tap pad 22 in the picker.

{% include launchpad-picker.html sub_mode="beats" page=1 hint="1@96,2@41" alt="Launchpad with EDIT held: the picker shows the Beats pages, with page 1 Steps marked" caption="Hold EDIT (1), then tap a page on the value row (2). Page 1 is Steps." %}

## Pages

| Page | Picker pad | What it sets |
|---|---|---|
| [Steps]({% link beats/steps.md %}) | 41 | Steps on and off, chance, locks |
| [Length]({% link beats/length.md %}) | 42 | Cycle length, from 1 to 32 steps |
| [Beat count]({% link beats/beats.md %}) | 43 | Beats placed by the generator, evenness and the second generator |
| [Accent]({% link beats/accent.md %}) | 44 | How many steps are accented, how strongly and what the accent does |
| [Repeat]({% link beats/repeat.md %}) | 45 | Repeat hits (ratchets) inside a step |
| [Conditions]({% link beats/conditions.md %}) | 46 | Trig conditions: fill, first cycle, neighbour track |
| [Drum map]({% link beats/drum-map.md %}) | 47 | Rhythm generated from a two-fader map |

With nothing held, LEFT and RIGHT step through the pages in this order.

## Generated steps

Length and beat count regenerate the generated steps. Locked steps are always kept. Steps you edit by hand are locked automatically while Global > Settings, option 7 ('Edits survive regen', step pad 75) is on, which is the default. With the option off, every unlocked step is rewritten.

## Working in Beats

1. Pick the page with the arrows or the picker.
2. To set chance on Steps, and on Repeat and Conditions, select a step first by pressing and holding it. Length works from the step area alone; Beat count uses the step area for the count and the value row for evenness.
3. Use the value row to set the chosen value.
4. Use UNDO (SHIFT + CLEAR) if the change was wrong. See [Held pads and undo]({% link interface/held-pads-and-undo.md %}).

## See also

- [Track]({% link track/index.md %}) for the speed, direction and feel of the same track.
- [Keys]({% link keys/index.md %}) for the notes played on the steps.
