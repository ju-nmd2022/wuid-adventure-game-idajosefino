const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

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

let button = document.getElementById("flip"); 
let result = document.getElementById("result");

function fnClick(event) {
    let num = Math.random();
    
    if (num < 0.3) {
        result.innerHTML = "You got head, you win!";
    } else {
        result.innerHTML = "You got tail, you lose! Try again.";
    }
}

button.addEventListener("click", fnClick);
// <!-- the 16 lines of code above was... https://sebhastian.com/coin-flip-javascript/ -->