---
layout: default
title: "Beat count"
parent: "Beats"
nav_order: 3
description: "Number of beats, rotation and the second generator."
---

# Beat count

Beat count sets how many beats the Euclidean generator places across the cycle of the selected track. It also holds the evenness of the spread, the complement switch, and a second generator that can be combined with the first.

Hold EDIT and tap pad 43 in the picker, or press RIGHT from Length.

{% include launchpad-grid.html top="newnav" top_lit="edit" sub_mode="beats" presets="empty_row,empty_row,empty_row,empty_row,empty_row,empty_row,options_row,slots_row" row1="cyan:3:1:Beat 1,cyan:3:2:Beat 2,cyan:3:3:Beat 3,cyan:3:4:Beat 4,off:::,off:::,off:::,off:::" pads="21=green:3:Cmpl:Complement on or off;22=yellow:2:GenB:Edit generator B;23=purple:2:AND:Combine A and B with AND;24=purple:2:OR:Combine A and B with OR;25=purple:2:XOR:Combine A and B with XOR" hint="1@84,2@21" alt="Launchpad Beats Beat count page: four step pads are lit for four beats; options 21 to 25 are complement, generator B, AND, OR and XOR" caption="Tap pad 84 for 4 beats (1). Option 21 flips the complement (2)." %}

## Beat count

The step area sets the number of beats. The lit steps run from the left up to the count, so pad 84 sets 4 beats and pad 81 sets 1. The count cannot be more than the length. To set it back to 0, hold CLEAR and tap an arrow pad while you are on this page.

## Evenness

The value area sets evenness: how closely the beats follow the standard Euclidean spread. The 16 value pads run from pad 41 (lowest) to pad 38 (highest, the default), which gives the standard spread. Lower pads move the pattern away from it. Deep rhythm on [Params]({% link track/params.md %}) overrides evenness.

## Options

| Pad | Option | What it does |
|---|---|---|
| 21 | Complement | Inverts the beats. Also on [Params]({% link track/params.md %}), step pad 72. |
| 22 | Generator B | Switches the step and value areas to the second generator. Tap again to go back to A. |
| 23 | AND | Keeps only the steps that both generators place. Tap again to turn the combination off. |
| 24 | OR | Places a beat wherever either generator places one. Tap again to turn it off. |
| 25 | XOR | Places a beat where exactly one generator places one. Tap again to turn it off. |

## Second generator

Generator B has its own beat count and rotation. With Generator B selected (option 22):

- The step area sets the beat count of B.
- The value area sets its rotation, which moves where its beats start.
- Options 23 to 25 combine B with A. The combined result is what plays.

Combining is off by default, so generator B has no effect until you pick AND, OR or XOR. The view goes back to A when you leave the page or the Beats sub-mode.

## Gotchas

- A locked step keeps its value even when the combination would remove it.
- Changing the beat count regenerates the generated steps. See [Length]({% link beats/length.md %}) for what is kept.

## See also

- [Steps]({% link beats/steps.md %}) for turning individual steps on and off.
- [Accent]({% link beats/accent.md %}) for accenting the beats you place here.
