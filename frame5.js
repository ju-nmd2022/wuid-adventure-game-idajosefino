// The following lines of code was added by courtesy of Garrit Schaap.
const wandImage = document.getElementById('wand-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const capeImageTrunk = document.getElementById('cape-image2');
const giftImageTrunk = document.getElementById('gift-image2');
const idaImage = document.getElementById('ida-image');
const closeButton = document.getElementById('close-button');
const secondCloseButton = document.getElementById('close-button2');
const modal = document.getElementById('modal');
const secondModal = document.getElementById('modal2');
const ravenclawButton = document.getElementById('ravenclaw-button');

console.log(modal)
// The following lines of code was added by courtesy of Emma Åkerberg and adapted from https://www.w3schools.com/js/js_if_else.asp Accessed: 2022-11-18.
checkLocalStorage()
function checkLocalStorage(){
    if(localStorage.getItem('wand')){
        wandImageTrunk.style.visibility = 'visible'
        wandImage.style.visibility = 'hidden'
        ravenclawButton.style.visibility = 'visible'
    }
    else{
        wandImageTrunk.style.visibility = 'hidden'
        ravenclawButton.style.visibility = 'hidden'
        wandImage.style.visibility = 'hidden'
    }
    if(localStorage.getItem('book')){
        bookImageTrunk.style.visibility = 'visible'
    }
    else{
        bookImageTrunk.style.visibility = 'hidden'
    }
    if(localStorage.getItem('cape')){
    capeImageTrunk.style.visibility = 'visible'
    }
    else{
    capeImageTrunk.style.visibility = 'hidden'
    }
    if(localStorage.getItem('gift')){
        giftImageTrunk.style.visibility = 'visible'
    }
    else{
        giftImageTrunk.style.visibility = 'hidden'
    }
}

wandImage.addEventListener('click', (event) => {
    secondModal.style.transform = 'translate(-50%, -50%) scale(1)';
    localStorage.setItem('wand', true);
    checkLocalStorage()
  });

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
    wandImage.style.visibility = 'visible'
});

idaImage.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
});

secondCloseButton.addEventListener('click', (event) => {
    secondModal.style.transform = 'translate(-50%, -50%) scale(0)';
});
