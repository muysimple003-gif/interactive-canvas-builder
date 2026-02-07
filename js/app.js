// Complete event listeners

// Import required functionalities
import { initializeCanvas } from './canvas';
import { setupToolbarActions } from './toolbar';
import { managePropertiesPanel } from './propertiesPanel';

// Adding event listeners
window.addEventListener('load', () => {
    initializeCanvas();
    setupToolbarActions();
    managePropertiesPanel();
});

// Canvas initialization and toolbar setup
function setup() {
    // Canvas properties initialization
    initializeCanvas();

    // Toolbar actions setup
    setupToolbarActions();

    // Properties panel management
    managePropertiesPanel();
}

setup();