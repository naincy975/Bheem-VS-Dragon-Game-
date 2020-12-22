score = 0;
cross = true;

document.onkeydown = function(e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        bheem = document.querySelector('.bheem');
        bheem.classList.add('animateBheem');
        setTimeout(() => {
            bheem.classList.remove('animateBheem')
        }, 700);
    }
    if (e.keyCode == 39) {
        bheem = document.querySelector('.bheem');
        bheemx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bheemx + 112 + "px";
    }
    if (e.keyCode == 37) {
        bheem = document.querySelector('.bheem');
        bheemx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bheemx - 112 + "px";
    }
}
setInterval(() => {
    bheem = document.querySelector('.bheem');
    gameOver = document.querySelector('.gameOver');
    dragon = document.querySelector('.dragon');

    bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('top'));

    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - dx);
    offsetY = Math.abs(by - dy);
    //console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = 'Game Over';
        dragon.classList.remove('dragonAni')

    } else if (offsetX < 145 && cross) {
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(dragon, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            dragon.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score:" + score
}