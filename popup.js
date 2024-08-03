document.addEventListener("DOMContentLoaded", function () {
  const templatesBtn = document.getElementById("templates-btn");
  const templatesDropdown = document.getElementById("templates-dropdown");

  // Add event listener to the button
  templatesBtn.addEventListener("click", function () {
    templatesDropdown.style.display = "block";
  });

  // Add event listener to the dropdown
  templatesDropdown.addEventListener("change", function () {
    // Get the selected template content
    const selectedTemplate = templatesDropdown.value;

    // Send a message to the content script to append the template content
    chrome.runtime.sendMessage({ action: "appendTemplate", template: selectedTemplate });
  });
});
