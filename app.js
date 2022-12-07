let field = document.querySelector('#field');
let fieldRect = field.getBoundingClientRect();

field.addEventListener('click', (e) => {
    let ball = document.querySelector('#ball');
    let ballCoords = {
        left: e.clientX - fieldRect.left - field.clientLeft + window.pageXOffset - ball.offsetWidth / 2,
        top: e.clientY - fieldRect.top - field.clientTop + window.pageYOffset - ball.offsetWidth / 2,
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.top + ball.offsetWidth > field.clientHeight) ballCoords.top = field.clientHeight - ball.offsetWidth;
    if (ballCoords.left + ball.offsetWidth > field.clientWidth) ballCoords.left = field.clientWidth - ball.offsetWidth;

    ball.style.top = ballCoords.top + 'px';
    ball.style.left = ballCoords.left + 'px';
});
