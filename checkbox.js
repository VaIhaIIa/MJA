(function(checkbox) {
    'use strict';
   // Create the Tile button
var button = document.createElement('button');
button.textContent = 'Tile';
button.style.position = 'absolute';
button.style.left = '500px';
button.style.top = '78px';
    button.style.zIndex = '9999';      // Ensure it is on top of other elements
    button.style.padding = '5px 5px'; // Button padding
    button.style.backgroundColor = '#2e3038'; // Button color
    button.style.color = '#ff4545';       // Text color
    button.style.border = 'none';       // Remove border
    button.style.borderRadius = '5px'; // Rounded corners
    button.style.cursor = 'pointer';    // Pointer cursor on hover
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', function() {
  var textarea = document.querySelector('.w-full.bg-transparent.outline-none.dark\\:text-dark-primary.dark\\:placeholder\\:text-dark-700.text-light-primary.placeholder\\:text-light-300.overflow-hidden.resize-none');
  textarea.classList.add(' --tile');
});

// Note: The above script adds a space and '--tile' to the end of the class list.
// If you want to append '--tile' without a space, use:
// textarea.classList.add('--tile');
