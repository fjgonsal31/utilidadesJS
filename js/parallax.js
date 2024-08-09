let section = document.getElementById("parallax");

section.style.backgroundImage = "url('img/1.jpg')";
document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    section.style.backgroundPositionY = (scrollPosition * 0.02) + "rem";
});
