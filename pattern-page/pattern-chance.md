---
layout: default
title: Pattern Chance
parent: Pattern Page
nav_order: 5
---
# Step Chance

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor,steps_empty,steps_empty,value_chance,extra_row_empty,save_slots" show_top=true page=1 subpage=-1 %}

{% include step-toggle-info.html %}

On this page, you can change the chance that a selected **Step** will trigger, allowing you to create evolving and unpredictable **Patterns**.

By default, a **Step** has a 100% probability of triggering.

The **Value Area** is divided into two rows:

- The **Top Row** sets the **Chance Value** for the current **Chance Type**.
- The **Bottom Row** selects the **Chance Type**.

{: .note-title}
> Substep Chance
> **Substeps** are tied to their parent **Step's** chance. If the parent **Step** triggers, all of its **Substeps** will play. If it does not, none of them will.

## Chance Types

There are three different **Chance Types** a **Step** can have:

### 1. Last / Not Last

This type ties the current **Step** to the previous active **Step** in the sequence. This is the leftmost option in the **Bottom Row** of the **Value Area**.

- **Last**: This **Step** will only trigger if the previous active **Step** also triggered.
- **Not Last**: This **Step** will only trigger if the previous active **Step** did *not* trigger.

Use the **Top Row** of the **Value Area** to toggle between **Last** and **Not Last**.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,value_chance_last,extra_row_empty,save_slots" show_top=true page=1 subpage=-1 %}

### 2. Cycles

This type ties the current **Step** to a secondary chance sequence. Every time the main **Track** **Pattern** completes a cycle, this secondary sequence advances one **Step**.

This is the middle option in the **Bottom Row** of the **Value Area**, and it has two buttons:

- **Left Button**: Sets the length of the secondary chance sequence (up to 8 **Steps**).
- **Right Button**: Sets the active **Steps** in the secondary chance sequence.

The **Top Row** of the **Value Area** displays the secondary sequence and allows you to toggle its **Steps** on and off.

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,value_chance_cycle_length,extra_row_empty,save_slots" show_top=true page=1 subpage=-1 %}

### 3. Probability

This type allows for traditional, probability-based chance for the selected **Step**. This is the rightmost option in the **Bottom Row**. Tapping it sets the **Chance Type** to **Probability** and the value to 100%.

The **Top Row** acts as a value slider with eight options:
`12.5%`, `25%`, `33%`, `50%`, `66%`, `75%`, `87.5%`, `95%`

{% include launchpad-grid.html presets="steps_4_floor,steps_4_floor_select,steps_empty,steps_empty,value_chance_50,extra_row_empty,save_slots" show_top=true page=1 subpage=-1 %}

## Next Steps

After setting up evolving **Patterns** using chance, you can:

- **[Add Substeps](pattern-substeps.html)**: Create rolls, flams, and offset hits for accents and groove.
- **[Edit Step Notes](../notes-page/index.html)**: Take full control of your sequence and shape it to your liking.
