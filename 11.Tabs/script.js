// let texts = ["I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.",""]

let btnInfo = document.getElementsByClassName("btn-info");
console.log(btnInfo);
// btnInfo.forEach(btn=>{
//     console.log(btn);
// })
// btnInfo.addEventListener("click", function(){
//     console.log("clicked;");
// })
for(let i = 0; i < btnInfo.length; i++){
   btnInfo[i].addEventListener("click", function(e){
       e.currentTarget.classList.add("bg-color");
       for(let j=0;j<btnInfo.length;j++){
           if(j != i){
               btnInfo[j].classList.remove("bg-color");
           }
       }

       let value =e.currentTarget.innerText;
       
       let optionName = document.getElementById("option-name")
       optionName.innerHTML = value;
       let texts = document.getElementsByClassName("text");
       console.log(texts[i].innerHTML);
       let updatedText = document.getElementById("updated-text");
       updatedText.innerHTML =texts[i].innerHTML;
       texts[0].style.display = "none";
       
   })
}