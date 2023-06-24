/*=========== SHOW MENU =============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//--menu show
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

//--menu hidden
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*======== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======= CHANGE BACKGROUND HEADER =======*/
const blurHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*========= Swiper Testimonial ===========*/
var swiperTestimonial = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*============= SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*============== Swiper Home ================*/
const swiper = new Swiper('.swiper', {

  // loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

/*======= SCROLL SECTIONS ACTIVE LINK =======*/
const sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.nav-link[href*=' + id + ']').classList.add('active');
      });
    };
  });
}

/*================= SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '120px',
  duration: 2000,
  delay: 250,
  reset: true, //--animation repeat
});

sr.reveal(`.about-images, .works-data, .team-title, .testimonial-container`)
sr.reveal(`.swiper-pagination, .about-data, .services-title, .contact-box-content, .block-cat, .block-keybord`, {origin: 'left'})
sr.reveal(`.about-text, .services-cards, .block-photo, .block-laptop`, {origin: 'right'})
sr.reveal(`.team-cards`, {origin: 'bottom'})


