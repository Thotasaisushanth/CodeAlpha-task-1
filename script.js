// Array to store the image paths
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

// Get the image element
let currentIndex = 0;
const currentImage = document.getElementById('current-image');

// Function to show the previous image
function previousImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    currentImage.src = images[currentIndex];
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    currentImage.src = images[currentIndex];
}