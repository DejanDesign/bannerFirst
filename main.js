const btn = document.querySelector(".btnn");
const h = document.querySelector(".h");
const content = document.querySelector("content");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");

btn.addEventListener("click", function onClick() {
  first.style.display = "flex";
  second.style.display = "flex";
  third.style.display = "flex";
  fourth.style.display = "flex";
  fifth.style.display = "flex";
  h.style.display = "none";
  btn.style.display = "none";

  document.querySelector(".main").style.flexDirection = "row";
});
