export function createBreadcrumb(activeStep = 1, canGoForwardCallback = () => true) {
    const container = document.createElement("div");
    container.className = "breadcrumbs";

    const steps = [
        {number: 1, label: "Vælg pakke", url: "./choose-product.html"}, // Til roden
        {number: 2, label: "Frekvens", url: "./choose-frequence-page.html"}, // Samme mappe
        {number: 3, label: "Bekræft", url: "./confirmation-page.html"}
    ];
    steps.forEach((step, index) => {
        const isActive = step.number === activeStep;

        const stepWrapper = document.createElement("div");
        stepWrapper.className = "breadcrumbs__step" + (isActive ? " breadcrumbs__step--active" : "");

        let stepWrapperInnerHTML = ``;

        if (!isActive && step.number <= activeStep + 1) {
            stepWrapperInnerHTML = `<a href="${step.url}" class="breadcrumbs__link" data-step="${step.number}">`;
        }

        stepWrapperInnerHTML += `<div class="breadcrumbs__circle">${step.number}</div>
        <div class="breadcrumbs__label">${step.label}</div>`

        if (!isActive && step.number <= activeStep + 1) {
            stepWrapperInnerHTML += `</a>`;
        }

        stepWrapper.innerHTML = stepWrapperInnerHTML;

        container.appendChild(stepWrapper);

        if (index < steps.length - 1) {
            const line = document.createElement("div");
            line.className = "breadcrumbs__line";
            container.appendChild(line);
        }
    });

    container.querySelectorAll('.breadcrumbs__link').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetStep = parseInt(link.dataset.step, 10);
            if (targetStep === activeStep + 1) {
                const allowed = canGoForwardCallback();
                if (!allowed) {
                    e.preventDefault();
                }
            } else if (targetStep > activeStep + 1) {
                e.preventDefault();
            }
        });
    });

    return container;
}
