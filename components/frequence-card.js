export function createFrequenceCard({ title, description, imageUrl, extraClass = "" }) {
    const section = document.createElement("section");
    section.className = `frequence-card ${extraClass}`.trim();

    // Lav <a> elementet
    const link = document.createElement("a");
    link.href = "#";
    link.dataset.frekvens = title;

    // Indsæt HTML-struktur
    link.innerHTML = `
        <div class="frequence">
            <img src="${imageUrl}" alt="Kalender ikon">
            <div>
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
        </div>
    `;

    // Tilføj klikfunktionalitet
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.setItem("frekvens", title);
        console.log("Frekvens valgt:", title);

        // Valgfri visuel feedback
        document.querySelectorAll(".frequence-card.selected").forEach(el => el.classList.remove("selected"));
        section.classList.add("selected");
    });

    // Tilføj <a> til section
    section.appendChild(link);

    return section;
}
