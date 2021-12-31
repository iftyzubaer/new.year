const countdown = () => {
    const countDate = new Date('January 1, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/ day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSec = Math.floor((gap % min) / sec);

    document.querySelector('.count-day').innerText = textDay;
    document.querySelector('.count-hour').innerText = textHour;
    document.querySelector('.count-min').innerText = textMin;
    document.querySelector('.count-sec').innerText = textSec;
};

setInterval(countdown, 1000);
