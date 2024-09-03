// index.js - rev-01

import loadPage from './loadPage.js';

document.addEventListener('DOMContentLoaded', () => {
    loadPage();

    const ddButton = document.getElementById('ddButton');
    const ddMenuArea = document.getElementById('ddMenuArea');

    // Toggle dropdown menu visibility on button click
    ddButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling
        ddMenuArea.style.display = ddMenuArea.style.display === 'block' ? 'none' : 'block';
    });

    // Hide dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!ddButton.contains(event.target) && !ddMenuArea.contains(event.target)) {
            ddMenuArea.style.display = 'none';
        }
    });

    // Handle menu item click
    const menuItems = document.querySelectorAll('.dropButton');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Here, you can define what should happen when an item is clicked
            console.log(`${this.id} clicked`);
        });
    });
});
