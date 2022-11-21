const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const img = document.getElementById('wand-image');


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
};
//https://www.youtube.com/watch?v=MBaw_6cPmAw

img.addEventListener('click', () => {
  img.style.display = 'none';
});
//https://bobbyhadz.com/blog/javascript-hide-button-after-click

function myFunction() {
  var txt;
  if (confirm("Oh look! A wand! Press OK to pick up.")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("wand-image").innerHTML = txt;
  localStorage.removeItem = "wand-image";
}