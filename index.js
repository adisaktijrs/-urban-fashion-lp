var btn = document.querySelector(".burger");
var nav = document.querySelector(".mobile-nav");
var bd = document.querySelector(".backdrop");

btn.addEventListener("click", function() {
    nav.classList.toggle("open");
    bd.classList.toggle("open");
}, false);