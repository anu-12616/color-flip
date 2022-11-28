const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','c','D','E','f'];
const btn = document.getElementById('btn');
const color1 = document.querySelector('.color');


btn.addEventListener('click', function(){
    let hexColor = '#';
    for(i=0; i<6; i++){
        hexColor+=hex[getRandomNumber()];
    }
color1.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})

function getRandomNumber (){
    return Math.floor(Math.random()* hex.length);
}


