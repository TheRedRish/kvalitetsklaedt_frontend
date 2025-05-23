import {navbar} from "../components/navbar.js";
import {createBreadcrumb} from '../components/breadcrumbs.js';
import {createActionButton} from '../components/action-button.js';
import {sizingGuide, sizingGuideModule} from '../components/sizingGuide.js';

document.body.prepend(navbar());


const imageMap = {
    't-shirt': {
        shirtpakke: '../assets/images/3pakke.png',
        Hvid: '../assets/images/t-shirt.png',
        Navy: '../assets/images/t-shirt-navy.png',
        wriggle: '../assets/images/t-shirt-wriggle-color.png',
    },
    'hoodie': {
        Hvid: '../assets/images/hoodie.png',
        Navy: '../assets/images/hoodie-navy.png',
        Sort: '../assets/images/hoodie-sort.png'
    },
    'shirt': {
        Hvid: '../assets/images/shirt.png',
        Navy: '../assets/images/shirt-navy.png',
        Sort: '../assets/images/shirt-sort.png'
    }
};
let currentColorIndex = 0;

const previewImage = document.getElementById('previewImage');
const leftArrow = document.querySelector('.slider-arrow--left');
const rightArrow = document.querySelector('.slider-arrow--right');
const optionBoxes = document.querySelectorAll('.product-config__option-box');
let orderSummary = JSON.parse(sessionStorage.getItem('orderSummary'));

function updatePreview() {
    orderSummary.selectedColor = Object.keys(imageMap[orderSummary.selectedProductType])[currentColorIndex];
    updateCarouselAndImage(orderSummary.selectedProductType)
}

leftArrow.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex - 1 + Object.keys(imageMap[orderSummary.selectedProductType]).length) % Object.keys(imageMap[orderSummary.selectedProductType]).length;
    updatePreview();
});

rightArrow.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % Object.keys(imageMap[orderSummary.selectedProductType]).length;
    updatePreview();
});

optionBoxes.forEach(box => {
    box.addEventListener('click', () => {
        currentColorIndex = 0;
        updatePreview();

        optionBoxes.forEach(b => b.classList.remove('product-config__option-box--selected'));
        box.classList.add('product-config__option-box--selected');
    });
});

document.querySelector(".next-step").appendChild(
    createActionButton('Næste', 'choose-frequence-page.html', 'next-step__btn')
);

if (!sessionStorage.getItem('orderSummary')) {
    // Setting default values, selected type only attribute to get a default value, per user story requirements
    sessionStorage.setItem('orderSummary', JSON.stringify({
        selectedProductType: 't-shirt',
        selectedSize: null,
        selectedColor: null
    }));
}

function updateOrderSummary() {
    sessionStorage.setItem('orderSummary', JSON.stringify(orderSummary));
}

const previewImg = document.querySelector('.product-config__preview-img');
// const colorContainer = document.getElementById('color-options');
const carouselDots = document.getElementById('product-config__carousel-dots');
const nextButton = document.querySelector('.next-step__btn');
const sizeButtons = document.querySelectorAll('#size-options .product-config__circle-btn');

function renderColorOptions(type) {
    // colorContainer.innerHTML = '';
    carouselDots.innerHTML = '';

    let counter = 0;
    for (const color in imageMap[type]) {
        const carouselDot = document.createElement('div');
        carouselDot.classList.add('dot');
        carouselDot.dataset.color = imageMap[type][color];

        if (color === orderSummary.selectedColor) {
            carouselDot.classList.add('active');
            previewImg.src = imageMap[type][color];
            currentColorIndex = counter;
        }

        carouselDot.addEventListener('click', () => {

            document.querySelectorAll('#product-config__carousel-dots .dot.active').forEach(b =>
                b.classList.remove('active')
            );

            carouselDot.classList.add('active');
            previewImg.src = imageMap[type][color];

            orderSummary.selectedColor = color;
            updateOrderSummary();
        });

        carouselDots.appendChild(carouselDot);

        counter++;
    }
}

function updateCarouselAndImage() {
    previewImg.src = imageMap[orderSummary.selectedProductType][orderSummary.selectedColor];
    document.querySelectorAll('#product-config__carousel-dots .dot.active').forEach(b =>
        b.classList.remove('active')
    );

    document.querySelectorAll('#product-config__carousel-dots .dot').forEach(b => {
            if (b.dataset.color === imageMap[orderSummary.selectedProductType][orderSummary.selectedColor]) {
                b.classList.add('active');
            }
        }
    );
    previewImg.src = imageMap[orderSummary.selectedProductType][orderSummary.selectedColor];
}

document.querySelectorAll('.product-config__options .product-config__option-box').forEach(option => {
    option.addEventListener('click', () => {

        document.querySelectorAll('.product-config__option-box').forEach(o =>
            o.classList.remove('product-config__option-box--selected')
        );

        option.classList.add('product-config__option-box--selected');

        orderSummary.selectedProductType = option.id

        const img = option.querySelector('img');
        if (img) {
            previewImg.src = img.src;
            orderSummary.selectedColor = getColorByImageSrc(img.src, orderSummary.selectedProductType);
        }

        renderColorOptions(orderSummary.selectedProductType);
        updateOrderSummary();
    });
});

function getColorByImageSrc(src, type) {
    for (const color in imageMap[type]) {
        if (src.includes(imageMap[type][color])) {
            return color;
        }
    }
    for (const color in imageMap[type]) {
        if (src.includes(color.toLowerCase())) {
            return color;
        }
    }
    return Object.keys(imageMap[type])[0];
}


document.querySelectorAll('.product-config__options .product-config__option-box').forEach(box => {
    if (box.id === orderSummary.selectedProductType) {
        box.classList.add('product-config__option-box--selected');
    }
});

if (orderSummary.selectedSize) {
    sizeButtons.forEach(button => {
        if (button.textContent.trim() === orderSummary.selectedSize) {
            button.classList.add('product-config__circle-btn--active');
        }
    });
    nextButton.innerHTML = "Næste";
    nextButton.style.backgroundColor = 'var(--gold)';
}

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn =>
            btn.classList.remove('product-config__circle-btn--active')
        );
        button.classList.add('product-config__circle-btn--active');

        orderSummary.selectedSize = button.textContent.trim();
        updateOrderSummary();

        nextButton.innerHTML = "Næste";
        nextButton.style.backgroundColor = 'var(--gold)';
    });
});

nextButton.addEventListener('click', (e) => {
    if (!checkOrderSummary()) {
        e.preventDefault();
    }
});

renderColorOptions(orderSummary.selectedProductType);

const breadcrumbContainer = document.querySelector(".frequence-page__breadcrumbs");
if (breadcrumbContainer) {
    breadcrumbContainer.appendChild(createBreadcrumb(1));
}

function checkOrderSummary() {
    const orderSummary = JSON.parse(sessionStorage.getItem('orderSummary')) || null;
    const orderSummarySelectedSize = orderSummary !== null && orderSummary.selectedSize !== null;

    if (!orderSummarySelectedSize) {
        nextButton.innerHTML = "Vælg en størrelse ⛔️";
        nextButton.style.backgroundColor = '#c44545';
    }

    return orderSummarySelectedSize;
}

sizingGuide();
sizingGuideModule();