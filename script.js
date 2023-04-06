// declare variables 
let header = document.querySelector(".header");
let goTop = document.querySelector(".goTop");
let closeImg = document.querySelector(".closeImg");
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");

window.onscroll = () =>{
  if (window.scrollY > 150) {
    goTop.classList.add("active");
    header.classList.add("active");
    menuImg.classList.remove("closeImg");
    navbar.classList.remove("active");
  } else { 
    goTop.classList.remove("active");
    header.classList.remove("active");
    
  }
}

// toggle menu and menu button

menuImg.onclick = () => { 
  navbar.classList.toggle("active");
  menuImg.classList.toggle("closeImg");
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menuImg.classList.remove("closeImg");
  }
});

      // new featured menu slide 
      var swiper = new Swiper(".mySlide", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   
    200: {
      slidesPerView: 1,
    },
    
    567: {
      slidesPerView: 2,
    },
     992: {
      slidesPerView: 3,
    },
  
  },
      });