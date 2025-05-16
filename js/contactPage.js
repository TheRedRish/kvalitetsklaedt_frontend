import { navbar } from "../components/navbar.js";

window.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(navbar());

    const contactPageDiv = document.createElement("div");
    contactPageDiv.className="contactPageDiv";

    contactPageDiv.innerHTML = `
            <div class="contactPageDiv__person">
            <img class="contactPageDiv__img" src="../assets/images/ChatGPT%20Klaus.png" alt="Klaus">
            <div class="contactPageDiv__textDiv">
                <p>Navn: Klaus</p>
                <p>Email: klaus@example.com</p>
                <p>Nummer: 12345678</p>
            </div>
        </div>
    
        <div class="contactPageDiv__person">
            <img class="contactPageDiv__img" src="../assets/images/ChatGPT%20Mike.png" alt="Mike">
            <div class="contactPageDiv__textDiv">
                <p>Navn: Mike</p>
                <p>Email: mike@example.com</p>
                <p>Nummer: 87654321</p>
            </div>
        </div>
    `;

    document.body.append(contactPageDiv);
})