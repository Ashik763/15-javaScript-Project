window.onload = function() {
    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i < boxes.length; i++){
       boxes[i].addEventListener("click", function(e) {
       
           boxInfo(e.currentTarget)
       })
    }
    }
    //



function boxInfo(target){
    
   
   let box1= target.children[0];
   
    let box =box1.children[0];
    
    let iconDiv = box.parentElement;
    let boxDiv = iconDiv.parentElement;
    let one = boxDiv.parentElement;
    
    let borderBottom = one.children[0].children;
   
    borderBottom[0].classList.toggle("border-bottom")
    
   
    one.classList.toggle("oneWithAnswer")
    one.nextElementSibling.classList.toggle("toggler");
   
    if(box.classList.contains("fa-plus")){
       
        boxDiv.innerHTML = "";
        boxDiv.innerHTML =  `<div class="icon">
        <i  class="fas fa-minus"></i>
        </div>`;
    }
    else if(box.classList.contains("fa-minus")){
       
        boxDiv.innerHTML = "";
        boxDiv.innerHTML =  `<div class="icon">
        <i  class="fas fa-plus"></i>
        </div>`;
    }

  
    

                    
}

function boxRotate(event){
    
  
    let box =event.target;
    

    box.style.transform="rotate(0deg)";
    box.style.transition="transform .8s";

}
function boxRotate1(event) {
    let box = event.target;
   

    box.style.transform="rotate(90deg)";
    box.style.transition="transform .5s";

}

 