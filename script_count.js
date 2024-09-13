
const targetDate = new Date("October 25, 2024 00:00:00").getTime();


const countdown = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;


  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;


  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "The Wait is Over!!";
  }
}, 1000);
