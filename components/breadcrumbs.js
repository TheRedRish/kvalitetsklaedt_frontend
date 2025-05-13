export function createBreadcrumb(activeStep = 1) {
    const container = document.createElement("div");
    container.className = "breadcrumbs";

    const steps = [
        { number: 1, label: "Vælg pakke" },
        { number: 2, label: "Frekvens" },
        { number: 3, label: "Bekræft" }
    ];

    steps.forEach(step => {
        const stepElement = document.createElement("div");
        stepElement.className = "breadcrumbs__step" + (step.number === activeStep ? " breadcrumbs__step--active" : "");

        stepElement.innerHTML = `
            <div class="breadcrumbs__circle">${step.number}</div>
            <div class="breadcrumbs__label">${step.label}</div>
        `;

        container.appendChild(stepElement);

        // Tilføj streg mellem hvis det ikke er sidste step
        if (step.number < steps.length) {
            const line = document.createElement("div");
            line.className = "breadcrumbs__line";
            container.appendChild(line);
        }
    });

    return container;
}
