import { createOrderItem } from '../components/order-item.js';
import { createActionButton } from '../components/action-button.js';
import { trackEvent } from "./event-tracker.js";
import { createBreadcrumb } from '../components/breadcrumbs.js';

const summary = document.getElementById("order-summary");
summary.appendChild(createOrderItem("../assets/icons/box.svg", "3 T-shirts"));
summary.appendChild(createOrderItem("../assets/icons/t-shirt.svg", "Large"));
summary.appendChild(createOrderItem("../assets/images/kalenderIkon.png", "Hvert kvartal"));

const actions = document.getElementById("confirm-actions");
actions.appendChild(createActionButton("< Tilbage", "#", "button--back"));
actions.appendChild(createActionButton("Gå til betaling >", "confirmation-success.html", "button--confirm"));

const breadcrumbContainer = document.querySelector(".frequence-page__breadcrumbs");
breadcrumbContainer.appendChild(createBreadcrumb(3));


document.querySelector(".button--confirm").addEventListener("click", function () {
    trackEvent("confirm", {}); //TODO update to use eventdata from session. ex. {packageType, frequency, email}
});