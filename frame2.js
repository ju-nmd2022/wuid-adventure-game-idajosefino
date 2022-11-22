const capeImage = document.getElementById('cape-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const capeImageTrunk = document.getElementById('cape-image2');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const slytherinButton = document.getElementById('slytherin-button');

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
        capeImage.style.visibility = 'hidden'
        slytherinButton.style.visibility = 'visible'

    }
    else{
        capeImageTrunk.style.visibility = 'hidden'
        slytherinButton.style.visibility = 'hidden'
    }
}

capeImage.addEventListener('click', (event) => {
    capeImage.style.display = 'none';
    localStorage.setItem('cape', true);
    checkLocalStorage()
});