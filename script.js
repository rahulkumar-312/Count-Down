let endDate = '9 July 2023 11:00 PM';

document.getElementById("end-date").innerText = endDate;
let inputs = document.querySelectorAll("input");

function clock(){
    let end_Date = new Date(endDate); 
    let now = new Date();
    let diff = Math.floor((end_Date - now)) / 1000;
   

    let days = Math.floor(diff / 3600 / 24);
    inputs[0].value = days;

    let hours = Math.floor(diff/3600) % 24;
    inputs[1].value = hours;

    let minus = Math.floor(diff/60) % 60;
    inputs[2].value = minus;

    let seconds = Math.floor(diff) % 60;
    inputs[3].value = seconds;

    

    // convert into dates;

}

clock();

