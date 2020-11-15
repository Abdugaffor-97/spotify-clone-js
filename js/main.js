window.onscroll = function () {
  // if (window.scrollY >= navbarTop)
  console.log("scrolling");
  const nav = document.querySelector("nav.navbar");
  if (window.scrollY > "50") {
    // console.log(nav);
    nav.classList.add("on-scroll");
  } else {
    nav.classList.remove("on-scroll");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(
    "div.position-fixed div.container li"
  );
  listItems.forEach((li) => {
    li.onclick = function () {
      listItems.forEach((li) => {
        li.classList.remove("current-page");
      });
      li.classList.add("current-page");
    };
  });
});

