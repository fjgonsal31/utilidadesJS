// modal
let section = document.getElementById("sect");
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-image");
let btnClose = document.getElementById("close");
let img = document.getElementsByClassName("img");
let imgPath = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
let random = Math.floor(Math.random() * 4);

for (let i = 0; i < imgPath.length; i++) {
    let newImgSec = document.createElement("img");
    newImgSec.setAttribute("class", "img");
    newImgSec.setAttribute("src", imgPath[i]);
    newImgSec.setAttribute("alt", imgPath[i]);
    section.appendChild(newImgSec);
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        let relativeSrc = img[i].src.split('http://127.0.0.1:5500/utilidadesJS/');
        modal.style.display = "block";
        modalImg.src = relativeSrc[1];
    });
}

btnClose.addEventListener('click', function () {
    modal.style.display = "none";
    modalImg.src = "";
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains("modal-content")) {
        modal.style.display = "none";
        modalImg.src = "";
    }
});
