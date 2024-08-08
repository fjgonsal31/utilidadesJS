// navbar
let myNav = document.getElementById("myNavbar");
let btnMenu = document.getElementById("btnMenu");

btnMenu.addEventListener("click", function () {
    if (myNav.className == "navbar") {
        myNav.className += " responsive";
    } else {
        myNav.className = "navbar";
    }
});
