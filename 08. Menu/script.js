const infos = [
   {
    food:"breakfast",   
    name:"Buttermilk Pancakes",
   price:"$15.99",
   img:"./images/item-1.jpeg",
   description:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
   {
    food:"lunch",    
    name:"Diner Double",
   price:"$13.99",
   img:"./images/item-2.jpeg",
   description:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
   {
    food:"shakes",  
    name:"Godzilla Milkshake",
   price:"$6.99",
   img:"./images/item-3.jpeg",
   description:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.r cold-pressed"
  },
   { 
    food:"breakfast",    
    name:"Country Delight",
   price:"$20.99",
   img:"./images/item-4.jpeg",
   description:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
  },
   {
    food:"lunch",   
    name:"Egg Attack",
   price:"$22.99",
   img:"./images/item-5.jpeg",
   description:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
  },
   {
   food:"shakes",  
   
   name:"Oreo Dream",
   price:"$18.99",
   img:"./images/item-6.jpeg",
   description:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday "
  },
   {
    food:"breakfast",    
    name:"Bacon Overflow",
   price:"$8.99",
   img:"./images/item-7.jpeg",
   description:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
  },
   {
    food:"lunch",   
    name:"American Classic",
   price:"$12.99",
   img:"./images/item-8.jpeg",
   description:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
  },
   { 
    food:"shakes",  
   
    name:"Quarantine Buddy",
   price:"$16.99",
   img:"./images/item-9.jpeg",
   description:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
  },
   { 
       food:"dinner",
       name:"Steak Dinner",
   price:"39.99",
   img:"./images/item-10.jpeg",
   description:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
  }
];
let mainContent = document.getElementsByClassName("main-content")[0];
console.log("class");
mainContent.innerHTML = "";
for(let i=0;i<infos.length;i++) {
    mainContent.innerHTML = mainContent.innerHTML + `<div class="item">
                            <div class="img"> 
                                <img src="${infos[i].img}" alt="">    
                            </div>
                            <div class="item-info"> 
                                <div class="item-name-price">
                                    <div class="name">
                                         <h4> ${infos[i].name}</h4>
                                    </div>
                                    <div class="price">
                                        <h3>${infos[i].price} </h3> 
                                        
                                    </div>

                                </div> 
                            <div class="item-description">
                            ${infos[i].description}
                            </div>
                        </div>`
}

 let menu = document.getElementsByClassName("list-name");
 console.log(menu);
 for(let j= 0 ;j<menu.length ;j++){
    menu[j].addEventListener("click", function(e){
        console.log(e.currentTarget.classList[0]);
        mainContent.innerHTML = "";
        for(let i=0;i<infos.length;i++) {
            if(e.currentTarget.classList[0] == infos[i].food){
            mainContent.innerHTML = mainContent.innerHTML + `<div class="item">
                                    <div class="img"> 
                                        <img src="${infos[i].img}" alt="">    
                                    </div>
                                    <div class="item-info"> 
                                        <div class="item-name-price">
                                            <div class="name">
                                                 <h4> ${infos[i].name}</h4>
                                            </div>
                                            <div class="price">
                                                <h3>${infos[i].price} </h3> 
                                                
                                            </div>
        
                                        </div> 
                                    <div class="item-description">
                                    ${infos[i].description}
                                    </div>
                                </div>`

            }
            else if(e.currentTarget.classList[0] == "all"){
            mainContent.innerHTML = mainContent.innerHTML + `<div class="item">
                                    <div class="img"> 
                                        <img src="${infos[i].img}" alt="">    
                                    </div>
                                    <div class="item-info"> 
                                        <div class="item-name-price">
                                            <div class="name">
                                                 <h4> ${infos[i].name}</h4>
                                            </div>
                                            <div class="price">
                                                <h3>${infos[i].price} </h3> 
                                                
                                            </div>
        
                                        </div> 
                                    <div class="item-description">
                                    ${infos[i].description}
                                    </div>
                                </div>`

            }
        }

    })
 }

