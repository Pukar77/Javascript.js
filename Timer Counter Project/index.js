


const enddate = new Date("May 25, 2023 12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = enddate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector('input[name="Days"]').value = days;
  document.querySelector('input[name="Hour"]').value = hours;
  document.querySelector('input[name="Min"]').value = minutes;
  document.querySelector('input[name="sec"]').value = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000); // Update countdown every second
