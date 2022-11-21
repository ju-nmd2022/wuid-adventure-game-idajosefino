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

function myFunction() {
    let text;
    let person = prompt("What building has the most stories?", "");
    if (person == null || answer == "") {
      text = "";
    } else {
      text = "Hello " + answer + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }