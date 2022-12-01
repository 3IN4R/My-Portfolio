//To make navbar more responsive //  

function navbarMenuStyleChange() {
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
    
}
}

//Added animation to make more eye-catching for visitors

function animatedMessageText() {
const message = ["Hello World!"] 
const speed = 100
let textPosition = 0;

  function typewriter() {
    document.querySelector("#demo").innerHTML = message[0].substring(0, textPosition) + '<span>\u25AE</span>'
    if(textPosition++ != message[0].length)
      setTimeout(typewriter, speed)
  }
  
  window.addEventListener("load", typewriter)
}



//Added animation to make my skill icons more eye catching//

function movingSkills(){
const refreshRate = 1000 / 60;
const maxXPosition = 700;
let rect = document.getElementById('moving');
let speedX = 3;
let positionX = 0;

function step() {
    positionX = positionX + speedX;
    if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
    }
    rect.style.left = positionX + 'px';
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
}



  navbarMenuStyleChange();
  animatedMessageText();
  movingSkills();



