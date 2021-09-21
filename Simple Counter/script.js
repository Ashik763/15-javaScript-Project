
// setTimeout(function(){
    document.getElementById("reset").addEventListener("click", ()=>{
        document.getElementById("num").innerText = 0;
        document.getElementById("num").style.color='#102A42';
    })
    //  }, 3000);


function decrease(){
    let decrease = document.getElementsByClassName("decrease")[0];
    let counter = document.getElementById("num").innerText;
    counter = counter - 1;
     if( counter < 0){
        document.getElementById("num").style.color='red';
    }
     else if( counter == 0){
        document.getElementById("num").style.color='#102A42';
    }
    document.getElementById("num").innerText=counter;

}

function increase(){
    let increase = document.getElementsByClassName("increase")[0];
    let counter = document.getElementById("num").innerText;
        counter = parseInt(counter);
        counter = counter + 1;
        if( counter > 0){
            document.getElementById("num").style.color='green';
        }
        else if( counter == 0){
            document.getElementById("num").style.color='#102A42';
        }
  
    document.getElementById("num").innerText=counter;

}




