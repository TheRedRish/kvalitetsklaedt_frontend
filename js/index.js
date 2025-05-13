const imageMap = {
    't-shirt': {
        Hvid: 'assets/images/t-shirt.png',
        Navy: 'assets/images/t-shirt-navy.png',
        Sort: 'assets/images/t-shirt-sort.png'
    },
    'hoodie': {
        Hvid: 'assets/images/hoodie.png',
        Navy: 'assets/images/hoodie-navy.png',
        Sort: 'assets/images/hoodie-sort.png'
    },
    'shirt': {
        Hvid: 'assets/images/shirt.png',
        Navy: 'assets/images/shirt-navy.png',
        Sort: 'assets/images/shirt-sort.png'
    }
};

let selectedProductType = 't-shirt'; // Default selection
const previewImg = document.querySelector('.preview img');
const colorContainer = document.getElementById('color-options');

function updateColorOptions(type) {
    colorContainer.innerHTML = ''; // Clear previous colors

    for (const color in imageMap[type]) {
        const box = document.createElement('div');
        box.classList.add('option-box');
        box.dataset.img = imageMap[type][color];

        const img = document.createElement('img');
        img.src = imageMap[type][color];
        img.alt = color;

        box.appendChild(img);
        box.append(color);

        box.addEventListener('click', () => {
            document.querySelectorAll('#color-options .option-box').forEach(b => b.classList.remove('selected'));
            box.classList.add('selected');
            previewImg.src = box.dataset.img;
        });

        colorContainer.appendChild(box);
    }

    // Mark first as selected and show its image
    const firstBox = colorContainer.querySelector('.option-box');
    if (firstBox) {
        firstBox.classList.add('selected');
        previewImg.src = firstBox.dataset.img;
    }
}

document.querySelectorAll('.options .option-box').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.options .option-box').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');

        selectedProductType = option.id;
        updateColorOptions(selectedProductType);
        console.log(selectedProductType);
    });
});

let selectedSize = null;

const sizeButtons = document.querySelectorAll('#size-options .circle-btn');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        selectedSize = button.textContent.trim();
        console.log(selectedSize);
    });
});

// Initialize on page load
updateColorOptions(selectedProductType);