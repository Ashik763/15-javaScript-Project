function boxInfo(event){
    // console.log(event.target);
    let box =event.target;
    let iconDiv = box.parentElement;
    let boxDiv = iconDiv.parentElement;
    let one = boxDiv.parentElement;
    //console.log(one);
    let borderBottom = one.children[0].children;
   // console.log(borderBottom[0]);
    borderBottom[0].classList.toggle("border-bottom")
    one.classList.toggle("oneWithAnswer");
    let answer = boxDiv.parentElement.nextElementSibling; 
   
    answer.classList.toggle("toggler");
    // answer.classList.toggle("answer");
    // console.log(answer);
    // console.log(box);
    // console.log(iconDiv);
    // console.log(boxDiv);
    // let div = box.children;
    // console.log(div);
    // let icon = div.classList.contains("fa-plus");
    // console.log(icon.classList.contains("fa-plus"));
    if(box.classList.contains("fa-plus")){
       // console.log("entered");
        boxDiv.innerHTML = "";
        boxDiv.innerHTML =  `<div class="icon">
        <i  class="fas fa-minus"></i>
        </div>`;
    }
    else if(box.classList.contains("fa-minus")){
       // console.log("entered2");
        boxDiv.innerHTML = "";
        boxDiv.innerHTML =  `<div class="icon">
        <i  class="fas fa-plus"></i>
        </div>`;
    }

  
    

                    
}

function boxRotate(event){
    
    // let box = document.getElementsByClassName("box")[0];
    let box =event.target;
    

    box.style.transform="rotate(0deg)";
    box.style.transition="transform .8s";

}
function boxRotate1(event) {
    let box = event.target;
   

    box.style.transform="rotate(90deg)";
    box.style.transition="transform .5s";

}

  // console.log(div);
    // let icon = div[1].childNodes;
    // console.log(icon);
    //
    // console.log(box);
    // console.log(box.classList.contains("plus"));