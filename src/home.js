import './styles/home.css';
import logo from './images/brand-logo.png';
import brandImage from './images/chicken-karahi-v2.png';

export default function home(){
    const nav=document.getElementById("nav");
    const logoCont=document.createElement("div")
    logoCont.classList.add("logo-container");
    const logoImg=new Image();
    logoImg.src=logo;
    logoCont.appendChild(logoImg);
    const navBtn=document.createElement("div");
    navBtn.classList.add("nav-btn");
    const btn1=document.createElement("button")
    btn1.id="home-btn";
    btn1.textContent="Home";
    const btn2=document.createElement("button")
    btn2.id="menu-btn";
    btn2.textContent="Menu";
    const btn3=document.createElement("button")
    btn3.id="about-btn";
    btn3.textContent="About"

    navBtn.append(btn1,btn2,btn3);
    nav.append(logoCont,navBtn);

    const contentDiv=document.getElementById("content");
    const heroDiv=document.createElement("div");
    heroDiv.classList.add("hero-section")
    const leftCont=document.createElement("div");
    leftCont.classList.add("left-container");
    const titlePara=document.createElement("p");
    titlePara.classList.add("title-text");
    titlePara.textContent="The Taste That Make You Feel Delicious 🥬";
    const subPara=document.createElement("p");
    subPara.classList.add("subheading-text");
    subPara.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis quam dolor similique veritatis inventore eaque debitis eligendi esse quos?";
    const menuBtn=document.createElement("button");
    menuBtn.classList.add("menu-btn");
    menuBtn.textContent="View our menu";
    leftCont.append(titlePara,subPara,menuBtn);
    const rightCont=document.createElement("div");
    rightCont.classList.add("right-container");
    const heroImg=new Image();
    heroImg.src=brandImage;
    rightCont.appendChild(heroImg);
    heroDiv.append(leftCont,rightCont);
    contentDiv.appendChild(heroDiv);
}