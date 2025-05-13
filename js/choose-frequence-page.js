import { createFrequenceCard } from '../components/frequence-card.js';
import { createActionButton } from '../components/action-button.js';
import { createBreadcrumb } from '../components/breadcrumbs.js';

document.addEventListener("DOMContentLoaded", () => {
    // 1. Indsæt frekvenskort
    const container = document.querySelector(".frequence-page__cards");
    if (container) {
        const cardsData = [
            {
                title: "Hvert kvartal",
                description: "Opdatér garderoben",
                imageUrl: "/assets/images/kalenderIkon.png",
                extraClass: "frequence-card--kvartal"
            },
            {
                title: "Hvert halve år",
                description: "Ikke for ofte, ikke for sjældent",
                imageUrl: "/assets/images/kalenderIkon.png",
                extraClass: "frequence-card--halvaars"
            },
            {
                title: "En gang om året",
                description: "Kun det mest nødvendige",
                imageUrl: "/assets/images/kalenderIkon.png",
                extraClass: "frequence-card--aarsvis"
            }
        ];

        cardsData.forEach(card => {
            const cardElement = createFrequenceCard(card);
            container.appendChild(cardElement);
        });
    } else {
        console.warn("❗ .frequence-page__cards not found");
    }

    // 2. Indsæt knapper
    const actions = document.querySelector(".confirmation-actions");
    if (actions) {
        actions.appendChild(createActionButton("< Tilbage", "#", "button--back"));
        actions.appendChild(createActionButton("Gå til betaling >", "confirmation-success.html", "button--confirm"));
    } else {
        console.warn("❗ .confirmation-actions not found");
    }

    // 3. Indsæt breadcrumbs
    const wrapper = document.querySelector(".frequence-page__breadcrumbs");
    if (wrapper) {
        wrapper.appendChild(createBreadcrumb(2));
    } else {
        console.warn("❗ .frequence-page__breadcrumbs not found");
    }
});
