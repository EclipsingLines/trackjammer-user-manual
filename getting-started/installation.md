---
layout: default
title: Installation
parent: Getting Started
nav_order: 1
---

# Installation Guide

Getting **TrackJammer** up and running is straightforward. This guide will walk you through the installation process for Windows, macOS, and Linux.

![Installation Process](docs/img/installation-process.jpg)
*The installation process, showing the download and setup steps.*

## System Requirements

Before you install, ensure your system meets these minimum requirements:

- **Windows**: Windows 10 (64-bit) or newer.
- **macOS**: macOS 10.14 (Mojave) or newer.
- **Linux**: Ubuntu 18.04 LTS or an equivalent distribution.
- **RAM**: 512MB minimum, 1GB recommended.
- **Storage**: 50MB of free disk space.
- **MIDI Hardware**: A **Novation Launchpad Mini MK3** or **Launchpad X** is highly recommended.

## Download Options

[Get **TrackJammer** from Gumroad](https://eclipsinglines.gumroad.com/l/TracksJammerLE)

## Installation Steps

### Windows

1. **Download** the Windows release file.
2. **Extract** the ZIP file to your desired location (e.g., `C:\Program Files\TrackJammer\`).
3. **Run** `TrackJammer.exe`. No additional installation is required.
4. **(Optional)** Create a shortcut by right-clicking the executable and selecting "**Create shortcut**".

The application is portable and does not require administrator privileges or registry modifications.

### macOS

1. **Download** the macOS DMG file.
2. **Mount** the disk image by double-clicking it.
3. **Drag** the **TrackJammer** application to your **Applications** folder.
4. **On first launch**, right-click the app and select "**Open**" to bypass Gatekeeper warnings.
5. **Grant permissions** for MIDI access when prompted.

### Linux

1. **Download** the Linux `tar.gz` file.
2. **Extract** it to your preferred location:

    ```bash
    tar -xzf TrackJammer-Linux.tar.gz
    cd TrackJammer
    ```

3. **Make the application executable** (if needed):

    ```bash
    chmod +x TrackJammer
    ```

4. **Run** the application:

    ```bash
    ./TrackJammer
    ```

For a system-wide installation, you can move the application to `/opt/` or `/usr/local/bin/`.

## Post-Installation Setup

### MIDI Permissions

Some operating systems require you to grant MIDI permissions explicitly:

- **Windows**: No additional setup is required.
- **macOS**: Grant MIDI access in **System Preferences → Security & Privacy → Privacy → Input Monitoring**.
- **Linux**: Add your user to the `audio` group.

    ```bash
    sudo usermod -a -G audio $USER
    ```

### Configuration Files

**TrackJammer** creates configuration files in the same directory as the executable, making it easily portable.

## Troubleshooting

### Common Issues

**The application won't start.**

- Verify that your system meets the requirements.
- Ensure that all files were extracted correctly.
- Try running as an administrator (on Windows) or with the correct permissions.

**MIDI devices are not detected.**

- Make sure your **MIDI Device** is connected and recognized by your operating system.
- Check that any necessary drivers are installed.
- Restart the application after connecting your **MIDI Device**.

**The Launchpad is not responding.**

- Verify the **Launchpad** is in the correct mode.
- Try disconnecting and reconnecting the USB cable.
- Check that no other software is using the **Launchpad**.

## Next Steps

Once the installation is complete:

1. [Connect your MIDI devices](midi-setup.html).
2. [Launch the application for the first time](first-launch.html).
3. [Learn the basic operation](basic-operation.html).
