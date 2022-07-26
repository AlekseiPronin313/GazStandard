const initialCards = [
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image4.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image3.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image2.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image1.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image1.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image2.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image3.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image4.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image3.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image2.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image1.png",
    price: "3360 ₽",
  },
  {
    name: "Диафрагменный счетчик газа Вектор Правый Век.П",
    link: "./images/products/image4.png",
    price: "3360 ₽",
  },
];

let center = [54.616998, 39.730248];
const openPopup = document.querySelector(".products_button");
const closePopup = document.querySelector("#close-popup");
const popup = document.querySelector(".popup");
const myInput = document.querySelector("#my-input");
const popupImg = document.querySelector("#img");
const popupTitle = document.querySelector("#title");
const popupText = document.querySelector("#price");
const elements = document.querySelector(".products_flex");
const template = document.querySelector(".template");
const body = document.querySelector('.body')

function render() {
  const html = initialCards.map((item) => {
    return getItems(item);
  });
  elements.append(...html);
}

function getItems(item) {
  const newItem = template.content.cloneNode(true);
  const productsImg = newItem.querySelector(".products_img-png");
  const productText = newItem.querySelector(".products_text");
  const productsPrice = newItem.querySelector(".products_price");
  const openPopup = newItem.querySelector(".products_button");
  productText.textContent = item.name;
  productsPrice.textContent = item.price;
  productsImg.src = item.link;
  productsImg.alt = item.name;

  openPopup.addEventListener("click", () => {
    popupTitle.textContent = productText.textContent;
    popupText.textContent = productsPrice.textContent;
    popupImg.src = productsImg.src;
    popupImg.alt = productsImg.alt;
    open();
  });
  return newItem;
}

function addCards(evt) {
  evt.preventDefault();
  const initialCards = {
    link: popupImg.value,
    name: popupTitle.value,
    price: popupText.value,
  };
  const newCard = getItems(initialCards);
  elements.prepend(newCard);
  close();
}

function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");

  let calcStep = id == "plus" ? step * 1 : step * -1;

  let newValue = parseInt(val) + calcStep;

  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue);
  }
}

function open() {
  popup.classList.add("popup__opened");
  body.classList.add("body__lock")
  document.addEventListener("keydown", function escClose(evt) {
    if (evt.key === "Escape") {
      close();
      document.removeEventListener("keydown", escClose);
    }
  });
}

function close() {
  popup.classList.remove("popup__opened");
  body.classList.remove("body__lock")
}

closePopup.addEventListener("click", close);

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__overlay")) {
    close();
  }
});

function init() {
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(center, {}, {});

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

let swiper = new Swiper(".mySwiper", {
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    960: {
    slidesPerView: 5,
    spaceBetween: 10
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 8.2
    },
    480: {
      slidesPerView: 3
    },
    320: {
      slidesPerView: 2
    }
  },
});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

render();
