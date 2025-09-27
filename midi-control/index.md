---
layout: default
title: MIDI Control
nav_order: 6
has_children: true
permalink: /midi-control/
---

# MIDI Control and Automation

Go beyond basic **Pattern** generation with sophisticated MIDI automation and control. Transform static **Patterns** into dynamic, evolving musical performances through precise **Parameter** automation, **Sub-track** control, and advanced MIDI communication.

![Automation Control Interface](../docs/img/automation-control-interface.jpg)
*The advanced automation interface, showing CC/NRPN control, **Sub-tracks**, and slew rate automation.*

## Our Philosophy on Automation

### Beyond Static Patterns

While basic **Patterns** provide the rhythmic and melodic foundation, automation adds the dynamic movement that brings your sequences to life, creating evolving textures and responsive musical elements.

### Precision Control

The automation system provides sample-accurate timing for all **Parameter** changes, ensuring that automated movements integrate seamlessly with the musical timing of your **Patterns**.

### Real-Time Responsiveness

All automation can be adjusted in real-time, allowing you to control **Parameter** movements live and adapt to the musical context.

## Core Automation Features

- **[CC/NRPN Control](cc-nrpn.html)**: Master MIDI Control Change (CC) and Non-Registered Parameter Number (NRPN) protocols to communicate with external synthesizers, effects units, and **DAW** automation systems.
- **[Sub-tracks](sub-tracks.html)**: Explore the **Sub-track** system, which allows for multiple **Parameter** streams per **Track**, enabling complex, multi-dimensional automation.
- **[Slew Rate Automation](slew-rate.html)**: Learn smooth **Parameter** interpolation techniques to create natural, musical transitions between different automation values.

## MIDI Communication Protocols

### Control Change (CC) Messages

- **Standard Controllers**: Control volume, pan, modulation, and expression.
- **Sound Controllers**: Automate filter cutoff, resonance, attack, decay, and release.
- **Custom Mapping**: Assign user-definable CCs for specific synthesizer **Parameters**.

### Non-Registered Parameter Numbers (NRPN)

- **Extended Resolution**: 14-bit precision for smooth **Parameter** control.
- **Synthesizer Integration**: Gain direct access to manufacturer-specific **Parameters**.
- **Complex Control**: Use multi-**Parameter** control systems for advanced sound shaping.

### Real-Time Control

- **Immediate Response**: Sub-millisecond timing for responsive **Parameter** changes.
- **Smooth Interpolation**: Achieve artifact-free **Parameter** transitions.
- **Performance Integration**: Control automation live during a performance.

## Applications for Automation

### Sound Design

- **Filter Sweeps**: Create dynamic filter cutoff and resonance automation.
- **Amplitude Shaping**: Control volume and VCA beyond basic velocity.
--   **Modulation Control**: Automate LFO rate, depth, and routing.
- **Effects Processing**: Control reverb, delay, and distortion **Parameters**.

### Musical Expression

- **Dynamic Builds**: Gradually increase **Parameters** to build energy.
- **Textural Evolution**: Use slow **Parameter** changes for atmospheric development.
- **Rhythmic Modulation**: Synchronize **Parameter** changes to the musical timing.
- **Harmonic Movement**: Automate pitch and tuning adjustments.

### Performance Enhancement

- **Live Parameter Control**: Adjust **Parameters** in real-time during a performance.
- **Scene Changes**: Switch between **Parameter** presets rapidly.
- **Responsive Control**: Create **Parameter** automation that adapts to the musical context.
- **Interactive Systems**: Design automation that responds to other musical elements.

## Sub-Track Architecture

### Multi-Dimensional Control

Each **Track** can contain multiple **Sub-tracks**, each controlling a different **Parameter**:

- **Primary Track**: The main musical content (notes, rhythm).
- **Sub-Track 1**: Filter cutoff automation.
- **Sub-Track 2**: Resonance control.
- **Sub-Track 3**: Pan position automation.

### Independent Pattern Lengths

**Sub-tracks** can have different **Pattern** lengths from their parent **Track**:

- **Polyrhythmic Automation**: Create **Parameter** changes at different rates.
- **Evolving Control**: Use long-form automation over short musical **Patterns**.
- **Complex Relationships**: Establish mathematical timing relationships between control layers.

### Synchronized Operation

Despite having independent lengths, all **Sub-tracks** remain in perfect sync with the master clock and their parent **Track's** musical timing.

## Advanced Control Techniques

### Slew Rate Control

- **Natural Transitions**: Create smooth **Parameter** changes that avoid "zipper noise."
- **Musical Timing**: Synchronize transition speeds to the musical timing.
- **Variable Rates**: Use different slew rates for different types of **Parameters**.
- **Performance Optimization**: Process everything efficiently for real-time operation.

### Parameter Scaling

- **Range Mapping**: Map sequencer values to synthesizer **Parameter** ranges.
- **Curve Shaping**: Use linear, exponential, and logarithmic response curves.
- **Bipolar Control**: Modulate **Parameters** both positively and negatively.
- **Offset and Scale**: Fine-tune **Parameter** ranges for musical effectiveness.

### Conditional Automation

- **Step-Based Triggers**: Create automation that responds to specific **Pattern** **Steps**.
- **Track Relationships**: Control automation with the states of other **Tracks**.
- **Performance Context**: Design automation that adapts to live performance conditions.

## Hardware Integration

### Launchpad Control

- **Visual Feedback**: Get LED indications of automation states and values.
- **Real-Time Adjustment**: Control automation **Parameters** with the hardware.
- **Performance Access**: Quickly access automation controls during a live performance.

### External Controller Support

- **MIDI Learn**: Automatically map external MIDI controllers.
- **Multi-Controller Support**: Integrate with multiple hardware control surfaces.
- **Bidirectional Communication**: Your controllers will reflect the current automation states.

## Workflow Strategies

### Building Automated Arrangements

1. **Start with Basic Patterns**: Establish the musical foundation first.
2. **Add Primary Automation**: Introduce key **Parameter** movements.
3. **Layer Secondary Control**: Build complexity with multiple automation layers.
4. **Refine and Balance**: Adjust the automation for musical effectiveness.

### Performance Preparation

- **Essential Controls**: Identify key **Parameters** for live control.
- **Backup Systems**: Prepare alternative control methods.
- **Practice Integration**: Rehearse automation control within a musical performance.

### Studio Integration

- **DAW Synchronization**: Coordinate with external sequencer automation.
- **Recording Preparation**: Set up automation for optimal recording results.
- **Mix Integration**: Plan your automation to work with your mixing process.

## Common Applications

### Electronic Music Production

- **Filter House**: Use classic filter cutoff automation for electronic dance music.
- **Ambient Textures**: Create slow, evolving **Parameter** changes for atmospheric music.
- **Techno Builds**: Use dramatic automation to build and release energy.

### Live Performance

- **DJ-Style Control**: Control filters and effects in real-time.
- **Band Integration**: Synchronize automation with live musicians.
- **Interactive Performance**: Design audience-responsive automation systems.

### Experimental Music

- **Algorithmic Control**: Drive automation with mathematical algorithms.
- **Generative Systems**: Create self-modifying automation **Patterns**.
- **Sound Art**: Use extended automation techniques for installation and performance art.

## Next Steps

Mastering automation will unlock the advanced capabilities of **TrackJammer**:

- **Generative Features**: Combine automation with algorithmic composition.
- **Advanced Features**: Explore complex timing and harmonic systems.
- **Recording & Export**: Capture your automated performances.

Automation transforms **TrackJammer** from a **Pattern** player into a complete performance instrument capable of sophisticated musical expression.

---

*Ready to automate? Start with [CC/NRPN Control](cc-nrpn.html).*
