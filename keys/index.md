---
layout: default
title: "Keys"
nav_order: 6
has_children: true
description: "Notes, velocity, gate, chord types, voicing and note sources."
---

# Keys

The Keys sub-mode decides what each step plays: which notes, how hard, how long, what kind of note (single note, arpeggio, chord or strum), where the notes come from, and how they are harmonised and voiced.

## Pages

| Page | Picker pad | Use it to |
|---|---|---|
| [Notes]({% link keys/notes.md %}) | 41 | Choose the notes of a step on a keyboard |
| [Velocity]({% link keys/velocity.md %}) | 42 | Set how hard a step plays |
| [Gate]({% link keys/gate.md %}) | 43 | Set how long each note lasts |
| [Type]({% link keys/type.md %}) | 44 | Choose single note, arpeggio, chord or strum |
| [Voicing]({% link keys/voicing.md %}) | 45 | Choose the pattern for that type |
| [Source]({% link keys/source.md %}) | 46 | Generate notes: Phrase, Random loop, Markov or Stochastic |
| [Harmony]({% link keys/harmony.md %}) | 47 | Follow the global key and chord lane, add harmonizer voices |
| [Voice]({% link keys/voice.md %}) | 48 | Inversion, spread, voice leading and arpeggio settings |

The pages are in this order. With nothing held, LEFT and RIGHT move one page along the list, and UP and DOWN change sub-mode.

## Open Keys

1. Hold EDIT (96). The picker opens.
2. Tap 23 (Keys) on the options row.
3. Tap a page pad on the top value row (41 to 48), then release EDIT.

{% include launchpad-picker.html sub_mode="keys" page=1 hint="1@96,2@23" alt="Launchpad with EDIT held: the picker shows the Keys sub-mode and its pages" caption="Hold EDIT (1), tap 23 for Keys (2). Then tap a page pad from 41 to 48 while still holding EDIT." %}

## Working on a step

- **Notes:** a tap on a step turns it on or off. Hold a step to select it.
- **Velocity, Gate, Type and Voicing:** a tap selects the step. A second tap on the same step clears the selection.
- The value pads and the keyboard act on the held or selected step. With no step held or selected, they act on the step under the playhead. Select a step before you edit a track that is playing.
- On the step pages (Notes, Velocity, Gate, Type and Voicing), hold LOCK (26) and tap a step to lock it. Hold LOOP (25) and tap a start step and an end step to set a loop. Details are on [Held pads and undo]({% link interface/held-pads-and-undo.md %}).

## Related

- [Harmony]({% link harmony/index.md %}): how the global key, chord lane and transpose fit together.
- [Track > Params]({% link track/params.md %}): the track root, scale and speed.
