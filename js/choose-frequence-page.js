import {createFrequenceCard} from '../components/frequence-card.js';
import {createActionButton} from '../components/action-button.js';
import {navbar} from "../components/navbar.js";
import {createBreadcrumb} from '../components/breadcrumbs.js';

document.body.prepend(navbar());

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".frequence-page__cards");
    if (container) {
        const cardsData = [
            {
                title: "Hvert kvartal",
                description: "Opdatér garderoben hver kvartal",
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
    }


    const actions = document.querySelector(".confirmation-actions");
    if (actions) {
        const nextButton = createActionButton("Næste", "./confirmation-page.html", "button--confirm");
        actions.appendChild(createActionButton("<", "choose-product.html", "button--back"));
        actions.appendChild(nextButton);

        nextButton.addEventListener("click", (e) => {
            if (!checkOrderSummary()) {
                e.preventDefault();
            }
        })
    }

    const breadcrumbContainer = document.querySelector(".frequence-page__breadcrumbs");
    if (breadcrumbContainer) {
        breadcrumbContainer.appendChild(createBreadcrumb(2, checkOrderSummary));
    }

});

function checkOrderSummary() {
    const orderSummary = JSON.parse(sessionStorage.getItem('orderSummary')) || null;
    const orderSummaryFrequency = orderSummary !== null && typeof orderSummary.frequency == "string";

    if (!orderSummaryFrequency) {
        const nextButton = document.querySelector(".button--confirm");
        nextButton.innerHTML = "Vælg en frekvens ⛔️";
        nextButton.style.backgroundColor = '#c44545';
    }

    return orderSummaryFrequency;
}
