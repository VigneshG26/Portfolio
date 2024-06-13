function toggleMenu() {
    var links = document.querySelector('.links');
    var hamburger = document.querySelector('.hamburger-box');
    var sec3 = document.querySelector('.sec-3');
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
    sec3.classList.toggle('active');
}

