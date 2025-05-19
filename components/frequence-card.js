export function createFrequenceCard({ title, description, imageUrl, extraClass = "" }) {
    const section = document.createElement("section");
    section.className = `frequence-card ${extraClass}`.trim();

    const link = document.createElement("a");
    link.href = "#";
    link.dataset.frekvens = title;

    link.innerHTML = `
        <div class="frequence-card__content">
            <img class="frequence-card__image" src="${imageUrl}" alt="Kalender ikon">
            <div>
                <h1 class="frequence-card__title">${title}</h1>
                <p class="frequence-card__description">${description}</p>
            </div>
        </div>
    `;

    link.addEventListener("click", (e) => {
        e.preventDefault();

        const orderSummary = JSON.parse(sessionStorage.getItem('orderSummary')) || {};

        orderSummary.frequency = title;
        sessionStorage.setItem('orderSummary', JSON.stringify(orderSummary));

        document.querySelectorAll(".frequence-card.selected").forEach(el => el.classList.remove("selected"));
        section.classList.add("selected");
    });

    section.appendChild(link);

    return section;
}
