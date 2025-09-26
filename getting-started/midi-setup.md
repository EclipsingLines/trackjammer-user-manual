---
layout: default
title: MIDI Setup
parent: Getting Started
nav_order: 2
description: "Configure MIDI devices and connections for the sequencer"
---

# MIDI Setup

Proper MIDI configuration is essential for getting data from the sequencer and enabling hardware control. This guide walks you through connecting your MIDI devices, configuring the sequencer, and troubleshooting common connection issues.

![MIDI Setup Interface](docs/img/midi-setup-interface.jpg)
*The MIDI configuration dialog showing available input and output devices*

## Understanding MIDI in the Sequencer

The {{ site.product_name }} uses two separate MIDI connections:

### Control Surface (Launchpad)

- **Purpose**: Hardware control and visual feedback
- **Device**: Novation Launchpad Mini MK3, Launchpad X, or compatible controller
- **Data Flow**: Bidirectional (sends LED data to Launchpad, receives button presses)

### Sequencer Output

- **Purpose**: Musical data output to synthesizers, samplers, or DAW
- **Device**: Any MIDI-capable instrument or software
- **Data Flow**: Output only (sends notes, CC, and NRPN data but can be set to also recieve from the control device to enable the use of knobs or faders)

## Automatic Configuration

The sequencer attempts automatic MIDI setup on startup for the most common scenarios.

### Auto-Detection Process

1. **Scans** for connected Novation Launchpad devices
2. **Identifies** available MIDI output ports
3. **Attempts** to establish connections based on device names
4. **Reports** success or failure in the console

### Supported Auto-Detection

- Novation Launchpad Mini MK3
- Novation Launchpad X

If auto-detection succeeds, you can start using the sequencer immediately. If it fails, manual configuration is required.

## Manual MIDI Configuration

When automatic setup doesn't work, or you need specific routing, use the manual configuration options.

![MIDI Configuration Dialog](docs/img/midi-config-dialog.jpg)
*Manual MIDI configuration showing device selection dropdowns*

### Accessing MIDI Settings

- **Menu Path**: Settings → MIDI Configuration
- **Shortcut**: Ctrl+M (Cmd+M on Mac)
- **Startup**: Configuration dialog appears if auto-detection fails

### Control Surface Setup

1. **Select Input Device**: Choose your Launchpad from the "Control Input" dropdown
2. **Select Output Device**: Choose the same Launchpad from the "Control Output" dropdown
3. **Test Connection**: The Launchpad LEDs should light up when connected properly

### Sequencer Output Setup

1. **Select Output Device**: Choose your target synthesizer, audio interface, or DAW input
2. **Channel Configuration**: Verify MIDI channels match your receiving devices
3. **Test Output**: Use the built-in test function to verify notes are sent

## Configuration File Method

For advanced users or automated setups, configuration can be managed through files.

### Creating Configuration Files

The sequencer reads configuration from `midi_config.json` in the project directory or user settings folder.

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

### Command Line Options

Override configuration via command line arguments:

```bash
# Windows
GodotMidiSeq.exe --control-input "Launchpad Mini MK3" --sequencer-output "Your Synth"

# macOS/Linux  
./GodotMidiSeq --control-input "Launchpad Mini MK3" --sequencer-output "Your Synth"
```

### Disabling Auto-Connect

To skip automatic connection attempts:

```bash
./GodotMidiSeq --no-auto-connect
```

## Launchpad-Specific Setup

Different Launchpad models require specific configuration steps.

### Launchpad Mini MK3

![Launchpad Mini MK3 Setup](docs/img/launchpad-mini-mk3-setup.jpg)
*Launchpad Mini MK3 in programmer mode showing correct LED patterns*

1. **Connect** via USB
2. **Mode Selection**: The sequencer automatically switches to Programmer Mode
3. **Verification**: All LEDs should briefly flash, then show the current pattern
4. **Troubleshooting**: If LEDs don't respond, try disconnecting/reconnecting

### Launchpad X

1. **Connect** via USB
2. **Mode Selection**: Ensure it's not in Ableton Live mode
3. **Verification**: The 8x8 grid should show step patterns immediately
4. **Additional Features**: Velocity-sensitive pads provide enhanced expression

### Other Controllers

While optimized for Novation Launchpads, the sequencer may work with other 8x8 grid controllers:

- Ensure the controller sends standard MIDI note messages
- Mapping may require customization
- LED feedback may not be available

## MIDI Channel Configuration

The sequencer uses seven MIDI channels by default, one for each track.

![MIDI Channel Configuration](docs/img/midi-channels-setup.jpg)
*MIDI channel assignment showing track-to-channel mapping*

### Default Channel Assignment

- **Track 1**: MIDI Channel 1
- **Track 2**: MIDI Channel 2  
- **Tracks 3-6**: MIDI Channel 10 (drums)
- **Track 7**: MIDI Channel 16 (device control)

### Customizing Channels

1. **Select Track**: Choose the track to configure
2. **Channel Parameter**: Adjust in the track parameter panel
3. **Range**: Channels 1-16 available
4. **Real-time**: Changes take effect immediately

### Multi-timbral Setup

We don't support multi timbral output over different MIDI channels in the current version.

## Next Steps

With MIDI properly configured:

1. **[Explore the Launchpad interface →](launchpad/pad-layout.html)** - Learn the hardware control layout
2. **[Master basic operation →](getting-started/basic-operation.html)** - Review essential controls
3. **[Create your first pattern →](euclidean/introduction.html)** - Start making music

Proper MIDI setup unlocks the sequencer's full potential. Take time to verify all connections are working correctly before moving on to pattern creation and performance features.

---

*Ready to learn the Launchpad layout? Continue to [Launchpad Interface →](launchpad/pad-layout.html)*
