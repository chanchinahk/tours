document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

let pictureNumber = 1;

function hongkongLeft() {
   if (pictureNumber == 2) {
    pictureNumber--;
    document.getElementById("hongkongImage").src = "./img/hongkong1.jpg";
    }
    else if (pictureNumber == 3) {
    pictureNumber--;
    document.getElementById("hongkongImage").src = "./img/hongkong2.jpg";
    }
}

function hongkongRight() {
   if (pictureNumber == 1) {
    pictureNumber++;
    document.getElementById("hongkongImage").src = "./img/hongkong2.jpg";
   }
  else if (pictureNumber == 2) {
    pictureNumber++;
    document.getElementById("hongkongImage").src = "./img/hongkong3.jpg";
  }
}

let usaNumber = 1;

function usaLeft() {
   if (usaNumber == 2) {
    usaNumber--;
    document.getElementById("usaImage").src = "./img/usa1.png";
    }
    else if (usaNumber == 3) {
    usaNumber--;
    document.getElementById("usaImage").src = "./img/usa2.png";
    }
}

function usaRight() {
   if (usaNumber == 1) {
    usaNumber++;
    document.getElementById("usaImage").src = "./img/usa2.png";
   }
  else if (usaNumber == 2) {
    usaNumber++;
    document.getElementById("usaImage").src = "./img/usa3.jpg";
  }
}

