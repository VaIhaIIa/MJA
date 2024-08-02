(function(repeat) {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.id = 'sendUpEnterButton';
    button.innerText = 'Repeat';
    button.style.position = 'fixed'; // Keep it fixed to the viewport
    button.style.left = '1076.2px'; // X position
    button.style.top = '78px'; // Y position
    button.style.zIndex = '9999'; // Ensure it is on top of other elements
    button.style.padding = '5px 5px'; // Button padding
    button.style.backgroundColor = '#2e3038'; // Button color
    button.style.color = '#ff4545'; // Text color
    button.style.border = 'none'; // Remove border
    button.style.borderRadius = '5px'; // Rounded corners
    button.style.cursor = 'pointer'; // Pointer cursor on hover

    // Function to simulate the Up key press
    function sendUpKey(element) {
        const upEvent = new KeyboardEvent('keydown', {
            key: 'ArrowUp',
            code: 'ArrowUp',
            charCode: 38,
            keyCode: 38,
            which: 38,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(upEvent);
    }

    // Function to simulate the Enter key press
    function sendEnterKey(element) {
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
            keyCode: 13,
            which: 13,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(enterEvent);
    }

    // Function to find the target elements and send key presses
    function sendKeysToElements() {
        const elements = document.querySelectorAll('.w-full.bg-transparent.outline-none.dark\\:text-dark-primary.dark\\:placeholder\\:text-dark-700.text-light-primary.placeholder\\:text-light-300.overflow-hidden.resize-none');

        elements.forEach(element => {
            sendUpKey(element); // Send Up key to each element
            sendEnterKey(element); // Then send Enter key to each element
        });
    }

    // Event listener for the button
    button.addEventListener('click', () => {
        sendKeysToElements(); // Send keys to the elements when button is clicked
    });

    // Append the button to the body
    document.body.appendChild(button);
})();
