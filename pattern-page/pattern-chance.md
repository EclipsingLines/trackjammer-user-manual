---
layout: default
title: Pattern Chance
parent: Pattern Page
nav_order: 5
---
# Step Chance

{% include launchpad-grid.html presets="value_chance" show_top=true page=1 subpage=-1 %}

{% include step-toggle-info.html %}

In this page you can change the "Chance" for that a selected step will trigger.

The value area is divided into 2:

- The **Top row** allows for setting the **Chance Value** for the current chance type
- The **Bottom row** allows for setting the **Chance Type**

A step has by default a probability **chance type** with a value of 100% to trigger.

{: .note-title}
> Substep Chance
>
> Substeps are tied to the step chance all together. If the step should trigger **ALL** substeps will play, if the step should not trigger then **NONE** of the substeps will not trigger.

## Chance Types

There are 3 different **chance types** a step could have:

- Based on previous active step
- Based on sequence cycles
- Based on probabilities

### Last / Not Last

This chance type ties the current step to the **previous active step** in the current track sequence.

This is the leftmost option in the **Bottom row** of the value area.

The **Top row** of the value area acts as a toggle button when in this **chance type**

#### Last

If last is active and the last **active** step did **not trigger** (due to it's own chance settings) then this step will **not trigger**.
If the last **active** step in the sequence **triggered** then this step **will trigger**.

#### Not Last

If last is active and the last **active** step did **not trigger** (due to it's own chance settings) then this step **will trigger**.
If the last **active** step in the sequence **triggered** then this step will **not trigger**.

### Cycles

This **chance type** ties the current step to a **secondary chnace sequence**, in this sequence, every time the main track sequence completes a cycle the **secondary chance sequence** advances a step.

The **secondary chance sequence** can have up to 8 steps and each can be trigered individually.

This is the middle option in the **Bottom row** of the value area and it has 2 buttons:

- Left button sets the **secondary chance sequence** length
- Right button sets the active steps in the **secondary chance sequence**

The **Top row** of the value area displays the **secondary chance sequence** and allows toggling steps ON and OFF

{% include launchpad-grid.html presets="steps_4_floor_select,steps_4_floor,empty_row,empty_row" %}

### Probability

This **chance type** allows for traditional probability based chance for the selected step.

This is the rightmost option in the **Bottom row** of the value area. Tapping this button will immediately set the **chance type** to Probability and the **Chance value** to 100%.

The **Top row** of the value area has a single row "value slider" with 8 different options:

- 1/8
- 1/4
- 1/3
- 1/2
- 2/3
- 3/4
- 7/8
- 19/20

## Next Steps

Once you've set up evolving patterns using chance you can:

- **[Add substeps to Active Steps →](pattern-substeps.html)** - Create rolls, flams and offset hits for accents and groove
- **[Edit Step Notes →](../notes-page/index.md)** - Take full control of your sequence and shape it to your liking
