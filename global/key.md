---
layout: default
title: "Key"
parent: "Global"
nav_order: 3
description: "Global key and transpose."
---

# Key

The Key page sets the global root and scale that tracks can follow, the home page that EDIT returns to, and the channel the Circuit Tracks transposes from. The step pad picks the setting, and the value pads set it.

{% include launchpad-grid.html top="newnav" top_lit="global" rows=8 row1="gray:0::,gray:2:Root:Global root (step 82),gray:0::,gray:0::,gray:0::,gray:0::,gray:2:Scl:Global scale (steps 87 and 88),gray:2:Scl:Global scale" row2="gray:0::,gray:0::,gray:0::,gray:0::,gray:2:Home:Home page (step 75),gray:2:Home:Home page (step 76),gray:0::,gray:0::" row3="gray:0::,gray:0::,gray:2:CT:CT channel (step 63),gray:2:CT:CT channel (step 64),gray:0::,gray:0::,gray:0::,gray:0::" row5="gray:0::,purple:2:C#:Root C sharp,purple:2:D#:Root D sharp,gray:0::,purple:2:F#:Root F sharp,purple:2:G#:Root G sharp,purple:2:A#:Root A sharp,gray:0::" row6="purple:2:C:Root C,purple:2:D:Root D,purple:2:E:Root E,purple:2:F:Root F,purple:2:G:Root G,purple:2:A:Root A,purple:2:B:Root B,purple:2:C:Root C" row7="gray:2:Rst:Reset CT transpose (option 21),gray:2:CT:CT transpose listening (option 22),gray:2:Dft:CT default channel (option 23),gray:0::,gray:0::,gray:0::,gray:0::,gray:0::" hint="1@82,2@34" alt="Launchpad Global Key page: root keyboard on the bottom two value rows, with the step pads for root, scale, home page and CT channel" caption="Pick Root on step 82 (1), then tap the note on the keyboard (2). The root keeps its octave." %}

## Settings

| Step pad | Setting | Values |
|---|---|---|
| 82 | Root | Value pads 31-38 are the white keys C to C. Value pads 42, 43, 45, 46 and 47 are C#, D#, F#, G# and A#. Pads 41, 44 and 48 do nothing. The root keeps its octave |
| 87, 88 | Scale | Value pads 41 No scale, 42 Chromatic, 43 Major, 44 Natural minor, 45 Dorian, 46 Phrygian, 47 Lydian, 48 Mixolydian, 31 Locrian, 32 Harmonic minor, 33 Melodic minor, 34 Pentatonic major, 35 Pentatonic minor, 36 Blues, 37 Whole tone, 38 Diminished |
| 75, 76 | Home page | Value pads 41-44 pick the EDIT sub-mode (Track, Beats, Keys, CC). Value pads 31-38 pick its page 1-8. Default: Beats, Steps |
| 63, 64 | CT channel | Value pads 41-48 are channels 1-8 and 31-38 are channels 9-16. The default follows the device preset (channel 1 on the Circuit Tracks) |

## Options

| Option | Pad | What it does |
|---|---|---|
| 21 | Reset CT transpose | Clears the transpose offset. It is lit while an offset is held |
| 22 | CT listening | On or off. Off ignores the CT channel |
| 23 | CT default channel | Sets the CT channel to the default |

## Notes

- The root and scale are saved with the project. The home page, the EDIT bookmarks and the CT channel are saved in your settings file, so they stay the same in every project.
- A track follows the global key only when its Keys > Harmony page says so, see [Harmony]({% link keys/harmony.md %}). Stored notes are not rewritten; the global key is applied at play time.
- When the CT transposes, a note-on on the listening channel sets a transpose offset. The offset stays until another note arrives or option 21 resets it. The companion shows it as "TRANSPOSE" with the amount. Only tracks with follow transpose on use it, see [Harmony]({% link keys/harmony.md %}).
- The home page is where a tap on EDIT returns you, see [Modes and pages]({% link interface/modes-and-pages.md %}).
