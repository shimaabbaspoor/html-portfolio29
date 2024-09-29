var imagesSrc=['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

var randomNumber1= Math.random();
randomNumber1= Math.floor(randomNumber1*6)+1;
var randonSrc = imagesSrc[randomNumber1];
document.querySelectorAll('img')[0].setAttribute('src',randonSrc);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randonSrc2=imagesSrc[randomNumber2];
document.querySelectorAll('img')[1].setAttribute('src',randonSrc2);


if (randomNumber1>randomNumber2) {
    document.querySelector('h1').innerHTML='Player 1 wins!';
}
else if (randomNumber2>randomNumber1) {
    document.querySelector('h1').innerHTML='player 2 wins!';
}
else {
    document.querySelector('h1').innerHTML='Draw!';
}