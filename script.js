let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

// auto run
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

const showSlider = () => {
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  items[itemActive].classList.add("active");
  thumbnail[itemActive].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
};

// click thumbnail
thumbnail.forEach((thumbnails, index) => {
  thumbnails.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
