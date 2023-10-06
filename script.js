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

// Get prefers-color-scheme media query
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

// When browser window loads, check dark mode
window.onload = function() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
  
  if (isDarkMode) {
    document.body.style.background = "#E5E4E2"; /* "#000000"; */
    document.getElementById("text").innerHTML = "Turn on the lights!";
    document.getElementById("text").style.color = "#ffffff";
    document.getElementById("checkbox").checked = false;    
  } else {
    document.body.style.background = "#ffffff"; 
    document.getElementById("text").innerHTML = "Turn off the lights!";
    document.getElementById("text").style.color = "#000000"; 
    document.getElementById("checkbox").checked = true;
  }
}

// Toggle dark mode
function toggle() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
  
  if (isDarkMode) {
    window.localStorage.setItem("isDarkMode", "false");
    document.body.style.background = "#B2BEB5"; /* "#ffffff"; */
    document.getElementById("text").innerHTML = "Turn off the lights!";
    document.getElementById("text").style.color = "#000000"; 
    document.getElementById("checkbox").checked = true;
  } else {
    window.localStorage.setItem("isDarkMode", "true");
    document.body.style.background = "#E5E4E2"; /* "#000000"; */
    document.getElementById("text").innerHTML = "Turn on the lights!";
    document.getElementById("text").style.color = "#ffffff";
    document.getElementById("checkbox").checked = false;  
  }
}
