import {createActionButton} from "../components/action-button.js";
import {navbar} from "../components/navbar.js";

document.body.prepend(navbar());

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
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    emailInput.classList.remove("input--error");

    if (!isValidEmail) {
        emailInput.classList.add("input--error");

        setTimeout(() => {
            emailInput.classList.remove("input--error");
        }, 400);

        return;
    }

    const payload = {
        email: email,
        feedback: feedback,
        typeOfFeedback: "GENERAL_FEEDBACK",
        productSize: null
    };

    try {
        const response = await fetch("http://localhost:8080/api/customers/subscribe-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error("Fejl ved oprettelse");
        }

        const succesModal = document.getElementById("success-modal");
        succesModal.style.display = "block";

        const succesModalButton = document.getElementById("succes-modal-button");
        succesModalButton.addEventListener("click", () => {
            succesModal.style.display = "none";
        });

    } catch (error) {
        alert("Noget gik galt. Prøv igen.");
    }
});
