/**
 * Launchpad Grid Generator - JavaScript version
 * Generates an 8x8 launchpad grid with customizable color presets.
 * Maintains compatibility with Jekyll/GitHub Pages.
 */

class LaunchpadGrid {
    constructor() {
        // Define all preset patterns
        this.presets = {
            save_slots: ["gray:2", "blue:3", "gray:2", "gray:2", "blue:3", "gray:2", "gray:2", "gray:2"],
            steps_r_1: ["cyan:3", "cyan:1", "cyan:1", "cyan:3", "orange:3", "cyan:1", "cyan:3", "cyan:1"],
            steps_r_2: ["cyan:1", "cyan:3", "cyan:1", "cyan:1", "cyan:3", "cyan:1", "green:3", "cyan:1"],
            steps_r_3: ["cyan:3", "cyan:1", "cyan:1", "cyan:3", "cyan:1", "cyan:1", "cyan:3", "cyan:1"],
            value_chance: ["green:3", "green:3", "green:3", "green:3", "green:3", "green:3", "green:3", "green:3",
                "cyan:2", "off", "off", "purple:3", "orange:3", "off", "off", "red:3"],
            extra_row_empty: ["off", "off", "off", "off", "off", "off", "cyan:3", "red:1"],
            empty_row: ["off", "off", "off", "off", "off", "off", "off", "off"]
        };
    }

    /**
     * Generate launchpad grid HTML
     * @param {Object} options - Configuration options
     * @param {string} options.presets - Comma-separated list of preset names
     * @param {number} options.rows - Maximum number of rows (default: 8)
     * @param {boolean} options.includeRightButtons - Show right buttons (default: true)
     * @param {boolean} options.showTop - Show top row (default: false)
     * @returns {string} Generated HTML
     */
    generate(options = {}) {
        const {
            presets = '',
            rows = 8,
            includeRightButtons = true,
            showTop = false
        } = options;

        // Parse preset names
        const presetNames = presets.split(',').map(name => name.trim());

        // Build combined color array
        let allColors = [];
        for (const presetName of presetNames) {
            const preset = this.presets[presetName];
            if (preset) {
                allColors = allColors.concat(preset);
            } else {
                // Default to empty row if preset not found
                allColors = allColors.concat(["off", "off", "off", "off", "off", "off", "off", "off"]);
            }
        }

        // Calculate rows to render
        const totalPads = allColors.length;
        const calculatedRows = Math.ceil(totalPads / 8.0);
        const rowsToRender = Math.min(calculatedRows, rows);

        // Start building HTML - don't include the container div since it's handled by Jekyll
        let html = '';

        // Generate grid rows (top row is handled by Jekyll)
        for (let rowIndex = 0; rowIndex < rowsToRender; rowIndex++) {
            // Generate pads for this row
            for (let colIndex = 0; colIndex < 8; colIndex++) {
                const padIndex = rowIndex * 8 + colIndex;

                if (padIndex < allColors.length) {
                    const colorEntry = allColors[padIndex].trim();
                    let colorName, intensity;

                    // Parse color:intensity format
                    if (colorEntry.includes(':')) {
                        const parts = colorEntry.split(':');
                        colorName = parts[0].trim();
                        intensity = parts[1].trim();
                    } else {
                        colorName = colorEntry;
                        intensity = '3';
                    }

                    // Build CSS classes
                    let padClasses = `launchpad-pad pad-${colorName}`;
                    if (colorName !== 'off') {
                        padClasses += ` intensity-${intensity}`;
                    }

                    html += `        <div class="${padClasses}"></div>\n`;
                } else {
                    html += '        <div class="launchpad-pad pad-off"></div>\n';
                }
            }

            // Add right button if enabled
            if (includeRightButtons) {
                if (rowIndex === rowsToRender - 1) {
                    html += '        <div class="launchpad-button launchpad-right-button launchpad-stop-solo-mute"></div>\n';
                } else {
                    html += '        <div class="launchpad-button launchpad-right-button launchpad-arrow-button"></div>\n';
                }
            }
        }

        return html;
    }

    /**
     * Generate and insert launchpad grid into a container element
     * @param {string} containerId - ID of the container element
     * @param {Object} options - Configuration options (same as generate method)
     */
    renderTo(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.generate(options);
        } else {
            console.error(`Container with ID '${containerId}' not found`);
        }
    }
}

// Global instance for easy access
window.LaunchpadGrid = new LaunchpadGrid();

/**
 * Helper function for Jekyll includes
 * Generates launchpad grid with parameters from data attributes
 * @param {HTMLElement} element - Element containing data attributes
 */
function generateLaunchpadGrid(element) {
    const options = {
        presets: element.dataset.presets || '',
        rows: parseInt(element.dataset.rows) || 8,
        includeRightButtons: element.dataset.includeRightButtons !== 'false',
        showTop: element.dataset.showTop === 'true'
    };

    return window.LaunchpadGrid.generate(options);
}

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LaunchpadGrid;
}