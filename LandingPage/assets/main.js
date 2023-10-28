document.addEventListener("DOMContentLoaded", function() {
    const images = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"];
    const carousel = document.querySelector(".carousel img");
    let currentIndex = 0;

    function changeImage() {
        carousel.style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(function() {
            carousel.src = images[currentIndex];
            carousel.style.opacity = 1;
        }, 1000);
    }

    changeImage(); // Initial image

    setInterval(changeImage, 5000); // Change image every 5 seconds
});