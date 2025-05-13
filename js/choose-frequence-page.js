import { createFrequenceCard } from '../components/frequence-card.js';
import { navbar } from "../components/navbar.js";

document.body.prepend(navbar());

const cardsData = [
    {
        title: "Hvert kvartal",
        description: "Opdatér garderoben",
        imageUrl: "/assets/images/kalenderIkon.png",
        extraClass: "kvartal"
    },
    {
        title: "Hvert halve år",
        description: "Ikke for ofte, ikke for sjældent",
        imageUrl: "/assets/images/kalenderIkon.png",
        extraClass: "halvaars"
    },
    {
        title: "En gang om året",
        description: "Kun det mest nødvendige",
        imageUrl: "/assets/images/kalenderIkon.png",
        extraClass: "aarsvis"
    }
];

const container = document.querySelector(".frequence-cards"); // eller en bestemt wrapper
cardsData.forEach(card => {
    const cardElement = createFrequenceCard(card);
    container.appendChild(cardElement);
});
