---
layout: default
title: Basic Editing
parent: Sequencer Basics
nav_order: 3
---

# Basic Editing

Pattern editing is where creativity meets the sequencer's power. This guide covers essential editing techniques that form the foundation of all pattern creation and modification work.

![Basic Editing Interface](docs/img/basic-editing-interface.jpg)
*Pattern editing interface showing step selection, parameter adjustment, and real-time feedback*

## Step-by-Step Editing Fundamentals

The most direct way to create patterns is by editing individual steps, giving you complete control over every aspect of your sequence.

### Adding and Removing Steps

**Toggle Step Activity**: The simplest editing operation is turning steps on or off. In the software interface, click any step in the pattern grid to toggle its active state. On the Launchpad, press any pad in the main 8x8 grid to toggle that step.

**Visual Feedback**: Active steps appear bright in the track's assigned color, while inactive steps appear dim or off. This immediate feedback lets you see your pattern's shape as you edit.

**Real-time Editing**: Changes take effect immediately, even during playback. This allows you to hear the results of your edits instantly and make adjustments on the fly.

### Pattern Building Strategies

**Start Simple**: Begin with a basic pattern using the Euclidean algorithm, then customize individual steps to taste. This gives you a musically coherent starting point.

**Layer Gradually**: Add complexity progressively rather than trying to create complex patterns immediately. Start with main beats, then add fills and variations.

**Listen While Editing**: Keep playback running while editing to hear how changes affect the overall groove and musicality.

## Velocity Editing

Velocity controls the loudness and often the timbre of triggered notes, making it crucial for musical expression.

![Velocity Editing Interface](docs/img/velocity-editing-interface.jpg)
*Velocity editing showing different velocity levels across pattern steps*

### Understanding Velocity Values

**MIDI Range**: Velocity values range from 1 (very soft) to 127 (maximum force). A velocity of 0 effectively mutes the step.

**Musical Impact**: Beyond volume, velocity often affects filter cutoff, sample selection, and other parameters on receiving synthesizers, making it a powerful expressive tool.

**Visual Representation**: In the interface, velocity is shown through brightness levels - brighter steps have higher velocity, dimmer steps have lower velocity.

### Velocity Editing Techniques

**Step Selection**: Select individual steps to adjust their velocity using the parameter controls. The selected step is highlighted with a bright outline.

**Value Adjustment**: Use the velocity parameter in the right panel to adjust selected steps. Values can be set precisely or adjusted relatively.

**Pattern-Wide Editing**: Hold modifier keys while adjusting velocity to apply changes to multiple steps simultaneously, useful for creating dynamic builds and drops.

### Musical Applications

**Accent Patterns**: Use higher velocities on downbeats and important rhythmic points to create natural accents and groove.

**Dynamic Builds**: Gradually increase velocities across a pattern to create energy and momentum.

**Humanization**: Vary velocities slightly between similar steps to add human-like imperfection and life to mechanical patterns.

## Gate Length Control

Gate length determines how long notes sustain, controlling the articulation and feel of your patterns.

### Gate Length Concepts

**Timing Units**: Gate length is measured in sequencer ticks, with longer values creating more legato playing and shorter values creating staccato effects.

**Musical Applications**: Short gates work well for percussive elements and tight rhythms, while longer gates are better for pads, bass lines, and flowing melodic content.

**Interaction with Synthesis**: Gate length affects how synthesizer envelopes behave, impacting both volume and timbral evolution of sounds.

### Editing Gate Lengths

**Individual Step Control**: Select steps and adjust their gate length using the gate parameter. Each step can have its own gate setting independent of others.

**Pattern-Wide Settings**: Apply gate length changes to entire patterns or selected ranges for consistent articulation across multiple steps.

**Real-time Adjustment**: Gate changes take effect immediately, allowing you to hear the articulation changes as you make them.

## Mute and Solo Functions

Mute and solo controls provide essential tools for arrangement and mixing within the sequencer.

![Mute Solo Interface](docs/img/mute-solo-interface.jpg)
*Mute and solo controls showing track management and step-level muting*

### Track-Level Muting

**Track Mute**: Completely silence individual tracks while keeping them synchronized. Muted tracks continue running their patterns but don't send any MIDI data.

**Visual Indication**: Muted tracks appear dimmed in the interface and on the Launchpad, making it easy to see which tracks are active.

**Live Performance**: Mute controls are essential for live performance, allowing you to bring tracks in and out of the mix dynamically.

### Step-Level Muting

**Individual Step Muting**: Specific steps within a pattern can be muted without affecting the step's timing or the pattern's overall structure.

**Temporary Editing**: Step muting is useful for testing pattern variations without permanently changing the pattern structure.

**Complex Arrangements**: Use step muting to create pattern variations and fills without creating entirely new patterns.

### Solo Functionality

**Track Solo**: Solo any track to hear it in isolation, automatically muting all other tracks. This is invaluable for detailed editing and sound design.

**Quick Solo**: Double-tap any track button to instantly solo that track. Double-tap again to return to normal playback.

**Multiple Solo**: Some operations allow multiple tracks to be soloed simultaneously, useful for focusing on specific elements of your arrangement.

## Advanced Editing Techniques

### Pattern Copying and Duplication

**Track Copying**: Copy entire patterns between tracks to create variations or build layered arrangements. Hold modifier keys and select source and destination tracks.

**Step Range Copying**: Copy specific sections of patterns to other locations within the same track or different tracks.

**Pattern Variations**: Create multiple versions of similar patterns by copying and then modifying specific elements.

### Batch Editing Operations

**Range Selection**: Select multiple steps simultaneously to apply changes to entire sections at once.

**Parameter Scaling**: Adjust multiple parameters proportionally across selected steps, maintaining their relative relationships while changing overall values.

**Pattern Transformations**: Apply mathematical operations like inversion, retrograde, or scaling to entire pattern sections.

### Real-Time Pattern Modification

![Real-Time Editing](docs/img/real-time-editing.jpg)
*Real-time editing showing live parameter adjustment during playback*

**Live Parameter Tweaking**: Adjust parameters while patterns are playing to hear changes in context immediately.

**Performance Editing**: Make dramatic changes during live performance to create builds, breaks, and transitions.

**Undo/Redo Support**: The sequencer maintains an edit history, allowing you to experiment freely knowing you can revert changes.

## Editing Workflow Best Practices

### Efficient Editing Patterns

**Start with Structure**: Establish the basic pattern structure before diving into detailed velocity and gate editing.

**Use Reference Material**: Keep example patterns or reference tracks playing to maintain musical context during detailed editing.

**Save Frequently**: Use the quick-save functionality to preserve good versions before making experimental changes.

### Common Editing Mistakes

**Over-Editing**: Resist the urge to edit every parameter of every step. Sometimes simple patterns are more effective than complex ones.

**Ignoring Context**: Remember that patterns will be heard alongside other tracks. Edit in the context of the full arrangement when possible.

**Velocity Extremes**: Avoid using only very high or very low velocities. Musical dynamics come from the contrast between different velocity levels.

### Performance Considerations

**Live Editing**: Practice editing techniques during playback to develop skills for live performance scenarios.

**Backup Patterns**: Keep copies of working patterns before making significant changes, especially during live performances.

**Quick Access**: Learn keyboard shortcuts and Launchpad combinations for frequently used editing operations.

## Integration with Other Features

### Euclidean Algorithm Integration

**Algorithmic Starting Points**: Use the Euclidean algorithm to generate initial patterns, then customize specific steps to taste.

**Mathematical Precision**: The algorithm ensures rhythmically sound starting points that you can then humanize and customize.

**Pattern Regeneration**: Adjust Euclidean parameters to generate new variations, then edit specific elements to maintain desired characteristics.

### Scale and Harmonic Integration

**Scale-Aware Editing**: When editing melodic content, the sequencer respects the current track's scale settings, ensuring harmonic consistency.

**Chord Editing**: For tracks using chord patterns, editing affects entire chord voicings while maintaining harmonic relationships.

**Transpose Integration**: Patterns maintain their edited characteristics when transposed to different keys or scales.

## Next Steps

With basic editing mastered, you're ready to explore:

1. **[Euclidean Rhythms →](../euclidean/introduction.html)** - Understand the algorithmic foundation
2. **[Track Management →](../tracks/selection.html)** - Advanced multi-track editing techniques
3. **[Pattern Editor →](../pattern-editor/step-editor.html)** - Detailed step-level editing features

Basic editing skills form the foundation for all advanced sequencer techniques. Master these fundamentals to unlock the sequencer's full creative potential.

---

*Ready to explore algorithmic pattern generation? Continue to [Euclidean Rhythms →](../euclidean/introduction.html)*
