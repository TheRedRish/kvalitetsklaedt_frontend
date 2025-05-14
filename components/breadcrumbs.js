export function createBreadcrumb(activeStep = 1) {
    const container = document.createElement("div");
    container.className = "breadcrumbs";

    const steps = [
        { number: 1, label: "Vælg pakke", url: "index.html" }, // Til roden
        { number: 2, label: "Frekvens", url: "choose-frequence-pageHTML.html" }, // Samme mappe
        { number: 3, label: "Bekræft", url: "confirmation-page.html" }
    ];
    steps.forEach((step, index) => {
        const isActive = step.number === activeStep;

        const stepWrapper = document.createElement("div");
        stepWrapper.className = "breadcrumbs__step" + (isActive ? " breadcrumbs__step--active" : "");

        if (isActive) {
            stepWrapper.innerHTML = `
        <div class="breadcrumbs__circle">${step.number}</div>
        <div class="breadcrumbs__label">${step.label}</div>
      `;
        } else {
            stepWrapper.innerHTML = `
        <a href="${step.url}" class="breadcrumbs__link">
          <div class="breadcrumbs__circle">${step.number}</div>
          <div class="breadcrumbs__label">${step.label}</div>
        </a>
      `;
        }

        container.appendChild(stepWrapper);

        if (index < steps.length - 1) {
            const line = document.createElement("div");
            line.className = "breadcrumbs__line";
            container.appendChild(line);
        }
    });

    return container;
}
