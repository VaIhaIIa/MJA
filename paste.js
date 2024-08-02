(function(paste) {
    'use strict';

    // Create the button
    const button = document.createElement('button');
    button.textContent = 'Paste';
    button.style.position = 'fixed';
    button.style.left = '1009px';
    button.style.top = '78px';
    button.style.zIndex = '9999';
    button.style.padding = '5px';
    button.style.backgroundColor = '#2e3038';
    button.style.color = '#ff4545';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

  document.body.appendChild(button);

    button.addEventListener('click', async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            const inputField = document.querySelector('.w-full.bg-transparent.outline-none.dark\\:text-dark-primary.dark\\:placeholder\\:text-dark-700.text-light-primary.placeholder\\:text-light-300.overflow-hidden.resize-none');
            if (inputField) {
                inputField.value = clipboardText;
                inputField.dispatchEvent(new Event('input', { bubbles: true }));
            } else {
                alert('Input field not found!');
            }
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    });
})();
