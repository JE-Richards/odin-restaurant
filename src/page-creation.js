import svgLogo from "./assets/img/coffee-beans-left-svgrepo-com.svg";
function populateHomePage() {
    const contentDiv = document.getElementById('content');

    const bodyLogo = document.createElement('div');
    bodyLogo.classList.add('body-logo');

    const logoImg = new Image();
    logoImg.src = svgLogo;
    logoImg.alt = "Coffee Beans Logo";
    logoImg.id = "body-coffee-logo";

    const logoTitle = document.createElement('h1');
    logoTitle.innerHTML = "Daily Grind";

    const logoMotto = document.createElement('h2');
    logoMotto.innerHTML = "Redefining the art of coffee one grind at a time";

    bodyLogo.appendChild(logoImg);
    bodyLogo.appendChild(logoTitle);
    bodyLogo.appendChild(logoMotto);

    contentDiv.appendChild(bodyLogo);
}

export { populateHomePage };