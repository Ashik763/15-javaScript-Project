let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let months = ["January", "February", "March", "April",  "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date(2021,9,28,11,50,30);

let endDay = days[date.getDay()];
let endDate = date.getDate();
let endMonth = months[date.getMonth()];
let endYear = date.getFullYear();
let endHour = date.getHours();
let endMinute = date.getMinutes();
let endSecond = date.getSeconds();

let p = document.getElementsByTagName("p");
p[0].innerHTML = `Giveaway Ends On  ${endDay} , ${endDate} ${endMonth} ${endYear} ${endHour}:${endMinute} am`;



function getRemainingTime(){
    let date2 = new Date(2022,6,19,2,35,00);
    let futureDate = date2.getTime();
    // console.log(futureDate);
    let date3 = new Date();
    // console.log(new Date());
    let todayDate = date3.getTime();
    let restTime = futureDate - todayDate;
    if(restTime <0){
        clearInterval(countdown);
        p[0].innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;

    }
    // console.log(restTime);
    let oneDay = 86400000;
    let oneHour = 3600000;
    let oneMinute = 60000;
    let oneSecond = 1000;

    



    // let toDay = days[date.getDay()];

    // let todayMonth = months[date.getMonth()];
    // let todayYear = date.getFullYear();
    // let todayHour = date.getHours();
    // let todayMinute = date.getMinutes();
    // let todaySecond = date.getSeconds();
    let remainingDays = Math.floor(restTime/oneDay) ;
    let remainingHours = Math.floor((restTime%oneDay)/oneHour); 
    let remainingMinutes = Math.floor((restTime%oneHour)/oneMinute); 
    let remainingSeconds = Math.floor((restTime%oneMinute)/oneSecond); 
    // console.log(remainingDays,remainingHours,remainingMinutes,remainingSeconds);
    if(restTime == 0  || restTime < 0){
        remainingDays = 0;
        remainingHours = 0; 
        remainingMinutes = 0; 
        remainingSeconds=0;
    }

    let values = [remainingDays,remainingHours,remainingMinutes,remainingSeconds];


    let h3List = document.querySelectorAll(".countdownDiv h3");
    //  console.log(h3);
    h3List.forEach((h3,index) => {

        h3.innerHTML = format(values[index]) ;
    })

  



}








 function format(values) {
     if(  values < 10){
         values = "0"+values;
         return values;
     }
     return values;
 }

 let countdown = setInterval(getRemainingTime,1000);
 console.log(countdown);
 getRemainingTime();

// function startTime() {
//     // const today = new Date();
//     let restDay = endDate -todayDate;
//     let restHour = endHour - todayHour;
//     let restMinute = endMinute - todayMinute;
//     let restSecond = endSecond - todaySecond;
//     // let restSecond = endSecond - todaySecond;
//     // console.log(restSecond);
   
//     document.getElementById('txt').innerHTML =  restDay + ":" + restHour + ":" + restMinute + ":" + restSecond ;
//     setTimeout(startTime, 1000);
//   }

 
  