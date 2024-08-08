// gallery
let imgMain = document.getElementById("imgMain");
let img = document.getElementsByClassName("img");
let imgSec = document.getElementById("sectSecondary");
let imgPath = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
let random = Math.floor(Math.random() * 4);

imgMain.src = imgPath[random];
imgMain.setAttribute("alt", imgPath[random]);

for (let i = 0; i < imgPath.length; i++) {
    let newImgSec = document.createElement("img");
    newImgSec.setAttribute("class", "img");
    newImgSec.setAttribute("src", imgPath[i]);
    newImgSec.setAttribute("alt", imgPath[i]);
    imgSec.appendChild(newImgSec);
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        imgMain.src = img[i].src;
    });
}
