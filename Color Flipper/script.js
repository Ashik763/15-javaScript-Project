function colorChange(){
    let main = document.getElementById("main");
  
    const colors = ["green","#F15025","red","rgba(133,122,200)"]
    let num = Math.floor(Math.random() * 4);
    main.style.backgroundColor =colors[num];
    let span = document.getElementById("color");
    span.innerText = colors[num];
}

function colorHexChange(){
    
    let main = document.getElementById("main");
    letters = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

    
   var colorName ="";
    for(let i = 0; i < 6; i++){
      
       colorName = colorName + letters[ Math.floor(Math.random() * 15)];

    }
  
    main.style.backgroundColor ="#"+colorName;
    var span = document.getElementById("color");
    span.innerText = "#"+colorName;

}
