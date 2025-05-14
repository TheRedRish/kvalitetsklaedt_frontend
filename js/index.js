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

let selectedProductType = 't-shirt';
const previewImg = document.querySelector('.product-config__preview-img');
const colorContainer = document.getElementById('color-options');
const nextButton = document.querySelector('.next-step__btn');

function updateColorOptions(type) {
    colorContainer.innerHTML = '';

    for (const color in imageMap[type]) {
        const box = document.createElement('div');
        box.classList.add('product-config__option-box');
        box.dataset.img = imageMap[type][color];

        const img = document.createElement('img');
        img.src = imageMap[type][color];
        img.alt = color;

        box.appendChild(img);
        box.append(color);

        box.addEventListener('click', () => {
            document.querySelectorAll('#color-options .product-config__option-box').forEach(b => b.classList.remove('product-config__option-box--selected'));
            box.classList.add('product-config__option-box--selected');
            previewImg.src = box.dataset.img;
        });

        colorContainer.appendChild(box);
    }

    const firstBox = colorContainer.querySelector('.product-config__option-box');
    if (firstBox) {
        firstBox.classList.add('product-config__option-box--selected');
        previewImg.src = firstBox.dataset.img;
    }
}

document.querySelectorAll('.product-config__options .product-config__option-box').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.product-config__options .product-config__option-box').forEach(o => o.classList.remove('product-config__option-box--selected'));
        option.classList.add('product-config__option-box--selected');

        selectedProductType = option.id;
        updateColorOptions(selectedProductType);
        console.log(selectedProductType);
    });
});

let selectedSize = null;

const sizeButtons = document.querySelectorAll('#size-options .product-config__circle-btn');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('product-config__circle-btn--active'));
        button.classList.add('product-config__circle-btn--active');
        selectedSize = button.textContent.trim();
        nextButton.innerHTML = "Næste";
        nextButton.style.backgroundColor = '#d1ac42';
        console.log(selectedSize);
    });
});

updateColorOptions(selectedProductType);

nextButton.addEventListener('click', () => {
    if (selectedSize !== null ) {

    } else  {
        nextButton.innerHTML = "Vælg en størrelse før du kan gå videre";
        nextButton.style.backgroundColor = '#c44545';
    }
})
