---
layout: default
title: Track Scale Settings
nav_order: 1
parent: Track Settings Page
---

# Track Scale

This setting selects the musical scale for the current **Track**. The scale is built upon the selected [**Root Note**](track-setting-root.html) and determines which notes are available to the generative algorithms.

### No Scale

The first option is **No Scale**. In this mode, only the **Root Note** is available. This is useful for triggering drum samples or other non-pitched instruments.

### Available Scales

**TrackJammer** includes 15 different scale presets:

- **Chromatic**: All 12 semitones.
- **Major**: The Ionian mode.
- **Natural Minor**: The Aeolian mode.
- **Dorian**: A minor scale with a raised 6th.
- **Phrygian**: A minor scale with a flat 2nd.
- **Lydian**: A major scale with a raised 4th.
- **Mixolydian**: A major scale with a flat 7th.
- **Locrian**: A diminished scale.
- **Harmonic Minor**: A minor scale with a raised 7th.
- **Melodic Minor**: A minor scale with a raised 6th and 7th.
- **Pentatonic Major**: A 5-note major scale.
- **Pentatonic Minor**: A 5-note minor scale.
- **Blues**: The blues scale.
- **Whole Tone**: A scale made entirely of whole steps.
- **Diminished**: A half-whole diminished scale.

{% include launchpad-grid.html presets="track_params_none_r1_1,track_params_none_r2,track_params_none_r2,empty_row_step,empty_row_step,empty_row_step,extra_row_empty,save_slots" page=0 %}
