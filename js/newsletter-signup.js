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

    const payload = {
        email: email,
        feedback: feedback,
        typeOfFeedback: "GENERAL_FEEDBACK",
        productSize: null
    };

    try {
        const response = await fetch("http://localhost:8080/api/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error("Fejl ved oprettelse");
        }

        const result = await response.text();
        console.log("Succes:", result);
        alert("Tak for din tilmelding!");
    } catch (error) {
        console.error("Fejl:", error);
        alert("Noget gik galt. Prøv igen.");
    }
});
