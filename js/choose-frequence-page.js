import { createFrequenceCard } from '../components/frequence-card.js';
import { createActionButton } from '../components/action-button.js';
import { navbar } from "../components/navbar.js";
import { createBreadcrumb } from '../components/breadcrumbs.js';

document.body.prepend(navbar());

document.addEventListener("DOMContentLoaded", () => {

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


    const actions = document.querySelector(".confirmation-actions");
    if (actions) {
        actions.appendChild(createActionButton("<", "choose-product.html", "button--back"));
        actions.appendChild(createActionButton("Næste >", "./confirmation-page.html", "button--confirm"));
    } else {
        console.warn("❗ .confirmation-actions not found");
    }


    const breadcrumbContainer = document.querySelector(".frequence-page__breadcrumbs");
    if (breadcrumbContainer) {
        breadcrumbContainer.appendChild(createBreadcrumb(2));
    } else {
        console.warn("❗ .frequence-page__breadcrumbs not found");
    }

});
