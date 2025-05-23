import { navbar } from "../components/navbar.js";
document.body.prepend(navbar());

const module = document.querySelector("#accessories-module");
const closeBtn = document.querySelector("#close-Feedback");
const openBtn = document.querySelector("#accessories-button");
const textarea = document.querySelector(".accessories-input-div__textarea");

openBtn.addEventListener("click", () => {
    if (textarea.value.trim() === "") {
        textarea.classList.add("error-blink");
        setTimeout(() => textarea.classList.remove("error-blink"), 1000);
        return;
    }
    module.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    module.style.display = "none";
});

document.addEventListener("click", (event) => {
    const isClickInside = module.contains(event.target);
    const isButton = openBtn.contains(event.target);

    if (!isClickInside && !isButton && module.style.display === "flex") {
        module.style.display = "none";
    }
});
