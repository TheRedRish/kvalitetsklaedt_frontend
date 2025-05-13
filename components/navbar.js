// Der er et problem når man trykker "læs mere", aboutPage går går i stykker og kan ikke findes. Muligvis er det kun stylingen der ikke kan findes

export function navbar() {
    const header = document.createElement("header");

    header.innerHTML = `
        <a href="/index.html">
            <img id="hangerIcon" class="navbarIcons" src="/assets/icons/hanger.svg" alt="Left icon">
        </a>
        <div id="navbarLogo" class="logo">KvalitetsKlædt.dk</div>
        <a href="#" id="burgerMenuToggle">
            <img id="burgerMenuIcon" class="navbarIcons" src="/assets/icons/menu.svg" alt="Right icon">
        </a>

        <div id="burgerDropdown" class="dropdown-menu hidden">
            <a class="dropDownATags" href="/html/aboutPage.html">Læs mere</a>
            <a class="dropDownATags" href="#">Kontakt</a>
        </div>
    `;

    header.querySelector('#burgerMenuToggle').addEventListener('click', (e) => {
        e.preventDefault();
        header.querySelector('#burgerDropdown').classList.toggle('hidden');
    });

    return header;
}




