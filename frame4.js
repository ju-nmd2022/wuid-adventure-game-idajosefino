const giftImage = document.getElementById('gift-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const dracoImage = document.getElementById('draco-image');
const capeImageTrunk = document.getElementById('cape-image2');
const giftImageTrunk = document.getElementById('gift-image2');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const finishGameButton = document.getElementById('finish-button');

console.log(modal)

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
    }
    else{
        capeImageTrunk.style.visibility = 'hidden'
    }
    if(localStorage.getItem('gift')){
        giftImageTrunk.style.visibility = 'visible'
        giftImage.style.visibility = 'hidden'
        finishGameButton.style.visibility = 'visible'
    }
    else{
        giftImageTrunk.style.visibility = 'hidden'
        finishGameButton.style.visibility = 'hidden'
    }
}

giftImage.addEventListener('click', (event) => {
    giftImage.style.display = 'none';
    localStorage.setItem('gift', true);
    checkLocalStorage()
});

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});

dracoImage.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    console.log('Hej')
});