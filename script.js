// Set the date we're counting down to
const targetDate = new Date("October 25, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate time components
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update countdown elements
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is finished, display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Time's up!";
  }
}, 1000);
