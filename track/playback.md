---
layout: default
title: "Playback"
parent: "Track"
nav_order: 3
description: "Play direction, loop and launch quantize."
---

# Playback

Playback decides how the track moves through its steps: the direction it plays in, the loop it plays inside, and when a newly launched pattern takes over (launch quantize).

Open it from Feel with RIGHT, or hold EDIT and tap pad 43 in the picker.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="track" track_sel=1 presets="steps_empty,steps_empty,steps_empty,steps_empty,empty_row,empty_row,options_row,slots_row" pads="82=purple:3:Dir:Play direction;71=purple:3:Loop:Loop (shows the span);72=purple:3:Loop:Loop (shows the span);61=purple:3:Lnch:Launch quantize;62=purple:3:Lnch:Launch quantize" row5="green:3:Fwd:Forward,green:1:Rev:Reverse,green:1:Pen:Pendulum,green:1:Rnd:Random,green:1:Dr:Drunk,off:::,off:::,off:::" hint="1@82,2@42" alt="Launchpad Track Playback page: direction on step pad 82, loop on 71 and 72, launch quantize on 61 and 62" caption="Tap Direction (1), then Reverse on the value row (2)." %}

## Settings

| Setting | Step pad | Value pads | Default |
|---|---|---|---|
| Direction | 82 | 41 Forward, 42 Reverse, 43 Pendulum, 44 Random, 45 Drunk | Forward |
| Loop | 71 or 72 | Display only (see below) | Off |
| Launch quantize | 61 or 62 | 41 Next bar, 42 Next cycle, 43 Immediate | Next bar |

## Direction

- Forward plays the steps in order. Reverse plays them backwards. Pendulum runs back and forth.
- Random picks steps at random and Drunk takes a random walk, one step forward or back at a time. Both use a seeded generator, so they repeat the same way for the same settings.
- One cycle is the track's length in steps, whatever the direction. Chains, the reset every N bars and the cycle counts all count cycles this way.

## Loop

The loop plays only a span of the track, for example steps 3 to 6.

To set a loop, go to a page where steps can be locked (Beats > Steps, Beats > Repeat, Beats > Conditions, or a Keys page). Hold LOOP (25), tap the first step and then the last step; the order does not matter. Clear it with CLEAR and LOOP together, which returns the track to its full length.

On this page the loop row only shows the current span. Each value pad covers two steps, so pad 41 is steps 1 and 2 and pad 38 is steps 31 and 32.

Live step repeat: hold LOOP and hold one step (or two steps for a range). The held step or range repeats until you let go. The track then carries on from where its playhead would be, with no jump.

## Launch quantize

Launch quantize sets when a pattern you queue in the clip launcher (see [Patterns and launching]({% link session/patterns-and-launching.md %})) actually starts.

- Next bar: starts on the next bar of the bar master. The playhead keeps running.
- Next cycle: starts when this track wraps round to its first step. A track that is not playing never wraps, so its launch waits; use Immediate for that.
- Immediate: starts as soon as it is queued.

If the transport is stopped, a Next bar launch waits for the first bar of the next start. Each track holds one queued launch; a later launch replaces it. Chained scene launches and the song always wait for a bar, even on Immediate.

## See also

- [Feel]({% link track/feel.md %}) for swing and humanize.
- [Steps]({% link beats/steps.md %}) for setting the loop on the steps.
- [Performance]({% link perform/index.md %}) for the held FX that change playback while you play.
