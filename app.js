//global variables
const toggleBtn = document.querySelector("#toggle");
const closeBtn = document.querySelector("#close-modal");
const openBtn = document.querySelector("#open-modal");
const modalEl = document.querySelector("#modal");

//toggle nav bar
toggleBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("show-nav")
})

//show modal
openBtn.addEventListener("click", () => modalEl.classList.add("show-modal"));

//hide modal
closeBtn.addEventListener("click", () => modalEl.classList.remove("show-modal"));

//hide modal on outside click
window.addEventListener("click", e => e.target == modalEl ? modalEl.classList.remove("show-modal") : false);