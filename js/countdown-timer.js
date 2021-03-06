import { dayInMs, hourInMs, minuteInMs, secondInMs} from "./helpers.js";

const daysEl = document.querySelectorAll('#days span');
const hoursEl = document.querySelectorAll('#hours span');
const minutesEl = document.querySelectorAll('#minutes span');
const secondsEl = document.querySelectorAll('#seconds span');

const days = 13;
const hours = 8;
const minutes = 12;
const seconds = 5;

// Calculate total duration in ms - uses calculations in the helper.js
const duration =
  dayInMs * `${days}` +
  hourInMs * `${hours}` +
  minuteInMs * `${minutes}` +
  secondInMs * `${seconds}`;

// Determine target date
const targetDate = Date.now() + new Date(duration).getTime();

function displayTimeleft(timeLeftInMs) {
  // Convert `timeLeftInMs` into days, hours, minutes & seconds left
  let daysLeft = Math.floor(timeLeftInMs / dayInMs);
  let hoursLeft = Math.floor(timeLeftInMs % dayInMs / hourInMs);
  let minutesLeft = Math.floor(timeLeftInMs % hourInMs / minuteInMs);
  let secondsLeft = Math.floor(timeLeftInMs % minuteInMs / secondInMs);

  // Add leading `0`s & split string to display in individual spans
  // daysLeft < 100 ? daysLeft = `0${daysLeft}` : daysLeft; // If using 3-digits for `days`
  daysLeft < 10 ? daysLeft = `0${daysLeft}`.split('') : daysLeft; // Add an additional `0` if using 3-digit `days`
  daysLeft >= 10 ? daysLeft = `${daysLeft}`.split('') : daysLeft;
  hoursLeft < 10 ? hoursLeft = `0${hoursLeft}`.split('') : hoursLeft;
  hoursLeft >= 10 ? hoursLeft = `${hoursLeft}`.split('') : hoursLeft;
  minutesLeft < 10 ? minutesLeft = `0${minutesLeft}`.split('') : minutesLeft;
  minutesLeft >= 10 ? minutesLeft = `${minutesLeft}`.split('') : minutesLeft;
  secondsLeft < 10 ? secondsLeft = `0${secondsLeft}`.split('') : secondsLeft;
  secondsLeft >= 10 ? secondsLeft = `${secondsLeft}`.split('') : secondsLeft;

  // Display the result in each individual span element
  daysEl[0].textContent = daysLeft[0];
  daysEl[1].textContent = daysLeft[1];
  // daysEl[2].textContent = daysLeft[2]; // If using 3-digits for `days`
  hoursEl[0].textContent = hoursLeft[0];
  hoursEl[1].textContent = hoursLeft[1];
  minutesEl[0].textContent = minutesLeft[0];
  minutesEl[1].textContent = minutesLeft[1];
  secondsEl[0].textContent = secondsLeft[0];
  secondsEl[1].textContent = secondsLeft[1];
}

// Countdown timer to run every second
const countdown = setInterval(() => {
  // Determine the amount of time left in ms
  const timeLeft = targetDate - Date.now() ;
  // Stop timer when it has reached `0`
  if (timeLeft < 0) {
    clearInterval(countdown);
    return;
  }
  // Display it on the page
  displayTimeleft(timeLeft);
}, 1000);

