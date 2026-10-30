---
layout: default
title: "Harmony"
nav_order: 13
description: "Global harmony: chords, key and how tracks follow them."
---

# Harmony

Harmony connects one global key and chord progression to the eight tracks. The key and the chord lane are set once, for the whole project. Each track then chooses how far it follows them, and an incoming note from a Circuit Tracks can transpose the tracks that follow it.

## The parts

| Part | Where | What it sets |
|---|---|---|
| Key | [Global > Key]({% link global/key.md %}) | The root and scale of the project, the home page and the transpose channel |
| Chord lane | [Global > Chords]({% link global/chords.md %}) | Up to eight chord slots, each with a scale degree, a chord type and a length in bars |
| Track follow | [Keys > Harmony]({% link keys/harmony.md %}) | Whether a track follows the key, the chord lane and the transpose, and its harmonizer voices |
| Voicing and arp | [Keys > Voice]({% link keys/voice.md %}) | Inversion, spread, voice leading, and arpeggio octaves, seed and progression |

To open the Global pages, hold SHIFT and tap SESS. RIGHT moves to Chords, and RIGHT twice moves to Key.

{% include launchpad-top-newnav.html lit="shift" hint="1@95,2@98" alt="Launchpad top row: hold SHIFT, then tap SESS to open the Global pages" caption="Hold SHIFT (1), then tap SESS (2) to open Global. RIGHT once is Chords, twice is Key." %}

## Circuit Tracks transpose

An incoming note-on on the listening channel sets a transpose for the tracks that follow it. The transpose is the played note minus a reference, which is C4 for key C and moves with the key's root. The transpose stays in place until another note arrives or Global > Key option 21 resets it. The transpose is snapped into the effective scale of each following track.

- Global > Key option 22 turns listening on or off.
- The channel is set on Global > Key. Off ignores the channel. The default is the Circuit Tracks synth 1 channel. Channels 1 to 16 are also available.
- Only tracks with Follow transpose on are affected. See [Keys > Harmony]({% link keys/harmony.md %}).
- The companion screen shows TRANSPOSE with the offset while it is set.

## Play order

The stages below run in this order when a step plays. Nothing is written into the steps, so turning a stage off brings back the stored notes.

1. Stored notes.
2. The accumulator from [Track > Evolution]({% link track/evolution.md %}), if it is on.
3. The global key, on tracks that follow it.
4. The chord lane, through chord follow.
5. The Circuit Tracks transpose, on tracks that follow it.
6. The sub-step chord from [Type]({% link keys/type.md %}) and [Voicing]({% link keys/voicing.md %}).
7. The voicing tools on [Voice]({% link keys/voice.md %}).
8. The harmonizer voices.

An arp runs last, on the result of these stages. Locked steps follow the global key, but skip the chord lane and the transpose.

## Defaults and older projects

- New projects turn Follow global key on for every track.
- Projects saved before this change load with Follow global key off, so they sound the same as before.
- Drum tracks never follow the global key.
- The companion status line shows the key, the chord that is playing, and the transpose, for example `KEY C Phrygian  CHORD V 7th  TRANSPOSE +5`.

## Related

- [Keys]({% link keys/index.md %}): the Keys sub-mode, where each track's harmony is set.
- [Companion window]({% link companion/index.md %}): the status line and the guide.
