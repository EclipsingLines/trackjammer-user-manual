---
layout: default
title: Track Settings Page
nav_order: 5
has_children: true
permalink: /track-settings/
---

# Track Settings page

{% include launchpad-grid.html presets="track_params_none_r1,track_params_none_r2,track_params_none_r2,empty_row_step,empty_row_step,empty_row_step,extra_row_empty,save_slots" page=0 %}

The Track Settings page allows for setting track wide parameters like, these setting have a direct effect over the track and MIDI control subtracks.

Some of these changes do not change something immediately but will apply changes over the next generative actions.

Selecting a **track setting** will trigger a scrolling text with the name of the selected parameter. The UI is still fully responsive under the scrolling text and pressing **any** pad will stop the current scrolling text.
