import './styles/about.css'
export default function about(){
const contentDiv=document.getElementById("content");
const aboutCont=document.createElement("div")
aboutCont.className="about-container";
const heading=document.createElement("h1");
heading.className="heading";
heading.textContent="About Us";
const span=document.createElement("span");
span.textContent="Karachi Spice";
const para1=document.createElement("p");
para1.append("Welcome to ",span,", where the rich flavors of Pakistani cuisine come to life. Inspired by the vibrant food culture of Karachi, our restaurant brings together traditional recipes, aromatic spices, and fresh ingredients to create an authentic dining experience.");
const span2=document.createElement("span");
span2.textContent="Karachi Spice";
const para2=document.createElement("p");
para2.append("At ",span2,", every dish is prepared with care and passion by skilled chefs who honor the traditions of Pakistani cooking. From sizzling karahi and tender kebabs to fragrant biryani and freshly baked naan, our menu celebrates the bold and comforting flavors that make Pakistani food so beloved.");
const span3=document.createElement("span");
span3.textContent="Karachi Spice";
const para3=document.createElement("p");
para3.append("Whether you're joining us for a family dinner, a casual meal with friends, or your first taste of Pakistani cuisine, ",span3," offers a warm atmosphere and unforgettable flavors that bring people together around the table.");
aboutCont.append(heading,para1,para2,para3);
contentDiv.appendChild(aboutCont);
}