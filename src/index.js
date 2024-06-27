import { populateHomePage, populateAboutPage, populateMenuPage, clearContent } from "./page-creation";
import './style.css';

function loadPage() {
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    homeBtn.addEventListener('click', () => {
        clearContent();
        populateHomePage();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        populateMenuPage();
    });

    aboutBtn.addEventListener('click', () =>{
        clearContent();
        populateAboutPage();
    });

    populateHomePage();
};

loadPage();