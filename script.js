// Image Slider functionality
let currentIndex = 0;
const images = document.querySelectorAll("#slider .slider-container img");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    images.forEach(image => image.style.transform = `translateX(${offset}%)`);
}

setInterval(showNextImage, 3000);  // Slide every 3 seconds
