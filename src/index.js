import home from './home.js';
import menu from './menu.js';
import about from './about.js'
import './styles/global.css';

home();

function reset() {
    const contentDiv = document.getElementById("content");
    if (contentDiv) contentDiv.innerHTML = "";
}
function loadPage(page) {
    reset();
    page();
}

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", () => loadPage(home));
menuBtn.addEventListener("click", () => loadPage(menu));
aboutBtn.addEventListener("click", () => loadPage(about));