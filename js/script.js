"use strict";
// burger
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
// burger

// ibg
function ibg() {
  let ibg = document.querySelectorAll("._ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// ibg

// add class on click
let userIcon = document.querySelector(".user-header__icon");
let userMenu = document.querySelector(".user-header__menu");
userIcon.addEventListener("click", function (e) {
  userMenu.classList.toggle("_active");
});
// remove class on click to other area
document.addEventListener("click", function (e) {
  if (!e.target.closest(".user-header")) {
    userMenu.classList.remove("_active");
  }
});
// add class on click


// Прокрутка при клике
const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
// Прокрутка при клике

// Swiper start
let sliders = document.querySelectorAll("._swiper");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-bild")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
    if (slider.classList.contains("_gallery")) {
      // slider.CDATA_SECTION_NODE('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) {}
// Swiper start

// Swiper main
let mainSlider = new Swiper(".main-slider__body", {
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // autoHeight: true,
  speed: 800,
  loop: true,
  navigation: {
    nextEl: ".control-main-slider__arrow_next",
    prevEl: ".control-main-slider__arrow_prev",
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});
// Swiper main

// Swiper lots
let lotsSlider = new Swiper(".slider-lots__body", {
  observer: true,
  observerParents: true,
  spaceBetween: 100,
  // autoHeight: true,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: ".control-slider-lots__arrow_next",
    prevEl: ".control-slider-lots__arrow_prev",
  },
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  // on: {
  //   lazyImageReady: function () {
  //     ibg();
  //   },
  // },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
    },
    479: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    890: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 100,
      slidesPerView: 3,
    },
  },
});
// Swiper lots

// Swiper quotes
let quotesSlider = new Swiper(".slider-quotes__body", {
  effect: "fade",
  observer: true,
  observerParents: true,
  spaceBetween: 0,
  slidesPerView: 1,
  // autoHeight: true,
  speed: 600,
  loop: true,
  navigation: {
    nextEl: ".control-slider-quotes__circle",
  },
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  // },
  // on: {
  //   lazyImageReady: function () {
  //     ibg();
  //   },
  // },
  // breakpoints: {
  //   320: {
  //     spaceBetween: 15,
  //     slidesPerView: 1,
  //   },
  //   479: {
  //     spaceBetween: 20,
  //     slidesPerView: 2,
  //   },
  //   890: {
  //     spaceBetween: 50,
  //     slidesPerView: 3,
  //   },
  //   992: {
  //     spaceBetween: 100,
  //     slidesPerView: 3,
  //   }
  // }
});
// Swiper quotes



document.querySelector(".control-slider-quotes__circle").addEventListener("click", function () {
  document.querySelector(".control-slider-quotes__circle").classList.toggle("active");
});

document.querySelector(".control-slider-quotes__circle").addEventListener('animationend', function() {
  document.querySelector(".control-slider-quotes__circle").classList.remove('active')
});