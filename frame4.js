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
        giftImage.style.visibility = 'hidden'

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

let q = ["What building has the most stories?", 
];

let score = 0;
let k = 0;
let len = q.length;

function quiz() {
    let var1 = document.getElementById("question");
    var1.innerHTML = q[0];
    document.getElementById("ans").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("score").style.display = "block";

    document.getElementById("btn").style.display = "none";
}

function evaluation() {
    let var2 = document.getElementById("question");
    let var3 = document.getElementById("input");

    if (var2.innerHTML === "What building has the most stories?" && var3.value ==="Library" || var3.value === "Library")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        giftImage.style.visibility = 'visible'
        modal.style.transform = 'translate(-50%, -50%) scale(0)';
    } 
    else {
        alert("Wrong Answer!")
        var3.value = null;
        if(k < len-1){
            k++;
            var2.innerHTML = q[k];
        }else {
            var2.innerHTML = "You really need to do better. There's clues hidden all over Hogwarts. Update the page to guess again."
            document.getElementById("ans").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("btn2").style.display = "none";
            giftImage.style.visibility = 'hidden'

        }
      
        
    }
}