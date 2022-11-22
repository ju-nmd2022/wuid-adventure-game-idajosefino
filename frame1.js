const img = document.getElementById('book-image');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
console.log(modal)

// modal.style.transform = 'translate(-50%, -50%) scale(1)';

img.addEventListener('click', (event) => {
    img.style.display = 'none';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    console.log(modal)
  });

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});