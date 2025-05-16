import { navbar } from "../components/navbar.js";

window.addEventListener("DOMContentLoaded", () => {
    document.body.prepend(navbar());

    const aboutPageDiv = document.createElement("div");
    aboutPageDiv.className = "aboutPageDiv";

    aboutPageDiv.innerHTML = `
    <p class="aboutPageDiv__aboutText">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam error facilis fugiat id, iure
      laboriosam libero magnam maiores minus nisi odio perspiciatis praesentium quia quisquam reprehenderit similique vitae.
    </p>

    <div class="aboutPageDiv__imgDiv">
      <img class="aboutPageDiv__img" src="../assets/images/ChatGPT%20Klaus.png" alt="Klaus">
      <img class="aboutPageDiv__img" src="../assets/images/ChatGPT%20Mike.png" alt="Mike">
    </div>
  `;

    document.body.appendChild(aboutPageDiv);
});
