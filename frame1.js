const wandImageTrunk = document.getElementById('wand-image2');
const bookImageTrunk = document.getElementById('book-image2');
const bookImage = document.getElementById('book-image');
const closeButton = document.getElementById('close-button');
const modal = document.getElementById('modal');
// const hufflepuffButton = document.getElementById('hufflepuff-button');
//add link
console.log(modal)

checkLocalStorage()
// modal.style.transform = 'translate(-50%, -50%) scale(1)';
function checkLocalStorage(){
    if(localStorage.getItem('wand')){
        wandImageTrunk.style.visibility = 'visible'
        // ravenclawButton.style.visibility = 'visible'
    }
    else{
        wandImageTrunk.style.visibility = 'hidden'
        // ravenclawButton.style.visibility = 'hidden'
    }
    if(localStorage.getItem('book')){
        bookImageTrunk.style.visibility = 'visible'
        bookImage.style.visibility = 'hidden'
    }
    else{
        bookImageTrunk.style.visibility = 'hidden'
    }
}

bookImage.addEventListener('click', (event) => {
    bookImage.style.display = 'none';
    modal.style.transform = 'translate(-50%, -50%) scale(1)';
    console.log(modal)
    localStorage.setItem('book', true);
    checkLocalStorage()
  });

closeButton.addEventListener('click', (event) => {
    modal.style.transform = 'translate(-50%, -50%) scale(0)';
});
//How to get the closed button to work so that I can use it on the other text boxes. 