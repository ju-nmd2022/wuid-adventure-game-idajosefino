// The following lines of code was added by courtesy of Garrit Schaap.
const capeImage = document.getElementById('cape-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const capeImageTrunk = document.getElementById('cape-image2');
const giftImageTrunk = document.getElementById('gift-image2');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const slytherinButton = document.getElementById('slytherin-button');

console.log(modal)
// The following lines of code was added by courtesy of Emma Åkerberg and adapted from https://www.w3schools.com/cssref/pr_background-image.php Accessed: 2022-11-18.
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
    }
    else{
        bookImageTrunk.style.visibility = 'hidden'
    }
    if(localStorage.getItem('cape')){
        capeImageTrunk.style.visibility = 'visible'
        capeImage.style.visibility = 'hidden'
        slytherinButton.style.visibility = 'visible'

    }
    else{
        capeImageTrunk.style.visibility = 'hidden'
        slytherinButton.style.visibility = 'hidden'
    }
    if(localStorage.getItem('gift')){
        giftImageTrunk.style.visibility = 'visible'
    }
    else{
        giftImageTrunk.style.visibility = 'hidden'
    }
}

capeImage.addEventListener('click', (event) => {
    capeImage.style.display = 'none';
    localStorage.setItem('cape', true);
    checkLocalStorage()
});