// Get all the elements with class 'fa-heart'
const heartIcons = document.querySelectorAll('.fa-heart');

// Add event listener to each heart icon
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('full');
  });
});
