---
layout: default
title: Tracks & Steps
parent: Sequencer Basics
nav_order: 1
---

# Tracks & Steps

Understanding tracks and steps is fundamental to using the Godot MIDI Sequencer effectively. These core concepts form the building blocks of every pattern and musical idea you'll create with the sequencer.

![Track and Step Visualization](docs/img/tracks-steps-visualization.jpg)
*Visual representation of the 7-track system with step patterns of different lengths*

## What Are Tracks?

Tracks are independent musical channels that run simultaneously, each containing its own pattern, scale settings, and MIDI configuration. Think of them as separate band members, each playing their own part in your musical arrangement.

### The 7-Track System

The sequencer provides exactly seven tracks, each serving a different musical role:

**Track 1 (Red)**: Typically used for melodic leads or main harmonic content. Starts on MIDI channel 1 with Phrygian scale settings, making it ideal for electronic music leads and sequences.

**Track 2 (Orange)**: Perfect for harmonic support, chord progressions, or secondary melodic lines. Also defaults to Phrygian scale on MIDI channel 2, providing harmonic compatibility with Track 1.

**Track 3 (Yellow)**: Configured for percussion elements, defaulting to MIDI channel 10 (the standard drum channel). No scale restrictions make it perfect for hi-hats, percussion loops, and rhythmic elements.

**Tracks 4-6 (Green, Cyan, Blue)**: Additional percussion channels, all defaulting to MIDI channel 10. Use these for kick drums, snares, claps, and other rhythmic elements. Each can have independent patterns and timing.

**Track 7 (Purple)**: Special effects and bass elements, defaulting to MIDI channel 16. Ideal for bass lines, sound effects, or any elements that need to stand apart from the main arrangement.

## Understanding Steps

Steps are the individual time positions within a track's pattern. Each step represents a specific point in time where a musical event can occur.

![Step Anatomy Diagram](docs/img/step-anatomy-diagram.jpg)
*Detailed view of step properties and their relationships*

### Step Properties

Every step contains multiple properties that define how it behaves:

**Active State**: Whether the step will trigger when the sequencer reaches that position. Active steps appear bright in the interface, inactive steps appear dim or off.

**Note Information**: What musical notes will play when the step triggers. This can be a single note (monophonic) or multiple notes (chords, arpeggios).

**Velocity**: How loud or forceful the triggered notes will be, ranging from 0 (silent) to 127 (maximum). This affects both volume and often the timbre of synthesized sounds.

**Gate Length**: How long the note(s) will sustain, controlling the articulation from staccato (short gates) to legato (long gates).

**Chance Settings**: Probability controls that determine whether a step will actually trigger when reached, enabling subtle variations and humanization.

### Step Timing and Sub-Steps

Modern pattern creation often requires more precision than simple step-by-step timing:

**Sub-Step Division**: Each main step can be divided into smaller sub-steps (6-16 divisions), allowing for microtiming adjustments, flams, and complex rhythmic articulations.

**Pattern Types**: Steps can trigger as single notes, chords, arpeggiated sequences, or strummed patterns, each with different timing characteristics.

**Timing Offset**: Individual steps can be nudged slightly forward or backward in time for groove and humanization effects.

## Pattern Length and Structure

Understanding how patterns work within tracks is crucial for creating compelling sequences.

### Pattern Length Concepts

**Default Length**: Most patterns start at 16 steps, representing one bar in 4/4 time when running at normal speed. This provides a familiar framework for most electronic music styles.

**Variable Length**: Patterns can be anywhere from 1 to 32 steps, enabling everything from short rhythmic cells to extended polyrhythmic sequences.

**Loop Behavior**: When a pattern reaches its end step, it immediately returns to step 1, creating seamless loops. Different tracks can have different pattern lengths, creating complex polyrhythmic relationships.

![Pattern Length Examples](docs/img/pattern-length-examples.jpg)
*Examples of different pattern lengths and how they interact when running simultaneously*

### Polyrhythmic Possibilities

One of the sequencer's most powerful features is the ability to run patterns of different lengths simultaneously:

**Simple Polyrhythms**: Track 1 with 16 steps, Track 2 with 12 steps creates a 3-against-4 polyrhythm that repeats every 48 steps.

**Complex Interactions**: Combining tracks with lengths like 16, 15, and 13 steps creates patterns that take hundreds of steps to repeat, generating constantly evolving arrangements.

**Musical Applications**: Use shorter patterns for driving rhythmic elements and longer patterns for evolving harmonic or melodic content.

## Track Parameters and Relationships

Each track operates independently but can be configured to work together musically.

### Independent Parameters

**MIDI Channel**: Each track can output to its own MIDI channel, allowing control of different synthesizer patches or DAW tracks.

**Musical Scale**: Tracks can use different scales and keys, enabling harmonic complexity or modal interchange within a single sequence.

**Speed Multiplier**: Individual tracks can run at different speeds (1/4x, 1/2x, 1x, 2x, 4x), creating polyrhythmic relationships even with same-length patterns.

**Pattern Rotation**: Tracks can be rotated independently, shifting their downbeats to create phase relationships and rhythmic interest.

### Coordinated Elements

**Global Transport**: All tracks start, stop, and reset together, maintaining overall synchronization despite individual variations.

**Master Tempo**: While tracks can have speed multipliers, they all derive timing from the same master tempo source.

**Project-Level Settings**: Some settings like overall swing, master volume, and global effects apply to all tracks simultaneously.

## Practical Track and Step Workflow

### Starting a New Pattern

1. **Choose Your Track**: Select which of the seven tracks will carry your main musical idea
2. **Set Pattern Length**: Decide how many steps your pattern needs (16 is a good default)
3. **Configure Musical Settings**: Set the scale, key, and MIDI channel for your target instrument
4. **Plan Your Beats**: Think about where the important rhythmic events should occur

### Building Multi-Track Arrangements

**Layer Gradually**: Start with one track and add others progressively. This helps maintain musical coherence and prevents overwhelming complexity.

**Assign Roles**: Give each track a clear musical function (lead, bass, drums, effects) rather than duplicating similar parts.

**Vary Pattern Lengths**: Use different pattern lengths strategically to create evolving relationships between tracks.

**Consider Interaction**: Think about how tracks complement each other rhythmically and harmonically.

## Advanced Step Concepts

### Step Chance and Variation

The sequencer includes sophisticated systems for creating variation within patterns:

**Percentage Chance**: Steps can trigger based on probability, with settings like 50%, 75%, or 90% chance of playing.

**Conditional Triggering**: Steps can be set to trigger only if the previous step did or didn't play, creating intelligent pattern variations.

**Pattern-Based Chance**: Steps can follow complex patterns over multiple loop cycles, such as playing on beats 1 and 3 of a 4-cycle pattern.

### Step Types and Articulation

**Monophonic Steps**: Single note triggers, perfect for bass lines, leads, and simple rhythmic elements.

**Chord Steps**: Multiple notes triggered simultaneously, ideal for harmonic content and thick textures.

**Arpeggiated Steps**: Notes played in sequence rather than simultaneously, creating flowing melodic lines from chord progressions.

**Strummed Steps**: Chord notes with slight timing offsets, mimicking guitar strumming or other naturally articulated chord playing.

## Next Steps

With tracks and steps mastered, you're ready to explore:

1. **[Play Controls →](play-controls.html)** - Master transport and timing controls
2. **[Basic Editing →](basic-editing.html)** - Learn efficient pattern editing techniques
3. **[Euclidean Rhythms →](../euclidean/introduction.html)** - Understand the algorithmic pattern generation

The track and step system provides the foundation for all musical creation in the sequencer. Understanding these concepts deeply will make every other feature more intuitive and musically useful.

---

*Ready to control playback? Continue to [Play Controls →](play-controls.html)*
