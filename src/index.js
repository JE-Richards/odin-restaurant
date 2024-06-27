import { populateHomePage, populateAboutPage, populateMenuPage } from "./page-creation";
import './style.css';

function loadPage() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    homeBtn.addEventListener('click', populateHomePage);
    menuBtn.addEventListener('click', populateMenuPage);
    aboutBtn.addEventListener('click', populateAboutPage);

    populateHomePage();
};

loadPage();