var winningColor,choice,limit=6;

const winningText = document.getElementById('rgb');
const reset = document.getElementById('reset');
const box = document.getElementsByClassName('box');
const easyBtn = document.querySelector('.btn-outline-success');
const hardBtn = document.querySelector('.btn-outline-danger');

reset.addEventListener('click', ()=>startGame());
hardBtn.addEventListener('click', () => {
    hardBtn.classList.add('active');
    easyBtn.classList.remove('active');
    limit = 9;
    startGame();
})
easyBtn.addEventListener('click', () => {
    easyBtn.classList.add('active');
    hardBtn.classList.remove('active');
    limit = 6;
    for (let i = 6; i < 9; i++)
        box[i].style.background = 'white';
    startGame();
})
startGame();


function startGame(initialColor = 1) {
    if (initialColor == 1) {
        choice = Math.floor(Math.random() * limit)
        winningColor = randColor();
        winningText.innerText = winningColor;
        for (let i = 0; i < limit; i++){
            box[i].addEventListener('click', ()=>check(i));
            if (i == choice)
                box[i].style.background = winningColor;
            else
                box[i].style.background = randColor();
        }
    }
    else
        for (let i = 0; i < limit; i++)
            box[i].style.background = winningColor;
        
    
}

function randColor() {
    return ('rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')');
}

function check(i) {
    if (box[i].style.background == winningColor)
        startGame(2);
}