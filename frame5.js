const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const closeWandImage = document.querySelectorAll('[data-wand-image]')

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
}

closeWandImage.forEach(image => {
    image.addEventListener('click', () => {
        const wand = button.closest('.wand')
        closeImage(wand)
    })
})

function closeImage(wand) {
    if (wand == null) return
    wand.classList.remove('active')
}