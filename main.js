//Todo: Go Top :
const goTop = document.querySelector(".go-top"),
  main = document.querySelector("main");

goTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > main.scrollHeight / 2) {
    goTop.classList.add("show");
  } else goTop.classList.remove("show");
});

//Todo: Show The Search Input :
const searchIcon = document.querySelector(".navbar-nav .search-box i"),
  searchBox = document.querySelector(".navbar-nav .search-box .box");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("show");
});

//Todo: Change The Position Of The Button Backgorund :
const mainBtn = document.querySelector("main .text-box a");

mainBtn.addEventListener("mouseover", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  mainBtn.style.setProperty("--x-axis", x + "px");
  mainBtn.style.setProperty("--y-axis", y + "px");
});

//Todo: Toggle "active" Class :
const listItems = document.querySelectorAll(".navbar-nav li a");
listItems.forEach((e) => {
  e.addEventListener("click", () => {
    listItems.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
  });
});

//Todo: Change The Backgorund Color Of Navbar On scroll :
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (this.innerWidth > 991) changeBackground();
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 992) {
    nav.style.setProperty(
      "background-color",
      "rgba(48, 48, 48,1)",
      "important"
    );
  } else changeBackground();
});

function changeBackground() {
  let height = document.documentElement.scrollHeight - window.innerHeight;
  if (height >= document.documentElement.scrollTop) {
    nav.style.setProperty(
      "background-color",
      "rgba(48, 48, 48," +
        (document.documentElement.scrollTop * 1.3) / innerHeight +
        ")",
      "important"
    );
  }
}

//Todo : Change Width Of Image (oriental & chicken Section):
const orientalImg = document.querySelector(".oriental .img"),
  chickenImg = document.querySelector(".chicken .img");

window.addEventListener("resize", () => {
  setSizes(orientalImg);
  setSizes(chickenImg);
});
window.addEventListener("load", () => {
  setSizes(orientalImg);
  setSizes(chickenImg);
});

function setSizes(ele) {
  let size = this.innerWidth / 4;
  ele.style.width = size + "px";
  ele.style.height = size + "px";
}

