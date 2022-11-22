const wandImage = document.getElementById('wand-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const idaImage = document.getElementById('ida-image');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const ravenclawButton = document.getElementById('ravenclaw-button');
console.log(modal)

checkLocalStorage()
// modal.style.transform = 'translate(-50%, -50%) scale(1)';
function checkLocalStorage(){
    if(localStorage.getItem('wand')){
        wandImageTrunk.style.visibility = 'visible'
        wandImage.style.visibility = 'hidden'
        ravenclawButton.style.visibility = 'visible'
    }
    else{
        wandImageTrunk.style.visibility = 'hidden'
        ravenclawButton.style.visibility = 'hidden'
    }
    if(localStorage.getItem('book')){
        bookImageTrunk.style.visibility = 'visible'
    }
    else{
        bookImageTrunk.style.visibility = 'hidden'
    }
}
//move over wand to frame 1

wandImage.addEventListener('click', (event) => {
    wandImage.style.display = 'none';
    localStorage.setItem('wand', true);
    checkLocalStorage()
  });

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});

idaImage.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    console.log('Hej')
});





// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const img = document.getElementById('wand-image');
// const trunk = document.getElementById('trunk');

// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
// };
//https://www.youtube.com/watch?v=MBaw_6cPmAw

// img.addEventListener('click', (event) => {
//   img.style.display = 'none';
// });

//https://bobbyhadz.com/blog/javascript-hide-button-after-click

// function myFunction() {
//     var txt;
//     if (confirm("Oh look! A wand! Press OK to pick up.")) {
//       txt = "You pressed OK!";
//     } else {
//       txt = "You pressed Cancel!";
//     }
//     document.getElementById("wand-image").innerHTML = txt;
//   }