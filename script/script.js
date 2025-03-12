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

function animateOnScroll() {

  var about = document.querySelector('#About');
  var cards = document.querySelectorAll('.card');
  var skillCards = document.querySelectorAll('.skill-item')
  var serviceCards = document.querySelectorAll('.service-card')



    about.setAttribute('data-aos', 'fade-up');
    about.setAttribute('data-aos-once', 'true');

  cards.forEach(function (card) {

    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-once', 'true');

  });


  skillCards.forEach(function (skillcard) {

    skillcard.setAttribute('data-aos', 'fade-up');
    skillcard.setAttribute('data-aos-once', 'true');


  });

  serviceCards.forEach(function (serviceCard) {

    serviceCard.setAttribute('data-aos', 'fade-up')
    serviceCard.setAttribute('data-aos-once', 'true');

  });

}

animateOnScroll()

const typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 40,
  backDelay: 1000,
  loop: true,
  loopCount: 3,
  cursorChar: '_'
});