---
layout: default
title: Installation
parent: Getting Started
nav_order: 1
---

# Installation Guide

Getting the {{ site.product_name }} up and running is straightforward. This guide will walk you through the installation process for Windows, macOS, and Linux systems.

![Installation Process](docs/img/installation-process.jpg)
*The installation process showing download and setup steps*

## System Requirements

Before installing, ensure your system meets these minimum requirements:

- **Windows**: Windows 10 (64-bit) or newer
- **macOS**: macOS 10.14 (Mojave) or newer  
- **Linux**: Ubuntu 18.04 LTS or equivalent distribution
- **RAM**: 512MB minimum, 1GB recommended
- **Storage**: 50MB free disk space
- **MIDI Hardware**: Novation Launchpad Mini MK3 or Launchpad X (highly recommended)

## Download Options

### Pre-built Releases (Recommended)

Download the latest pre-built version from the releases page. This is the easiest option for most users:

1. Get the [{{ site.product_name }}](https://eclipsinglines.gumroad.com/l/TracksJammerLE)

### Building from Source

Advanced users can build from source code using the Godot engine. This requires Godot 4.5+ and the included project files.

## Installation Steps

### Windows Installation

1. **Download** the Windows release file
2. **Extract** the ZIP file to your desired location (e.g., `C:\Program Files\GodotMidiSeq\`)
3. **Run** `GodotMidiSeq.exe` directly - no additional installation required
4. **Create shortcut** (optional) by right-clicking the executable and selecting "Create shortcut"

The application runs portably and doesn't require administrator privileges or registry modifications.

### macOS Installation

1. **Download** the macOS DMG file
2. **Mount** the disk image by double-clicking
3. **Drag** the application to your Applications folder
4. **First launch**: Right-click the app and select "Open" to bypass Gatekeeper warnings
5. **Grant permissions** for MIDI access when prompted

### Linux Installation

1. **Download** the Linux tar.gz file
2. **Extract** to your preferred location:

   ```bash
   tar -xzf GodotMidiSeq-Linux.tar.gz
   cd GodotMidiSeq
   ```

3. **Make executable** (if needed):

   ```bash
   chmod +x GodotMidiSeq
   ```

4. **Run** the application:

   ```bash
   ./GodotMidiSeq
   ```

For system-wide installation, move to `/opt/` or `/usr/local/bin/` as preferred.

## Post-Installation Setup

### MIDI Permissions

Some systems require explicit MIDI permissions:

- **Windows**: No additional setup required
- **macOS**: Grant MIDI access in System Preferences → Security & Privacy → Privacy → Input Monitoring
- **Linux**: Add your user to the `audio` group:

  ```bash
  sudo usermod -a -G audio $USER
  ```

### Configuration Files

The sequencer creates configuration files next to its executable for easy portability.

## Troubleshooting Installation

### Common Issues

**"Application won't start"**

- Verify system requirements are met
- Check that all files were extracted properly
- Try running as administrator (Windows) or with appropriate permissions

**"MIDI devices not detected"**

- Ensure your MIDI interface is connected and recognized by the operating system
- Check that drivers are properly installed
- Restart the application after connecting MIDI devices

**"Launchpad not responding"**

- Verify the Launchpad is in the correct mode
- Try disconnecting and reconnecting the USB cable
- Check that no other software is using the Launchpad

## Next Steps

Once installation is complete:

1. [Connect your MIDI devices →](../midi-setup.html)
2. [Launch the application for the first time →](first-launch.html)
3. [Learn the basic operation →](basic-operation.html)

The sequencer is designed to work immediately after installation, but connecting a Launchpad controller will greatly enhance your experience and provide the intended tactile workflow.
