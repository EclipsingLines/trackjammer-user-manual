---
layout: default
title: "Clock"
parent: "Global"
nav_order: 4
description: "Tempo, clock source and transport."
---

# Clock

The Clock page sets the tempo and decides which device is the clock master. By default the Circuit Tracks is the master and TrackJammer follows it. You can make TrackJammer the master, and then it sends the clock.

{% include launchpad-grid.html top="newnav" top_lit="global" row1="green:3:Mst:Clock source: TrackJammer is master (81),cyan:1:Int:Clock source: internal with no sequencer (82),cyan:1:Ext:Clock source: Circuit Tracks is master (83),gray:0::,gray:0::,gray:0::,gray:0::,gray:0::" row5="gray:2:-10:Tempo -10 BPM (master only),gray:2:-5:Tempo -5 BPM (master only),gray:2:-1:Tempo -1 BPM (master only),gray:2:-.5:Tempo -0.5 BPM (master only),gray:2:+.5:Tempo +0.5 BPM (master only),gray:2:+1:Tempo +1 BPM (master only),gray:2:+5:Tempo +5 BPM (master only),gray:2:+10:Tempo +10 BPM (master only)" row6="gray:2:60:Preset 60 BPM (master only),gray:2:80:Preset 80 BPM (master only),gray:2:90:Preset 90 BPM (master only),gray:2:100:Preset 100 BPM (master only),gray:2:110:Preset 110 BPM (master only),gray:2:120:Preset 120 BPM (master only),gray:2:140:Preset 140 BPM (master only),gray:2:160:Preset 160 BPM (master only)" row7="gray:2:Mst:TrackJammer is clock master (option 21),gray:2:Log:Stability log on or off (option 22),gray:2:Tap:Tap tempo (option 23),gray:0::,gray:0::,gray:0::,gray:0::,gray:0::" hint="1@21,2@41" alt="Launchpad Global Clock page: the clock source lights, tempo step and preset pads, and the master, log and tap options" caption="Turn the master on (1), then set the tempo with the step or preset pads (2)." %}

## Clock source

Pads 81-83 only show who is the clock. Only the one in use is lit:

- 81: TrackJammer is the master.
- 82: the internal clock, with no sequencer connected.
- 83: the Circuit Tracks is the master.

## Master (option 21)

- Off by default. The Circuit Tracks is the master.
- On: TrackJammer runs its own clock, even with a sequencer connected. It sends the MIDI clock tick to every open output and to the Launchpad port, plus start, stop and continue. It ignores incoming clock.
- Turning it on while playing keeps the bar position. Taking over from a playing Circuit Tracks keeps its measured tempo.
- Turning it off hands the clock back to the Circuit Tracks. The internal tempo returns to 120 BPM.
- The setting and the tempo are saved in your settings file, not in the project.

## Tempo (master only)

- Steps 41-48 move the tempo by -10, -5, -1, -0.5, +0.5, +1, +5 or +10 BPM.
- Presets 31-38 set 60, 80, 90, 100, 110, 120, 140 or 160 BPM.
- Tap tempo (option 23) averages the last four taps. A pause longer than 2 s starts again.
- On [Perform]({% link perform/index.md %}) the tempo row also gives nudge and ramps while you hold a pad.

## Precise clock

While TrackJammer is the master, the internal clock runs on its own timing thread on a fixed schedule, so it does not drift.

{% include hardware-unverified.html text="Clock jitter and long-run stability were not measured on hardware." %}

## Stability log (option 22)

Off by default. The command-line flag `--telemetry` also turns it on. It writes one row per minute to a CSV file in the data folder next to the program, with tick timing, dropped ticks, MIDI counts and reconnects. Nothing is sent anywhere.
