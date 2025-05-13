import { createFrequenceCard } from '../components/frequence-card.js';
import { createActionButton } from '../components/action-button.js';

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


const container = document.querySelector(".frequence-page__cards");
cardsData.forEach(card => {
    const cardElement = createFrequenceCard(card);
    container.appendChild(cardElement);
});


const actions = document.querySelector(".confirmation-actions");
actions.appendChild(createActionButton("< Tilbage", "#", "button--back"));
actions.appendChild(createActionButton("Gå til betaling >", "confirmation-success.html", "button--confirm"));
