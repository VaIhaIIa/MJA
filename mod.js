(function(mod) {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.id = 'cleanInputButton';
    button.innerText = '-MODS';
    button.style.position = 'fixed'; // Keep it fixed to the viewport
    button.style.left = '1155px';     // X position
    button.style.top = '78px';         // Y position
    button.style.zIndex = '9999';      // Ensure it is on top of other elements
    button.style.padding = '5px 5px'; // Button padding
    button.style.backgroundColor = '#2e3038'; // Button color
    button.style.color = '#ff4545';       // Text color
    button.style.border = 'none';       // Remove border
    button.style.borderRadius = '5px'; // Rounded corners
    button.style.cursor = 'pointer';    // Pointer cursor on hover

    // Function to clean the input based on the regex rules
    function cleanInput(input) {
        return input
            .replace(/--ar\s\d{1,3}:\d{1,3}\s/g, '') // Removes "--ar n:m" where n and m are numbers
            .replace(/--stylize\s\d{1,4}(?!\d)/g, '') // Removes "--stylize n" where n is up to 4 digits
            .replace(/--weird\s\d{1,4}(?!\d)/g, '') // Removes "--weird n" where n is up to 4 digits
            .replace(/--chaos\s\d{1,3}(?!\d)/g, '') // Removes "--chaos n" where n is up to 3 digits
            .replace(/--iw\s\d{1,3}(?!\d)/g, '') // Removes "--iw n" where n is up to 3 digits
            .replace(/--v\s(5\.1|5\.2|6|6\.1)(?=\s|$)/g, '') // Removes "--v 5.1", "--v 5.2", or "--v 6"
            .replace(/\s?--tile/g, '') // Removes "--tile", with optional preceding space
            .replace(/\s?--style\s+raw\s?/g, ''); // Removes "--style raw", with optional spaces
    }

    // Function to remove text from elements with the specified class
    function applyCleanInput() {
        const elements = document.querySelectorAll('.w-full.bg-transparent.outline-none.dark\\:text-dark-primary.dark\\:placeholder\\:text-dark-700.text-light-primary.placeholder\\:text-light-300.overflow-hidden.resize-none');

        elements.forEach(element => {
            // Clean the text based on the function
            if (element.value !== undefined) {
                element.value = cleanInput(element.value); // For input elements
            } else {
                element.innerText = cleanInput(element.innerText); // For non-input elements
            }
        });
    }

    // Event listener for the button
    button.addEventListener('click', () => {
        applyCleanInput(); // Apply clean input when button is clicked
    });

    // Append the button to the body
    document.body.appendChild(button);
})();
