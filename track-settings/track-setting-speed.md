---
layout: default
title: Track Speed Settings
nav_order: 3
parent: Track Settings Page
---

# Track Speed

This parameter adjusts the speed relative to the control clock, the default value is 1x the control clock.

Available speed options:

## Even divisions and multipliers (top row in speed display)

- THIRTY_SECOND,      # 1/32
- SIXTEENTH,          # 1/16  
- EIGHTH,             # 1/8
- QUARTER,            # 1/4
- HALF,               # 1/2
- ONE,                # 1x
- TWO,                # 2x
- FOUR,               # 4x

## Triplets and odd signatures (bottom row in speed display)

- QUARTER_TRIPLET,    # 1/4T
- HALF_TRIPLET,       # 1/2T
- ONE_TRIPLET,        # 1T
- TWO_TRIPLET,        # 2T
- FOUR_TRIPLET,       # 4T
- DOTTED_QUARTER,     # 1/4.
- DOTTED_HALF,        # 1/2.
- CUSTOM              # User defined

Changing the speed also changes the position of the playhead.

{% include launchpad-grid.html presets="track_params_none_r1_3,track_params_none_r2,track_params_none_r2,empty_row_step,empty_row_step,empty_row_step,extra_row_empty,save_slots" page=0 %}
