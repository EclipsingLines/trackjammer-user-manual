---
layout: default
title: "Song"
parent: "Session"
nav_order: 3
description: "Play a song of scenes with follow actions."
---

# Song

The arranger plays a list of scenes in order and can jump between them with follow actions. It replaces snapshot chaining while it is on.

{% include launchpad-clips.html scenes="csffffff" song="playing" hint="1@94" alt="Launchpad clip launcher with the song playing: scene 1 is the current scene, RIGHT is lit green" caption="Tap RIGHT (1) to start or stop the song. The scene it is on is cyan." %}

## Start and stop

- Tap RIGHT (94) in SESS. The pad is green while the song runs.
- An empty song shows "Song is empty". Build the song on the companion [Arranger panel]({% link companion/index.md %}) first.
- Editing happens only on the companion Arranger panel: the list, Start and Stop, and the per-scene settings.

## Entries and follow actions

Each entry has a scene, a length of 1-64 bars and up to two follow actions, each with a chance.

- Follow actions are NEXT, PREVIOUS, FIRST, LAST, RANDOM, ANY OTHER and STOP.
- When an entry starts, its follow action is rolled once: action A first, then action B, otherwise NEXT.
- NEXT on the last entry wraps back to the first.
- STOP ends the song at the end of that entry.
- Timing counts the bar master's bars. A scene change lands on a downbeat.
- Randomness is seeded and re-seeded at each start, so the same seed replays the same song.

## Auto fill and transitions

Each scene can have a transition, set on the Arranger panel. The transition belongs to the scene you are leaving. It runs during the last one or two bars before the change.

| Type | What it does |
|---|---|
| None | Nothing |
| Fill | Sets the fill state, so FILL and NOT FILL conditions play their part. See [Conditions]({% link beats/conditions.md %}) |
| Density | Sets the density master (see [Perform]({% link perform/index.md %})) to the amount, default 75, and returns it at the change |
| FX | Starts the chosen performance FX on all tracks |

- Length is one or two bars.
- A transition ends at the change, or when the song or the transport stops. Anything you already held (fill, FX or density) is left alone.
- Only the arranger triggers transitions. A scene you queue by hand does not.

## What is saved

The song, its transitions, the seed and the start entry are saved with the project. The on or off state of the arranger is not saved, so a project loads with the song stopped.

{% include hardware-unverified.html text="Song replay with follow actions and seeds has been tested in automated tests only. Check it on hardware before relying on it in a live set." %}
