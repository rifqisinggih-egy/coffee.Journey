// toogle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika garis3menu di klik
document.querySelector("#garis3menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk hilangakan menu garis 3
const hamburger = document.querySelector("#garis3menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// gilakkk woi bingung
