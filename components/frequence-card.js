export function createFrequenceCard({ title, description, imageUrl, extraClass = "" }) {
    const section = document.createElement("section");
    section.className = `frequence-card ${extraClass}`.trim();

    section.innerHTML = `
        <a href="#">
            <div class="frequence">
                <img src="${imageUrl}" alt="Kalender ikon">
                <div>
                    <h1>${title}</h1>
                    <p>${description}</p>
                </div>
            </div>
        </a>
    `;

    return section;
}
