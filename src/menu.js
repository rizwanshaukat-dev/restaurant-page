import './styles/menu.css';
import biryani from './images/chicken-biryani.png';
import naan from './images/garlic-naan.png';
import lassi from './images/mango-lassi.png';
import kebab from './images/seekh-kebab.png';
import nihari from './images/nihari.png';

export default function menu() {
    const data = [
        {
            dishName: "Chicken Biryani",
            desc: "Fragrant basmati rice layered with tender spiced chicken, slow-cooked with aromatic herbs,saffron, and traditional Pakistani spices for a rich, flavorful, and satisfying classic dish.",
            price: "$12.00",
            img: biryani,
        },
        {
            dishName: "Nihari",
            desc: "Slow-cooked tender beef simmered in a rich, aromatic gravy infused with traditional spices,topped with ginger, coriander, and lemon for a deeply flavorful Pakistani delicacy.",
            price: "$20.00",
            img: nihari,
        },
        {
            dishName: "Seekh Kebab",
            desc: "Juicy minced beef blended with traditional Pakistani spices, skewered and grilled over open flame for a smoky flavor, served with fresh onions, lemon, and herbs.",
            price: "$16.00",
            img: kebab,
        },
        {
            dishName: "Garlic Naan",
            desc: "Soft, fluffy tandoor-baked flatbread brushed with melted butter and topped with fresh garlic and herbs, perfect for pairing with rich curries and traditional Pakistani dishes.",
            price: "$4.00",
            img: naan,
        },
        {
            dishName: "Mango Lassi",
            desc: "Creamy yogurt blended with sweet ripe mangoes to create a refreshing, smooth traditional drink,perfectly chilled and lightly topped with nuts for a delicious finish.",
            price: "$5.00",
            img: lassi,
        }
    ];
    const nav = document.getElementById("nav");
    
    // const logoCont = document.createElement("div")
    // logoCont.classList.add("logo-container");
    // const logoImg = new Image();
    // logoImg.src = logo;
    // logoCont.appendChild(logoImg);
    // const navBtn = document.createElement("div");
    // navBtn.classList.add("nav-btn");
    // const btn1 = document.createElement("button")
    // btn1.id = "home-btn";
    // btn1.textContent = "Home";
    // const btn2 = document.createElement("button")
    // btn2.id = "menu-btn";
    // btn2.textContent = "Menu";
    // const btn3 = document.createElement("button")
    // btn3.id = "about-btn";
    // btn3.textContent = "About"

    // navBtn.append(btn1, btn2, btn3);
    // nav.append(logoCont, navBtn);
    const contentDiv = document.getElementById("content");
    const titleText = document.createElement("p");
    titleText.className = "title-text";
    titleText.textContent = "Menu";
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-card-container";
    //Card Template
    const card = document.createElement("div")
    card.className = 'card';

    const desCont = document.createElement("div")
    desCont.className = "description-container";

    const dishName = document.createElement("p");
    dishName.className = "dish-name";
    const description = document.createElement("p");
    description.className = "description";
    const priceBtn = document.createElement("button");
    priceBtn.className = "price-btn";
    desCont.append(dishName, description, priceBtn);
    const img = document.createElement("img");
    card.append(desCont, img);
    contentDiv.append(titleText, menuContainer);

    const cardsGenerator = document.querySelector(".menu-card-container");

    data.forEach((item, index) => {
        const clone = card.cloneNode(true);
        if (index % 2 !== 0) {
            clone.classList.add("odd");
        }
        clone.querySelector(".dish-name").textContent = item.dishName;
        clone.querySelector(".description").textContent = item.desc;
        clone.querySelector(".price-btn").textContent = item.price;
        const img = clone.querySelector("img");
        img.src = item.img;
        img.alt = item.dishName;

        cardsGenerator.append(clone);
    })
}