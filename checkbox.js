(function(checkbox) {
    'use strict';
    // Create the checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'alwaysOnTopCheckbox';
    checkbox.style.position = 'absolute';
    checkbox.style.top = '23px';
    checkbox.style.left = '1200px';
    checkbox.style.zIndex = '9999';
    checkbox.style.backgroundColor = '#323232';
    checkbox.style.border = '#010101';
    checkbox.checked = false;

    checkbox.style.width = '22.25px'; // Adjust the size of the custom checkbox
    checkbox.style.height = '23px';
    checkbox.style.margin = '13px'; // Adjust the margin for centering
    checkbox.style.background = '#323232'; // Light grey background for the checkbox
    checkbox.style.border = '0px solid #010101'; // Border color for contrast
    checkbox.style.borderRadius = '3px'; // Rounded corners
    checkbox.style.display = 'inline-block';

    // Append the checkbox to the body
    document.body.appendChild(checkbox);

    // Add event listener to the checkbox
    checkbox.addEventListener('change', function() {
        var textarea = document.querySelector('textarea#desktop_input_bar.w-full.bg-transparent.outline-none.dark\\:text-dark-primary.dark\\:placeholder\\:text-dark-700.text-light-primary.placeholder\\:text-light-300.overflow-hidden.resize-none');
        if (textarea) {
            if (checkbox.checked) {
                textarea.value += ' --tile';
            } else {
                // Remove the --tile if checkbox is unchecked (optional)
                textarea.value = textarea.value.replace(' --tile', '');
            }
        }
    });
})();
