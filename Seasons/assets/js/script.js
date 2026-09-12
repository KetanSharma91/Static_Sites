//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});

//nagigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Responsive navigation menu toggle 
const menubtn = document.querySelector(".nav-menu");
const crossbtn = document.querySelector(".nav-cross");
const nav = document.querySelector(".nav");

menubtn.addEventListener("click", () => {
    nav.classList.add("active");
})

crossbtn.addEventListener("click", () => {
    nav.classList.remove("active");
})