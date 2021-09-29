window.addEventListener("DOMContentLoaded", function () {
    let preloader = document.querySelector('.preloader');
   
        preloader.classList.add('hide-preloader');
    
    

})


const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
btn.addEventListener("click", function(e) {
  if(!btn.classList.contains('slide')){
      btn.classList.add('slide');
      video.pause();
  } 
  else{
      btn.classList.remove("slide");
      video.play();
  } 

})

