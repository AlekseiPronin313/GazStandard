let center = [54.616998, 39.730248];
const openPopup = document.querySelectorAll(".products_button");
const closePopup = document.querySelector("#close-popup");
const popup = document.querySelector(".popup");
const myInput = document.querySelector("#my-input");
const popupImg = document.querySelector("#img");
const productsImg = document.querySelectorAll(".products_img-png");
const productsText = document.querySelectorAll(".products_text");
const productsPrice = document.querySelectorAll(".products_price");
const popupTitle = document.querySelector("#title");
const popupText = document.querySelector("#price");

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
  productsImg.forEach(function (img, altt) {
    popupImg.src = img.src;
    popupImg.alt = altt.alt;
  });
  productsText.forEach(function (text) {
    popupTitle.textContent = text.textContent;
  });
  productsPrice.forEach(function (text) {
    popupText.textContent = text.textContent;
  });
  popup.classList.add("popup__opened");
  document.addEventListener("keydown", function escClose(evt) {
    if (evt.key === "Escape") {
      close();
      document.removeEventListener("keydown", escClose);
    }
  });
}

function close() {
  popup.classList.remove("popup__opened");
}
openPopup.forEach((botton) => {
  botton.addEventListener("click", open);
});
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
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});
