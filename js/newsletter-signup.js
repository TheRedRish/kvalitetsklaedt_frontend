import { createActionButton } from "../components/action-button.js";

const actionDiv = document.getElementById('newsletter-signup-actions');
const newsletterSubscriptionButton = createActionButton("Tilmeld nyhedsbrev", "#", "button--confirm");

actionDiv.appendChild(newsletterSubscriptionButton);

newsletterSubscriptionButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("input-email");
    const feedbackInput = document.getElementById("input-feedback");

    const email = emailInput.value.trim();
    const feedback = feedbackInput.value.trim();

    if (!email) {
        alert("Udfyld venligst din e-mail");
        return;
    }

    const data = {
        email: email,
        feedback: feedback,
        typeOfFeedback: "general"
    };
});