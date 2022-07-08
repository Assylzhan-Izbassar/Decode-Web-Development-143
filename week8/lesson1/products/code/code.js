// Добавление созданной структуры в html код
let list = document.getElementsByClassName("content__list")[0];

let products = [];

function generateContent() {
  products[0] = {
    img: "img/1.png",
    rating: 5,
    comments: 4,
    title: "USB накопитель Kingston DataTraveler Exodia 32GB (DTX)",
    price: 3390,
    inStock: true,
    code: 485400,
  };
  
  products[1] = {
    img: "img/2.png",
    rating: 5,
    comments: 34,
    title: "Мышь беспроводная Genius NX-7015 Golden (31030119103)",
    price: 4499,
    inStock: true,
    code: 458743,
  };
  
  products[2] = {
    img: "img/3.png",
    rating: 5,
    comments: 10,
    title: "Контроллер для консоли PlayStation DualSense Midnight Black PS5",
    price: 33990,
    inStock: true,
    code: 19204,
  };
  
  products[3] = {
    img: "img/4.png",
    rating: 5,
    comments: 5,
    title: "Гладильная доска Perilla Tomris Pink/Turquoise",
    price: 3390,
    inStock: true,
    code: 768549,
  };
  
  products[4] = {
    img: "img/5.png",
    rating: 5,
    comments: 8,
    title: "Триммер ARG BT-1311",
    price: 3390,
    inStock: false,
    code: 47358,
  };
}

generateContent();

function createProduct(className, content) {
  let div = document.createElement("div");
  div.className = className;

  if(content) {
    div.innerText = content;
  }

  return div;
}

elements = []

for (let x of products) {
  // Создание структуры объекта

  // main container
  let div_ = createProduct('content__item', null);

  // main img container
  elements[0] = createProduct('content__img', null);

  // main img
  let img = document.createElement("img");
  img.src = x.img;
  elements[0].append(img);

  // rating
  elements[1] = createProduct('content__rating', null);

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.innerText = x.rating + " звезд";
  p2.innerText = x.comments + " отзывов";

  elements[1].append(p1);
  elements[1].append(p2);

  // title
  elements[2] = createProduct('content__title', null);

  let a = document.createElement("a");
  a.innerText = x.title;
  a.href = "#";

  elements[2].append(a);

  // pricing

  elements[3] = createProduct('content__price', null);

  let h2 = document.createElement("h2");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  h2.innerText = x.price + " ₸";

  if (x.inStock) {
    p3.innerText = "есть в наличии";
  } else {
    p3.innerText = "нет в наличии";
  }

  p4.innerText = "Код товара: " + x.code;

  elements[3].append(h2);
  elements[3].append(p3);
  elements[3].append(p4);

  // adding all elements in the content item

  for(let j=0; j < elements.length; ++j) {
    div_.append(elements[j]);
  }

  list.append(div_);
}
