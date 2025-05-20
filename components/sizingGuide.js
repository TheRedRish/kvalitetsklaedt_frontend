export function sizingGuide ()  {
    document.addEventListener("DOMContentLoaded", () => {
        const infoIcon = document.getElementById("infoToolTip");
        const infoModule = document.getElementById("infoToolTipModule");
        const closeBtn = document.getElementById("closeInfo");

        infoModule.style.display = "none";

        infoIcon.addEventListener("click", () => {
            infoModule.style.display =
                infoModule.style.display === "block" ? "none" : "block";
        });

        closeBtn.addEventListener("click", () => {
            infoModule.style.display = "none";
        });

        document.addEventListener("click", (event) => {
            if (infoModule.style.display === "block") {
                if (
                    !infoModule.contains(event.target) &&
                    !infoIcon.contains(event.target)
                ) {
                    infoModule.style.display = "none";
                }
            }
        });
    });
}

export function sizingGuideModule () {
    document.querySelector("#infoToolTipModule").innerHTML = `
            <button id="closeInfo" class="infoToolTipModule__close-btn" aria-label="Luk">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#d7be74" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#d7be74" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </button>

        <div class="infoToolTipModule__content">
            <h1>Størrelsesguide</h1>
            <table class="infoToolTipModule__size-guide-table">
                <thead>
                <tr>
                    <th>Størrelse</th>
                    <th>Bryst (cm)</th>
                    <th>Talje (cm)</th>
                    <th>Længde (cm)</th>
                    <th>EU-størrelse</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>S</td><td>88–94</td><td>76–82</td><td>68–70</td><td>46–48</td></tr>
                <tr><td>M</td><td>95–101</td><td>83–89</td><td>70–72</td><td>48–50</td></tr>
                <tr><td>L</td><td>102–108</td><td>90–96</td><td>72–74</td><td>52–54</td></tr>
                <tr><td>XL</td><td>109–115</td><td>97–103</td><td>74–76</td><td>56–58</td></tr>
                <tr><td>XXL</td><td>116–122</td><td>104–110</td><td>76–78</td><td>60–62</td></tr>
                <tr><td>XXXL</td><td>123–129</td><td>111–117</td><td>78–80</td><td>64–66</td></tr>
                </tbody>
            </table>
        </div>

        <a class="infoToolTipModule__aTag" href="#">Avanceret størrelsesguide</a>
    `;
}