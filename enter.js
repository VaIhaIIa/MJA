(function(enter) {
    'use strict';

    // Create the button element
    const button = document.createElement('button');
    button.id = 'sendEnterButton';
    button.innerText = 'Enter';
    button.style.position = 'fixed'; // Keep it fixed to the viewport
    button.style.left = '1223px';    // X position
    button.style.top = '78px';        // Y position
    button.style.zIndex = '9999';     // Ensure it is on top of other elements
    button.style.padding = '5px 5px'; // Button padding
    button.style.backgroundColor = '#2e3038'; // Button color
    button.style.color = '#ff4545';      // Text color
    button.style.border = 'none';      // Remove border
    button.style.borderRadius = '5px'; // Rounded corners
    button.style.cursor = 'pointer';   // Pointer cursor on hover

    // Function to simulate the Enter key press
    function sendEnterKey() {
        const enterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
            keyCode: 13,
            which: 13,
            bubbles: true,
            cancelable: true
        });

        // Dispatch the event to the active element
        document.activeElement.dispatchEvent(enterEvent);
    }

    // Event listener for the button
    button.addEventListener('click', () => {
        sendEnterKey(); // Send Enter key when button is clicked
    });

    // Append the button to the body
    document.body.appendChild(button);
})();
