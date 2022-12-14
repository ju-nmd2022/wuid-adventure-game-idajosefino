// The following lines of code was added by courtesy of Garrit Schaap.
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const capeImageTrunk = document.getElementById('cape-image2');
const giftImageTrunk = document.getElementById('gift-image2');
const bookImage = document.getElementById('book-image');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const hufflepuffButton = document.getElementById('hufflepuff-button');

console.log(modal)
// The following lines of code was added by courtesy of Emma Åkerberg and adapted from https://www.w3schools.com/js/js_if_else.asp Accessed: 2022-11-18.
checkLocalStorage()
function checkLocalStorage(){
    if(localStorage.getItem('wand')){
        wandImageTrunk.style.visibility = 'visible'
    }
    else{
        wandImageTrunk.style.visibility = 'hidden'
    }
    if(localStorage.getItem('book')){
        bookImageTrunk.style.visibility = 'visible'
        bookImage.style.visibility = 'hidden'
        hufflepuffButton.style.visibility = 'visible'
    }
    else{
        bookImageTrunk.style.visibility = 'hidden'
        hufflepuffButton.style.visibility = 'hidden'
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

bookImage.addEventListener('click', (event) => {
    bookImage.style.display = 'none';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    localStorage.setItem('book', true);
    checkLocalStorage()
});

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});