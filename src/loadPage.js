// loadPage.js - rev-01

function loadPage() {
    // Cache DOM elements
    const mainBox = document.getElementById('mainBox');
    const dropDownArea = document.getElementById('dropDownArea');
    const ddMenuArea = document.getElementById('ddMenuArea');
    const ddButton = document.getElementById('ddButton');

    // Main Box flex styling
    mainBox.style.display = 'flex';
    mainBox.style.flexDirection = 'column';
    mainBox.style.justifyContent = 'center';
    mainBox.style.alignItems = 'center';

    // Drop Down Area styling
    dropDownArea.style.display = 'flex';
    dropDownArea.style.flexDirection = 'column';
    dropDownArea.style.justifyContent = 'center';
    dropDownArea.style.alignItems = 'center';

    // Drop Down Menu Area initial state
    ddMenuArea.style.display = 'none'; // Initially hidden

    // Add hover effect for the button
    ddButton.addEventListener('mouseover', function() {
        ddButton.style.backgroundColor = 'gray';
        ddButton.style.cursor = 'pointer';
    });

    ddButton.addEventListener('mouseout', function() {
        ddButton.style.backgroundColor = ''; // Reset to original color
    });

    // Add hover effects for dropdown menu items
    const dropButtons = document.querySelectorAll('.dropButton');
    dropButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'green';
            button.style.cursor = 'pointer';
            button.style.fontWeight = '900';
        });

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = ''; // Reset to original color
            button.style.fontWeight = '500'; // Reset to original font weight
        });
    });
}

export default loadPage;
