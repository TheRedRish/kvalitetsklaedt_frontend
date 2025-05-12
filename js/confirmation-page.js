import { createOrderItem } from '../components/order-item.js';
import { createActionButton } from '../components/action-button.js';

const summary = document.getElementById("order-summary");
summary.appendChild(createOrderItem("../assets/icons/box.svg", "3 T-shirts"));
summary.appendChild(createOrderItem("../assets/icons/t-shirt.svg", "Large"));
summary.appendChild(createOrderItem("icons/calendar.svg", "Hvert kvartal"));

const actions = document.getElementById("confirm-actions");
actions.appendChild(createActionButton("< Tilbage", "#", "button--back"));
actions.appendChild(createActionButton("Gå til betaling >", "confirmation-success.html", "button--confirm"));
