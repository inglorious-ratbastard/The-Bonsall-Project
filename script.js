  function fadeOut() {
      
      TweenMax.to(".myBtn", 1, {
          y: -100,
          opacity: 0
       });
       
      TweenMax.to(".screen", 2, {
          y: -400,
          opacity: 0,
          ease: Power2.easeInOut,
          delay: 2
       });

      TweenMax.to(".brand", 2, {
          y: -400,
          opacity: 0,
          ease: Power2.easeInOut,
          delay: 2.4
       });
          
      TweenMax.from(".overlay", 2, {
           ease: Power2.easeInOut,
       }); 
      
      TweenMax.to(".overlay", 2, {
           delay: 2.6,
           top: "-110%",
           ease: Expo.easeInOut
       });
           
      TweenMax.to(".overlay-2", 2, {
           delay: 3,
           top: "-110%",
           ease: Expo.easeInOut
       });  
       
      TweenMax.from(".content", 2, {
           delay: 3.2,
           opacity: 0,
           ease: Power2.easeInOut
       }); 
      
      TweenMax.to(".content", 2, {
           opacity: 1,
           y: -300,
           delay: 3.2,
           ease: Power2.easeInOut
       }); 
           
      }
             
    $(function() {
    $('.box').click(function() {
        $('.container-m').toggleClass('open');
    })
})

/** Color Mode Toggle **/  
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

window.onload = function() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
  
  if (isDarkMode) {
    document.querySelector('.abbt').style.background = "#E6E6FA";
    document.querySelector('.port').style.background = "#EDEADE";
    document.querySelector('.rsrc').style.background = "#E6E6FA";
    document.querySelector('.cont').style.background = "#EDEADE  "; 
    document.querySelector('.dial').style.background = "#E0B0FF";
    document.getElementById("checkbox").checked = false;    
  } else {
    document.body.style.background = "#ffffff"; 
    document.getElementById("text").innerHTML = "Turn off the lights!";
    document.getElementById("text").style.color = "#000000"; 
    window.localStorage.getItem("isDarkMode") === "true";
  }
}

function toggle() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true"; 
  
  if (isDarkMode) {
    window.localStorage.setItem("isDarkMode", "false");
    document.querySelector('.abbt').style.background = "#B6D0E2";
    document.querySelector('.port').style.background = "#E5E4E2";
    document.querySelector('.rsrc').style.background = "#B6D0E2";
    document.querySelector('.cont').style.background = "#E5E4E2";
    document.querySelector('.dial').style.background = "#C9A9A6"; 
    document.getElementById("checkbox").checked = true;
  } else {
    window.localStorage.setItem("isDarkMode", "true");
    document.querySelector('.abbt').style.background = "#E6E6FA";
    document.querySelector('.port').style.background = "#EDEADE";
    document.querySelector('.rsrc').style.background = "#E6E6FA";
    document.querySelector('.cont').style.background = "#EDEADE";
    document.querySelector('.dial').style.background = "#E0B0FF"; 
    document.getElementById("checkbox").checked = false;
  }
}

/** Note Controller **/  
const noteList = document.querySelectorAll('#sticky');
const clickHandler = (note) => {
  
  note.target.innerHTML = ""; 
  note.target.removeEventListener('click', clickHandler);
};
noteList.forEach(note => {
note.addEventListener('click', clickHandler);
});

const left = document.querySelector('.btn-lf');
const right = document.querySelector('.btn-rt');

 const btnList = document.querySelectorAll('#clrbtn');
 const btnControl = (btn) => {
   
   document.querySelector('.sticky-note-one').innerHTML = "write something.....";
    left.addEventListener('click',()=>{
       document.querySelector('.sticky-note-one').innerHTML = "Your voice has been heard, thank you..";
       setTimeout( () => {
          btn.target.removeEventListener('click', btnControl);
          document.querySelector('.sticky-note-one').innerHTML = "write something.....";
       }, 20000);
    })
document.querySelector('.sticky-note-two').innerHTML = "write something.....";
    right.addEventListener('click',()=>{
       document.querySelector('.sticky-note-two').innerHTML = "Your voice has been heard, thank you.."; 
       setTimeout( () => {
           btn.target.removeEventListener('click', btnControl);
           document.querySelector('.sticky-note-two').innerHTML = "write something.....";
        }, 20000);
    }) 
 //  btn.target.removeEventListener('click', btnControl);
 };
 btnList.forEach(btn => {
   btn.addEventListener('click', btnControl); 
 });

function locationHashChanged() {
  if (location.hash !== "#dialogue") {
     document.querySelector('.sticky-note-one').innerHTML = "write something.....";
     document.querySelector('.sticky-note-two').innerHTML = "write something.....";  
  }
  noteList.forEach(note => {
    note.addEventListener('click', clickHandler);
  });
}
window.onhashchange = locationHashChanged;
