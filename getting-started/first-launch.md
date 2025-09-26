---
layout: default
title: First Launch
parent: Getting Started
nav_order: 4
---

# First Launch

Your first experience with the {{ site.product_name }} sets the foundation for everything that follows. This guide walks you through what to expect when you launch the application for the first time and helps you get oriented with the interface.

![First Launch Interface](docs/img/first-launch-interface.jpg)
*The sequencer interface on first startup with default settings*

## What Happens on First Launch

When you start the sequencer for the first time, several things happen automatically:

### Automatic Configuration

The sequencer attempts to detect and configure your MIDI devices automatically. If you have a Novation Launchpad connected, it will try to establish communication immediately. You'll see status messages in the application indicating the connection state.

### Default Project Loading

The sequencer loads a default project with basic patterns already configured across all seven tracks. This gives you something to listen to immediately and demonstrates the core functionality without requiring any setup.

### Interface Initialization

The main interface displays the track overview, pattern grid, and transport controls. All elements start in their default states, ready for immediate use.

## Launchpad Integration

If you have a Novation Launchpad connected, it becomes active immediately:

![Launchpad First Launch](docs/img/launchpad-first-launch.jpg)
*Launchpad display showing initial pattern and track selection*

### Visual Feedback

- **Track buttons** on the right edge show which track is selected
- **Step grid** displays the current pattern with colored LEDs
- **Transport controls** are mapped to specific pads
- **Parameter areas** show current values through LED brightness

### Immediate Control

You can start interacting with the Launchpad immediately:

- **Press track buttons** to switch between tracks
- **Tap step pads** to toggle steps on/off

## Common First-Launch Questions

### "I don't hear any sound"

The sequencer generates MIDI data, not audio. You need:

- A connected MIDI synthesizer, sampler, or DAW
- Proper MIDI routing from the sequencer to your sound source
- Check the [MIDI Setup Guide →](../midi-setup.html) for detailed configuration

### "The Launchpad isn't responding"

- Ensure the Launchpad is connected via USB
- Check that it's not being used by other software (like Ableton Live)
- Try disconnecting and reconnecting the USB cable
- Verify the Launchpad appears in your system's MIDI device list

### "The interface looks different than expected"

- The interface adapts to different screen sizes and resolutions
- Some elements may be arranged differently on smaller screens
- All functionality remains accessible through the menus and controls

## Next Steps

Now that you're familiar with the basic interface:

1. **[Set up your MIDI connections →](../midi-setup.html)** - Configure your synthesizers and controllers
2. **[Learn basic operation →](basic-operation.html)** - Master the essential controls and workflow
3. **[Explore the Launchpad interface →](../launchpad/pad-layout.html)** - Understand the hardware control layout

The sequencer is designed to be immediately usable, but understanding the MIDI setup and basic operation will unlock its full potential for your music production workflow.

---

*Ready to connect your gear? Continue to [MIDI Setup →](../midi-setup.html)*
