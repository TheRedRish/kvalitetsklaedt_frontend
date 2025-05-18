import { createOrderItem } from '../components/order-item.js';
import { createActionButton } from '../components/action-button.js';
import { navbar } from "../components/navbar.js";
import { trackEvent } from "./event-tracker.js";
import { createBreadcrumb } from '../components/breadcrumbs.js';
import {capitalizeFirst} from './util/stringUtil.js';

document.body.prepend(navbar());

if (!sessionStorage.getItem('orderSummary')) {
    // Setting default values, selected type only attribute to get a default value, per user story requirements
    sessionStorage.setItem('orderSummary', JSON.stringify({selectedProductType: 't-shirt', selectedSize: null, selectedColor: null}));
}

let orderSummary = JSON.parse(sessionStorage.getItem('orderSummary'));

const summary = document.getElementById("order-summary");
summary.appendChild(createOrderItem("../assets/icons/box.svg", capitalizeFirst(orderSummary.selectedProductType)));
summary.appendChild(createOrderItem("../assets/icons/t-shirt.svg", orderSummary.selectedSize));
summary.appendChild(createOrderItem("../assets/images/kalenderIkon.png", capitalizeFirst(orderSummary.frequency)));

const actions = document.getElementById("confirm-actions");

actions.appendChild(createActionButton("<", "./choose-frequence-page.html", "button--back"));
actions.appendChild(createActionButton("Gå til betaling", "./newsletter-signup.html", "button--confirm"));


const breadcrumbContainer = document.querySelector(".frequence-page__breadcrumbs");
breadcrumbContainer.appendChild(createBreadcrumb(3));


document.querySelector(".button--confirm").addEventListener("click", function () {
    trackEvent("confirm", orderSummary);
});