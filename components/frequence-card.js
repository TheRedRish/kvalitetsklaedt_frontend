export function createFrequenceCard({ title, description, imageUrl, extraClass = "" }) {
    const section = document.createElement("section");
    section.className = `frequence-card ${extraClass}`.trim();

    // orderSummary is only allowed to be null here, because it is not used anywhere else.
    const orderSummary = JSON.parse(sessionStorage.getItem('orderSummary'));
    if (orderSummary !== null && orderSummary.frequency === title) {
        section.classList.add("selected");
    }

    const link = document.createElement("a");
    link.href = "#";
    link.dataset.frekvens = title;

    const cardContentId = `frequence-${title.toLowerCase().replace(/\s+/g, "-")}`;

    link.innerHTML = `
        <div class="frequence-card__content" id="${cardContentId}">
            <img class="frequence-card__image" src="${imageUrl}" alt="Kalender ikon">
            <div>
                <h1 class="frequence-card__title">${title}</h1>
                <p class="frequence-card__description">${description}</p>
            </div>
        </div>
    `;

    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Getting updated orderSummary
        const orderSummary = JSON.parse(sessionStorage.getItem('orderSummary')) || {};

        orderSummary.frequency = title;
        sessionStorage.setItem('orderSummary', JSON.stringify(orderSummary));

        document.querySelectorAll(".frequence-card.selected").forEach(el => el.classList.remove("selected"));

        section.classList.add("selected");
    });

    section.appendChild(link);

    return section;
}
