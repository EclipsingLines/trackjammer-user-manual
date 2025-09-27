---
layout: default
title: MIDI Setup
parent: Getting Started
nav_order: 2
description: "Configure MIDI devices and connections for the sequencer"
---

# MIDI Setup

Proper MIDI configuration is essential for sending data from **TrackJammer** to your instruments and enabling hardware control. This guide covers connecting your **MIDI Devices**, configuring the software, and troubleshooting common issues.

![MIDI Setup Interface](docs/img/midi-setup-interface.jpg)
*The MIDI configuration dialog, showing available input and output devices.*

## Understanding MIDI in TrackJammer

**TrackJammer** uses two separate MIDI connections:

### Control Surface (Launchpad)

- **Purpose**: Hardware control and visual feedback.
- **Device**: A **Novation Launchpad Mini MK3**, **Launchpad X**, or a compatible controller.
- **Data Flow**: Bidirectional. **TrackJammer** sends LED data to the **Launchpad** and receives button presses from it.

### Sequencer Output

- **Purpose**: Sends musical data to synthesizers, samplers, or a **DAW**.
- **Device**: Any MIDI-capable instrument or software.
- **Data Flow**: Output only. It sends notes, CC, and NRPN data. It can also be configured to receive data from the control device to enable the use of knobs or faders.

## Automatic Configuration

**TrackJammer** attempts to automatically set up your **MIDI Devices** on startup.

### Auto-Detection Process

1. **Scans** for connected **Novation Launchpad** devices.
2. **Identifies** available MIDI output ports.
3. **Attempts** to establish connections based on device names.
4. **Reports** its success or failure in the console.

### Supported Devices for Auto-Detection

- **Novation Launchpad Mini MK3**
- **Novation Launchpad X**

If auto-detection succeeds, you can start using **TrackJammer** immediately. If it fails, you will need to configure your devices manually.

## Manual MIDI Configuration

Use the manual configuration options if automatic setup fails or if you need a specific routing setup.

![MIDI Configuration Dialog](docs/img/midi-config-dialog.jpg)
*Manual MIDI configuration, showing the device selection dropdowns.*

### Accessing MIDI Settings

- **Menu Path**: **Settings → MIDI Configuration**
- **Shortcut**: `Ctrl+M` (or `Cmd+M` on macOS).
- **Startup**: The configuration dialog will appear automatically if auto-detection fails.

### Control Surface Setup

1. **Select Input Device**: Choose your **Launchpad** from the "**Control Input**" dropdown.
2. **Select Output Device**: Choose the same **Launchpad** from the "**Control Output**" dropdown.
3. **Test Connection**: The **Launchpad** LEDs should light up when connected properly.

### Sequencer Output Setup

1. **Select Output Device**: Choose your target synthesizer, audio interface, or **DAW** input.
2. **Channel Configuration**: Verify that the **MIDI Channels** match your receiving devices.
3. **Test Output**: Use the built-in test function to verify that notes are being sent.

## Configuration via File

For advanced users or automated setups, you can manage your configuration using a JSON file.

### Creating a Configuration File

**TrackJammer** reads its configuration from a `midi_config.json` file located in the project directory or user settings folder.

```json
{
  "control_surface": {
    "input_name": "Launchpad Mini MK3",
    "output_name": "Launchpad Mini MK3"
  },
  "sequencer": {
    "input_name": "",
    "output_name": "Your Synthesizer"
  }
}
```

### Command-Line Options

You can override the configuration using command-line arguments:

```bash
# Windows
TrackJammer.exe --control-input "Launchpad Mini MK3" --sequencer-output "Your Synth"

# macOS/Linux
./TrackJammer --control-input "Launchpad Mini MK3" --sequencer-output "Your Synth"
```

### Disabling Auto-Connect

To skip the automatic connection attempt, use the `--no-auto-connect` flag:

```bash
./TrackJammer --no-auto-connect
```

## Launchpad-Specific Setup

Different **Launchpad** models may require specific configuration.

### Launchpad Mini MK3

![Launchpad Mini MK3 Setup](docs/img/launchpad-mini-mk3-setup.jpg)
***Launchpad Mini MK3** in programmer mode, showing the correct LED patterns.*

1. **Connect** via USB.
2. **Mode Selection**: **TrackJammer** automatically switches the **Launchpad** to Programmer Mode.
3. **Verification**: All LEDs should briefly flash and then show the current **Pattern**.
4. **Troubleshooting**: If the LEDs do not respond, try disconnecting and reconnecting the device.

### Launchpad X

1. **Connect** via USB.
2. **Mode Selection**: Ensure it is not in Ableton Live mode.
3. **Verification**: The 8x8 **Grid** should immediately show the **Step** **Patterns**.
4. **Additional Features**: The velocity-sensitive pads provide enhanced expression.

### Other Controllers

While optimized for **Novation Launchpads**, **TrackJammer** may work with other 8x8 **Grid** controllers:

- Ensure the controller sends standard MIDI note messages.
- Mapping may require customization.
- LED feedback may not be available.

## MIDI Channel Configuration

By default, **TrackJammer** uses seven **MIDI Channels**, one for each **Track**.

![MIDI Channel Configuration](docs/img/midi-channels-setup.jpg)
***MIDI Channel** assignment, showing the **Track**-to-channel mapping.*

### Default Channel Assignment

- **Track 1**: **MIDI Channel** 1
- **Track 2**: **MIDI Channel** 2
- **Tracks 3-6**: **MIDI Channel** 10 (for drums)
- **Track 7**: **MIDI Channel** 16 (for device control)

### Customizing Channels

1. **Select** the **Track** you want to configure.
2. **Adjust** the **Channel** **Parameter** in the **Track** parameter panel.
3. **Range**: Channels 1-16 are available.
4. **Real-time**: Changes take effect immediately.

### Multi-timbral Setup

The current version does not support multi-timbral output over different **MIDI Channels**.

## Next Steps

With your MIDI devices configured:

1. **[Explore the Launchpad interface](launchpad/pad-layout.html)** to learn the hardware control layout.
2. **[Master basic operation](getting-started/basic-operation.html)** to review the essential controls.
3. **[Create your first pattern](euclidean/introduction.html)** and start making music.

A proper MIDI setup unlocks the full potential of **TrackJammer**. Take the time to verify all connections are working correctly before moving on.

---

*Ready to learn the Launchpad layout? Continue to the [**Launchpad Interface** guide](launchpad/pad-layout.html).*
