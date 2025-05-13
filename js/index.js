import { navbar } from "../components/navbar.js";

document.body.prepend(navbar());

let selectedProductType = 'T-Shirt'; // Default selected

function updatePreview(selectedBox) {
    // Remove 'selected' class from all
    document.querySelectorAll('.option-box').forEach(box => box.classList.remove('selected'));

    // Add 'selected' to the clicked one
    selectedBox.classList.add('selected');

    // Get image source and update preview
    const newSrc = selectedBox.querySelector('img').src;
    document.getElementById('preview-image').src = newSrc;

    // Get the type from the data attribute and store it
    selectedProductType = selectedBox.getAttribute('data-type');
    console.log('Selected type:', selectedProductType); // for testing
}
