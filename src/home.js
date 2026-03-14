import './styles/home.css';
import brandImage from './images/chicken-karahi-v2.png';

export default function home(){
    const contentDiv=document.getElementById("content");
    const heroDiv=document.createElement("div");
    heroDiv.classList.add("hero-section")
    const leftCont=document.createElement("div");
    leftCont.classList.add("left-container");
    const titlePara=document.createElement("p");
    titlePara.classList.add("hero-text");
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