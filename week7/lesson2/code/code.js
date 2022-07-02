// Добавление созданной структуры в html код
let list = document.getElementsByClassName("content__list")[0];

let product1 = {
  img: "img/1.png",
  rating: 5,
  comments: 4,
  title: "USB накопитель Kingston DataTraveler Exodia 32GB (DTX)",
  price: 3390,
  inStock: true,
  code: 485400,
};

let product2 = {
  img: "img/2.png",
  rating: 5,
  comments: 34,
  title: "Мышь беспроводная Genius NX-7015 Golden (31030119103)",
  price: 4499,
  inStock: true,
  code: 458743,
};

let product3 = {
  img: "img/3.png",
  rating: 5,
  comments: 10,
  title: "Контроллер для консоли PlayStation DualSense Midnight Black PS5",
  price: 33990,
  inStock: true,
  code: 19204,
};

let product4 = {
  img: "img/4.png",
  rating: 5,
  comments: 5,
  title: "Гладильная доска Perilla Tomris Pink/Turquoise",
  price: 3390,
  inStock: true,
  code: 768549,
};

let product5 = {
  img: "img/5.png",
  rating: 5,
  comments: 8,
  title: "Триммер ARG BT-1311",
  price: 3390,
  inStock: false,
  code: 47358,
};

let products = [];

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);

for (let x of products) {
  // Создание структуры объекта

  // main container
  let div_ = document.createElement("div");
  div_.className = "content__item";

  // main img container
  let div_img = document.createElement("div");
  div_img.className = "content__img";

  // main img
  let img = document.createElement("img");
  img.src = x.img;
  div_img.append(img);

  // rating
  let div_rating = document.createElement("div");
  div_rating.className = "content__rating";

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  p1.innerText = x.rating + " звезд";
  p2.innerText = x.comments + " отзывов";

  div_rating.append(p1);
  div_rating.append(p2);

  // title
  let div_title = document.createElement("div");
  div_title.className = "content__title";

  let a = document.createElement("a");
  a.innerText = x.title;
  a.href = "#";

  div_title.append(a);

  // pricing
  let div_price = document.createElement("div");
  div_price.className = "content__price";

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

  div_price.append(h2);
  div_price.append(p3);
  div_price.append(p4);

  // adding all elements in the content item
  div_.append(div_img);
  div_.append(div_rating);
  div_.append(div_title);
  div_.append(div_price);

  list.append(div_);
}
