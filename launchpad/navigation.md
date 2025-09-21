---
layout: default
title: Navigation
parent: Launchpad Interface
nav_order: 3
---

# Navigation

Efficient navigation through the Launchpad interface is essential for fluid workflow and live performance. This guide covers movement techniques, mode switching, and advanced navigation patterns that will speed up your sequencer operation.

![Navigation Flow Diagram](docs/img/navigation-flow-diagram.jpg)
*Navigation paths showing how to move efficiently between different interface areas*

## Basic Navigation Principles

The Launchpad interface is organized around logical zones and hierarchical navigation patterns that minimize the number of button presses needed to reach any function.

### Zone-Based Navigation

- **Horizontal Movement**: Between different parameter types and values
- **Vertical Movement**: Between different tracks and pattern elements
- **Modal Navigation**: Between different operating modes (Session, Keys, Drum, User)
- **Contextual Access**: Context-sensitive shortcuts based on current selection

### Navigation Hierarchy

1. **Global Level**: Transport controls, mode selection, master settings
2. **Track Level**: Track selection, track-specific parameters
3. **Pattern Level**: Step editing, pattern parameters
4. **Step Level**: Individual step properties, sub-step editing

## Mode Switching

The top row provides access to four primary operating modes, each optimized for different workflow tasks.

![Mode Switching Interface](docs/img/mode-switching-interface.jpg)
*Mode selection pads showing transition between different operational contexts*

### Session Mode (SES)

**Purpose**: Pattern arrangement and clip launching
**Navigation**:

- **Press SES pad** to enter Session mode
- **Grid shows**: Pattern slots and scene launching
- **Track column**: Track selection and status
- **Quick access**: Pattern duplication, clearing, and arrangement

### Drum Mode (DRM)

**Purpose**: Drum pattern programming and percussion editing
**Navigation**:

- **Press DRM pad** to enter Drum mode
- **Grid shows**: Drum kit layout (16 drum sounds)
- **Velocity sensitivity**: Pad pressure affects velocity
- **Quick access**: Drum sound selection, pattern recording

### Keys Mode (KEY)

**Purpose**: Melodic input and scale-based playing
**Navigation**:

- **Press KEY pad** to enter Keys mode
- **Grid shows**: Scale-based keyboard layout
- **Scale context**: Current track's scale and key
- **Quick access**: Note input, chord entry, scale transposition

### User Mode (USR)

**Purpose**: Custom mappings and advanced functions
**Navigation**:

- **Press USR pad** to enter User mode
- **Grid shows**: User-configurable layout
- **Custom mappings**: CC controllers, parameter automation
- **Quick access**: Advanced sequencer functions, system settings

## Parameter Navigation

Moving between different parameter types and adjusting values efficiently.

![Parameter Navigation](docs/img/parameter-navigation.jpg)
*Parameter editing interface showing navigation between different value types*

### Parameter Categories

The sequencer organizes parameters into logical groups:

**Timing Parameters** (Green zone):

- Length, Beats, Speed, Rotation
- **Access**: Bottom-left area of grid
- **Navigation**: Left/right arrows to move between parameters

**Musical Parameters** (Blue zone):

- Scale, Key, Octave Range
- **Access**: Bottom-center area of grid
- **Navigation**: Up/down arrows to change categories

**Performance Parameters** (Orange zone):

- Velocity, Gate, Chance, Accent
- **Access**: Bottom-right area of grid
- **Navigation**: Diagonal movement for quick access

### Value Adjustment Methods

**Direct Selection**:

- **Press pad** corresponding to desired value
- **Visual feedback** shows current value brightness
- **Range**: Full parameter range accessible

**Incremental Adjustment**:

- **Hold direction arrow** + **press parameter pad** for fine control
- **Rapid tapping** for quick value changes
- **Acceleration**: Longer holds increase change rate

**Relative Adjustment**:

- **Hold parameter pad** + **press direction arrows** for offset changes
- **Bidirectional**: Both increase and decrease from current value
- **Contextual range**: Adjustment range adapts to parameter type

## Pattern Navigation

Moving through patterns, especially those longer than 16 steps, requires specific navigation techniques.

### Pattern Pages

For patterns longer than 16 steps:

- **Page 1**: Steps 1-16 (default view)
- **Page 2**: Steps 17-32
- **Navigation**: Left/right arrows to switch pages
- **Visual indicator**: Corner pads show current page

### Pattern Length Navigation

![Pattern Length Navigation](docs/img/pattern-length-navigation.jpg)
*Extended pattern navigation showing page switching and length indicators*

**Short Patterns (1-16 steps)**:

- **Full view**: All steps visible simultaneously
- **Direct access**: Any step accessible with single press
- **End marker**: Last step highlighted differently

**Long Patterns (17-32 steps)**:

- **Paged view**: 16 steps visible at a time
- **Page switching**: Arrow pads change visible range
- **Continuity**: Pattern continues across page boundaries

### Step Range Selection

**Single Step**:

- **Press step pad** to select individual step
- **Current selection** highlighted with bright outline
- **Edit context**: Parameter editing applies to selected step

**Multiple Steps**:

- **Hold first step** + **press last step** for range selection
- **Visual feedback**: Selected range highlighted
- **Batch editing**: Changes apply to all selected steps

**Pattern Segments**:

- **Hold modifier** + **select range** for advanced selection
- **Common segments**: Downbeats, offbeats, specific beat divisions
- **Quick patterns**: Preset selections for common editing tasks

## Track Navigation

Switching between tracks and managing multi-track workflows.

### Track Selection Methods

![Track Selection Methods](docs/img/track-selection-methods.jpg)
*Different methods for selecting and switching between tracks*

**Direct Selection**:

- **Press track pad** (right column) for immediate switching
- **Visual feedback**: Selected track highlighted in track color
- **Context switch**: All interface elements update to show track data

**Sequential Navigation**:

- **Up/down arrows** in track context for step-by-step movement
- **Wrap-around**: Track 7 → Track 1 and vice versa
- **Smooth transition**: Parameters animate between track values

**Quick Jump**:

- **Double-tap track pad** for solo mode (mute others)
- **Long press track pad** for track-specific menu
- **Modifier + track pad** for copy/paste operations

### Multi-Track Operations

**Track Copying**:

1. **Select source track**
2. **Hold modifier pad**
3. **Press destination track pad**
4. **Visual confirmation**: Brief animation shows copy operation

**Track Muting**:

- **Hold mute modifier** + **press track pads** for quick muting
- **Visual feedback**: Muted tracks appear dimmed
- **Batch operations**: Multiple tracks can be muted simultaneously

## Advanced Navigation Techniques

Shortcuts and advanced patterns for power users.

### Modifier Combinations

The sequencer supports complex modifier combinations for advanced navigation:

**Shift + Direction**: Large parameter jumps
**Shift + Track**: Track-specific quick settings
**Shift + Mode**: Mode-specific advanced functions
**Shift + Transport**: Alternative transport functions

### Context-Sensitive Shortcuts

Different areas of the interface provide context-specific shortcuts:

**In Pattern Edit Mode**:

- **Double-tap step**: Step-specific parameter editing
- **Hold step + direction**: Step parameter adjustment
- **Two-finger gestures**: Advanced pattern manipulation

**In Parameter Mode**:

- **Hold parameter + track**: Apply to all tracks
- **Parameter + direction**: Smooth parameter morphing
- **Parameter chaining**: Sequential parameter editing

### Performance Navigation

Optimized navigation patterns for live performance:

![Performance Navigation](docs/img/performance-navigation.jpg)
*Live performance navigation showing one-handed operation patterns*

**One-Hand Operation**:

- **Thumb controls**: Transport and mode switching
- **Finger patterns**: Track selection and parameter adjustment
- **Minimal movement**: All essential functions within hand span

**Quick Pattern Switching**:

- **Pattern bank selection**: Quick access to pattern variations
- **Seamless transitions**: Pattern changes without timing disruption
- **Visual preview**: Next pattern preview before switching

## Navigation Best Practices

### Learning the Layout

**Start Simple**: Master basic track switching and parameter editing first
**Build Muscle Memory**: Practice common navigation patterns repeatedly
**Use Visual Cues**: Learn to read the LED feedback for orientation

### Efficient Workflows

**Plan Your Route**: Think about navigation path before starting complex edits
**Use Shortcuts**: Learn modifier combinations for frequently used functions
**Stay in Context**: Minimize mode switching during creative flow

### Performance Considerations

**Memorize Positions**: Key functions should be accessible without looking
**Practice Transitions**: Smooth movement between functions during playback
**Backup Navigation**: Know alternative paths to essential functions

## Troubleshooting Navigation Issues

### Common Problems

**Lost in Interface**: Press multiple mode pads simultaneously to return to home
**Stuck in Mode**: Long press any mode pad to reset to default
**Parameter Confusion**: Press clear pad to reset current selection

### Recovery Techniques

**Visual Scanning**: Use LED patterns to understand current context
**Systematic Reset**: Return to known state and navigate step-by-step
**Mode Reset**: Exit and re-enter modes to clear navigation state

## Next Steps

With navigation mastered, you're ready to explore more advanced sequencer features:

1. **[Learn Euclidean rhythms →](../euclidean/introduction.html)** - Apply navigation skills to pattern creation
2. **[Master sequencer basics →](../sequencer/tracks-and-steps.html)** - Use efficient navigation for pattern editing
3. **[Explore track management →](../tracks/selection.html)** - Advanced multi-track navigation techniques

Efficient navigation is the foundation of fluid sequencer operation. These techniques will become second nature with practice, enabling you to focus on musical creativity rather than interface mechanics.

---

*Ready to dive into pattern creation? Continue to [Euclidean Rhythms →](../euclidean/introduction.html)*
