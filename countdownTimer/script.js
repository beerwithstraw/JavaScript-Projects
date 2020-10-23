 const daysF = document.getElementById('days');
 const hoursF = document.getElementById('hours');
 const minutesF = document.getElementById('minutes');
 const secondsF = document.getElementById('seconds');

const ganjebday = "21 November 2020";

function countdown(){
    const bdayDate = new Date(ganjebday);
    const currentDate = new Date()

    //from ms to sec
    const totalseconds = new Date(bdayDate - currentDate)/1000;


    const days = Math.floor(totalseconds / (3600*24));
    //daylight saving
    const hours = (Math.floor(totalseconds/3600) %24) - 1;
    const minutes = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds) %60;

    daysF.innerHTML = days;
    hoursF.innerHTML = hours;
    minutesF.innerHTML = minutes;
    secondsF.innerHTML = seconds;

}

countdown();
setInterval(countdown, 1000);