const nav_button = document.querySelector(".sidenav-toggle")
const nav = document.querySelector(".offcanvas-nav")
const close_button = document.querySelector(".btn-close")
const navlink = document.querySelectorAll(".nav-link")

nav_button.addEventListener("click", openSideNav)

close_button.addEventListener("click", closeSideNav)

for (let i = 0; i < navlink.length; i++){
  navlink[i].addEventListener("click", closeSideNav)
}

function closeSideNav(){
    nav.style.width = "0"
}

function openSideNav(){
    nav.style.width = "100vw"
}