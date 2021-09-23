let mobileUL = document.getElementById("nav-list");
const mediaQuery = window.matchMedia('(min-width: 950px)')



document.getElementById("short-list").addEventListener("click", ()=>{
    // console.log("clicked");
   
    if(mobileUL.style.display === "block"){
        mobileUL.style.display = "none";
    }
    else{
        mobileUL.style.transition= " all 2s";
        mobileUL.style.display = "block";
        mediaQuery.addListener(function handleTabletChange(e) {
            // Check if the media query is true
            if (e.matches) {
                mobileUL.style.display = "none";
            }
          })
        
       
        // mobileUL.style.transitionProperty = "display";
      
    }
  
   
   
})
