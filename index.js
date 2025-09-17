document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const imageContainer = document.querySelector('.image-container');

  filterButtons.forEach(button => {
      button.addEventListener('click', filterImages);
  });

  function filterImages(e) {
      const category = e.target.getAttribute('data-filter');
      const images = document.querySelectorAll('.image');

      images.forEach(image => {
          image.style.display = 'none';

          if (category === 'all' || image.classList.contains(category)) {
              image.style.display = 'block';
          }
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const imageContainer = document.querySelector('.image-container');
  
  // Hamburger Menu Logic
  const hamburger = document.querySelector('.hamburger');
  const navRight = document.querySelector('.nav-right');

  hamburger.addEventListener('click', () => {
      navRight.classList.toggle('active');
  });

  // Image Filter Logic
  filterButtons.forEach(button => {
      button.addEventListener('click', filterImages);
  });

  function filterImages(e) {
      const category = e.target.getAttribute('data-filter');
      const images = document.querySelectorAll('.image-container .image'); // More specific selector

      images.forEach(image => {
          image.style.display = 'none';

          if (category === 'all' || image.classList.contains(category)) {
              image.style.display = 'block';
          }
      });
  }
});