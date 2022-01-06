let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .nav");

// Counter///////////
let box = document.querySelectorAll(".box h3");
let section = document.querySelector(".counter");
let started = false;

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// window.onscroll = () => {
//   if (window.scrollY <= section.offsetTop) {
//     if (!started) {
//       box.forEach((box) => startcount(box));
//     }
//   }
//   started = true;
// };

// // Counter////////////////////
// function startcount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2500 / goal);
// }
