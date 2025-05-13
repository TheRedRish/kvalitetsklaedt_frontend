export function createActionButton(text, href, extraClass = "") {
    const button = document.createElement("a");
    button.textContent = text;
    button.href = href;
    button.className = `button ${extraClass}`;
    return button;
}