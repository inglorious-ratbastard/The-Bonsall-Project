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

  document.addEventListener("DOMContentLoaded", function () {

    var ackOpen = document.getElementById("ackOpen");
    var ackOverlay = document.getElementById("ackOverlay");
    var ackModal = document.getElementById("ackModal");
    var ackClose = document.getElementById("ackClose");

    if (!ackOpen) return;

    function openAck() {
      ackOverlay.style.display = "block";

      TweenMax.to(ackOverlay, 0.25, {
        opacity: 1
      });

      TweenMax.to(ackModal, 0.4, {
        opacity: 1,
        scale: 1,
        ease: Power2.easeOut
      });
    }

    function closeAck() {
      TweenMax.to(ackModal, 0.25, {
        opacity: 0,
        scale: 0.85,
        ease: Power2.easeIn,
        onComplete: function () {
          ackOverlay.style.display = "none";
          ackOverlay.style.opacity = 0;
        }
      });
    }

    ackOpen.addEventListener("click", function (e) {
      e.preventDefault();
      openAck();
    });

    ackClose.addEventListener("click", closeAck);

    ackOverlay.addEventListener("click", function (e) {
      if (e.target === ackOverlay) closeAck();
    });

  });

document.querySelectorAll('.ack-link').forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  });
});
             
    $(function() {
    $('.box').click(function() {
        $('.container-m').toggleClass('open');
    })
})

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
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.innerHTML = "Turn off the lights!";
      textElement.style.color = "#000000";
    }
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
 
  $('.flipper').on('click', function () {
     $('.card').toggleClass('flipped');
  });

  jQuery(document).ready(function($) {
    if ($(".accordion").length) {
      $(".accordion").addClass("js");
      $(".accordion").find(".accordion-toggle").click(function() {
        if ($(this).hasClass("open")) {
          $(this).next().slideUp("fast");
          $(this).removeClass("open");
          $(this).addClass("closed");
        } else {
          $(this).next().slideDown("fast");
          $(this).addClass("open");
          $(this).removeClass("closed");
          $(".accordion-content").not($(this).next()).slideUp("fast");
          $(".accordion-toggle").not($(this)).removeClass("open");
        }
      });
    }
  });

  const hover = document.querySelector(".navlk"); 
  const bgimg = document.querySelector("#conlibg");
    hover.addEventListener('mouseenter', function() {
      bgimg.style.visibility = "hidden"; 
  });
    hover.addEventListener('mouseleave', function() {
      bgimg.style.visibility = "visible";  
  });
