---
layout: default
title: Visual Feedback
parent: Launchpad Interface
nav_order: 2
---

# Visual Feedback

The Launchpad's LED system provides instant visual feedback about the sequencer's state, patterns, and parameters. Understanding the color coding and animation patterns is crucial for efficient operation, especially in low-light performance environments.

![LED Color Reference](docs/img/led-color-reference.jpg)
*Complete LED color reference showing all states and their meanings*

## Color Coding System

The sequencer uses a consistent color language across all pad types and functions.

### Primary State Colors

- **Bright Green**: Active/On/Playing
- **Dim Green**: Available/Ready
- **Bright Red**: Recording/Armed/Critical
- **Dim Red**: Error/Warning/Disabled
- **Bright Orange**: Selected/Current/Focus
- **Dim Orange**: Modified/Pending
- **Bright Blue**: Parameter/Value/Data
- **Dim Blue**: Secondary/Background
- **White**: Maximum value/Full intensity
- **Off**: Inactive/Disabled/Empty

### Track-Specific Colors

Each track has its own color identity for easy visual identification:

![Track Colors](docs/img/track-color-identity.jpg)
*Track color assignments showing unique colors for each of the seven tracks*

- **Track 1**: Red (melodic lead)
- **Track 2**: Orange (harmony/chords)  
- **Track 3**: Yellow (hi-hats/percussion)
- **Track 4**: Green (snare/clap)
- **Track 5**: Cyan (kick/bass drum)
- **Track 6**: Blue (bass/low frequency)
- **Track 7**: Purple (effects/special)

## Step Pattern Feedback

The main 8x8 grid provides detailed feedback about pattern states and playback position.

### Active Step Display

![Active Steps Display](docs/img/active-steps-display.jpg)
*Pattern display showing active steps in track color with varying intensities*

- **Bright Track Color**: Step is active and will trigger
- **Dim Track Color**: Step is inactive but available
- **Off**: Step is completely disabled
- **Pulsing**: Step has chance-based triggering enabled

### Current Position Indicator

The currently playing step is highlighted with special visual treatment:

- **Bright White Flash**: Brief flash when step triggers
- **Moving Highlight**: Bright outline following playback position
- **Trail Effect**: Subtle fade showing recently played steps

### Pattern Length Visualization

- **Solid Line**: Shows the active pattern length boundary
- **Dotted Pattern**: Indicates steps beyond current pattern length
- **End Marker**: Special brightness on the final step of the pattern

## Parameter Value Display

The lower rows of the grid display parameter values through LED brightness and color.

![Parameter Value Display](docs/img/parameter-value-display.jpg)
*Parameter values shown through LED brightness levels and color coding*

### Brightness Levels

Parameter values are represented by LED brightness:

- **Off**: Value is 0 or minimum
- **Very Dim**: Low value (1-25% of range)
- **Dim**: Medium-low value (26-50% of range)
- **Medium**: Medium-high value (51-75% of range)
- **Bright**: High value (76-100% of range)
- **Maximum**: Maximum possible value or limit reached

### Parameter Type Colors

Different parameter types use specific colors:

- **Green**: Timing parameters (length, speed, rotation)
- **Blue**: Musical parameters (scale, key, octave)
- **Orange**: Performance parameters (velocity, gate, chance)
- **Red**: System parameters (MIDI channel, mute state)

## Track Selection Feedback

The right column provides comprehensive track status information.

![Track Status Display](docs/img/track-status-display.jpg)
*Track selection column showing various track states and activities*

### Track States

- **Bright Track Color**: Currently selected track
- **Dim Track Color**: Track is active but not selected
- **Pulsing Track Color**: Track has unsaved changes
- **Off**: Track is muted or disabled

### Track Activity Indicators

- **Rapid Flashing**: Track is currently triggering notes
- **Slow Pulsing**: Track has pending MIDI events
- **Solid Bright**: Track is selected and active
- **Breathing Effect**: Track is in solo mode

## Mode and Navigation Feedback

The top row and navigation pads provide clear mode and state information.

### Mode Selection Display

![Mode Selection Feedback](docs/img/mode-selection-feedback.jpg)
*Mode selection pads showing current mode and available options*

- **Bright White**: Currently active mode
- **Dim White**: Available mode option
- **Colored**: Mode-specific color when that mode is specialized
- **Off**: Mode not available in current context

### Navigation State

- **Green Arrows**: Navigation available in that direction
- **Red Arrows**: Navigation blocked or at limit
- **Orange Arrows**: Navigation available with modifier
- **Pulsing Arrows**: Auto-navigation active

## Transport Control Feedback

Transport controls provide clear playback state information.

### Play State Indicators

- **Bright Green Play**: Sequencer is playing
- **Pulsing Green Play**: Play pressed, waiting for sync
- **Red Stop**: Stopped state
- **Orange Pause**: Paused (can resume from current position)

### Tempo and Clock Visualization

- **Corner Clock Display**: Top-right pad shows tempo with pulsing
- **Tempo Color**: Changes based on BPM range (slow=blue, medium=green, fast=red)
- **Sync Indicator**: Special pattern when synced to external clock

## Special Animation Patterns

Certain states use animated patterns for enhanced feedback.

### Pattern Loading

![Pattern Loading Animation](docs/img/pattern-loading-animation.jpg)
*Animation sequence showing pattern loading and processing states*

- **Sweep Effect**: Left-to-right sweep when loading patterns
- **Spiral Pattern**: Circular animation during pattern generation
- **Flash All**: Brief full-grid flash for major state changes

### Error and Warning States

- **Red Flash**: Critical error or connection problem
- **Orange Pulse**: Warning or non-critical issue
- **Dim Red Solid**: Persistent error state requiring attention

### Performance Feedback

- **Velocity Visualization**: Step brightness reflects velocity values
- **Gate Length**: Step width/duration shown through LED persistence
- **Chance Success**: Successful chance triggers show brief bright flash

## Customization Options

Some visual feedback elements can be customized for different preferences.

### Brightness Settings

- **Global Brightness**: Adjust overall LED intensity
- **Contrast Mode**: High contrast for bright environments
- **Night Mode**: Reduced brightness for dark environments

### Color Preferences

- **Colorblind Support**: Alternative color schemes available
- **Track Color Mapping**: Customize track-specific colors
- **Parameter Color Themes**: Different color schemes for parameter types

## Practical Usage Tips

### Reading the Grid Quickly

- **Scan by zones**: Each area has distinct visual patterns
- **Learn color meanings**: Consistent color usage speeds recognition
- **Use peripheral vision**: Grid patterns are visible without direct focus

### Performance Scenarios

- **Dark environments**: LED feedback is your primary navigation aid
- **Bright stages**: High contrast mode helps visibility
- **Recording situations**: Muted colors available to reduce distraction

### Troubleshooting with Visual Feedback

- **Connection issues**: Look for red error indicators
- **Pattern problems**: Check for unexpected color patterns
- **Parameter errors**: Watch for flashing or wrong colors

## Accessibility Features

The visual feedback system includes accessibility considerations.

### Visual Impairment Support

- **High contrast modes**: Enhanced visibility options
- **Brightness adaptation**: Automatic adjustment to ambient light
- **Pattern redundancy**: Multiple visual cues for important states

### Color Vision Considerations

- **Alternative schemes**: Non-color-dependent feedback options
- **Shape patterns**: LED patterns that don't rely solely on color
- **Brightness coding**: Value representation through brightness alone

## Next Steps

With visual feedback mastered:

1. **[Learn navigation techniques →](navigation.html)** - Efficient movement through the interface
2. **[Practice pattern editing →](../sequencer/basic-editing.html)** - Apply visual knowledge to creation
3. **[Explore advanced features →](../euclidean/introduction.html)** - Use feedback for complex operations

The visual feedback system is designed to provide all necessary information at a glance. Spending time learning these patterns will dramatically improve your speed and confidence when using the sequencer.

---

*Ready to master navigation? Continue to [Navigation →](navigation.html)*
