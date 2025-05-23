export function navbar() {
    const header = document.createElement("header");

    header.innerHTML = `
        <a href="../index.html">
            <img id="hangerIcon" class="navbarIcons" src="../assets/icons/hanger.svg" alt="Left icon">
        </a>
        <div id="navbarLogo" class="logo">KvalitetsKlædt.dk</div>
        <a href="#" id="burgerMenuToggle">
            <img id="burgerMenuIcon" class="navbarIcons" src="../assets/icons/menu.svg" alt="Right icon">
        </a>

        <div id="burgerDropdown" class="dropdown-menu hidden">
            <a class="dropDownATags" href="../html/aboutPage.html">Læs mere</a>
            <a class="dropDownATags" href="../html/contactPage.html">Kontakt</a>
            <a class="dropDownATags" href="../html/accessories.html"> <span style="color: var(--gold)">*Coming soon*</span> <br> Accessories</a>
        </div>
    `;

    const toggle = header.querySelector('#burgerMenuToggle');
    const dropdown = header.querySelector('#burgerDropdown');

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
        const isClickInside = header.contains(e.target);
        if (!isClickInside && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    });

    return header;
}