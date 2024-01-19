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
const message = ["My name is Einaras"] 
const speed = 120
let textPosition = 0;

  function typewriter() {
    document.querySelector("#demo").innerHTML = message[0].substring(0, textPosition)
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
let speedX = 2.5;
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

let elementsArray = document.querySelectorAll(".hiding1");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}

$(".animated-progress span").each(function progressBar () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });


/**function langChange(){
    let langButton = document.getElementById('dklang');
    if (langButton.innerHTML === 'DK') {
      langButton.innerHTML = 'EN';
    } else {
      langButton.innerHTML = 'DK';
    }
    let naviBut1 = document.getElementById('about1');
    if (naviBut1.innerHTML === 'About') {
        naviBut1.innerHTML = 'Om mig';
    } else {
        naviBut1.innerHTML = 'About';
    }
    let naviBut2 = document.getElementById('contact');
    if (naviBut2.innerHTML === 'Contact') {
        naviBut2.innerHTML = 'Kontakt';
    } else {
        naviBut2.innerHTML = 'Contact';
    }
    let naviBut3 = document.getElementById('skills1');
    if (naviBut3.innerHTML === 'Skills') {
        naviBut3.innerHTML = 'Færdigheder';
    } else {
        naviBut3.innerHTML = 'Skills';
    }

    let naviBut4 = document.getElementById('about2');
    if (naviBut4.innerHTML === 'About me') {
        naviBut4.innerHTML = 'Om mig';
    } else {
        naviBut4.innerHTML = 'About me';
    }


    let naviBut6 = document.getElementById('skills2');
    if (naviBut6.innerHTML === 'My skills') {
        naviBut6.innerHTML = 'Færdigheder';
    } else {
        naviBut6.innerHTML = 'My skills';
    }

    let myName = document.getElementById('demo');
    if (myName.innerHTML === 'My name is Einaras') {
        myName.innerHTML = 'Mit navn er Einaras';
    } else {
        myName.innerHTML = 'My name is Einaras';
    }
    let headingFirst = document.getElementById('heading1');
    if (headingFirst.innerHTML === 'Who am I?') {
        headingFirst.innerHTML = 'Hvem er jeg?';
    } else {
        headingFirst.innerHTML = 'Who am I?';
    }
    let headingSecond = document.getElementById('heading2');
    if (headingSecond.innerHTML === 'My Skills') {
        headingSecond.innerHTML = 'Mine Færdigheder';
    } else {
        headingSecond.innerHTML = 'My Skills';
    }
    let headingFourth = document.getElementById('heading4');
    if (headingFourth.innerHTML === 'Contact me') {
        headingFourth.innerHTML = 'Kontakt';
    } else {
        headingFourth.innerHTML = 'Contact me';
    }
    let cvChange = document.getElementById('CV');
    if (cvChange.innerHTML === 'Take a look at my CV') {
        cvChange.innerHTML = 'Mit CV';
    } else {
        cvChange.innerHTML = 'Take a look at my CV';
    }
    let changeMesg = document.getElementById('besked');
    if (changeMesg.innerHTML === 'Send me a message') {
        changeMesg.innerHTML = 'Send mig en besked';
    } else {
        changeMesg.innerHTML = 'Send me a message';
    }
    let changeMesg2 = document.getElementById('beskednu');
    if (changeMesg2.innerHTML === 'Message Now') {
        changeMesg2.innerHTML = 'Send Nu';
    } else {
        changeMesg2.innerHTML = 'Message Now';
    }
    let changeMesg3 = document.getElementById('ringnu');
    if (changeMesg3.innerHTML === 'Call Now') {
        changeMesg3.innerHTML = 'Ring Nu';
    } else {
        changeMesg3.innerHTML = 'Call Now';
    }
    let changeMesg4 = document.getElementById('ringmig');
    if (changeMesg4.innerHTML === 'Call Me') {
        changeMesg4.innerHTML = 'Ring';
    } else {
        changeMesg4.innerHTML = 'Call Me';
    }
}
**/






  console.log(animatedMessageText);
  console.log(navbarMenuStyleChange);

progressBar();
  animatedBar();
  fadeIn();
  navbarMenuStyleChange();
  animatedMessageText();
  movingSkills();
  langChange();


