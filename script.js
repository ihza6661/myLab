function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const carouselImages = document.querySelector(".carousel-images");
  const images = Array.from(carouselImages.children);
  const imageWidth = 100 / 3; // Width percentage for 3 images
  let index = 0;

  function updateCarousel() {
    const offset = -index * imageWidth;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener("click", () => {
    index = (index + 1) % (images.length - 2); // Adjust for showing 3 images at a time
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    index = (index - 1 + (images.length - 2)) % (images.length - 2); // Adjust for showing 3 images at a time
    updateCarousel();
  });

  // Optional: Auto-slide functionality
  setInterval(() => {
    nextButton.click();
  }, 5000); // Change image every 5 seconds
});
