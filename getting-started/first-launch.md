---
layout: default
title: First Launch
parent: Getting Started
nav_order: 4
---

# First Launch

This guide explains what to expect when you launch **TrackJammer** for the first time and helps you get oriented with the interface.

![First Launch Interface](docs/img/first-launch-interface.jpg)
*The **TrackJammer** interface on first startup with default settings.*

## What Happens on First Launch

When you start **TrackJammer** for the first time, it automatically performs the following actions:

### Automatic Configuration

The application attempts to detect and configure your **MIDI Devices**. If you have a **Novation Launchpad** connected, it will try to establish communication immediately. You will see status messages in the application indicating the connection state.

### Default Project Loading

**TrackJammer** loads a default **Session** with basic **Patterns** already configured across all seven **Tracks**. This gives you something to listen to right away and demonstrates the core functionality without any setup.

### Interface Initialization

The main interface displays the **Track** overview, **Pattern** **Grid**, and transport controls. All elements start in their default states, ready for you to use.

## Launchpad Integration

If you have a **Novation Launchpad** connected, it becomes active immediately.

![Launchpad First Launch](docs/img/launchpad-first-launch.jpg)
***Launchpad** display showing the initial **Pattern** and **Track** selection.*

### Visual Feedback

- **Track buttons** on the right edge show which **Track** is selected.
- The **Step** **Grid** displays the current **Pattern** with colored LEDs.
- **Transport controls** are mapped to specific pads.
- **Parameter** areas show current values through LED brightness.

### Immediate Control

You can start interacting with the **Launchpad** right away:

- Press the **Track buttons** to switch between **Tracks**.
- Tap the **Step** pads to toggle **Steps** on or off.

## Common Questions

### Why don't I hear any sound?

**TrackJammer** generates MIDI data, not audio. To hear sound, you need:

- A connected MIDI synthesizer, sampler, or **DAW**.
- Proper MIDI routing from **TrackJammer** to your sound source.
- Check the [**MIDI Setup Guide**](../midi-setup.html) for detailed configuration instructions.

### Why isn't the Launchpad responding?

- Ensure the **Launchpad** is connected via USB.
- Check that it is not being used by other software (like Ableton Live).
- Try disconnecting and reconnecting the USB cable.
- Verify the **Launchpad** appears in your system's **MIDI Device** list.

### Why does the interface look different than I expected?

- The interface adapts to different screen sizes and resolutions.
- Some elements may be arranged differently on smaller screens.
- All functionality remains accessible through the menus and controls.

## Next Steps

Now that you're familiar with the basic interface, you can:

1. **[Set up your MIDI connections](../midi-setup.html)** to configure your synthesizers and controllers.
2. **[Learn the basic operation](basic-operation.html)** to master the essential controls and workflow.
3. **[Explore the Launchpad interface](../launchpad/pad-layout.html)** to understand the hardware control layout.

**TrackJammer** is designed to be immediately usable, but understanding the MIDI setup and basic operation will unlock its full potential.

---

*Ready to connect your gear? Continue to the [**MIDI Setup** guide](../midi-setup.html).*
