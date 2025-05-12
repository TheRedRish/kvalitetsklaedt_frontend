export function createOrderItem(iconSrc, text) {
    const div = document.createElement("div");
    div.className = "summary__item";

    const img = document.createElement("img");
    img.className = "summary__item-icon";
    img.src = iconSrc;
    img.alt = "";

    const span = document.createElement("span");
    span.textContent = text;

    div.appendChild(img);
    div.appendChild(span);
    return div;
}