---
layout: default
title: Play Controls
parent: Sequencer Basics
nav_order: 2
---

# Play Controls

The transport controls are your primary interface for managing playback, timing, and synchronization. Master these controls to achieve smooth workflow and professional performance results.

![Transport Controls Interface](docs/img/transport-controls-interface.jpg)
*Complete transport control section showing play, stop, reset, and tempo controls*

## Primary Transport Controls

The main transport section provides essential playback control with both software and hardware interfaces.

### Play/Pause Control

The play button serves dual functions depending on the current playback state:

**Starting Playback**: When stopped, pressing Play immediately begins playback from the current position. All active tracks start simultaneously, maintaining perfect synchronization regardless of their individual pattern lengths or speed settings.

**Pausing Playback**: When playing, pressing Play again pauses all tracks at their current positions. This differs from Stop in that patterns remember where they were and will resume from the same position when Play is pressed again.

**Visual Feedback**: The play button shows bright green when playing, dim green when paused, and off when stopped. On the Launchpad, the dedicated play pad provides the same visual feedback with immediate tactile response.

### Stop Control

Stop provides immediate cessation of all playback and resets all tracks to their starting positions:

**Immediate Stop**: All tracks stop instantly, regardless of their current position in their patterns. Any currently playing notes receive immediate note-off messages to prevent hanging notes.

**Position Reset**: All tracks return to step 1, ready for a fresh start when Play is next pressed. This is different from Pause, which maintains current positions.

**System Reset**: Stop also clears any pending MIDI events, scheduled automations, and temporary performance states, ensuring a clean restart.

### Reset Control

Reset provides pattern synchronization without stopping playback:

**Live Reset**: When pressed during playback, all tracks jump to their first step without stopping the music. This is invaluable for live performance when you want to restart sections or sync up tracks that have drifted.

**Sync Point**: Reset creates a new synchronization point, ensuring all tracks start their patterns together regardless of their previous positions.

**Seamless Operation**: Unlike Stop/Play, Reset maintains the musical flow while providing pattern synchronization.

## Tempo and Timing Control

The sequencer's timing system provides precise control over musical timing and synchronization.

![Tempo Control Interface](docs/img/tempo-control-interface.jpg)
*Tempo display and adjustment controls showing BPM and timing indicators*

### Master Tempo

The master tempo affects all tracks simultaneously, though individual tracks can have speed multipliers:

**BPM Range**: The sequencer supports tempos from 60 to 200 BPM, covering everything from ambient soundscapes to high-energy dance music.

**Precision**: Tempo can be adjusted in 1 BPM increments for precise timing control. Fractional BPM values are supported internally for smooth tempo changes.

**Real-time Adjustment**: Tempo changes take effect immediately during playback, allowing for live tempo manipulation and gradual speed changes.

### Clock Sources and Sync

**Internal Clock**: By default, the sequencer generates its own stable timing using the Godot engine's high-precision timer system. This provides rock-solid timing for standalone operation.

**Visual Clock Display**: The corner of the Launchpad shows a pulsing clock indicator that beats in time with the master tempo, providing visual confirmation of timing and sync status.

**MIDI Clock Output**: The sequencer can send MIDI clock messages to synchronize external devices, maintaining the sequencer as the master timing reference.

### Speed Multipliers

Individual tracks can run at different speeds relative to the master tempo:

**1x Speed**: Normal speed, matching the master tempo directly. Most tracks use this setting for standard operation.

**2x Speed**: Double speed, creating sixteenth-note patterns when the master tempo represents eighth notes. Perfect for hi-hat patterns and rapid percussion.

**1/2x Speed**: Half speed, creating longer patterns that evolve more slowly. Excellent for bass lines, pad progressions, and atmospheric elements.

**Other Multipliers**: 1/4x and 4x speeds provide extreme slow and fast options for special effects and complex polyrhythmic relationships.

## Advanced Transport Features

### Loop Controls and Pattern Management

**Seamless Looping**: Patterns loop automatically when they reach their end step. The transition from the last step to the first is sample-accurate, ensuring smooth rhythmic flow.

**Pattern Length Independence**: Each track's pattern can have a different length, creating complex polyrhythmic relationships. Track 1 might loop every 16 steps while Track 2 loops every 12 steps.

**Master Pattern Length**: While individual tracks have their own lengths, you can set a master pattern length that forces all tracks to reset simultaneously, maintaining a consistent overall structure.

### Swing and Groove

The sequencer includes sophisticated timing manipulation for musical feel:

**Global Swing**: Applies swing timing to all tracks simultaneously, shifting off-beat timing to create shuffled or jazz-influenced grooves.

**Swing Amount**: Adjustable from 0% (straight timing) to heavy swing percentages, with musical presets for common groove types.

**Track-Specific Timing**: Individual tracks can have timing offsets and micro-timing adjustments independent of global swing settings.

## Performance and Live Use

### Real-Time Control

The transport controls are optimized for live performance scenarios:

**Instant Response**: All transport commands execute immediately without latency, ensuring tight timing control during performance.

**Multiple Interfaces**: Transport controls work identically from software interface, Launchpad hardware, or MIDI controller input.

**Visual Confirmation**: All transport actions provide immediate visual feedback through both software interface and Launchpad LEDs.

### Performance Techniques

![Live Performance Transport](docs/img/live-performance-transport.jpg)
*Transport controls arranged for live performance with one-handed operation*

**One-Handed Operation**: Transport controls are positioned for single-hand operation, leaving the other hand free for parameter adjustment or external controller use.

**Seamless Transitions**: Practice smooth transitions between Play, Stop, and Reset to maintain musical flow during live performance.

**Emergency Stop**: The Stop control provides instant silence for emergency situations or dramatic musical breaks.

## Recording and Capture Integration

### Recording Control Integration

The transport system integrates with the built-in MIDI recording system:

**Automatic Recording Start**: When recording is enabled, pressing Play automatically begins MIDI capture, ensuring all generated events are recorded.

**Recording Stop Coordination**: Stopping playback automatically stops MIDI recording and prompts for file saving, streamlining the capture workflow.

**Punch Recording**: Record individual tracks or sections without affecting overall playback, useful for overdubbing and pattern refinement.

### Project Synchronization

**Auto-Save Integration**: Transport state changes can trigger automatic project saving, ensuring your work is preserved during performance.

**State Restoration**: Projects remember transport settings, tempo, and playback positions, allowing quick return to previous work sessions.

## Troubleshooting Transport Issues

### Common Problems and Solutions

**Transport Not Responding**: Check MIDI connections and ensure no external software is blocking MIDI access. Try restarting the sequencer if transport controls become unresponsive.

**Timing Drift**: If patterns seem to drift apart over time, use the Reset control to re-sync all tracks. Check that all tracks are using appropriate speed multipliers.

**Audio Lag**: Transport commands should execute immediately. If there's noticeable delay, check audio interface settings and MIDI buffer sizes.

### Performance Optimization

**Stable Timing**: The transport system is designed for rock-solid timing. If you experience timing issues, ensure your computer isn't overloaded with other processes.

**MIDI Efficiency**: The sequencer optimizes MIDI output to prevent buffer overruns and ensure smooth playback even with complex patterns.

## Keyboard and MIDI Shortcuts

Essential shortcuts for efficient transport control:

- **Spacebar**: Play/Pause toggle
- **S**: Stop
- **R**: Reset/Restart
- **T**: Tap tempo (when holding Shift)
- **← →**: Tempo adjustment (fine control)
- **Shift + ← →**: Tempo adjustment (coarse control)

**MIDI Controller Mapping**: Transport controls can be mapped to external MIDI controllers for hands-on control during performance.

## Next Steps

With transport controls mastered:

1. **[Learn basic editing →](basic-editing.html)** - Master pattern creation and modification
2. **[Explore Euclidean rhythms →](../euclidean/introduction.html)** - Understand algorithmic pattern generation
3. **[Advanced timing →](../advanced/timing.html)** - Dive into complex timing and groove features

Solid transport control is the foundation of all sequencer operation. These controls become second nature with practice, enabling you to focus on musical creativity rather than technical operation.

---

*Ready to start editing patterns? Continue to [Basic Editing →](basic-editing.html)*
