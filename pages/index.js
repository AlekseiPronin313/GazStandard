let center = [54.616998, 39.730248];
const openPopup = document.querySelectorAll(".products_button");
const closePopup = document.querySelector("#close-popup");
const popup = document.querySelector(".popup");

function open() {
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
