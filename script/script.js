const nav_button = document.querySelector(".sidenav-toggle")
const nav = document.querySelector(".offcanvas-nav")
const close_button = document.querySelector(".btn-close")
const navlink = document.querySelectorAll(".nav-link")

nav_button.addEventListener("click", openSideNav)

close_button.addEventListener("click", closeSideNav)

for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", closeSideNav)
}

function closeSideNav() {
  nav.style.width = "0"
}

function openSideNav() {
  nav.style.width = "100vw"
}

function animateaOnScroll() {

  var cards = document.querySelectorAll('.card');
  var skillCards = document.querySelectorAll('.skill-item')
  var serviceCards = document.querySelectorAll('.service-card')

  cards.forEach(function (card) {

    card.setAttribute('data-aos', 'fade-up');


  });


  skillCards.forEach(function (skillcard) {

    skillcard.setAttribute('data-aos', 'fade-up');

  });
  
  serviceCards.forEach(function(serviceCard){
    serviceCard.setAttribute('data-aos', 'fade-up')
  });

}
animateaOnScroll()
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backDelay: 1000,
  loop: true,
  loopCount: 3,
  cursorChar: '_'
});