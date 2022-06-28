const menuButton = document.querySelector(".nav-toggle");
const navigationMenu = document.querySelector(".mobileheader");
const closeButton = document.querySelector(".nav-toggle2");
const mainWrap = document.querySelector(".main-wrap");

menuButton.addEventListener("click", () => {
  menuButton.style.display = "none";
  closeButton.style.display = "block";
  navigationMenu.style.transform = "translateX(0%)";
  mainWrap.style.overflowx = "hidden";
});

closeButton.addEventListener("click", () => {
  closeButton.style.display = "none";
  menuButton.style.display = "block";
  navigationMenu.style.transform = "translateX(100%)";
});

// SWIPER JS

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
