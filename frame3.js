// const wandImage = document.getElementById('wand-image');
const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const capeImageTrunk = document.getElementById('cape-image2');
const giftImageTrunk = document.getElementById('gift-image2');
const lunaImage = document.getElementById('luna-image');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
const gryffindorButton = document.getElementById('gryffindor-button');
console.log(modal)

gryffindorButton.style.visibility = 'hidden'

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
        // gryffindorButton.style.visibility = 'visible'
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

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});

lunaImage.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    console.log('Test')
});

let button = document.getElementById("flip"); 
let result = document.getElementById("result");

function fnClick(event) {
    let num = Math.random();
    
    if (num < 0.3) {
        result.innerHTML = "You got head, you win!";
        gryffindorButton.style.visibility = 'visible'
    } else {
        result.innerHTML = "You got tail, you lose! Try again.";
        gryffindorButton.style.visibility = 'hidden'
    }
};

button.addEventListener("click", fnClick);
// <!-- the 16 lines of code above was... https://sebhastian.com/coin-flip-javascript/ -->