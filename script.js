//4 consts
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

//getting current year
const currentYear = new Date().getFullYear();

//defining New Year's
const newYears = new Date(`January 1 ${currentYear + 1} 00:00:00`);

//updating countdown
function updatecdtime(){
    const currentTime = new Date();
    const diff = newYears - currentTime;

    const dayscd = Math.floor(diff/1000/60/60/24);
    const hourscd = Math.floor(diff/1000/60/60)%24;
    const minutescd = Math.floor(diff/1000/60)%60;
    const secondscd = Math.floor(diff/1000)%60;

    days.innerHTML = dayscd;
    hours.innerHTML = hourscd < 10 ? '0'+hourscd : hourscd;
    minutes.innerHTML = minutescd < 10 ? '0'+minutescd : minutescd;
    seconds.innerHTML = secondscd < 10 ? '0'+secondscd : secondscd;
}

setInterval(updatecdtime, 1000)


